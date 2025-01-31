import React from 'react';

const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': '\'',
  '&apos;': '\'',
  '&nbsp;': ' ',
  '&copy;': '©',
  '&reg;': '®',
  '&deg;': '°',
  '&plusmn;': '±',
  '&para;': '¶',
  '&middot;': '·',
  '&ndash;': '\u2013',
  '&mdash;': '\u2014',
  '&lsquo;': '\u2018',
  '&rsquo;': '\u2019',
  '&sbquo;': '\u201A',
  '&ldquo;': '\u201C',
  '&rdquo;': '\u201D',
  '&bdquo;': '\u201E',
  '&hellip;': '\u2026',
};

function decodeHtmlEntities(text: string): string {
  return text.replace(/&[#\w]+;/g, (entity) => {
    // Handle numeric entities
    if (entity.startsWith('&#')) {
      const code = entity.slice(2, -1);
      // Hex entities (e.g. &#x27;)
      if (code.startsWith('x')) {
        return String.fromCharCode(Number.parseInt(code.slice(1), 16));
      }
      // Decimal entities (e.g. &#39;)
      return String.fromCharCode(Number.parseInt(code, 10));
    }
    // Handle named entities
    return HTML_ENTITIES[entity] || entity;
  });
}

function camelCase(str: string) {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

function convertStyleStringToObject(styleString: string) {
  return styleString.split(';').reduce((styleObject: { [key: string]: string }, styleProperty) => {
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
export function convertAttributesInElement(element: React.ReactElement | React.ReactElement[]): React.ReactElement | React.ReactElement[] {
  if (Array.isArray(element)) {
    return element.map(el => convertAttributesInElement(el)) as React.ReactElement[];
  }

  // Base case: if the element is not a React element, return it unchanged.
  if (!React.isValidElement(element)) {
    // If it's a text node, decode any HTML entities
    if (typeof element === 'string') {
      return decodeHtmlEntities(element) as unknown as React.ReactElement;
    }
    return element;
  }

  // Convert attributes of the current element.
  const attributeMap: { [key: string]: string } = {
    class: 'className',
    for: 'htmlFor',
    targetAttr: 'targetattr',
    // Add more attribute conversions here as needed
  };

  const newProps: { [key: string]: unknown } = Object.keys((element.props as Record<string, unknown>)).reduce((acc: { [key: string]: unknown }, key) => {
    let value = (element.props as Record<string, unknown>)[key];

    if (key === 'style' && typeof value === 'string') {
      value = convertStyleStringToObject(value);
    }

    const mappedKey = attributeMap[key] || key;
    acc[mappedKey] = value;
    return acc;
  }, {});

  newProps.key = (element.key as string);

  // Process children recursively.
  const children = React.Children.map((element.props as React.PropsWithChildren).children, (child) => {
    if (typeof child === 'string') {
      return decodeHtmlEntities(child);
    }
    return convertAttributesInElement(child as React.ReactElement);
  });

  const newElement = React.createElement(element.type, newProps, children);
  // Clone the element with the new properties and updated children.
  return newElement;
}
