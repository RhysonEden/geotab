const apiRouter = require("express");
const geoTab = apiRouter.Router();
require("dotenv").config();
const GeotabApi = require("mg-api-js");

let databaseInsert = process.env.databaseInsert;
let userNameInsert = process.env.userNameInsert;
let passwordInsert = process.env.passwordInsert;
let pathNameInsert = "https://my.geotab.com";
let type = "Device";
let results = 5000;

const authentication = {
  credentials: {
    database: databaseInsert,
    userName: userNameInsert,
    password: passwordInsert,
  },
  path: pathNameInsert,
};

geoTab.get("/", async (req, res) => {
  try {
    console.log("test");
    let databaseInsert = process.env.databaseInsert;
    let userNameInsert = process.env.userNameInsert;
    let passwordInsert = process.env.passwordInsert;
    let pathNameInsert = "https://my.geotab.com";
    let type = "Device";
    let results = 5000;
    const authentication = {
      credentials: {
        database: databaseInsert,
        userName: userNameInsert,
        password: passwordInsert,
      },
      path: pathNameInsert,
    };

    const api = new GeotabApi(authentication);

    let myCall = await api.call("Get", {
      typeName: type,
      resultsLimit: results,
    });
    res.send(myCall);
  } catch (err) {
    throw err;
  }
});

geoTab.get("/:id", async (req, res) => {
  try {
    const deviceId = req.params.id;
    console.log("test", req.params.id);
    let databaseInsert = process.env.databaseInsert;
    let userNameInsert = process.env.userNameInsert;
    let passwordInsert = process.env.passwordInsert;
    let pathNameInsert = "https://my.geotab.com";
    const authentication = {
      credentials: {
        database: databaseInsert,
        userName: userNameInsert,
        password: passwordInsert,
      },
      path: pathNameInsert,
    };

    const api = new GeotabApi(authentication);

    console.log("running", deviceId);

    let results = await api.call("Get", {
      typeName: "DeviceStatusInfo",
      search: {
        deviceSearch: { id: deviceId },
      },
    });

    console.log(results);
    res.send(results);
  } catch (err) {
    throw err;
  }
});

geoTab.get("/:id", async (req, res) => {
  try {
    const deviceId = req.params.id;
    console.log("test", req.params.id);
    let databaseInsert = process.env.databaseInsert;
    let userNameInsert = process.env.userNameInsert;
    let passwordInsert = process.env.passwordInsert;
    let pathNameInsert = "https://my.geotab.com";
    const authentication = {
      credentials: {
        database: databaseInsert,
        userName: userNameInsert,
        password: passwordInsert,
      },
      path: pathNameInsert,
    };

    const api = new GeotabApi(authentication);
  } catch (err) {
    throw err;
  }
});
module.exports = geoTab;
