var bio = {
	"name":"Ankit Jaiswal",
	"role":"Full Stack Developer",
	"contacts":{
		"mobile":"408-382-9971",
		"email":"ankit.jaiswal@hotmail.com",
		"gitHub":"ankjai",
		"location":"San Jose"
	},
	"pictureUrl":"images/me.jpg",
	"welcomeMsg":"Hello",
	"skills":["Developer","SomeSkill"]
};

var work = {
	"current":"Sr. Automation Engg.",
	"employer":"AppDirect"
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

var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

//using prepend instead of append
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

// NOT WORKING NEED TO DEBUG
$("#workExperience").prepend("some workExperience");