const request=require('request')

const getwearher= (lat,lad,callback) =>{
    const url="http://api.weatherstack.com/current?access_key=15cfd4dc7e5a17202016dce9032637f8&query="+lat+","+lad+"#"
    request({url:url,json:true },(error,response)=>{
    if(error){
        callback('error while connecting to weather server')
    }else if(response.body.error)
    {
        callback('location not find')
    }else{
   callback(undefined,{
       tep:response.body.current.temperature,
       location:response.body.location.timezone_id
   })}
})}

module.exports=getwearher

    
