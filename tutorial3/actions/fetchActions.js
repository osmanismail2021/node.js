const baseURL = "https://jsonplaceholder.typicode.com"
const fetch = require('node-fetch')

module.exports={
    getPosts:function(){
        fetch(`${baseURL}/posts`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },
    getSinglePost : function(id){
        fetch(`${baseURL}/posts/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },
    addPost:function(post){
        console.log('add',post);
    },
    deletePost:function(id){
        console.log('delete',id);
    },
    updatePost:function(id){
        console.log('update',id);
    }

}