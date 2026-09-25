import {linkedPackage} from '@_linked/core/utils/Package';

/**
 * This package's own linked identity.
 *
 * It used to re-export core's decorators verbatim and declare `packageName`
 * as a bare literal that nothing was bound to. The decorators therefore came
 * from `corePackage`, so `Boolean` registered as `shape/core/Boolean` rather
 * than `shape/xsd/Boolean`. A shape's IRI is persisted data and `Server.call`
 * routes on the package name inside it, so the wrong slug is a wrong identity,
 * not a cosmetic label — and a shape called `Boolean` living in core's
 * namespace is about as collision-prone as a name gets.
 *
 * Same defect, same fix, as linked-fw/owl#26.
 */
export const {
  linkedShape,
  linkedUtil,
  linkedOntology,
  registerPackageExport,
  registerPackageModule,
  getPackageShape,
  packageExports,
  packageName,
} = linkedPackage('@_linked/xsd');
