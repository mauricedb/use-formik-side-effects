import React from 'react';
import { Formik, Field, connect, FormikContext } from 'formik';

export const useFormikSideEffect = (
  onChange: any,
  currentFormik: FormikContext<any>
) => {
  var previous = React.useRef(currentFormik);

  React.useEffect(() => {
    const previousFormik = previous.current;

    if (previousFormik.values !== currentFormik.values) {
      onChange(previousFormik, currentFormik);
    }

    previous.current = currentFormik;
  }, [onChange, currentFormik]);
};

type FormikSideEffectProps = {
  onChange: (
    previousFormik: FormikContext<any>,
    currentFormik: FormikContext<any>
  ) => void;
};

const FormikSideEffect_ = ({
  formik,
  onChange
}: FormikSideEffectProps & {
  formik: FormikContext<any>;
}) => {
  useFormikSideEffect(onChange, formik);
  return null;
};

export const FormikSideEffect = connect<FormikSideEffectProps>(
  FormikSideEffect_
);
