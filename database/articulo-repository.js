const { QueryTypes } = require('sequelize');

class ArticuloRepository{
    constructor({ db }) {
        this._db = db;
    }
  
    getArticulos() {  
        const consulta = `SELECT id,nombre,stock FROM Articulos;`;
        return this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });
    }  

    createArticulo(articulo){
        const consulta = `INSERT INTO Articulos(id, nombre, precio, stock) VALUES (${articulo.id}, '${articulo.nombre}',${articulo.precio}, ${articulo.stock});`;
        return this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.INSERT
        });
    }

    deleteArticulo(id){
        const consulta = `DELETE FROM Articulos WHERE id = ${id}`;
        return this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.DELETE
        });
    }
}

module.exports = ArticuloRepository;