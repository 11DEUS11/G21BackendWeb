const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        typeof: String,
        /* required: [true, 'Por favor teclea una descripcion a la tarea'] */
    }
},{

    timestamps: true 
})


module.exports = mongoose.model('Tarea', tareaSchema)