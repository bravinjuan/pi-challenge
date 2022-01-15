class VentaController {
    constructor({ VentaRepository }) {
        this._ventaRepository = VentaRepository;
    }

    async getVentas(){
        return await this._ventaRepository.getVentas();
    }
}

module.exports = VentaController;