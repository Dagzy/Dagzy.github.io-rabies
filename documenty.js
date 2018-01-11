// document.write("This is where the write method is being called!")
let elementy = document.getElementById('unHideMe')
let words = document.getElementById('putWords')
function hidey(){
    elementy.classList.toggle('hideMe')
}
let first = 'quincy'
let firstUpper = first[0].toUpperCase()
first = first.slice(1)
let arr = ['mango','cherry','apple']
console.log(firstUpper+first)
function getInput(){
    let proompt = prompt("Type stuff here")
    arr.push(proompt)
}
function printProompt(){
    // console.log()
    elementy.innerHTML = "Freshest words"
    // document.write(arr[0])
    // console.log(arr[0])
    arr.forEach(element => {
        console.log(element)
        let node = document.createElement("LI")
        node.innerHTML = element1   
        elementy.appendChild(node)
    });
}
function multiPrompt(){
    let froompt = prompt("Put your first thing here")
    let kroompt = prompt("Put your second thing here")
    console.log(froompt)
    console.log(kroompt)
}
function lovesYa(){
    let wubs = prompt("Be puttin name heres")
    let hurray = 'You made it, I love you!'
    wubs = wubs.toLowerCase()
    if (wubs == "heather"){
        let tipple = document.createElement('DIV')
        tipple.innerHTML = hurray
        elementy.appendChild(tipple)
        console.log("Hey Rabes!")
    }
}