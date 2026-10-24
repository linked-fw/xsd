---
"@_linked/xsd": minor
---

The `xsd` accessor modules are generated from `src/data/xsd.ttl` by `linked generate-ontology`
(`package.json` `"linkedOntologies"`), and `linked build` fails when they are stale.
`ontologies/xsd` now exports one named term for every subject of the namespace (39, up from 11).

Breaking changes:

- The aggregated `xsd` object is gone. Import the module as a namespace:

  ```ts
  import * as xsd from '@_linked/xsd/ontologies/xsd';
  static targetClass = xsd.boolean;
  ```

- `ns`, `dataFiles`, `loadData` and `_ontologyResource` moved to `@_linked/xsd/ontologies/xsd.data`.
- No terms were renamed.
