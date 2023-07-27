const jwt = require('jsonwebtoken')
const asyncHandler = require ('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWidth('Bearer')) {
        try {
            //Obtenemos el token del encabezado
            token = req.headers.authorization.split(' ')[1]

            //Verificar el token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //obtener los dtos del usuario con el id del payload del token
            req.user = await User.findById(decoded.id).select('-password')
            
            next()

        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Acceso no Autorizado')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Acceso no Autorizado, no se proporciono ningun token')
    }
})



module.exports = { protect }