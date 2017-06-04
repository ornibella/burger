var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {

        connection.query("Select * from " + tableInput, function(err, result) {

            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    insertOne: function(table, cols, vals, cb) {
        connection.query("Insert into " + table + " (" + cols + ") " + "VALUES (?,?)", vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    updateOne: function(table, id , cb) {
        connection.query("UPDATE " + table + " SET devoured=true WHERE id =" + devourPick, function(err, result) { 
            if (err) {
                throw err;
            }
            cb(result);
        });

    }

}


module.exports = orm;