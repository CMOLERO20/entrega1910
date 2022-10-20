import config from '../config.js'

import mongoose from 'mongoose';

import ContenedorMongoDb from '../contenedores/ContenedorMongoDb.js'

const productoSchema = new mongoose.Schema({
    title: {type: String, require:true, max:100},
    price: {type: String, require:true, max:100},
    thumbnail: {type: String, require:true, max:100}
})

const productosApi = new ContenedorMongoDb('Productos', productoSchema);

export default productosApi 