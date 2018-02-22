var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects["viewAlt"] = false;
	response.render('index', projects);
};
exports.viewAlt = function(request, response){
	projects["viewAlt"]=true;
	console.log("rendering viewalt");
  	response.render('index', projects);
};