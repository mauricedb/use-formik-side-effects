import React from "react";
import { FormikContextType } from "formik";

export type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;

export type AsyncSideEffect<T> = { field: string; value: any };

export type AsyncSideEffects<T> = (
  currentValues: T,
  previousValues: T,
  signal: AbortSignal
) => Promise<AsyncSideEffect<T>[]>;

async function checkAsyncSideEffect<T>(
  currentFormik: FormikContextType<T>,
  previousFormik: FormikContextType<T>,
  determineAsyncSideEffect: AsyncSideEffects<T>,
  signal: AbortSignal,
  shouldValidate: boolean
) {
  try {
    const sideEffects = await determineAsyncSideEffect(
      currentFormik.values,
      previousFormik.values,
      signal
    );

    if (sideEffects) {
      const { setFieldValue } = currentFormik as FormikContextType<any>;
      sideEffects.forEach((sideEffect, index) => {
        setFieldValue(
          sideEffect.field,
          sideEffect.value,
          shouldValidate && index === sideEffects.length - 1
        );
      });
    }
  } catch (err) {
    const error = err.name !== "AbortError" ? err : null;
    if (error) {
      throw error;
    }
  }
}

export const useFormikSideEffects = <T extends {}>(
  currentFormik: FormikContextType<T>,
  determineSideEffect: SideEffects<T>,
  determineAsyncSideEffect?: AsyncSideEffects<T>,
  shouldValidate?: boolean
) => {
  var previous = React.useRef(currentFormik);
  var abortController = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    const previousFormik = previous.current;

    if (determineSideEffect) {
      const sideEffect = determineSideEffect(
        currentFormik.values,
        previousFormik.values
      );

      if (sideEffect) {
        currentFormik.setValues(sideEffect, shouldValidate);
      }
    }

    if (determineAsyncSideEffect) {
      if (abortController.current) {
        abortController.current.abort();
      }
      abortController.current = new AbortController();

      checkAsyncSideEffect(
        currentFormik,
        previousFormik,
        determineAsyncSideEffect,
        abortController.current.signal,
        typeof shouldValidate === "boolean" ? shouldValidate : true
      );
    }

    previous.current = currentFormik;
  }, [currentFormik, determineSideEffect, determineAsyncSideEffect]);
};
