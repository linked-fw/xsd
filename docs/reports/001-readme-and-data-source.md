---
date: 2026-10-24
summary: >
  New README recording the source of `src/data/xsd.ttl`: written by hand from XSD 1.1 Part 2,
  covering exactly the 39 datatypes RDF 1.1 Concepts §5.1 allows, since the W3C publishes no RDF
  for XSD. No data or code changed. Patch.
---

# 001 — README and the data's source

## Why

Every other vocabulary package's README names where its Turtle comes from (the W3C's or the
standard body's published file). XSD has no such file: the namespace document is not RDF and the
datatypes are defined in prose. The README says so and states what the hand-written file covers.

## What changed

- `README.md` (new): the namespace import (`import * as xsd from '@_linked/xsd/ontologies/xsd'`),
  the data's source (XSD 1.1 Part 2), the 39 datatypes grouped as RDF 1.1 Concepts §5.1's table
  groups them, the excluded datatypes, and how to change the data.
- Checked against the file: 39 `a rdfs:Datatype`, 39 `rdfs:label`, 39 `rdfs:isDefinedBy xsd:`,
  39 `rdfs:subClassOf rdfs:Literal`; the 39 names are exactly §5.1's table (fetched from
  <https://www.w3.org/TR/rdf11-concepts/>: 4 core, 2 IEEE floating-point, 4 time and date, 8 recurring and partial dates
  including `duration`, 12 limited-range integers, 2 binary, 7 miscellaneous).

## Gate

- `npx linked build`: "✔ Build successful".
- `npm test`: "# tests 2 / # pass 2 / # fail 0".

## PR

### Summary

Adds a README that records the source of `src/data/xsd.ttl`.

### Changes

- `README.md`: the namespace import; the Turtle is written by hand from XSD 1.1 Part 2 and holds
  the 39 datatypes RDF 1.1 Concepts §5.1 allows (the W3C publishes no RDF for XSD); the excluded
  datatypes; how to change the data.

### Verification

- The 39 datatypes in `src/data/xsd.ttl` match §5.1's table name for name.
- `npx linked build`: "✔ Build successful"; `npm test`: "# pass 2 / # fail 0".

### Deviations

None.

### Follow-ups

None.
