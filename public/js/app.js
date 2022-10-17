// const { response } = require("express")

console.log('This is a clint side javascript')

// const fetch = require("node-fetch")
// console.log('client side javascript file is loaded')

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// }) 
// -------------------------------------------------------
// fetch('http://localhost:3000/weather?address!').then((response)=> {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')

// weatherForm.addEventListener('submit', (e) => {
//    e.preventDefault()

//    const location = search.value

   
//     console.log(location)
// })


//------------------------------------------------



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
   e.preventDefault()

   const location = search.value

   messageOne.textContent = 'Loading.....'
   messageTwo.textContent = ''

   fetch('http://localhost:3000/weather?address='+ location).then((response)=> {
    response.json().then((data) => {
        if(data.error){
            // console.log(data.error)  only one msg are the pass this line is use at that time
            messageOne.textContent = data.error
        }else {
            // console.log(location)
            // console.log(data.forecast) two line in use the pass this line is use at that time
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
 
})