# @\_linked/xsd

## 1.4.2

### Patch Changes

- [#63](https://github.com/linked-fw/xsd/pull/63) [`d433949`](https://github.com/linked-fw/xsd/commit/d43394915f3a63a619f537c4b556a14b6d1699ae) Thanks [@flyon](https://github.com/flyon)! - license: MIT; data license noted

## 1.4.1

### Patch Changes

- [#61](https://github.com/linked-fw/xsd/pull/61) [`6d60fad`](https://github.com/linked-fw/xsd/commit/6d60fad9e1681bb12874fe8c6198f59a4905e764) Thanks [@flyon](https://github.com/flyon)! - New README: the namespace import, and the source of `src/data/xsd.ttl`. The W3C publishes no RDF
  for XML Schema, so the Turtle is written by hand from XSD 1.1 Part 2 and covers exactly the 39
  datatypes RDF 1.1 Concepts §5.1 allows. No data or code changed.

## 1.4.0

### Minor Changes

- [#59](https://github.com/linked-fw/xsd/pull/59) [`2a91fa8`](https://github.com/linked-fw/xsd/commit/2a91fa8a3f3e06da1ff419b7a39408529b063893) Thanks [@flyon](https://github.com/flyon)! - The `xsd` accessor modules are generated from `src/data/xsd.ttl` by `linked generate-ontology`
  (`package.json` `"linkedOntologies"`), and `linked build` fails when they are stale.
  `ontologies/xsd` now exports one named term for every subject of the namespace (39, up from 11).
  
  Breaking changes:
  
  - The aggregated `xsd` object is gone. Import the module as a namespace:
  
    ```ts
    import * as xsd from '@_linked/xsd/ontologies/xsd';
    static targetClass = xsd.boolean;
    ```
  
  - `ns`, `dataFiles`, `loadData` and `_ontologyResource` moved to `@_linked/xsd/ontologies/xsd.data`;
    `import * as xsd` no longer reaches them, and the registered ontology carries only the terms.
  - No terms were renamed.

## 1.3.2

### Patch Changes

- [#57](https://github.com/linked-fw/xsd/pull/57) [`6a5372d`](https://github.com/linked-fw/xsd/commit/6a5372dc48b467536e0b7be8cc2f5dbeda116612) Thanks [@flyon](https://github.com/flyon)! - Ships `lib/esm/data/shapes.ttl`; core range raised.

## 1.3.1

### Patch Changes

- [#55](https://github.com/linked-fw/xsd/pull/55) [`fc256bf`](https://github.com/linked-fw/xsd/commit/fc256bf86172f2a92860f844874d50edbe95c4d0) Thanks [@flyon](https://github.com/flyon)! - Ship `xsd.ttl`, which 1.3.0 left out.

## 1.3.0

### Minor Changes

- [#53](https://github.com/linked-fw/xsd/pull/53) [`dc79ab3`](https://github.com/linked-fw/xsd/commit/dc79ab3041c9d28194dbda675730a739d7dc6f37) Thanks [@flyon](https://github.com/flyon)! - The ontology data ships as Turtle and the package holds only XML Schema's terms.
  
  - `src/data/xsd.json` is replaced by `src/data/xsd.ttl` (the same 159 triples), copied into
    `lib/esm/data/` by the build. `loadData()` now resolves to the Turtle text (`string[]`, read
    through `@_linked/core/ontology/loadOntologyFiles`, server only) instead of the JSON-LD
    document, and the module exports `dataFiles`.
  - **Breaking:** the `Bytes` term (`xsd:Bytes`) is removed, also from the `xsd` object: XML Schema
    defines no such datatype. Use `xsd:base64Binary` or `xsd:hexBinary`.
  - The package declares that it mirrors `http://www.w3.org/2001/XMLSchema#`, so the shape check
    reports any term in that namespace the data does not define. A test asserts the check finds
    nothing in this package.

## 1.2.5

### Patch Changes

- [#48](https://github.com/linked-fw/xsd/pull/48) [`4c835b3`](https://github.com/linked-fw/xsd/commit/4c835b3b58e0ca91c0404da0401f18b166f15fdc) Thanks [@flyon](https://github.com/flyon)! - Build with `linked build`, the standard build for linked packages. The published `lib/` holds the same files as before; the `rimraf` and `copyfiles` dev dependencies are gone. The type packages the compiler config already relies on (`@types/node`, `@types/react`, `@types/react-dom`) are now declared as dev dependencies instead of arriving transitively.

## 1.2.4

### Patch Changes

- [#46](https://github.com/linked-fw/xsd/pull/46) [`6545c54`](https://github.com/linked-fw/xsd/commit/6545c54c64d6cc1f839bae1e64eefd07cfbad69e) Thanks [@flyon](https://github.com/flyon)! - Publish only the files consumers need; the tarball no longer includes `.changeset/`, `.gitattributes`, `.github/`, `renovate.json`, `test/` or tsconfig files.

## 1.2.3

### Patch Changes

- [#41](https://github.com/linked-fw/xsd/pull/41) [`7899ca8`](https://github.com/linked-fw/xsd/commit/7899ca8e3181cc08bdf2ba78a89bcd7797053cda) Thanks [@flyon](https://github.com/flyon)! - The package is now ESM-only, like the rest of the Linked packages. The `require` condition pointed at a `lib/cjs` build that could not load — from the published tarball, `require('@_linked/xsd')` already failed — so it is removed together with the CJS build, and `"type": "module"` is set. `import` is unchanged.

## 1.2.2

### Patch Changes

- [#37](https://github.com/linked-fw/xsd/pull/37) [`85670c7`](https://github.com/linked-fw/xsd/commit/85670c7b0d45416fa5411b8ca1e40b6dfdae73be) Thanks [@flyon](https://github.com/flyon)! - Add `shapes/index`, a side-effect-only module that registers every shape this package defines, and have the package entry import it instead of listing shapes one by one. Hosts and consumers can now load `@_linked/xsd/shapes/index` to get the package's full shape set registered without pulling in anything else, and a shape added later is picked up by the entry automatically.

## 1.2.1

### Patch Changes

- [#35](https://github.com/linked-fw/xsd/pull/35) [`58bd8ee`](https://github.com/linked-fw/xsd/commit/58bd8eefc7e9c32dffcbf79b885e3c3cffebfe14) Thanks [@flyon](https://github.com/flyon)! - Sourcemaps now embed their TypeScript source, so consumers no longer see 'points to missing source files' warnings.

## 1.2.0

### Minor Changes

- [#22](https://github.com/linked-fw/xsd/pull/22) [`569b349`](https://github.com/linked-fw/xsd/commit/569b349a93cfdb4d53837b9a120be592b9b24428) Thanks [@flyon](https://github.com/flyon)! - Require `@_linked/core@^2.22.8` (was `^2.0.1`), and pin it in the lockfile.

  The declared range was wide enough that the resolved core depended on whatever the
  consumer — or this repo's own CI, via `package-lock.json` — happened to install. Core
  decides how a shape's IRI is minted, so a stale core made this package emit legacy
  `data.lincd.org` IRIs instead of the arch-02 `linked.cm` scheme. Which IRIs a published
  package produces should not be a function of the installer's dependency tree.

  Minor rather than patch: this raises the minimum core a consumer must resolve, so it
  changes what gets installed rather than only what this package does internally.

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
