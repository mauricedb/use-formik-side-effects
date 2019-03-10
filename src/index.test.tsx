import React from 'react';
import { Formik, Field } from 'formik';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from 'react-testing-library';

import { SideEffects, FormikSideEffects } from '.';

afterEach(cleanup);

const initialValues = { width: 1, height: 1 };
type Shape = typeof initialValues;

const determineSideEffects: SideEffects<Shape> = (
  currentValues,
  previousValues
): Shape | null => {
  if (currentValues.width !== previousValues.width) {
    return { ...currentValues, height: currentValues.width };
  }

  return null;
};

const TestEditor = () => {
  return (
    <Formik<Shape> initialValues={initialValues} onSubmit={jest.fn()}>
      {({ values }) => (
        <div>
          <FormikSideEffects<Shape>
            determineSideEffects={determineSideEffects}
          />
          <div>
            <label htmlFor="width">Width:</label>
            <Field id="width" name="width" type="number" />
          </div>

          <div>
            <div>Width: {values.width}</div>
            <div>Height: {values.height}</div>
          </div>
        </div>
      )}
    </Formik>
  );
};

test('Run side effect', () => {
  const { getByLabelText, getByText } = render(<TestEditor />);

  getByText('Width: 1');
  getByText('Height: 1');

  fireEvent.change(getByLabelText('Width:'), { target: { value: 2 } });

  getByText('Width: 2');
  getByText('Height: 2');
});
