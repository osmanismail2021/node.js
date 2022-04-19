import fetch from 'axios'
import $ from 'jquery'

fetch.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.data)
.then(data=>{
    console.log(data)
    data.foreach(post=>{
        console.log(post.title)//retrived posts here
        $('.list-group').append(`<li class="list-group-item">${post.title}</li>`)
    })
})

console.log($('.list-group'))