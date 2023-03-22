const x = require("readline")
const y = x.createInterface({input:process.stdin, output:process.stdout})
const hey = ()=>{y.question("what is your name?\n", (x)=>{
    console.log(`your name is ${x}`)
    y.close()
})}
hey()
