// const { products, categories } = require("../db"); cause we used context
exports.Query= {
    products:(parent,{filter},{products})=>{
        let filterProducts=products;

        if(filter){
            if(filter.onSale===true){
                filterProducts = filterProducts.filter(product=>{
                    return product.onSale;
                });
            }
        }
        return filterProducts;
    },
    product:(parent,{id},{products})=>{
    //    console.log(args)
    return products.find((product)=>product.id==id);
    },
    categories:(parent,args,{categories})=>{
        return categories
    },
    category:(parent,{id},{categories})=>{
      
        return categories.find((category)=> category.id===id);

    }
};