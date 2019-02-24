import { FormikContext } from 'formik';
export declare type SideEffect<T> = (currentValues: T, previousValues: T) => T | null;
export declare const useFormikSideEffects: <T extends {}>(determineSideEffect: SideEffect<T>, currentFormik: FormikContext<T>) => void;
