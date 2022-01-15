const { QueryTypes } = require('sequelize');

class VentaRepository{
    constructor({ db }) {
        this._db = db;
    }
  
    getVentas() {  
        const consulta = `SELECT * FROM Ventas;`;
        return this._db.sequelize.query(consulta, {
            nest: true,
            type: QueryTypes.SELECT
        });
    }  
}

module.exports = VentaRepository;