import React from 'react';
import { FormikConsumer, FormikContext } from 'formik';
import {
  useFormikSideEffects,
  SideEffects,
  AsyncSideEffects
} from './useFormikSideEffects';

type FormikSideEffectProps<T> = {
  determineSideEffects: SideEffects<T>;
  determineAsyncSideEffect?: AsyncSideEffects<T>;
};

const FormikSideEffectChild = <T extends {}>({
  formik,
  determineSideEffects,
  determineAsyncSideEffect
}: FormikSideEffectProps<T> & {
  formik: FormikContext<T>;
}) => {
  useFormikSideEffects<T>(
    formik,
    determineSideEffects,
    determineAsyncSideEffect
  );

  return null;
};

export const FormikSideEffects = <T extends {}>({
  determineSideEffects,
  determineAsyncSideEffect
}: FormikSideEffectProps<T>) => (
  <FormikConsumer>
    {formik => (
      <FormikSideEffectChild
        determineSideEffects={determineSideEffects}
        determineAsyncSideEffect={determineAsyncSideEffect}
        formik={formik}
      />
    )}
  </FormikConsumer>
);
