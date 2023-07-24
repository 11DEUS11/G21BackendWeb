const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
    },
    texto: {
        typeof: String,
        /* required: [true, 'Por favor teclea una descripcion a la tarea'] */
    }
},{

    timestamps: true 
})


module.exports = mongoose.model('Tarea', tareaSchema)