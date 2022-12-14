import { createHash } from "crypto";
/**
 * hashes with the secure hashing algorithm 256
 * @param       {string} str   string to hash
 * @param       {any} salt  salt to apply to string
 * @param       {number} num   amount of times to hash, defaults to 1
 * @returns     {string}    base64 digested hash
*/
function SHA256(str,salt,num) {
    if(!num && num!==0)num=1;
    if(!str)str="";
    let ret = str;
    for (let i = 0; i < num; i++) {
        ret = createHash("sha256")
            .update(ret+salt)
            .digest("base64");
    }
    return ret;
}

function xor(a,b) {
    let c = ""
    let cc
    for (let j=0;j<a.length;j++) {
        cc = a.charCodeAt(j) ^ j
        cc = cc ^ b.charCodeAt((j%b.length))
        // for(let i=0;i<b.length;i++) {
        //     cc = cc ^ b.charCodeAt(i)
        // }
        c += String.fromCharCode(cc)
    }

    return c
}

export {
    SHA256,
    xor
}