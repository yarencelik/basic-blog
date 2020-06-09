var mysql = require('mysql');

// http://nodejs.org/docs/v0.6.5/api/fs.html#fs.writeFile
var fs = require('fs');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "blogum"
});

connection.connect();
// Veritabanındaki verileri json dosyasına dönüştürme.
connection.query('SELECT * FROM post ', function(err, results, fields) {
    if (err) throw err;

    fs.writeFile('table.json', JSON.stringify(results), function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

    connection.end();
});
//Burada dönüştürdüğüm json verisini getirmek için index.html de bu dosyanın online versiyonunu(https://raw.githubusercontent.com/yarencelik/basic-blog/master/table.json) kullandım.