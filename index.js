const container = require("./container");

const application = container.resolve("app");
const dbConnector = container.resolve("DbConnector");

application
  .start()
  .then(dbConnector.startConnection())
  .catch(err => {
    console.log(err);
    process.exit();
    }); 