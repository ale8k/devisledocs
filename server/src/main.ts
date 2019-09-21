/**
 * May implement OvernightJS for route decorators... But this needs discussion.
 */
import * as express from "express";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as mongoClient from "mongoose";
import * as tutorials from "./routes/tutorials";

class Server {
    // fix these types
    private _app: any;
    private _mongoose: any;

    constructor() {
        this._app = express();
        this._app.use(cors());
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));
        this._app.use(cookieParser());
        this._app.use(expressSession({ secret: "test" }));

        this._app.use("/tutorials", tutorials);

        this._mongoose = mongoClient;
        this._mongoose.connect("mongodb://localhost/devisledocs");

        console.log("Starting server on port 5000");
        this._app.listen(5000);
    }
}

const x = new Server();


// Importing Routes
// const tutorials = require("./routes/tutorials");
// const users = require("./routes/users");


// app.use(cookieParser());
// app.use(session({secret: "Your secret key"}));

// app.use("/tutorials", tutorials);
// app.use("/users", users);

// app.listen(5000);

