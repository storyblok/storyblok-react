import { describe, expect, it } from 'vitest';
import React from 'react';
import { convertAttributesInElement } from '../utils';

describe('utils', () => {
  describe('convertAttributesInElement', () => {
    it('should convert HTML class attribute to React className', () => {
      const input = React.createElement('div', { class: 'test-class' });
      const output = convertAttributesInElement(input);
      expect(output.props).toHaveProperty('className', 'test-class');
      expect(output.props).not.toHaveProperty('class');
    });

    it('should convert HTML for attribute to React htmlFor', () => {
      const input = React.createElement('label', { for: 'test-input' });
      const output = convertAttributesInElement(input);
      expect(output.props).toHaveProperty('htmlFor', 'test-input');
      expect(output.props).not.toHaveProperty('for');
    });

    it('should convert string style attributes to style objects', () => {
      const input = React.createElement('div', { style: 'color: red; font-size: 12px; margin-top: 10px' });
      const output = convertAttributesInElement(input);
      expect(output.props.style).toEqual({
        color: 'red',
        fontSize: '12px',
        marginTop: '10px',
      });
    });

    it('should handle nested elements', () => {
      const nestedElement = React.createElement('span', { class: 'nested', style: 'color: blue' }, 'Nested Content');
      const input = React.createElement('div', { class: 'parent' }, nestedElement);
      const output = convertAttributesInElement(input);

      expect(output.props).toHaveProperty('className', 'parent');
      // React.Children.map will return an array even for a single child
      expect(output.props.children[0].props).toHaveProperty('className', 'nested');
      expect(output.props.children[0].props.style).toEqual({ color: 'blue' });
    });

    it('should handle arrays of elements', () => {
      const elements = [
        React.createElement('div', { class: 'first' }, 'First'),
        React.createElement('div', { class: 'second' }, 'Second'),
      ];
      const output = convertAttributesInElement(elements);
      expect(Array.isArray(output)).toBe(true);
      expect(output[0].props).toHaveProperty('className', 'first');
      expect(output[1].props).toHaveProperty('className', 'second');
    });

    it('should preserve non-mapped attributes', () => {
      const input = React.createElement('div', { 'id': 'test-id', 'data-testid': 'test' });
      const output = convertAttributesInElement(input);
      expect(output.props).toHaveProperty('id', 'test-id');
      expect(output.props).toHaveProperty('data-testid', 'test');
    });

    it('should handle string children without modification', () => {
      const input = React.createElement('div', { class: 'parent' }, 'Text content');
      const output = convertAttributesInElement(input);
      // React.Children.map will return an array of children
      expect(output.props.children[0]).toBe('Text content');
    });

    it('should maintain element type', () => {
      const input = React.createElement('button', { class: 'btn' });
      const output = convertAttributesInElement(input);
      expect(output.type).toBe('button');
    });
  });
});
