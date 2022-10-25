//const { response } = require("express");
console.log('clint side js')


const wetherform= document.querySelector('form')
const search= document.querySelector('input')
const msg= document.querySelector('#messge1')
const msg2= document.querySelector('#messge2')



wetherform.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    const location=search.value
    msg.textContent='loading....'
    msg2.textContent=''

    
    fetch('/products?address='+location).then((response)=>
    {
        response.json().then((data)=>
        {
            if(data.error)
            {
                msg.textContent='error: '+data.error
            }else{
                msg.textContent='current temprture is '+data.temprture
                msg2.textContent=' location is '+data.location

            }
        })
    })
})

