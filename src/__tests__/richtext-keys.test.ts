import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { useStoryblokRichTextResolver } from '../richtext';
import { BlockTypes, MarkTypes, TextTypes } from '@storyblok/js';
import type { StoryblokRichTextNode } from '@storyblok/js';

type ReactElementWithKey = React.ReactElement & { key: string | null };

describe('storyblokRichTextResolver', () => {
  // Helper to find all keys in the React tree
  const findAllKeys = (
    element: ReactElementWithKey | ReactElementWithKey[],
  ): string[] => {
    const keys: string[] = [];

    const traverse = (el: ReactElementWithKey | ReactElementWithKey[]) => {
      if (Array.isArray(el)) {
        el.forEach((child) => {
          if (React.isValidElement(child)) {
            traverse(child as ReactElementWithKey);
          }
        });
        return;
      }

      if (el.key) {
        keys.push(String(el.key));
      }

      const children = el.props?.children;
      if (children) {
        const childArray = Array.isArray(children) ? children : [children];
        childArray.forEach((child) => {
          if (React.isValidElement(child)) {
            traverse(child as ReactElementWithKey);
          }
        });
      }
    };

    traverse(element);
    return keys;
  };

  // Helper function to check for missing keys in the React tree
  const findMissingKeys = (
    element: ReactElementWithKey | ReactElementWithKey[],
  ): Array<{ type: string; path: string }> => {
    const missing: Array<{ type: string; path: string }> = [];

    const traverse = (
      el: ReactElementWithKey | ReactElementWithKey[],
      path: string = 'root',
    ) => {
      if (Array.isArray(el)) {
        el.forEach((child, index) => {
          if (React.isValidElement(child)) {
            traverse(child as ReactElementWithKey, `root[${index}]`);
          }
        });
        return;
      }

      if (!el.key) {
        missing.push({ type: String(el.type), path });
      }

      const children = el.props?.children;
      if (children) {
        const childArray = Array.isArray(children) ? children : [children];
        childArray.forEach((child, index) => {
          if (React.isValidElement(child)) {
            traverse(
              child as ReactElementWithKey,
              `${path} > ${String(child.type)}[${index}]`,
            );
          }
        });
      }
    };

    traverse(element);
    return missing;
  };

  it('should have keys on all block elements', () => {
    const resolver = useStoryblokRichTextResolver({});
    const doc: StoryblokRichTextNode<React.ReactElement> = {
      type: BlockTypes.DOCUMENT,
      content: [
        {
          type: BlockTypes.PARAGRAPH,
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Hello',
              content: [],
            },
          ],
        },
        {
          type: BlockTypes.HEADING,
          attrs: { level: 1 },
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Title',
              content: [],
            },
          ],
        },
      ],
    };

    const result = resolver.render(doc);
    const missingKeys = findMissingKeys(result);
    const allKeys = findAllKeys(result);

    expect(missingKeys).toHaveLength(0);
    expect(allKeys.filter((k) => k.startsWith('p-')).length).toBeGreaterThan(0);
    expect(allKeys.filter((k) => k.startsWith('h1-')).length).toBeGreaterThan(
      0,
    );
    expect(allKeys.filter((k) => k.startsWith('text-')).length).toBeGreaterThan(
      0,
    );
  });

  it('should have keys on all mark elements', () => {
    const resolver = useStoryblokRichTextResolver({});
    const doc: StoryblokRichTextNode<React.ReactElement> = {
      type: BlockTypes.DOCUMENT,
      content: [
        {
          type: BlockTypes.PARAGRAPH,
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Styled text',
              marks: [
                { type: MarkTypes.BOLD },
                { type: MarkTypes.ITALIC },
                { type: MarkTypes.LINK, attrs: { href: '#' } },
              ],
            },
          ],
        },
      ],
    };

    const result = resolver.render(doc);
    const missingKeys = findMissingKeys(result);
    const allKeys = findAllKeys(result);

    expect(missingKeys).toHaveLength(0);
    expect(
      allKeys.filter((k) => k.startsWith('strong-')).length,
    ).toBeGreaterThan(0);
    expect(allKeys.filter((k) => k.startsWith('em-')).length).toBeGreaterThan(
      0,
    );
    expect(allKeys.filter((k) => k.startsWith('a-')).length).toBeGreaterThan(0);
    expect(allKeys.filter((k) => k.startsWith('text-')).length).toBeGreaterThan(
      0,
    );
  });

  it('should have keys on nested elements', () => {
    const resolver = useStoryblokRichTextResolver({});
    const doc: StoryblokRichTextNode<React.ReactElement> = {
      type: BlockTypes.DOCUMENT,
      content: [
        {
          type: BlockTypes.UL_LIST,
          content: [
            {
              type: BlockTypes.LIST_ITEM,
              content: [
                {
                  type: BlockTypes.PARAGRAPH,
                  content: [
                    {
                      type: TextTypes.TEXT,
                      text: 'List item',
                      marks: [{ type: MarkTypes.BOLD }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const result = resolver.render(doc);
    const missingKeys = findMissingKeys(result);
    expect(missingKeys).toHaveLength(0);
  });

  it('should have keys on components', () => {
    const resolver = useStoryblokRichTextResolver({});
    const doc: StoryblokRichTextNode<React.ReactElement> = {
      type: BlockTypes.DOCUMENT,
      content: [
        {
          type: BlockTypes.COMPONENT,
          attrs: {
            body: [{ component: 'test' }],
          },
          content: [],
        },
      ],
    };

    const result = resolver.render(doc);
    const missingKeys = findMissingKeys(result);
    const allKeys = findAllKeys(result);

    expect(missingKeys).toHaveLength(0);
    expect(
      allKeys.filter((k) => k.startsWith('component-')).length,
    ).toBeGreaterThan(0);
  });

  it('should handle all Storyblok rich text node types with proper keys', () => {
    const resolver = useStoryblokRichTextResolver({});
    const doc: StoryblokRichTextNode<React.ReactElement> = {
      type: BlockTypes.DOCUMENT,
      content: [
        // Regular paragraph with text
        {
          type: BlockTypes.PARAGRAPH,
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Regular paragraph',
              content: [],
            },
          ],
        },
        // Heading with styled text
        {
          type: BlockTypes.HEADING,
          attrs: { level: 1 },
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Styled Heading',
              marks: [{ type: MarkTypes.BOLD }],
            },
          ],
        },
        // List with nested elements
        {
          type: BlockTypes.UL_LIST,
          content: [
            {
              type: BlockTypes.LIST_ITEM,
              content: [
                {
                  type: BlockTypes.PARAGRAPH,
                  content: [
                    {
                      type: TextTypes.TEXT,
                      text: 'List item with ',
                      content: [],
                    },
                    {
                      type: TextTypes.TEXT,
                      text: 'mixed',
                      marks: [{ type: MarkTypes.ITALIC }],
                    },
                    {
                      type: TextTypes.TEXT,
                      text: ' styling',
                      content: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Link block
        {
          type: BlockTypes.PARAGRAPH,
          content: [
            {
              type: TextTypes.TEXT,
              text: 'Click here',
              marks: [
                {
                  type: MarkTypes.LINK,
                  attrs: { href: 'https://example.com', target: '_blank' },
                },
              ],
            },
          ],
        },
        // Custom component
        {
          type: BlockTypes.COMPONENT,
          attrs: {
            id: 'custom-component',
            body: [{ component: 'test', text: 'Component content' }],
          },
          content: [],
        },
        // Quote block
        {
          type: BlockTypes.QUOTE,
          content: [
            {
              type: TextTypes.TEXT,
              text: 'A famous quote',
              marks: [{ type: MarkTypes.ITALIC }],
            },
          ],
        },
      ],
    };

    const result = resolver.render(doc);
    const missingKeys = findMissingKeys(result);
    console.error('Result structure:', JSON.stringify(result, null, 2));
    console.error('Missing keys:', missingKeys);

    // Verify no missing keys
    expect(missingKeys).toHaveLength(0);

    // Verify all types have proper keys
    const allKeys = findAllKeys(result);
    expect(allKeys.some((k) => k.startsWith('component-'))).toBe(true); // Component nodes
    expect(allKeys.some((k) => k.startsWith('text-'))).toBe(true); // Text nodes
    expect(
      allKeys.some(
        (k) =>
          k.startsWith('p-') ||
          k.startsWith('h1-') ||
          k.startsWith('ul-') ||
          k.startsWith('li-') ||
          k.startsWith('blockquote-') ||
          k.startsWith('strong-') ||
          k.startsWith('em-') ||
          k.startsWith('a-'),
      ),
    ).toBe(true); // HTML elements

    // Update these checks too
    expect(allKeys.filter((k) => k.startsWith('text-')).length).toBeGreaterThan(
      0,
    );

    // Add more specific key pattern checks
    expect(allKeys.filter((k) => k.startsWith('p-')).length).toBeGreaterThan(0); // Should have paragraphs
    expect(
      allKeys.filter((k) => k.startsWith('component-')).length,
    ).toBeGreaterThan(0); // Should have components

    // Verify structure is correct
    const structure = JSON.stringify(result);
    expect(structure).toContain('p'); // Paragraphs
    expect(structure).toContain('h1'); // Headings
    expect(structure).toContain('ul'); // Lists
    expect(structure).toContain('li'); // List items
    expect(structure).toContain('strong'); // Bold text
    expect(structure).toContain('em'); // Italic text
    expect(structure).toContain('a'); // Links
    expect(structure).toContain('blockquote'); // Quotes
  });

  // Log detailed information about missing keys
  afterEach((context) => {
    const result = context.task?.result;
    if (result?.state === 'fail') {
      const missingKeys = (result as any).missingKeys;
      if (missingKeys?.length) {
        console.error('Missing keys found in:', missingKeys);
      }
    }
  });
});
