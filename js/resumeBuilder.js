var bio = {
	"name": "Rachel Klein",
	"role": "Web Design & Development",
	"contacts": {
		"mobile": "801-597-6276",
		"email": "rachmklein@gmail.com",
		"github": "elleKlein",
		"location": "SF Bay Area",
	},
	"skills": ["Adobe Creative Suite","HTML5","CSS","JavaScript","SEO","Social Media"],
	"bioPic": "images/moi.jpg",
	"welcome": "I want to build cool websites when I grow up!"
};

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

		var formattedContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedContacts);

		var formattedContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedContacts);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedbioPic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedWelcome);

	var formattedskillsStart = HTMLskillsStart;
	$("#header").append(formattedskillsStart);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
		$("#header").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
		$("#header").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
		$("#header").append(formattedSkills);

};

bio.display();

var work = {
	"jobs": [
		{
			"employer": "VitaTrade LLC",
			"position": "Graphic Designer",
			"location": "Salt Lake City",
			"dates": "July 2013 - April 2015",
			"description": "Worked with in-house web development team. Responsible for new product branding, marketing and e-commerce website design. Create responsive websites, marketing emails and payment processing forms. Update and debug live websites."
		},
		{
			"employer": "3Form",
			"position": "Cutomer Technical Support",
			"location": "Salt Lake City",
			"dates": "March 2012- June 2013",
			"description": "Provide clients with technical support on architectural products and engineering solutions. Create estimates and resolve issues for architects, designers, and contractors using structural engineering software. Update and maintain client database on website and within the company directory."
		}
	]
}

work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		console.log(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
		console.log(formattedDesc);

	}

};

work.display();

var projects = {
	"projects": [
		{
			"title": "Adirondack Lifestyle",
			"dates": "September 2015 - current",
			"description": "Webmaster",
			"images": ["images/adklife1.png","images/adklife2.png"],
		},
		{
			"title": "Personal Website",
			"dates": "August 2015 - current",
			"description": "Design & Management",
			"images": ["images/rachmklein1.png","images/rachmklein2.png","images/rachmklein3.png"],
		},
	]
}

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDesc);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImg);
			}
		}
	}

};

projects.display();

var education = {
	"schools": [
		{
			"name": "Salt Lake Community College",
			"location": "Salt Lake City, UT",
			"degree": "", //none
			"major": "Art History",
			"dates": "2011-2013"
		},
		{
			"name": "AcademyX",
			"location": "San Francisco, CA",
			"degree": "", //none
			"major": "JavaScript for Programmers",
			"dates": "September 2015"
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"title": "Front End Web Development",
			"date": "2016 Nanodegree",
			"url": "www.udacity.com"
		}
	]
}

education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",  education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedNameDegree = formattedName+formattedDegree;
		$(".education-entry:last").append(formattedNameDegree); //but I get how you wanted this done, so there it is.

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for (onlineCourse in education.onlineCourses) {

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].name);
		var formattedOnlineTitleName= formattedOnlineTitle+formattedOnlineName;
		$(".education-entry:last").append(formattedOnlineTitleName);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedOnlineDate);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

education.display();

$("#mapDiv").append(googleMap);

