const { json } = require("express")
const producto = require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require


//Ver la lista de Productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}


//Ver un Producto por ID
exports.getProductById = async(req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
       
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras informacion sobre tu producto",
        product
    })
}

//Update un producto
exports.updateProduct = async(req,res,next)=>{
    let product= await producto.findById(req.params.id)//Variable tipo modificable
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
    }
    //Si el objeto si existe, entonces si ejeccuto la actualización
    product = await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,//variable tipo modificable
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message:"Producto actualizo correctamente",
        product
    })
}

//Eiminar un producto
exports.deleteProduct = async(req,res,next)=>{
    const product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}
//Hablemos de FECHT
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
verProductos();
//Ver por id
function verProductosPorId(id){
    fetch('http://localhost:4000/api/productos/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
