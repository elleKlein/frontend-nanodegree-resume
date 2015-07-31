var name = "Rachel Klein";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Design & Development";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var skills = ["HTML5","CSS","Photoshop","JavaScript"];

var bio = {
	"name": name,
	"role": role,
	"skills": skills,
	"contacts": {
		"mobile": "801-597-6276",
		"email": "rachmklein@gmail.com",
		"githib": "elleKlein",
		"location": "San Francisco",
	},
	"bioPic": "images/moi.jpg",
	"welcome message": "Hi there! Thank you for stopping by!"
}

$("#main").append(bio.contacts.mobile);