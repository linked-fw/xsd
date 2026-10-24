import { Shape } from '@_linked/core/shapes/Shape';
import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
import * as xsd from '../ontologies/xsd.js';
import { linkedShape } from '../package.js';

@linkedShape
export class Boolean extends Shape {
  static targetClass = xsd.boolean;

  static true() {
    return true;
  }

  static false() {
    return false;
  }

  static toLiteral(value: boolean) {
    return value ? this.true() : this.false();
  }

  static isTrue(value: boolean | string | { value?: string }) {
    return (
      value === true ||
      value === 'true' ||
      (typeof value === 'object' && value?.value === 'true')
    );
  }

  static isFalse(value: boolean | string | { value?: string }) {
    return (
      value === false ||
      value === 'false' ||
      (typeof value === 'object' && value?.value === 'false')
    );
  }

  /**
   * Updates a boolean value of the given node with the opposite of its current boolean value.
   * Will be set to true if not set yet.
   * @param resource
   * @param property
   */
  static negate(_resource: NodeReferenceValue | Boolean, _property: unknown) {
    throw new Error(
      'Boolean.negate depends on legacy in-memory mutation and is not migrated'
    );
  }
}
