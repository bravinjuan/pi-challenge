const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("./config/config");

const Routes = require("./routes/router");

//const StudentRepository = require("./database/student-repository");
const VentaController = require('./controllers/venta-controller');
const ArticuloController = require('./controllers/articulo-controller');

const VentaRepository = require('./database/venta-repository');
const ArticuloRepository = require('./database/articulo-repository');


const db = require("./database/db");
const DbConnector = require("./database/db-connector");
const req = require("express/lib/request");

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    db: asFunction(db),
    DbConnector: asClass(DbConnector).singleton(),
    config: asValue(config),
    ArticuloController: asClass(ArticuloController).singleton(),
    VentaController: asClass(VentaController).singleton(),
    ArticuloRepository: asClass(ArticuloRepository).singleton(),
    VentaRepository: asClass(VentaRepository).singleton()
});

module.exports = container;