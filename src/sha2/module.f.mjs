/**
 * SHA-256 of a string's UTF-8 bytes, as hex. Bytes are bit vectors (`Vec`),
 * which is how FunctionalScript represents binary data.
 *
 * @module
 */

import { computeSync, sha256 } from 'functionalscript/fjs/crypto/sha2/module.f.mjs'
import { utf8 } from 'functionalscript/fjs/text/module.f.mjs'
import { uint } from 'functionalscript/fjs/types/bit_vec/module.f.mjs'

const compute = computeSync(sha256)

/** @type {(text: string) => string} */
export const sha256Hex = text => uint(compute([utf8(text)])).toString(16).padStart(64, '0')
