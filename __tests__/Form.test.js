import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import {
  FieldsetClass,
  TextInputClass,
  TextAreaClass,
  LabelClass,
  SelectClass,
  CheckboxClass,
  CheckboxLabelClass,
  RadioClass,
  RadioLabelClass,
  ToggleClass,
} from '../src/components/Form';

expect.addSnapshotSerializer(createSerializer(emotion));

test('renders text input', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <label htmlFor="TextInputClass" className={LabelClass}>Text Input Label</label>
        <input id="TextInputClass" type="text" className={TextInputClass} />
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders textarea', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <label htmlFor="TextAreaClass" className={LabelClass}>Textarea Label</label>
        <textarea id="TextAreaClass" className={TextAreaClass} />
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});


test('renders select', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <label htmlFor="SelectClass" className={LabelClass}>Select Label</label>
        <select id="SelectClass" className={SelectClass}>
          <option>Please Select</option>
          <option value="item-1">Item 1</option>
          <option value="item-2">Item 2</option>
          <option value="item-3">Item 3</option>
        </select>
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders checkbox', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <input
          id="checkbox-1"
          type="checkbox"
          name="checkbox-group-1"
          value="checkbox-1"
          className={CheckboxClass}
        />
        <label htmlFor="checkbox-1" className={CheckboxLabelClass}>Checkbox 1</label>
        <input
          id="checkbox-2"
          type="checkbox"
          name="checkbox-group-1"
          value="checkbox-2"
          className={CheckboxClass}
        />
        <label htmlFor="checkbox-2" className={CheckboxLabelClass}>Checkbox 2</label>
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders radio', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <input
          id="radio-3"
          type="radio"
          name="radio-group-2"
          value="radio-3"
          className={RadioClass}
        />
        <label htmlFor="radio-3" className={RadioLabelClass}>Radio 1</label>
        <input
          id="radio-4"
          type="radio"
          name="radio-group-2"
          value="radio-4"
          className={RadioClass}
        />
        <label htmlFor="radio-4" className={RadioLabelClass}>Radio 2</label>
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});

test('renders toggle checkbox', () => {
  const reactComponent = renderer
    .create(
      <fieldset className={FieldsetClass}>
        <input
          id="checkbox-5"
          type="checkbox"
          value="checkbox-5"
          className={ToggleClass}
        />
        <label htmlFor="checkbox-5">Checkbox</label>
      </fieldset>,
    )
    .toJSON();

  expect(reactComponent).toMatchSnapshot();
});
