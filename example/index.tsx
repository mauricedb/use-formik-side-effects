import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, FormikContext } from 'formik';
import { FormikSideEffect } from '../src';

type Shape = {
  locked: boolean;
  width: number;
  height: number;
};

const ShapeEditor = () => {
  return (
    <Formik<Shape>
      initialValues={{ locked: false, width: 25, height: 50 }}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <div>
          <FormikSideEffect
            onChange={(
              previousFormik,
              currentFormik: FormikContext<Shape>
            ) => {
              const { values: previousValues } = previousFormik;
              const { values: currentValues, setFieldValue } = currentFormik;

              if (currentValues.locked && !previousValues.locked) {
                setFieldValue('height', currentValues.width);
              } else if (currentValues.locked) {
                if (currentValues.width !== previousValues.width) {
                  setFieldValue('height', currentValues.width);
                } else if (currentValues.height !== previousValues.height) {
                  setFieldValue('width', currentValues.height);
                }
              }
            }}
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
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
};

ReactDOM.render(<ShapeEditor />, document.getElementById('root'));
