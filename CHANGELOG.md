# @\_linked/xsd

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
