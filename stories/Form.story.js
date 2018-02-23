import React from 'react';
import { cx } from 'emotion';

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
  verticalFormGroupClass,
  horizontalFormGroupClass,
} from '../src/components/Form';

const FormStory = (
  <div>
    <fieldset className={FieldsetClass}>
      <label htmlFor="TextInputClass" className={LabelClass}>Text Input Label</label>
      <input id="TextInputClass" type="text" className={TextInputClass} />
    </fieldset>

    <fieldset className={FieldsetClass}>
      <label htmlFor="TextAreaClass" className={LabelClass}>Textarea Label</label>
      <textarea id="TextAreaClass" className={TextAreaClass} />
    </fieldset>

    <fieldset className={FieldsetClass}>
      <label htmlFor="SelectClass" className={LabelClass}>Select Label</label>
      <select id="SelectClass" className={SelectClass}>
        <option>Please Select</option>
        <option value="item-1">Item 1</option>
        <option value="item-2">Item 2</option>
        <option value="item-3">Item 3</option>
      </select>
    </fieldset>

    <fieldset className={cx(FieldsetClass, verticalFormGroupClass)}>
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
    </fieldset>

    <fieldset className={cx(FieldsetClass, horizontalFormGroupClass)}>
      <input
        id="checkbox-3"
        type="checkbox"
        name="checkbox-group-2"
        value="checkbox-3"
        className={CheckboxClass}
      />
      <label htmlFor="checkbox-3" className={CheckboxLabelClass}>Checkbox 1</label>
      <input
        id="checkbox-4"
        type="checkbox"
        name="checkbox-group-2"
        value="checkbox-4"
        className={CheckboxClass}
      />
      <label htmlFor="checkbox-4" className={CheckboxLabelClass}>Checkbox 2</label>
    </fieldset>

    <fieldset className={cx(FieldsetClass, verticalFormGroupClass)}>
      <input
        id="radio-1"
        type="radio"
        name="radio-group-1"
        value="radio-1"
        className={RadioClass}
      />
      <label htmlFor="radio-1" className={RadioLabelClass}>Radio 1</label>
      <input
        id="radio-2"
        type="radio"
        name="radio-group-1"
        value="radio-2"
        className={RadioClass}
      />
      <label htmlFor="radio-2" className={RadioLabelClass}>Radio 2</label>
    </fieldset>

    <fieldset className={cx(FieldsetClass, horizontalFormGroupClass)}>
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
    </fieldset>
  </div>
);

export default FormStory;
