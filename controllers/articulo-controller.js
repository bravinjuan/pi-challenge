const ErrorResponse = require('../utils/ErrorResponse')
const yup = require('yup');

const newArticulo = yup.object().shape({
    id: yup.number().integer(),
    fecha: yup.date(),
    precio: yup.number(),
    stock: yup.number().integer()
}).noUnknown(true)

class ArticuloController {
    constructor({ ArticuloRepository }) {
        this._articuloRepository = ArticuloRepository;
    }

    async getArticulos(){
        return await this._articuloRepository.getArticulos();
    }

    createArticulo(req, res, next) {
        newArticulo.isValid(req.body)
            .then((isValid) => {
                if (isValid == true) {
                    console.log(req.body)
                    this._articuloRepository.createArticulo(req.body)
                        .then(() => res.redirect('/'))
                        .catch(error => next(error));
                } else {
                    next(new ErrorResponse("Esquema invalido", 400));
                }
            })
            .catch(error => next(error));
    }

    deleteArticulo(req, res, next) {
        this._articuloRepository.deleteArticulo(req.params.id)
            .then(() => res.redirect('/articulos'))
            .catch(error => next(error));
    }
}

module.exports = ArticuloController;