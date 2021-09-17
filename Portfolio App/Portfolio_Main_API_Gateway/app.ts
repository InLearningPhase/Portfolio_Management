import { RequestModel, RequestModelQuery } from "./submodules/Portfolio-Api-Gateway-Common/RequestModel";
import { SNS_SQS } from "./submodules/Portfolio-Main-Api-Gateway-RabbiMQConfig/SNS_SQS";

const express = require("express");
const https = require('https');
const fs2 = require('fs');
const options = {
  key: fs2.readFileSync('private.key'),
  cert: fs2.readFileSync('certificate.crt'),
  ca: fs2.readFileSync('ca_bundle.crt')
};
const cors = require("cors");
const socketIo = require("socket.io");
import { Dictionary } from "dictionaryjs";
import axios from "axios";
let environment = process.env.NODE_ENV;
const port = 4000;
const mainBackendURL = 'http://localhost:4002/'
const platformBackendURL = 'http://localhost:3000/'
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options("*", cors());
app.use(cors());
const server = https.createServer(options, app);
var sockets = [];
let activeConnectionDict = new Dictionary();
let socketAndDeviceDict = new Dictionary();
let configFileName = `config-${environment}`;

//* Loads config file from enviornment */

console.log(configFileName);
if (!environment) {
  console.log("no environment specified using default i.e local environment");
  configFileName = "config-local";
}

var sns_sqs = SNS_SQS.getInstance();
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "HEAD", "OPTIONS", "PUT"],
    allowedHeaders: ["my-custom-header"],
    credentials: false,
  },
});

//********************************** Socket Connections ***********************************//

io.on("connection", (socket) => {
  console.log("client connected with id: ", socket.id);
  // console.log("number of client connected : "+ String(activeConnectionDict.length));
  sockets.push(socket);
  var i = 0;
  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : " + String(activeConnectionDict.length));
  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : " + String(activeConnectionDict.length));
  // console.log(activeConnectionDict)
  socket.emit("socketIdFromServer", { socket_id: socket.id });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    // activeConnectionDict.remove(socket.id);
    activeConnectionDict.remove(socket.id);
    console.log("number of client connected : " + String(activeConnectionDict.length));
    if (socketAndDeviceDict.has(socket.id) === true) {
      activeConnectionDict.remove(socket.id);
      console.log("number of client connected : " + String(activeConnectionDict.length));
    }
    socketAndDeviceDict.remove(socket.id);
    socket.disconnect(true);
  });
});

const pool_region = "ap-south-1";
const poolData = {
   UserPoolId: "ap-south-1_XjGoUXy5G",
   ClientId: "48ct8hqa1tth015i8diobdleu2",
 };

var authority = ""; var userInfoEndPoint = ""; var emailid = "";
var middleware = {

configurationMiddleware: async (req:any, res:any, next)=>{
  let referer = req.headers["referer"];

  console.log("configurationMiddleware Endpoint is:" + `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/openid-configuration`);
  let getResult = await axios.get(
    `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/openid-configuration`,
    {
      headers: {
        Referer: referer,
      },
    }
  );


  

var data = getResult.data;

authority = data["issuer"];


  next();
},


openConfigurationMiddleware: async(req, res, next)=> {

  console.log("OpenConfigurationMiddleware Endpoint is: " + `${authority}/.well-known/openid-configuration`);
  let getResult = await axios.get(
    `${authority}/.well-known/openid-configuration`

  );
  var data = getResult.data;
  userInfoEndPoint = data["userinfo_endpoint"];




  next();
},


authenticationMiddleware: async function (req, res, next) {
  let authorization = req.headers["authorization"];

  console.log("AuthenticationMiddleware Endpoint is: " + `https://portfolio-platform.auth.ap-south-1.amazoncognito.com/oauth2/userInfo`);
  try {

    let getResult = await axios.get(
      `https://portfolio-platform.auth.ap-south-1.amazoncognito.com/oauth2/userInfo`,
      {
        headers: {
          Authorization:"Bearer "+authorization
        },
      }
    );
    var data = getResult.data;
    emailid = data["email"];

    console.log(" ======>>>>>>EMAIL DATTATATA"+ JSON.stringify(data))


    
   var request = require('request');
   const jwkToPem = require('jwk-to-pem')
   const jwt = require('jsonwebtoken')
   var token = req.headers['authorization']
   var flag=0
   request({
          url : "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_XjGoUXy5G/.well-known/jwks.json",
          json : true
       }, function(error, response, body){
          if (!error && response.statusCode === 200) {
             let pems = {};
              var keys = body['keys'];
              for(var i = 0; i < keys.length; i++) {
                   var key_id = keys[i].kid;
                   var modulus = keys[i].n;
                   var exponent = keys[i].e;
                   var key_type = keys[i].kty;
                   var jwk = { kty: key_type, n: modulus, e: exponent};
                   var pem = jwkToPem(jwk);
                   pems[key_id] = pem;
              }
              var decodedJwt = jwt.decode(token, {complete: true});
            
                   if (!decodedJwt) {
                       console.log("Not a valid JWT token");
                       res.status(401);
                       return res.send("Invalid token1");
                  }
               var kid = decodedJwt.header.kid;
           
                   var pem = pems[kid];
                 
                   if (!pem) {
                       console.log(pem +"=====>>"+ ' Invalid token2');
                       res.status(401);
                       return res.send("Invalid token");              
                   }
               jwt.verify(token, pem, function(err, payload) {
                
                       if(err) {
                           console.log("Invalid Token3.");
                           res.status(401);
                           return res.send("Invalid tokern");
                       } else {
                            console.log("Valid Token.");
                            flag=1
                       }
                  });
          } else {
                console.log("Error! Unable to download JWKs");
                res.status(500);
                return res.send("Error! Unable to download JWKs");
          }


         });

         console.log(getResult.data['email_verified'] + flag) 

setTimeout(()=>{
  if(getResult.data['email_verified'] == "true" && flag==1){
    console.log('CHECKED EMAIL VERIFIED AND VALID')  
    next();
  }
},500)

 
  }
  catch (e) { console.log(e) }
},
}  

