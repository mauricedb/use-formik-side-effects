import { FormikContext } from 'formik';
export declare type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;
export declare type AsyncSideEffect<T> = {
    field: keyof T & string;
    value: any;
};
export declare type AsyncSideEffects<T> = (currentValues: T, previousValues: T) => Promise<AsyncSideEffect<T>[]>;
export declare const useFormikSideEffects: <T extends {}>(currentFormik: FormikContext<T>, determineSideEffect: SideEffects<T>, determineAsyncSideEffect?: AsyncSideEffects<T> | undefined) => void;
