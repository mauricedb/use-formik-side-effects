import React from 'react';
import { FormikContext } from 'formik';

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
