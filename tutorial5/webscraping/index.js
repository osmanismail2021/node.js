const fetch = require('node-fetch')
const htmlparser2 = require('htmlparser2')
const cheerio = require ('cheerio')
fetch('http://testphp.vulnweb.com/')
.then(res=>res.text())
.then(data=>{
    const dom = htmlparser2.parseDocument(data);
    const $ = cheerio.load(dom);
    console.log($('ul').children().first().text())
})