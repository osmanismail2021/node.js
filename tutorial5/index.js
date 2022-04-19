/*
npm install node-fetch@2
*/
const baseURL="https://jsonplaceholder.typicode.com"
const fetch = require('node-fetch')
let postId = process.argv[3]

console.log(`You've entered postID: ${postId}`)

fetch(`${baseURL}/posts/${postId}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})