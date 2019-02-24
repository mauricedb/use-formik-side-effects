import { FormikContext } from 'formik';
export declare type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;
export declare const useFormikSideEffects: <T extends {}>(determineSideEffect: SideEffects<T>, currentFormik: FormikContext<T>) => void;
