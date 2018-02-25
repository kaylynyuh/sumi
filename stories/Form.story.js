import React from 'react';
import { cx } from 'emotion';

import {
  FieldsetClass,
  LegendClass,
  TextInputClass,
  FileInputClass,
  FileInputLabelClass,
  RangeInputClass,
  TextAreaClass,
  LabelClass,
  SelectClass,
  CheckboxClass,
  CheckboxLabelClass,
  RadioClass,
  RadioLabelClass,
  SubmitClass,
  ResetClass,
  verticalFormGroupClass,
  horizontalFormGroupClass,
  inputValidClass,
  inputInvalidClass,
  inputValidHintClass,
  inputInvalidHintClass,
} from '../src/components/Form';

const previewStyle = {
  margin: '0 1rem 1rem 0',
};

const FormStory = (
  <div>
    <fieldset className={FieldsetClass}>
      <legend className={LegendClass}>Legend for text inputs</legend>

      <label htmlFor="TextInput" className={LabelClass}>Text Input Label</label>
      <input id="TextInput" type="text" className={TextInputClass} />

      <label htmlFor="TextInput" className={LabelClass}>Valid Text Input Label</label>
      <input id="TextInput" type="text" className={cx(TextInputClass, inputValidClass)} />
      <p className={inputValidHintClass}>Looks good!</p>

      <label htmlFor="TextInput" className={LabelClass}>Invalid Text Input Label</label>
      <input id="TextInput" type="text" className={cx(TextInputClass, inputInvalidClass)} />
      <p className={inputInvalidHintClass}>Something is wrong!</p>

    </fieldset>
    <fieldset className={FieldsetClass}>
      <legend className={LegendClass}>Legend for text based inputs</legend>

      <label htmlFor="NumberInput" className={LabelClass}>Number Input Label</label>
      <input id="NumberInput" type="number" className={TextInputClass} />

      <label htmlFor="EmailInput" className={LabelClass}>Email Input Label</label>
      <input id="EmailInput" type="email" className={TextInputClass} />

      <label htmlFor="PasswordInput" className={LabelClass}>Password Input Label</label>
      <input id="PasswordInput" type="password" className={TextInputClass} />

      <label htmlFor="TelInput" className={LabelClass}>Tel Input</label>
      <input id="TelInput" type="tel" name="mobile" className={TextInputClass} />

      <label htmlFor="UrlInput" className={LabelClass}>URL Input</label>
      <input id="UrlInput" type="url" name="website" className={TextInputClass} />

      <label htmlFor="TextArea" className={LabelClass}>Textarea Label</label>
      <textarea id="TextArea" className={TextAreaClass} />
    </fieldset>

    <fieldset className={FieldsetClass}>
      <legend className={LegendClass}>Advanced Input Types</legend>

      <label htmlFor="FileInput" className={LabelClass}>File Input Label</label>
      <label htmlFor="FileInput" className={FileInputLabelClass}>Choose a file...</label>
      <input id="FileInput" type="file" className={FileInputClass} />


      <label htmlFor="RangeInput" className={LabelClass}>Range Input</label>
      <input
        id="RangeInput"
        type="range"
        name="points"
        min="0"
        max="100"
        className={RangeInputClass}
      />

      <label htmlFor="DateInput" className={LabelClass}>Date Input</label>
      <input id="DateInput" type="date" name="due-date" className={TextInputClass} />
    </fieldset>

    <fieldset className={FieldsetClass}>
      <legend className={LegendClass}>Legend for Select</legend>
      <label htmlFor="Select" className={LabelClass}>Select Label</label>
      <select id="Select" className={SelectClass}>
        <option>Please Select</option>
        <option value="item-1">Item 1</option>
        <option value="item-2">Item 2</option>
        <option value="item-3">Item 3</option>
      </select>
    </fieldset>

    <fieldset className={cx(FieldsetClass, verticalFormGroupClass)}>
      <legend className={LegendClass}>Legend for related checkboxes</legend>
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
      <legend className={LegendClass}>Legend for related checkboxes</legend>
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
      <legend className={LegendClass}>Legend for related radio group</legend>
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
      <legend className={LegendClass}>Legend for related radio group</legend>
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

    <input
      type="submit"
      value="Submit Button"
      className={SubmitClass}
      style={previewStyle}
    />
    <input
      type="reset"
      value="Reset Button"
      className={ResetClass}
      style={previewStyle}
    />
  </div>
);

export default FormStory;
