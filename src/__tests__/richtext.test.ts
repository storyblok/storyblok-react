import { describe, expect, it } from 'vitest';
import { componentResolver } from '../richtext';

describe('richtext', () => {
  describe('componentResolver', () => {
    it('should return a React element', () => {
      const node = {
        type: 'blok',
        attrs: {
          body: [{
            _uid: 'test',
            component: 'test-component',
          }],
        },
      };
      const result = componentResolver(node);
      expect(result.props.blok.component).toBe('test-component');
    });

    it('should return a component with prop blok undefined if body is empty', () => {
      const node = {
        type: 'blok',
        attrs: {
          body: [],
        },
      };
      const result = componentResolver(node);
      expect(result.props.blok).toBeUndefined();
    });

    it('should return a component with prop blok undefined if body is undefined', () => {
      const node = {
        type: 'blok',
        attrs: {},
      };
      const result = componentResolver(node);
      expect(result.props.blok).toBeUndefined();
    });
  });
});
