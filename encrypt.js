import { encrypt } from "./index.js"

import { readFileSync, writeFileSync } from "fs"

let argv = process.argv.splice(2)

let silent = false
let msg = ""

for(let i in argv) {
    let arg = argv[i]
    switch(arg) {
        case "-s":
            silent = true
            break;
        case "--msg":
            msg = argv[++i]
            break;
        case "-h":
            console.log(readFileSync("helpmessages/encrypt.txt").toString())
            process.exit(0)
    }
}



if(msg == "") {

    const readline = require("readline-sync");

    msg =  readline.question("Message: ")

}

const xoredmsg = encrypt(msg)

if(!silent) {
    console.log("output:");

    console.log(xoredmsg);
}

writeFileSync("output.txt",xoredmsg)