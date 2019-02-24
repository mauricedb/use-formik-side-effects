/// <reference types="react" />
import { FormikContext } from 'formik';
declare type FormikSideEffectProps<T> = {
    onChange: (previousFormik: FormikContext<T>, currentFormik: FormikContext<T>) => void;
};
export declare const FormikSideEffect: <T extends {}>({ onChange }: FormikSideEffectProps<T>) => JSX.Element;
export {};
