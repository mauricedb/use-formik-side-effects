import React from 'react';
import { FormikContext } from 'formik';

export type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;

export type AsyncSideEffect<T> = { field: keyof T & string; value: any };

export type AsyncSideEffects<T> = (
  currentValues: T,
  previousValues: T
) => Promise<AsyncSideEffect<T>[]>;

async function checkAsyncSideEffect<T>(
  currentFormik: FormikContext<T>,
  previousFormik: FormikContext<T>,
  determineAsyncSideEffect: AsyncSideEffects<T>
) {
  const sideEffects = await determineAsyncSideEffect(
    currentFormik.values,
    previousFormik.values
  );
console.log(sideEffects)
  if (sideEffects) {
    sideEffects.forEach((sideEffect, index) => {
      currentFormik.setFieldValue(
        sideEffect.field,
        sideEffect.value,
        index === sideEffects.length - 1
      );
    });
  }
}

export const useFormikSideEffects = <T extends {}>(
  currentFormik: FormikContext<T>,
  determineSideEffect: SideEffects<T>,
  determineAsyncSideEffect?: AsyncSideEffects<T>
) => {
  var previous = React.useRef(currentFormik);

  React.useEffect(() => {
    const previousFormik = previous.current;

    if (previousFormik.values !== currentFormik.values) {
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
        checkAsyncSideEffect(
          currentFormik,
          previousFormik,
          determineAsyncSideEffect
        );
      }
    }

    previous.current = currentFormik;
  }, [currentFormik, determineSideEffect, determineAsyncSideEffect]);
};
