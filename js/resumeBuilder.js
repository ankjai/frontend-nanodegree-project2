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

var project = {
    "name:": "some name"
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
function displayWork() {
    var job;
    for (job in work.jobs) {
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