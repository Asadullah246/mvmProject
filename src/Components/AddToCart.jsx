



const AddToCart=( product, storageName)=>{
 
    let previousCart=JSON.parse(localStorage.getItem(storageName))
    if(previousCart){
        const exist=previousCart.find(a=>a.id==product.id)
        if(! exist){
            previousCart.push(product)
            localStorage.setItem(storageName, JSON.stringify(previousCart))

        }
    }
    else{
        let newData=[]
        newData.push(product)
        localStorage.setItem(storageName, JSON.stringify(newData))
    }
    

    
   
}

export default AddToCart;