import React from 'react';
import { FormikContext } from 'formik';

export type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;

export const useFormikSideEffects = <T extends {}>(
  determineSideEffect: SideEffects<T>,
  currentFormik: FormikContext<T>
) => {
  var previous = React.useRef(currentFormik);

  React.useEffect(() => {
    const previousFormik = previous.current;

    if (previousFormik.values !== currentFormik.values) {
      const sideEffect = determineSideEffect(
        currentFormik.values,
        previousFormik.values
      );

      if (sideEffect) {
        currentFormik.setValues(sideEffect);
      }
    }

    previous.current = currentFormik;
  }, [determineSideEffect, currentFormik]);
};
