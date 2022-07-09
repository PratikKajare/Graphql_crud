// const { products, categories } = require("../db"); cause we used context
exports.Query= {
    products:(parent,{filter},{db})=>{
        let filterProducts=db.products;

        if(filter){
            if(filter.onSale===true){
                filterProducts = filterProducts.filter(product=>{
                    return product.onSale;
                });
            }
        }
        return filterProducts;
    },
    product:(parent,{id},{db})=>{
    //    console.log(args)
    return db.products.find((product)=>product.id==id);
    },
    categories:(parent,args,{db})=>{
        return db.categories
    },
    category:(parent,{id},{db})=>{
      
        return db.categories.find((category)=> category.id===id);

    }
};