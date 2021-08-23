const myfunction= (i_am_boolean,someName)=>{
    setTimeout(()=>{
        if(i_am_boolean){
            someName("I am done waiting 3 secs",null)
        }else{
            someName("error")
        }
    },3000)
}

myfunction(false,(str,error)=>{
    if(!error){
        console.log(str)
        console.log(error)
    }
    else{
        console.log(str)
        console.log(error)
    }
})

myfunction(true,(str,error)=>{
    if(!error){
        console.log(str)
        console.log(error)
    }
    else{
        console.log(error)
        console.log(str)
        
    }
})