import React from 'react';
import { FormikConsumer, FormikContext } from 'formik';
import { useFormikSideEffects, SideEffects } from './useFormikSideEffects';

type FormikSideEffectProps<T> = {
  determineSideEffects: SideEffects<T>;
};

const FormikSideEffectChild = <T extends {}>({
  determineSideEffects: determineSideEffect,
  formik
}: FormikSideEffectProps<T> & {
  formik: FormikContext<T>;
}) => {
  useFormikSideEffects<T>(determineSideEffect, formik);
  return null;
};

export const FormikSideEffects = <T extends {}>({
  determineSideEffects
}: FormikSideEffectProps<T>) => (
  <FormikConsumer>
    {formik => (
      <FormikSideEffectChild
        determineSideEffects={determineSideEffects}
        formik={formik}
      />
    )}
  </FormikConsumer>
);
