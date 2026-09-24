import { Prefix } from '@_linked/core/utils/Prefix';
import { createNameSpace } from '@_linked/core/utils/NameSpace';

const dataFile = '../data/xsd.json';
export const loadData = () => {
  //@ts-ignore
  return import('../data/xsd.json', { with: { type: 'json' } }).then(
    (data) => data.default
  );
};

const base = 'http://www.w3.org/2001/XMLSchema#';
export const ns = createNameSpace(base);
Prefix.add('xsd', base);

export const _ontologyResource = ns('');
export const Bytes = ns('Bytes');
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
  Bytes,
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

