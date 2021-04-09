const express = require('express')
const routes = express.Router();

const ProfileController = require('./controllers/ProfileController')
const RowController = require('./controllers/RowController')
const DashboarController = require('./controllers/DashboarController')
 
 
routes.post("/inicial", DashboarController.search)
routes.get("/inicial", DashboarController.index)

routes.get("/Row",RowController.create)
routes.post("/Row", RowController.save)

routes.get("/Row/:id", RowController.show)
routes.post("/Row/:id", RowController.update)
//
routes.get("/Row/delete/:id", RowController.delete)

routes.post("/profile", ProfileController.update)
routes.get("/", RowController.coloca)



module.exports = routes;