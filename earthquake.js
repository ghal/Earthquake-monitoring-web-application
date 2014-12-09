var http = require('http');
var fs = require('fs');
var url = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
var eqResponse;
var requests = 0;
getData();

setInterval(getData, 60000); //refresh data every 60s

//get external json file
function getData() {
    http.get(url, function(res) {

        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            eqResponse = JSON.parse(body);
            writeToFile(JSON.stringify(eqResponse));
            requests++;
            console.log("server req: " + requests);


        });
    }).on('error', function(e) {
        console.log("Got error: ", e);
    });
}

//WRITE TO FILE
function writeToFile(eqResponse) {
    fs.unlink('eqData.json', function(notExist) {
        if (notExist) {
            console.log("Deleting file if exists...");
        }
    });

    //create and write file asynchronously

    fs.appendFile('eqData.json', eqResponse, function(err) {
        if (err) throw err;

        console.log('The "data to append" was appended to file!');


    });

}



//server
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    console.log("client req");

    res.end(JSON.stringify(eqResponse));


}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');