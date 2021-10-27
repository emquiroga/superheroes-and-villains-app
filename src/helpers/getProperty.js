export const getProperty = (value, properties) =>
properties.reduce((soFar, propertyy) => soFar[propertyy] || {}, value);