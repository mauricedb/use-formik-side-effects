/// <reference types="react" />
import { SideEffects, AsyncSideEffects } from "./useFormikSideEffects";
declare type FormikSideEffectProps<T> = {
    determineSideEffects: SideEffects<T>;
    determineAsyncSideEffect?: AsyncSideEffects<T>;
    shouldValidate?: boolean;
};
export declare const FormikSideEffects: <T extends {}>({ determineSideEffects, determineAsyncSideEffect }: FormikSideEffectProps<T>) => JSX.Element;
export {};
