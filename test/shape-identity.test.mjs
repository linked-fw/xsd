import assert from 'node:assert/strict';
import test from 'node:test';

/**
 * A shape's IRI is built from whichever `linkedPackage()` the `@linkedShape`
 * decorator was bound to — not from the npm name in package.json. When
 * `src/package.ts` re-exported core's decorators, `Boolean` registered under
 * `@_linked/core` while every other signal in the repo said "xsd". The IRI is
 * persisted data and `Server.call` routes on the package name inside it, so
 * nothing in a type-check or a build can catch this; only reading the id back
 * off the built class can.
 *
 * Runs against `lib/`, deliberately: the decorator only runs at runtime, so the
 * compiled artifact is the only thing that can answer the question.
 *
 * The assertion is on the *package segment*, not the whole IRI, because the
 * surrounding scheme belongs to `@_linked/core` and has changed across its
 * versions — arch-02's `{baseUri}shape/{slug}/{Name}` today,
 * `data.lincd.org/module/{sanitized}/shape/{name}` in the 2.6.x that this
 * repo's package-lock still pins. Which package owns the shape is the thing
 * this test is about, and it is the one part that holds on every version.
 */

test('Boolean registers under xsd, not core', async () => {
  const {Boolean: BooleanShape} = await import(
    new URL('../lib/esm/shapes/Boolean.js', import.meta.url)
  );
  const id = BooleanShape.shape?.id;
  assert.ok(id, 'Boolean has no shape id');

  assert.match(
    id,
    /[/-]xsd\//,
    `${id} does not name xsd as the owning package`,
  );
  assert.doesNotMatch(
    id,
    /[/-]core\//,
    `${id} still names core as the owning package`,
  );
});
