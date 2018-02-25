import React from 'react';

import {
  Heading1Class,
  Heading1FancyClass,
  Heading2Class,
  Heading2FancyClass,
  Heading3Class,
  Heading3FancyClass,
  Heading4Class,
  Heading4FancyClass,
  Heading5Class,
  Heading5FancyClass,
  ParagraphClass,
  ParagraphFancyClass,
} from '../src/components/Typography';

const previewStyle = {
  margin: '0 0 4rem',
};

const TypographyStory = (
  <div>

    <div style={previewStyle}>

      <h1 className={Heading1Class}>Page Title: Heading One</h1>

      <h2 className={Heading2Class}>Section Title: Heading Two</h2>

      <h3 className={Heading3Class}>Heading Three</h3>

      <h4 className={Heading4Class}>Heading Four</h4>

      <h5 className={Heading5Class}>Heading Five</h5>

      <p className={ParagraphClass}>Paragraph: Movements living a fully ethical life silo emerging justice, benefit corporation do-gooder program areas changemaker inspire society black lives matter the resistance uplift. Collaborate replicable, contextualize venture philanthropy state of play. Thought leadership low-hanging fruit venture philanthropy; systems thinking, theory of change her body her rights venture philanthropy milestones mass incarceration change-makers thought provoking external partners. Collaborative cities, leverage, social return on investment support parse benefit corporation boots on the ground accessibility innovate. Philanthropy radical; contextualize social innovation strategize.</p>

    </div>

    <div style={previewStyle}>

      <h1 className={Heading1FancyClass}>Page Title: Heading One</h1>

      <h2 className={Heading2FancyClass}>Section Title: Heading Two</h2>

      <h3 className={Heading3FancyClass}>Heading Three</h3>

      <h4 className={Heading4FancyClass}>Heading Four</h4>

      <h5 className={Heading5FancyClass}>Heading Five</h5>

      <p className={ParagraphFancyClass}>Paragraph: Movements living a fully ethical life silo emerging justice, benefit corporation do-gooder program areas changemaker inspire society black lives matter the resistance uplift. Collaborate replicable, contextualize venture philanthropy state of play. Thought leadership low-hanging fruit venture philanthropy; systems thinking, theory of change her body her rights venture philanthropy milestones mass incarceration change-makers thought provoking external partners. Collaborative cities, leverage, social return on investment support parse benefit corporation boots on the ground accessibility innovate. Philanthropy radical; contextualize social innovation strategize.</p>

    </div>

  </div>
);

export default TypographyStory;
