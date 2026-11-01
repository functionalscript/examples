import { assertEq } from 'functionalscript/fjs/asserts/module.f.js'
import { sha256Hex } from './module.f.mjs'

export const proof = {
    empty: () => assertEq(sha256Hex(''), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'),
    abc: () => assertEq(sha256Hex('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'),
}
