/// <reference types="react" />
import { SideEffect } from './useFormikSideEffects';
declare type FormikSideEffectProps<T> = {
    determineSideEffects: SideEffect<T>;
};
export declare const FormikSideEffect: <T extends {}>({ determineSideEffects: determineSideEffect }: FormikSideEffectProps<T>) => JSX.Element;
export {};
