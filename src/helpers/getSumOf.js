import { filterNullish } from "./filterNullish";
import { getProperty } from "./getProperty";


export const getSumOf = (list, properties, { formatter = (v) => v } = {}) =>
list
  .map((value) => formatter(getProperty(value, properties)))
  .filter(filterNullish)
  .map(Number)
  .reduce((a, b) => a + b, 0);