var Seneca  = require("seneca");
var seneca = Seneca();

var config = {
  routes:{
    prefix : "/my-api",
    pin: "role:api,cmd:*",
    map:{
      bazinga: {    // localhost:3000/my-api/bazinga
        GET: true
      }
    }
  }
};

seneca.add("role:api,cmd:bazinga", function bazinga(args, done){
  done(null, {
      bar: "Bazinga!"
  });
});


var Express = require("express");
var Web     = require("seneca-web");
var server = Express();

// use plugin: seneca-web;
seneca.use(Web, {
  adapter: require('seneca-web-adapter-express'),
  context: server
});

seneca.act("role:web", config);

// seneca.act("role:web", {
//   use:{
//     prefix : "/my-api",
//     pin: "role:api,cmd:*",
//     map:{
//       bazinga: {    // localhost:3000/my-api/bazinga
//         GET: true
//       }
//     }
//   }
// });

server.listen(3000);


