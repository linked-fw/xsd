# @\_linked/xsd

## 1.1.0

### Minor Changes

- [#20](https://github.com/linked-fw/xsd/pull/20) [`8c3fac2`](https://github.com/linked-fw/xsd/commit/8c3fac245ee5cea9e29f6d8d9455cff70027aeed) Thanks [@flyon](https://github.com/flyon)! - Register this package's shape under the `xsd` slug, not `core`

  `src/package.ts` re-exported core's decorators instead of creating this
  package's own `linkedPackage('@_linked/xsd')`, so `@linkedShape` bound to
  `corePackage`. **The shape IRI changes:**

  | Before                                 | After                                 |
  | -------------------------------------- | ------------------------------------- |
  | `https://linked.cm/shape/core/Boolean` | `https://linked.cm/shape/xsd/Boolean` |

  `Boolean` declares no property shapes, so that is the whole of it. `XSDDate` is
  a plain shim, not a shape, and is unaffected.

  A shape IRI is persisted data, so this is a minor rather than a patch: anything
  that stored or compared that id sees a new one. This package's exports also
  move out of core's entry in the package tree and into `@_linked/xsd`, which is
  what `Server.call` routes on — a shape named `Boolean` sitting in core's
  namespace was about as collision-prone as a name gets.

  Same defect and same fix as linked-fw/owl#26.

## 1.0.10

### Patch Changes

- [#18](https://github.com/linked-fw/xsd/pull/18) [`1337b3d`](https://github.com/linked-fw/xsd/commit/1337b3d111a1a69aa602c6652dccfea5c853449d) Thanks [@flyon](https://github.com/flyon)! - Point `types` at `index.d.ts` so a bare import gets types under node10 resolution.

  `typesVersions` (`{"*": {"*": ["lib/esm/*"]}}`) is applied to the root `types` value, so the
  previous value resolved to a path under `lib/esm/` that the build never emits. Subpath imports
  resolved fine through `exports`, which hid the failure from a bare `import … from '@_linked/xsd'`.

## 1.0.9

### Patch Changes

- [#16](https://github.com/linked-fw/xsd/pull/16) [`e574964`](https://github.com/linked-fw/xsd/commit/e574964744f9f3642a58ec46a62b5d90ea8fcd30) Thanks [@flyon](https://github.com/flyon)! - The ontology no longer registers by importing itself.

  It carried `import * as _this from './<prefix>.js'` and passed that namespace to
  `linkedOntology()`. Under `tsc` the self-reference survives; under a bundler it does
  not — Rollup treats it as a circular import and elides it, so the binding is
  `undefined` and a consuming app dies at boot with `_this is not defined`.

  Registration now lives in a `<prefix>.register.ts` sibling, imported from the package
  entry. Nothing changes for consumers: importing this package still registers the
  ontology.

## 1.0.8

### Patch Changes

- [#14](https://github.com/linked-fw/xsd/pull/14) [`fe5ecbd`](https://github.com/linked-fw/xsd/commit/fe5ecbd1c294f067763fa68c9108f4f3e07082cf) Thanks [@flyon](https://github.com/flyon)! - Compile the whole `src` folder, and let a bare import resolve under Node10.

  The build only emitted what an entry transitively reached, so any module
  nothing imported was never built — and never type-checked, so it rotted
  quietly. `include` now covers `src/**/*` with tests excluded explicitly.

  `typesVersions` maps every specifier through `lib/esm/*`, so a `types` value
  that already carried that prefix had it applied twice and no consumer on
  classic Node10 resolution could `import` the package by its bare name.

## 1.0.7

### Patch Changes

- [#12](https://github.com/linked-fw/xsd/pull/12) [`7c60c72`](https://github.com/linked-fw/xsd/commit/7c60c722ac83d5d98327fc91db1d9f8528783931) Thanks [@flyon](https://github.com/flyon)! - Drop the unused `lincd-rdfs` dependency.

  Nothing in this package imports it. `src/index.tsx` pulls in `./types.js`,
  `./ontologies/xsd.js`, `./shapes/Boolean.js` and `./shapes/XSDDate.js`, and
  every other import across `src/` resolves to `@_linked/core` or to a sibling
  file. The only occurrence of the name anywhere is the `package.json` entry
  itself.

  It is worth a release rather than waiting for a rainy day because it is the
  root of a large advisory subtree for every consumer: `lincd-rdfs` pulls `lincd`
  and `rdflib`, and `rdflib@2.4.0` depends on the npm package literally named
  `package.json`, which brings in `git-source` → `git-url-parse` → `git-up` →
  `parse-url` and `git-package-json` → `gry` / `tmp`. That chain carries several
  critical advisories, none of which any Linked package ever loads.

  No API change: the build is clean and the built `lib/esm` entry points still
  load, including `shapes/Boolean.js` and `ontologies/xsd.js`.

## 1.0.6

### Patch Changes

- [#10](https://github.com/linked-fw/xsd/pull/10) [`2b9804f`](https://github.com/linked-fw/xsd/commit/2b9804f0fa22eb62b862d3cbb05f002a6e4745a4) Thanks [@flyon](https://github.com/flyon)! - Declare npm as the package manager for this repo, convert the build scripts off `yarn`, and mark `package-lock.json` as a generated file.

## 1.0.5

### Patch Changes

- [#5](https://github.com/linked-cm/xsd/pull/5) [`115ce08`](https://github.com/linked-cm/xsd/commit/115ce0839b84238173789f07bd765ad1655c82d7) Thanks [@flyon](https://github.com/flyon)! - loadData: ESM-only JSON import — drop the dead CJS branch, add the `{ with: { type: 'json' } }` import attribute.

## 1.0.4

### Patch Changes

- [#2](https://github.com/linked-cm/xsd/pull/2) [`7aa0db9`](https://github.com/linked-cm/xsd/commit/7aa0db9df42d79a995a07a2b5bb0aa4a58a28b97) Thanks [@flyon](https://github.com/flyon)! - Switch to explicit per-step build pipeline so silent build failures no longer ship empty tarballs. The previous `yarn linked build` wrapper was failing silently in CI and dropping all compiled `.js` files from the published tarball.

## 1.0.3

### Patch Changes

- [`ad197b0`](https://github.com/linked-cm/xsd/commit/ad197b07d376047e698f01066c20deaab989b71d) - First release under `@_linked/xsd`. Package was previously published as `lincd-xsd`; content is the same, namespace migrated to the `@_linked` scope.
