var bio = {
	"name": "Ankit Jaiswal",
	"role": "Full Stack Developer",
	"contacts": {
		"mobile": "408-382-9971",
		"email": "ankit.jaiswal@hotmail.com",
		"gitHub": "ankjai",
		"twitter": "ank_jai",
		"location": "San Jose, CA"
	},
	"pictureUrl": "images/fry.jpg",
	"welcomeMsg": "Suspendisse a pulvinar turpis. Curabitur nec laoreet magna. Donec volutpat dolor non tempor accumsan. Quisque vel risus imperdiet, suscipit eros hendrerit, condimentum est. Nulla facilisi. Nulla at cursus urna, at viverra diam. Curabitur pharetra tellus ac vestibulum volutpat. Morbi ac sem lacus. Mauris eros dui, consequat non mattis ut, eleifend.",
	"skills": [
	"Developer",
	"SomeSkill"
	]
};

var work = {
	"jobs": [{
		"employer": "AppDirect",
		"title": "Sr. Automation Engg.",
		"dates": "4th August, 2014",
		"location": "San Francisco",
		"description": "For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons."
	}, {
		"employer": "EMC Corp",
		"title": "Sr. Automation Engg.",
		"dates": "4th August, 2014",
		"location": "San Francisco",
		"description": "\“For a moment, nothing happened. Then, after a second or so, nothing continued to happen.\” "
	}]
};

var allProjects = {
	"project": [
	{
		"title": "Project 1",
		"date": "April 2015",
		"description": "some description of project 1.",
		"images": [
		"images/fry.jpg",
		"images/fry.jpg"
		]
	},
	{
		"title": "Project 2",
		"date": "May 2015",
		"description": "some description of project 2.",
		"images": [
		"images/fry.jpg"
		]
	}
	]
};

var education = {
	"school": "San Jose State University",
	"gradDate": "Dec 2007"
};

// #header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

//using prepend instead of append
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills)
	};
};


// #topContacts and #footerContacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
$("#topContacts").append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);


// #workExperience
function displayWork() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        // debug statements
        // console.log("job:" + job);
        // console.log("formattedEmployerTitle:" + formattedEmployerTitle);
        // console.log("formattedDates:" + formattedDates);
        // console.log("formattedLocation:" + formattedLocation);
        // console.log("formattedDescription:" + formattedDescription);

        // :last is needed as it will append to all existing
        // .work-entry repeating values.
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    };
}

displayWork();

// collecting click locations
$(document).click(
	function(loc){
		// console.log(loc);
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y);
	}
	);

// function to internationalize the name
function inName (fullName) {
	var splitNameArray = fullName.trim().split(" ");
	splitNameArray[0] = splitNameArray[0].slice(0,1).toUpperCase() +
	splitNameArray[0].slice(1).toLowerCase();
	splitNameArray[1] = splitNameArray[1].toUpperCase();
	return splitNameArray[0] + " " + splitNameArray[1];
}

// add internationalizeButton
$("#main").append(internationalizeButton);

// display allProjects
allProjects.display = function(){
	for(var projectNo in allProjects.project){
		console.log("Project Section");
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", allProjects.project[projectNo].title);
		var formattedDates = HTMLprojectDates.replace("%data%", allProjects.project[projectNo].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%", allProjects.project[projectNo].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (allProjects.project[projectNo].images.length > 0) {
			console.log("images length:"+allProjects.project[projectNo].images.length);
			for (var imageNo in allProjects.project[projectNo].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", allProjects.project[projectNo].images[imageNo]);
				$(".project-entry:last").append(formattedImage);
			}
		};
	}
};

allProjects.display();

// add map
$("#mapDiv").append(googleMap);












