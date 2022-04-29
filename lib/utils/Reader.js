const fs = require("fs");

class Reader {
    static readJsonFile(filepath) {
        try {
            const rawdata = fs.readFileSync(filepath);
            return JSON.parse(rawdata); 
        } catch (err){
            if (err.code == "ENOENT"){
                return "No se encontró el archivo";
            }
        }
    }
}

module.exports = Reader;
