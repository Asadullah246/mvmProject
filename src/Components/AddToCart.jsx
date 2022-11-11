



const AddToCart=( id, storageName)=>{
 
    let previousCart=JSON.parse(localStorage.getItem(storageName))
    if(previousCart){
        const exist=previousCart.find(a=>a==id)
        if(! exist){
            previousCart.push(id)
            localStorage.setItem(storageName, JSON.stringify(previousCart))

        }
    }
    else{
        let newData=[]
        newData.push(id)
        localStorage.setItem(storageName, JSON.stringify(newData))
    }
    

    
   
}

export default AddToCart;