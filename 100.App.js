// 
// REST SERVER
//--------------------------------------------- 
// Entorno
require('dotenv').config();
// 


const CL_SERVER = require("./models/101-mod-Server");

const Server = new CL_SERVER();

Server.mtServ_Listen();