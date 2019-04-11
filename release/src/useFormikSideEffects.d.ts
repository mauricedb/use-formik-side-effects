import { FormikContext } from 'formik';
export declare type SideEffects<T> = (currentValues: T, previousValues: T) => T | null;
export declare type AsyncSideEffect<T> = {
    field: string;
    value: any;
};
export declare type AsyncSideEffects<T> = (currentValues: T, previousValues: T, signal: AbortSignal) => Promise<AsyncSideEffect<T>[]>;
export declare const useFormikSideEffects: <T extends {}>(currentFormik: FormikContext<T>, determineSideEffect: SideEffects<T>, determineAsyncSideEffect?: AsyncSideEffects<T> | undefined) => void;
