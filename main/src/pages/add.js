const x = require("readline")
const y = x.createInterface({input:process.stdin, output:process.stdout})
// eslint-disable-next-line no-lone-blocks
const hey = ()=>{y.question("what is your name?\n", (x)=>{
        try{aminer()}
        catch(err){ throw console.log(`we have an error ---{made by amin}---> ${err} <---{made by amin}---`)}
    y.close()
})}
hey()