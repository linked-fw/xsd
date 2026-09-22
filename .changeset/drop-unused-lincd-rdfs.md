---
'@_linked/xsd': patch
---

Drop the unused `lincd-rdfs` dependency.

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