//**************************************************** Main Application Routings ********************************************//

  //***************************************** GET Requests ******************************************//

app.get("/main/:route", async (req: any, res: any) => {
  request(mainBackendURL + req.params.route, (error, response, body) => {
    if (error) {
      res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

app.get("/main/:route/:id", async (req: any, res: any) => {
  request(mainBackendURL + req.params.route + "/" + req.params.id, (error, response, body) => {
    if (error) {
      res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

app.get("/main/:route/:route1/:route2", async (req: any, res: any) => {
  request(mainBackendURL + req.params.route + "/" + req.params.route1 + "/" + req.params.route2, (error, response, body) => {
    if (error) {
      res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

app.get("/main/:route/:route1/:route2/:id", async (req: any, res: any) => {
  request(mainBackendURL + req.params.route + "/" + req.params.route1 + "/" + req.params.route2 + "/" + req.params.id, (error, response, body) => {
    if (error) {
      res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

  //********************************************* POST Requests ************************************//

app.post("/main/:servicename/:service", async (req: any, res: any) => {


  let requestBody: RequestModel<any> = req.body;
  let method_name = "POST";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_ADD";
  let id = 5;
  let message = JSON.stringify(requestBody);
  //console.log(message);
  var myres = sns_sqs.publishMessageToTopics(
    service_name, //PRODUCT_SERVICE
    exchangeName, //PRODUCT_ADD
    method_name,
    message,
    id
  );

  res.status(200).send({ message: "request has been taken" });

});

  //********************************************* UPDATE Requests  ******************************************//

app.put("/main/:servicename/:service/:id", async (req, res) => {


  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;

  let method_name = "PUT";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_UPDATE";
  let id = req.params.id;
  let message = JSON.stringify(requestBody);

  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message, id
  );
  res.status(200).send({ message: "request has been taken" });
});

  //**************************************** DELETE Requests *****************************************//

app.delete("/main/:servicename/:service/:id", async (req, res) => {

  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;
  let message = JSON.stringify(requestBody);
  console.log("message: ", message)
  let method_name = "DELETE";
  let id = req.params.id;
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_DELETE";
  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message,
    id
  );
  res.status(200).send({ message: "request has been taken" });
});

//************************************************* Platform Routings ***********************************************//

  //********************************************** GET Requests ***************************************//

app.get("/platform/:route", async (req: any, res: any) => {
  request(platformBackendURL + req.params.route, (error, response, body) => {
    if (error) {
       res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

app.get("/platform/:route/:id", async (req: any, res: any) => {
  request(platformBackendURL + req.params.route + "/" + req.params.id, (error, response, body) => {
    if (error) {
      res.send('An erorr occured')
    }
    else {
      res.send(JSON.parse(body))
    }
  });
})

  //******************************************** POST Requests ****************************************//

app.post("/platform/:servicename/:service", async (req: any, res: any) => {


  let requestBody: RequestModel<any> = req.body;
  let method_name = "POST";
  let authorization = req.headers["authorization"];
requestBody.token = authorization
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_ADD";
  let id = 5;
  let message = JSON.stringify(requestBody);
  console.log(message);
  var myres = sns_sqs.publishPlatformMessageToTopics(
    service_name, //PRODUCT_SERVICE
    exchangeName, //PRODUCT_ADD
    method_name,
    message,
    id
  );

  res.status(200).send({ message: "request has been taken" });

});

  //******************************************** UPDATE Requests *****************************************//

app.put("/platform/:servicename/:service/:id", async (req, res) => {


  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;

  let method_name = "PUT";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_UPDATE";
  let id = req.params.id;
  let message = JSON.stringify(requestBody);

  sns_sqs.publishPlatformMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message, id
  );
  res.status(200).send({ message: "request has been taken" });
});

  //********************************************** DELETE Request ***********************************//

app.delete("/platform/:servicename/:service/:id", async (req, res) => {

  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;
  let message = JSON.stringify(requestBody);
  console.log("message: ", message)
  let method_name = "DELETE";
  let id = req.params.id;
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_DELETE";
  sns_sqs.publishPlatformMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message,
    id
  );
  res.status(200).send({ message: "request has been taken" });
});

//*******************************************************************************************************************/

server.listen(port, () => {
  console.log(process.env.IOT_SERVICE);
  var noOfSocket = 1;
  sns_sqs.listenToServices(noOfSocket, "API_GATEWAY_SERVICE", (result: { message: any; }) => {
    let { message } = result;
    console.log(message);
    //getting the browser socket to hom the response needs to be send
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    // console.log("socket_id response: ", vSocket)
    if (vSocket) {
      console.log("response to client to call call back function", message);
      vSocket.emit("successResponseFromServer", message);
    }
  });
  sns_sqs.listenToServices(noOfSocket, "ERROR_RECEIVER", (result: { message: any; }) => {
    let { message } = result;
    console.log(message);
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    // console.log("socket_id response: ", vSocket)
    if (vSocket) {
      vSocket.emit("errorResponseFromServer", message);
    }
  });
  console.log(`Listening on port ${port}`);
});


