var fs = require('fs');

//return files from a directory in a array
module.exports = {
    returnFiles: function(dir){ 
        let arr = new Array();
        fs.readdirSync(dir).forEach(element => {
            console.log(element.toString());
            arr.push(element);
        });
        return arr;
    }
    };