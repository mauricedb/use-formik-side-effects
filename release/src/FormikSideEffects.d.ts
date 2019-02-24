/// <reference types="react" />
import { SideEffects } from './useFormikSideEffects';
declare type FormikSideEffectProps<T> = {
    determineSideEffects: SideEffects<T>;
};
export declare const FormikSideEffects: <T extends {}>({ determineSideEffects }: FormikSideEffectProps<T>) => JSX.Element;
export {};
