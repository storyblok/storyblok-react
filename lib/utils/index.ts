import React from 'react';

function camelCase(str: string) {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

function convertStyleStringToObject(styleString: string) {
  return styleString
    .split(';')
    .reduce((styleObject: { [key: string]: string }, styleProperty) => {
      let [key, value] = styleProperty.split(':');
      key = key?.trim();
      value = value?.trim();
      if (key && value) {
        styleObject[camelCase(key)] = value;
      }
      return styleObject;
    }, {});
}

/**
 * Recursively converts HTML attributes in a React element tree to their JSX property names.
 *
 * @param {React.ReactElement} element The React element to process.
 * @return {React.ReactElement} A new React element with converted attributes.
 */
export function convertAttributesInElement(
  element: React.ReactElement,
): React.ReactElement {
  // Base case: if the element is not a React element, return it unchanged.
  if (!React.isValidElement(element)) {
    return element;
  }

  // Convert attributes of the current element.
  const attributeMap: { [key: string]: string } = {
    class: 'className',
    for: 'htmlFor',
    targetAttr: 'targetattr',
    // Add more attribute conversions here as needed
  };

  const newProps: { [key: string]: unknown } = Object.keys(
    element.props as Record<string, unknown>,
  ).reduce((acc: { [key: string]: unknown }, key) => {
    let value = (element.props as Record<string, unknown>)[key];

    if (key === 'style' && typeof value === 'string') {
      value = convertStyleStringToObject(value);
    }

    const mappedKey = attributeMap[key] || key;
    acc[mappedKey] = value;
    return acc;
  }, {
    key: `${element.type}-${Math.random().toString(36).substring(7)}`,
  });

  // Process children recursively.
  const children = React.Children.map(
    (element.props as React.PropsWithChildren).children,
    child => convertAttributesInElement(child as React.ReactElement),
  );
  const newElement = React.createElement(element.type, newProps, children);
  // Clone the element with the new properties and updated children.
  console.log(newElement);
  return newElement;
}
