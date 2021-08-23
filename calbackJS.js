const myfunction= (i_am_boolean,callback)=>{
    setTimeout(()=>{
        if(i_am_boolean){
            callback("I am done waiting 3 secs")
        }
    },3000)
}

myfunction(true,(str)=>{
    console.log(str)
})