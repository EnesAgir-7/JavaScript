const products = [
    {name:'Samsung S7',price:3000},
    {name:'Samsung S8',price:4000},
    {name:'Samsung S9',price:5000}
];

var ProductController = (function(data){
    
    // private members
    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index>=0){
            collections.splice(index,1);
        }
    }

    const getProducts = function(){
        return collections;
    }

    // public members
    return {
        addProduct,
        removeProduct,
        getProducts
    }

})(products);

console.log(ProductController.getProducts());

var extended=(function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }


    return m;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());
































