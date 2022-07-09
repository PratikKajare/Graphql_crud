exports.Category={
    products:({id:  categoryId},{filter},{products})=>{
        // const categoryId=parent.id; or we mentioned in parent
        const categoryProducts= products.filter((product)=>product.categoryId===categoryId);
        let filterCategoryProducts=categoryProducts ;

        if(filter){
            if(filter.onSale===true){
                filterCategoryProducts = filterCategoryProducts.filter((product)=>{
                    return product.onSale;
                });
            }
        }
        return filterCategoryProducts;
    }
  };