# @_linked/xsd

The [XML Schema 1.1 datatypes](https://www.w3.org/TR/xmlschema11-2/) for Linked: the datatypes as
Turtle, an accessor for every one of them, a shape for `xsd:boolean` (`Boolean`) and a date
helper (`XSDDate`). The package
mirrors `http://www.w3.org/2001/XMLSchema#` and holds only its terms.

## Terms

```ts
import * as schema from '@_linked/schema/ontologies/schema';
import * as xsd from '@_linked/xsd/ontologies/xsd';

@literalProperty({path: schema.birthDate, datatype: xsd.date, maxCount: 1})
```

`ontologies/xsd` has one named export per datatype (39); `ontologies/xsd.data` holds `ns`,
`dataFiles`, `_ontologyResource` and `loadData()`. `linked generate-ontology` writes the modules
from the data (`package.json` `"linkedOntologies"`), and `linked build` fails when they are stale;
never edit them by hand.

## The data

The W3C publishes no RDF for XML Schema: the namespace document is not RDF, and the datatypes
are defined in prose, in [XSD 1.1 Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/). So
`src/data/xsd.ttl` is written by hand from that specification. It declares exactly the 39
datatypes that [RDF 1.1 Concepts §5.1](https://www.w3.org/TR/rdf11-concepts/#xsd-datatypes)
allows in RDF (the "RDF-compatible XSD types"), each `a rdfs:Datatype` with its `rdfs:label`,
`rdfs:isDefinedBy xsd:` and `rdfs:subClassOf rdfs:Literal`:

| Group (RDF 1.1 §5.1) | Datatypes |
|---|---|
| Core types | `string`, `boolean`, `decimal`, `integer` |
| IEEE floating-point numbers | `double`, `float` |
| Time and date | `date`, `time`, `dateTime`, `dateTimeStamp` |
| Recurring and partial dates | `gYear`, `gMonth`, `gDay`, `gYearMonth`, `gMonthDay`, `duration`, `yearMonthDuration`, `dayTimeDuration` |
| Limited-range integer numbers | `byte`, `short`, `int`, `long`, `unsignedByte`, `unsignedShort`, `unsignedInt`, `unsignedLong`, `positiveInteger`, `nonNegativeInteger`, `negativeInteger`, `nonPositiveInteger` |
| Encoded binary data | `hexBinary`, `base64Binary` |
| Miscellaneous XSD types | `anyURI`, `language`, `normalizedString`, `token`, `NMTOKEN`, `Name`, `NCName` |

The built-in datatypes RDF 1.1 says SHOULD NOT be used (`QName`, `ENTITY`, `ID`, `IDREF`,
`NOTATION`, `IDREFS`, `ENTITIES`, `NMTOKENS`) and the special `anyType`, `anySimpleType` and
`anyAtomicType` are not in the data. The file also declares the ontology itself (`xsd: a
owl:Ontology`).

To change the data, edit `src/data/xsd.ttl` against those two specifications and run
`npx linked generate-ontology`. The package never adds a term to the namespace that XSD 1.1 does
not define.

## Development

```bash
npx linked build    # checks the ontology modules, compiles, writes lib/esm/data/shapes.ttl
npm test            # runs against lib/
```

## Data license

The package code is MIT licensed (see `LICENSE`). The bundled ontology data is derived from the W3C XML Schema datatypes (XSD) specification and is not covered by the MIT license: it remains under the W3C Software and Document License, https://www.w3.org/copyright/software-license-2023/. See `NOTICE`.
