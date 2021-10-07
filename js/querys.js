const sql = require('mysql')    
var text = fs.readFileSync("./query/consultar_usuarios.sql", "utf-8");

sql.connect(config, function (err) {

    if (err) console.log(err);
    const request = new sql.Request()
    request.batch(text, (err, result) => {
        return res.status(200).json({
            result: (err)? err: result
        });
    })

}); 