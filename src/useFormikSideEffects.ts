import React from 'react';
import { FormikContext } from 'formik';

export type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;

export type AsyncSideEffect<T> = { field: string; value: any };

export type AsyncSideEffects<T> = (
  currentValues: T,
  previousValues: T,
  signal: AbortSignal
) => Promise<AsyncSideEffect<T>[]>;

async function checkAsyncSideEffect<T>(
  currentFormik: FormikContext<T>,
  previousFormik: FormikContext<T>,
  determineAsyncSideEffect: AsyncSideEffects<T>,
  signal: AbortSignal
) {
  try {
    const sideEffects = await determineAsyncSideEffect(
      currentFormik.values,
      previousFormik.values,
      signal
    );

    if (sideEffects) {
      const { setFieldValue } = currentFormik as FormikContext<any>;
      sideEffects.forEach((sideEffect, index) => {
        setFieldValue(
          sideEffect.field,
          sideEffect.value,
          index === sideEffects.length - 1
        );
      });
    }
  } catch (err) {
    const error = err.name !== 'AbortError' ? err : null;
    if (error) {
      throw error;
    }
  }
}

export const useFormikSideEffects = <T extends {}>(
  currentFormik: FormikContext<T>,
  determineSideEffect: SideEffects<T>,
  determineAsyncSideEffect?: AsyncSideEffects<T>
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
          currentFormik.setValues(sideEffect);
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
          abortController.current.signal
        );
      }

    previous.current = currentFormik;
  }, [currentFormik, determineSideEffect, determineAsyncSideEffect]);
};
