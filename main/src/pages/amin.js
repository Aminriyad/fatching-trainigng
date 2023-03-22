const { stdin } = require("process")
const { stdout } = require("process")
const x = require("readline")
const y = x.createInterface({
input:stdin,
output:stdout,
})
const hey = ()=>{y.question("what is your name?\n", (res)=>{
  console.log(`your name is ${res}`)
    y.close()
})}
console.log(console.dir())
