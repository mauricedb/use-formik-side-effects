import React from 'react';
import { FormikConsumer, FormikContext } from 'formik';
import { useFormikSideEffect } from './useFormikSideEffect';

type FormikSideEffectProps<T> = {
  onChange: (
    previousFormik: FormikContext<T>,
    currentFormik: FormikContext<T>
  ) => void;
};

export const FormikSideEffect = <T extends {}>({
  onChange
}: FormikSideEffectProps<T>) => {
  return (
    <FormikConsumer>
      {formik => {
        useFormikSideEffect(onChange, formik);
        return null;
      }}
    </FormikConsumer>
  );
};
