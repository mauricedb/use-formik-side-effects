import React from "react";
import { Formik, Field } from "formik";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";

import {
  SideEffects,
  FormikSideEffects,
  AsyncSideEffects,
  AsyncSideEffect
} from ".";

afterEach(cleanup);

const initialValues = { width: 1, height: 1, area: { size: 1 } };
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

const determineAsyncSideEffect: AsyncSideEffects<Shape> = (
  currentValues,
  previousValues,
  signal
) => {
  return new Promise<AsyncSideEffect<Shape>[]>((resolve, reject) => {
    setTimeout(() => {
      const sideEffects: AsyncSideEffect<Shape>[] = [];
      const area = currentValues.width * currentValues.height;

      if (area !== currentValues.area.size) {
        sideEffects.push({ field: "area.size", value: area });
      }

      resolve(sideEffects);
    }, 500);
  });
};

const TestEditor = () => {
  return (
    <Formik<Shape> initialValues={initialValues} onSubmit={jest.fn()}>
      {({ values }) => (
        <div>
          <FormikSideEffects<Shape>
            determineSideEffects={determineSideEffects}
            determineAsyncSideEffect={determineAsyncSideEffect}
            shouldValidate={true}
          />
          <div>
            <label htmlFor="width">Width:</label>
            <Field id="width" name="width" type="number" />
          </div>

          <div>
            <div>Width: {values.width}</div>
            <div>Height: {values.height}</div>
            <div>Area: {values.area.size}</div>
          </div>
        </div>
      )}
    </Formik>
  );
};

test("Run synchronous side effect", () => {
  const { getByLabelText, getByText } = render(<TestEditor />);

  getByText("Width: 1");
  getByText("Height: 1");

  fireEvent.change(getByLabelText("Width:"), { target: { value: 2 } });

  getByText("Width: 2");
  getByText("Height: 2");
});

test("Run asynchronous side effect", async () => {
  const { getByLabelText, getByText } = render(<TestEditor />);

  getByText("Width: 1");
  getByText("Height: 1");
  getByText("Area: 1");

  fireEvent.change(getByLabelText("Width:"), { target: { value: 2 } });

  getByText("Width: 2");
  getByText("Height: 2");
  getByText("Area: 1");

  await waitForElement(() => getByText("Area: 4"));
});
