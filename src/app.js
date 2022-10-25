const request=require('request')
const weather=require('./utils/weather.js')
const map=require('./utils/map')

const path=require('path')
const express=require('express')
const hbs=require('hbs')




const app=express()
const port=process.env.PORT ||3000
app.use(express.static(path.join(__dirname,'../puplic')))

 //set confgration
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templet/views'))
hbs.registerPartials(path.join(__dirname,'../templet/partials'))

app.get('',(req,res)=>{
    res.render('index',{
        title :'Weather Site' ,
        name:'created by abdelkhalek'

    })
}
)
app.get('/products',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error :' require address' 
          
        }) 
    }
   
    map(req.query.address,(error,data)=>{
        if(error){
            return res.send({
                error: error
            })
        }else{
            weather(data.lat,data.lad,(error,wdata)=>{
                if(error){
                    return res.send({
                        error: error
                    })
                }else{
                    return res.send({
                        temprture: wdata.tep,
                        location:data.adress
                    })
                   
                }
            })
        }
    })
   
}
)
app.get('/help',(req,res)=>{
    res.render('help',{
        title :'help page' ,
        name:'created by abdelkhalek',
        description:'this web site help other to khow current weather in any place in earth'
        

    })
}
)

app.get('/about',(req,res)=>{
    res.render('about',{
        title :'About Me' ,
        name:'created by abdelkhalek',
        description:'my name is Abdelkhalek Ashraf  a web developer  '
    })
}
)

app.get('/weather',(req,res)=>{
    res.send('weather page')
}
)

app.listen(port,()=>{
    console.log('server working')
})