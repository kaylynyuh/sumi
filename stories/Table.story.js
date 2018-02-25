// Resources
// https://webaim.org/techniques/tables/data

import React from 'react';

import {
  TableClass,
  TableCaptionClass,
  TableRowClass,
  TableHeaderClass,
  TableCellClass,
} from '../src/components/Table';

const TableStory = (
  <div>
    <table
      className={TableClass}
    >
      <caption className={TableCaptionClass}>Coffee Brewing Devices</caption>
      <thead>
        <tr className={TableRowClass}>
          <th className={TableHeaderClass}>Brand</th>
          <th className={TableHeaderClass} scope="col">Product</th>
          <th className={TableHeaderClass} scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className={TableRowClass}>
          <td className={TableCellClass}>AeroPress</td>
          <td className={TableCellClass}>Aeropress Coffee and Espresso Maker</td>
          <td className={TableCellClass}>$30.00</td>
        </tr>
        <tr className={TableRowClass}>
          <td className={TableCellClass}>Chemex</td>
          <td className={TableCellClass}>Chemex Classic Series</td>
          <td className={TableCellClass}>$50.00</td>
        </tr>
        <tr className={TableRowClass}>
          <td className={TableCellClass}>Kitchen Supreme</td>
          <td className={TableCellClass}>French Press Coffee & Tea Maker Complete Bundle</td>
          <td className={TableCellClass}>$30.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className={TableCellClass} colSpan="3">Try them all out and see what you like.</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default TableStory;
