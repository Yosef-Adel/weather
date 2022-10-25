const request=require('request')

const getlocation= (address,callback) =>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYWJkZWxraGFsZWsyIiwiYSI6ImNreXQ3MHV5ZTFhaWIyb3A2dWdzc3MxcjQifQ.6ZZjTMCn_0gjBl8eDT3Xtg#downloadJSON=true"
    request({url:url,json:true },(error,response)=>{
      
    if(error){
        callback('error while connecting to map server',undefined)
    }else if(!response.body.features)
    {
        callback('location not find',undefined)
    }
    else if(response.body.features.length === 0)
    {
        callback('location not find',undefined)
    }else{
   callback(undefined,{
     lat:response.body.features[0].center[1],
     lad:response.body.features[0].center[0],
     adress:response.body.features[0].place_name
   })}
})}

module.exports=getlocation

    