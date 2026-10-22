import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';
import { loadOntologyFiles } from '@_linked/core/ontology/loadOntologyFiles';

/** The package's ontology data, relative to this module (Turtle, copied into `lib/` by the build). */
export const dataFiles = ['../data/xsd.ttl'];

/** Reads the package's ontology data (server only). */
export const loadData = () => loadOntologyFiles(import.meta.url, dataFiles);

const base = 'http://www.w3.org/2001/XMLSchema#';
export const ns = createNameSpace(base);
Prefix.add('xsd', base);

export const _ontologyResource = ns('');
export const string = ns('string');
export const boolean = ns('boolean');
export const date = ns('date');
export const long = ns('long');
export const integer = ns('integer');
export const time = ns('time');
export const duration = ns('duration');
export const decimal = ns('decimal');
export const gYear = ns('gYear');
export const dateTime = ns('dateTime');
export const anyURI = ns('anyURI');

export const xsd = {
  _ontologyResource,
  string,
  boolean,
  date,
  long,
  integer,
  time,
  duration,
  decimal,
  gYear,
  dateTime,
  anyURI,
};

