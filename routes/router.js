const { Router } = require("express");

module.exports = function ({ VentaController, ArticuloController }) {
  const router = Router();

  router.get('/', (req, res, next) => {
    const results = VentaController.getVentas()
      .then((results) => {
        res.render('index', {results: results});
      })
      .catch(error => next(error));
  })

  router.get('/ventas', (req, res, next) => {
    const results = VentaController.getVentas()
      .then((results) => {
        res.render('ventas', {results: results});
      })
      .catch(error => next(error));
  })
  
  router.get('/create', (req, res) => {
    res.render('create');
  });

  router.get('/articulos', (req, res, next) => {
    const results = ArticuloController.getArticulos()
      .then((results) => {
        res.render('articulos', {results: results});
      })
      .catch(error => next(error));
  })

  router.get('/delete/:id', ArticuloController.deleteArticulo.bind(ArticuloController));

  router.post('/articulos', ArticuloController.createArticulo.bind(ArticuloController));

  return router;
}