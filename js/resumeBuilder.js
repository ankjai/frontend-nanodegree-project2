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
}

var work = {
	"employer":"AppDirect",
	"title":"Sr. Automation Engg.",
	"dates":"4th August, 2014",
	"location":"San Francisco",
	"description:":"some description"
}

var project = {
	"name:":"some name"
}

var education = {
	"school":"San Jose State University",
	"gradDate":"Dec 2007"
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills)
	};
};
