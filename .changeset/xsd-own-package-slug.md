---
'@_linked/xsd': minor
---

Register this package's shape under the `xsd` slug, not `core`

`src/package.ts` re-exported core's decorators instead of creating this
package's own `linkedPackage('@_linked/xsd')`, so `@linkedShape` bound to
`corePackage`. **The shape IRI changes:**

| Before | After |
| --- | --- |
| `https://linked.cm/shape/core/Boolean` | `https://linked.cm/shape/xsd/Boolean` |

`Boolean` declares no property shapes, so that is the whole of it. `XSDDate` is
a plain shim, not a shape, and is unaffected.

A shape IRI is persisted data, so this is a minor rather than a patch: anything
that stored or compared that id sees a new one. This package's exports also
move out of core's entry in the package tree and into `@_linked/xsd`, which is
what `Server.call` routes on — a shape named `Boolean` sitting in core's
namespace was about as collision-prone as a name gets.

Same defect and same fix as linked-fw/owl#26.
