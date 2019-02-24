import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, FormikContext } from 'formik';
import { FormikSideEffects, SideEffects } from '../src';

const initialValues = { locked: false, width: 25, height: 50 };
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

const ShapeEditor = () => {
  return (
    <Formik<Shape> initialValues={initialValues} onSubmit={() => {}}>
      {formik => (
        <div>
          <FormikSideEffects<Shape>
            determineSideEffects={determineSideEffects}
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
          <hr />
          <h3>Formik Values</h3>
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
};

ReactDOM.render(<ShapeEditor />, document.getElementById('root'));
