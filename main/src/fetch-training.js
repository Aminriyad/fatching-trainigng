/* const amin = async ()=>{
    const url = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist"
    const job = await fetch(url)
    const res = await job.json()
    console.log(`\n\n${res.setup} \n${res.delivery}\n\n`)
}
*/
// const amin = () => {
// fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist")
// .then(async (res)=>{
//     let reser = await res.json()
//     console.log(reser)
// })
// .catch(err => console.error(err, "error my guy"))
// }

const amin = () => {
    fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist")
    .then(async x =>{const res = await x.json()
        console.log(`\n\n${res.setup} \n${res.delivery}\n\n`)
    })
    .catch(err => {console.error(err)})
}
amin()