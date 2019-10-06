import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field } from "formik";
import {
  FormikSideEffects,
  SideEffects,
  AsyncSideEffects,
  AsyncSideEffect
} from "..";

const initialValues = { locked: false, width: 25, height: 50, area: 25 * 50 };
type Shape = typeof initialValues;

const determineSideEffects: SideEffects<Shape> = (
  currentValues,
  previousValues
): Shape | null => {
  if (currentValues.locked && !previousValues.locked) {
    return { ...currentValues, height: currentValues.width };
  } else if (currentValues.locked) {
    if (currentValues.width !== previousValues.width) {
      return { ...currentValues, height: currentValues.width };
    } else if (currentValues.height !== previousValues.height) {
      return { ...currentValues, width: currentValues.height };
    }
  }

  return null;
};

const determineAsyncSideEffect: AsyncSideEffects<Shape> = (
  currentValues,
  previousValues,
  signal
) => {
  return new Promise<AsyncSideEffect<Shape>[]>((resolve, reject) => {
    signal.onabort = () => {
      const abortError = new DOMException("Aborted", "AbortError");
      reject(abortError);
    };

    setTimeout(() => {
      let sideEffects: AsyncSideEffect<Shape>[] = [];
      const area = currentValues.width * currentValues.height;

      if (area !== currentValues.area) {
        sideEffects = [...sideEffects, { field: "area", value: area }];
      }

      resolve(sideEffects);
    }, 2500);
  });
};

const ShapeEditor = () => {
  return (
    <Formik<Shape> initialValues={initialValues} onSubmit={() => {}}>
      {formik => (
        <div>
          <FormikSideEffects<Shape>
            determineSideEffects={determineSideEffects}
            determineAsyncSideEffect={determineAsyncSideEffect}
          />
          <h2>Shape Editor</h2>
          <div>
            <label>
              <Field name="locked" type="checkbox" />
              Lock dimensions
            </label>
          </div>
          <div>
            Width: <Field name="width" type="number" />
          </div>

          <div>
            Height: <Field name="height" type="number" />
          </div>
          <div>
            Area: <Field name="area" type="number" disabled />
          </div>
          <hr />
          <h3>Formik Values</h3>
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
};

ReactDOM.render(<ShapeEditor />, document.getElementById("root"));
