const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
      /*   required: [true, 'Por favor teclea un nombre'] */
        required: true
    },
    email: {
        type: String,
        required: true,
        /* required: [true, 'Por favor teclea un email'] */
        unique: true
    },
    password: {
        type: String,
        /* required: [true, 'Por favor teclea un password'] */
        required: true
    }
},{
    timesStamps: true
})

module.exports = mongoose.model('User', userSchema)