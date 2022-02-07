let express=require("express");
let app=express();
// let bodyParser=require("body-parser");
// app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const CONSTANTS=require("./shared/constants");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');

let libraryRouter=require("./router/booksRouter");
let dbHandler=require("./database/db");

app.use("/",libraryRouter);
// app.use("/insertBooks",libraryRouter)
// app.get('/',function(req,res){
//     res.send("hello world");
// })
//app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Swagger set up
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Library Project",
            version: "1.0.0",
            description:
                "sample project to learn mongodb"
        },
        contact: {
            name: 'WyseGuyz Team',
            email: 'wyseguyz@adluge.com',
            url: 'https://www.adluge.com/'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
        servers: [
            {
                url:"http://localhost:5000/",
                description: 'Local server'
            }
        ]
    },
    apis: ['./router/booksRouter.js']
}

const swaggerSpecs = swaggerJsdoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

let server = app.listen(CONSTANTS.PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
  });