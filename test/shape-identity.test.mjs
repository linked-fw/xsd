import assert from 'node:assert/strict';
import test from 'node:test';

/**
 * A shape's IRI is `{baseUri}shape/{packageSlug}/{ShapeName}`, and the slug
 * comes from whichever `linkedPackage()` the `@linkedShape` decorator was
 * bound to — not from the npm name in package.json. When `src/package.ts`
 * re-exported core's decorators, `Boolean` registered as `shape/core/Boolean`
 * while every other signal in the repo said "xsd". The IRI is persisted data
 * and `Server.call` routes on the package name inside it, so nothing in a
 * type-check or a build can catch this; only reading the id back off the built
 * class can.
 *
 * Runs against `lib/`, deliberately: the decorator only runs at runtime, so
 * the compiled artifact is the only thing that can answer the question.
 */

test('Boolean registers under the xsd slug, not core', async () => {
  const {Boolean: BooleanShape} = await import(
    new URL('../lib/esm/shapes/Boolean.js', import.meta.url)
  );
  assert.equal(BooleanShape.shape?.id, 'https://linked.cm/shape/xsd/Boolean');
});
