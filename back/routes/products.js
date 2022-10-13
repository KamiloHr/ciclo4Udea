const express = require("express")
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") // Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct)//Establecemos que ruta queremos ver al Crear Producto
router.route('/producto/:id').get(getProductById)//Establecemos que ruta queremos ver al Ver producto por Id
router.route('/producto/:id').put(updateProduct)//Establecemos que ruta queremos para actualizar producto
router.route('/producto/:id').delete(deleteProduct)//Establecemos que ruta queremos para eliminar producto


module.exports =router;