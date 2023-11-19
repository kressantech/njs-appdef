const fs = require("fs")

function exists(filename)
{
	//console.log(filename)
	try{s =fs.statSync(filename);
	//console.log(s)
	if (s.isFile()) {return true}
	}
	catch (err){
		//console.log(err)
		return false;}
return false
}

module.exports={exists}