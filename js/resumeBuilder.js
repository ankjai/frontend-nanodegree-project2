var bio = {
	"name": "Ankit Jaiswal",
	"role": "Full Stack Developer",
	"contacts": {
		"mobile": "408-382-9971",
		"email": "ankit.jaiswal@hotmail.com",
		"gitHub": "ankjai",
		"location": "San Jose"
	},
	"pictureUrl": "images/fry.jpg",
	"welcomeMsg": "Hello",
	"skills": [
	"Developer",
	"SomeSkill"
	]
};

var work = {
	"jobs": [
	{
		"employer": "AppDirect",
		"title":"Sr. Automation Engg.",
		"dates":"4th August, 2014",
		"location":"San Francisco",
		"description:":"some description"
	},
	{
		"employer": "EMC Corp",
		"title":"Sr. Automation Engg.",
		"dates":"4th August, 2014",
		"location":"San Francisco",
		"description:":"some description"
	}
	]
};

var project = {
	"name:":"some name"
};

var education = {
	"school":"San Jose State University",
	"gradDate":"Dec 2007"
};

// #header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

//using prepend instead of append
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
// $("#header").prepend(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills)
	};
};


// #topContacts
var contact = "Contact";
var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);

var data = "Data";
var formattedData = formattedContact.replace("%data%", data);
$("#topContacts").append(formattedData);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
$("#topContacts").append(formattedGitHub);


// #workExperience
var job;
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
};
