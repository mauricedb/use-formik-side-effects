import React from 'react';
import { FormikContext } from 'formik';
export declare const useFormikSideEffect: (onChange: any, currentFormik: FormikContext<any>) => void;
declare type FormikSideEffectProps = {
    onChange: (previousFormik: FormikContext<any>, currentFormik: FormikContext<any>) => void;
};
export declare const FormikSideEffect: React.ComponentType<FormikSideEffectProps>;
export {};
