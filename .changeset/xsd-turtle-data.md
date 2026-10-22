---
'@_linked/xsd': minor
---

The ontology data ships as Turtle and the package holds only XML Schema's terms.

- `src/data/xsd.json` is replaced by `src/data/xsd.ttl` (the same 159 triples), copied into
  `lib/esm/data/` by the build. `loadData()` now resolves to the Turtle text (`string[]`, read
  through `@_linked/core/ontology/loadOntologyFiles`, server only) instead of the JSON-LD
  document, and the module exports `dataFiles`.
- **Breaking:** the `Bytes` term (`xsd:Bytes`) is removed, also from the `xsd` object: XML Schema
  defines no such datatype. Use `xsd:base64Binary` or `xsd:hexBinary`.
- The package declares that it mirrors `http://www.w3.org/2001/XMLSchema#`, so the shape check
  reports any term in that namespace the data does not define. A test asserts the check finds
  nothing in this package.
