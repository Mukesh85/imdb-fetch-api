const imdb = require('imdb-api');
var express = require('express');
var app = express();

const API_KEY = '18d7e8fe';
const PORT = 3000;

app.use(express.static('public'));

app.get('/get-movies',(req,res)=>{
	
	if(req.query.query){
		imdb.get(req.query.query,{'apiKey':API_KEY}).then((thing) => {
			res.send(thing);
		}, (err)=>{
			res.send(err);
		})
	}
	else{
		res.send({'message':"invalid request"});
	}
})

app.listen(PORT,()=>{
	console.log('server listening on 3000');
})

