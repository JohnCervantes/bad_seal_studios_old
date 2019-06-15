const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./app');

//make sure that the port is always valid
const normalizedPort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        //named pipe 
        return val;
    }
    if (port >= 0) {
        //port number
        return port;
    }
    return false;
};

//check which type of error occured and logs it
const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACESS":
            console.error(bind + " require elevated privileges");
            process.exit(1);
            break;

        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;

        default:
            throw error;
    }
}

//listens to the requests
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("listening on " + bind);
}

const port = normalizedPort(process.env.PORT || "4200");
app.set('port', port);


const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);