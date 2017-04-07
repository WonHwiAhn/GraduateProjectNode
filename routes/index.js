var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next){
	var queryData = url.parse(req.url, true).query;
	var mysql = require('mysql');
	var config = {
		host:'localhost',
		user:'ahn',
		password:'bible1234',
		database:'timecapsule'
	}

	var connection = mysql.createConnection(config);

	connection.connect();

	connection.query("SELECT * FROM user where id='"+queryData.id+"' and password='" + queryData.password + "'", function(err, rows, fields){
		if(!err){
			if(rows.length > 0){
				var error = {msg:'Thanks'}
				res.send(error);
			}else{
				var error = {msg:'user is not vaild'}
				res.send(error);
			}
		}else{
			var error = {msg:'error cannot execute query'}
			res.send(error);
		}
	});
	connection.end();
});
module.exports = router;