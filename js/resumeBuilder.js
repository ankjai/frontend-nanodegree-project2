var bio = {
    "name": "Ankit Jaiswal",
    "role": "Full Stack Developer",
    "contacts": {
        "mobile": "408-382-9971",
        "email": "ankit.jaiswal@hotmail.com",
        "gitHub": "https://github.com/ankjai",
        "linkedin": "https://www.linkedin.com/in/ankitjai",
        "twitter": "@ank_jai",
        "location": "San Jose, CA"
    },
    "pictureUrl": "images/munnu.png",
    "welcomeMsg": "Suspendisse a pulvinar turpis. Curabitur nec laoreet magna. Donec volutpat dolor non tempor accumsan. Quisque vel risus imperdiet, suscipit eros hendrerit, condimentum est. Nulla facilisi. Nulla at cursus urna, at viverra diam. Curabitur pharetra tellus ac vestibulum volutpat. Morbi ac sem lacus. Mauris eros dui, consequat non mattis ut, eleifend.",
    "skills": [{
        "name": "Languages",
        "list": ["Java", "JavaScript", "jQuery", "HTML5", "CSS3"]
    }, {
        "name": "Technology",
        "list": ["JSON", "RESTful Web Service", "HTTP", "AJAX"]
    }, {
        "name": "Cloud Computing Platform",
        "list": ["Cloud Foundry", "Amazon AWS"]
    }, {
        "name": "Database",
        "list": ["Apache Cassandra", "MySQL", "SQL Server", "Oracle"]
    }, {
        "name": "Software",
        "list": ["IntelliJ IDEA", "Sublime Text", "Git"]
    }]
};

bio.displayHeader = function() {
    // #header
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
    $("#header").prepend(formattedBioPic);
}
bio.displayHeader();


bio.displayAboutMe = function() {
    // body...
    // #intro
    $("#intro").append(HTMLintroStart);

    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#bio-entry").append(formattedHeaderName);

    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#bio-entry").append(formattedHeaderRole);
    $("#bio-entry").append(HTMLobjective);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#bio-entry").append(formattedWelcomeMsg);
}
bio.displayAboutMe();


// skills
bio.displaySkills = function() {
    // body...
    for (var skill in bio.skills) {
        var formattedSkillsStart = HTMLskillsStart.replace("%idno%", skill);
        $("#skills").append(formattedSkillsStart);
        var formattedSkillSet = HTMLskillSet.replace("%data%", bio.skills[skill].name);
        formattedSkillSet = formattedSkillSet.replace("%idno%", skill);
        $("#skills-entry-" + skill).append(formattedSkillSet);

        if (bio.skills[skill].list.length > 0) {
            var formattedSkillListStart = HTMLskillListStart.replace("%idno%", skill);
            formattedSkillListStart = formattedSkillListStart.replace("%divulidno%", skill);
            formattedSkillListStart = formattedSkillListStart.replace("%ulidno%", skill);
            $("#skills-entry-" + skill).append(formattedSkillListStart);
            for (var listItem in bio.skills[skill].list) {
                var formattedSkillList = HTMLskillList.replace("%data%", bio.skills[skill].list[listItem]);
                $("#skillList-items-" + skill).append(formattedSkillList);
            }
        }
    }
}
bio.displaySkills();

// footerContacts
bio.displayContacts = function() {
    // body...
    $("#letsConnect").append(HTMLFooterContactsStart);

    // mobile
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    // email
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    // github
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#footerContacts").append(formattedGithub);

    // linkedin
    var formattedLinkedin = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
    $("#footerContacts").append(formattedLinkedin);
}
bio.displayContacts();


var work = {
    "jobs": [{
        "employer": "AppDirect",
        "title": "Sr. Automation Engg.",
        "dates": "August 2014 - Present",
        "location": "San Francisco, CA",
        "description": "Nunc iaculis ipsum vitae venenatis dictum. Sed et diam sollicitudin, commodo justo et, pellentesque sem. Maecenas ut ante orci. Suspendisse potenti. Nam nec purus ut leo pellentesque pharetra ut et neque. Duis faucibus, magna et iaculis fermentum, turpis mi condimentum nisi, ac semper ante libero vitae lorem. Donec eget interdum quam."
    }, {
        "employer": "EMC Corp",
        "title": "QA Engineer 2",
        "dates": "September 2010 - August 2014",
        "location": "Pleasanton, CA",
        "description": "Sed porttitor leo eu viverra gravida. Sed metus tellus, varius non facilisis et, pellentesque id tortor. Phasellus vel magna non ipsum eleifend sodales. Maecenas sed venenatis libero. Aenean lacinia fringilla elit id pellentesque. In pharetra lorem sed nunc tempor molestie. Mauris efficitur, eros vulputate ultrices lacinia, sapien magna tincidunt nisl, dignissim accumsan est sapien quis nibh."
    }]
};

// #workExperience
work.displayWork = function() {
    for (var job in work.jobs) {
        var formattedWorkStart = HTMLworkStart.replace("%idno%", job);
        $("#workExperience").append(formattedWorkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedWorkEmployer = formattedWorkEmployer.replace("%idno%", job);
        $("#work-entry-" + job).append(formattedWorkEmployer);

        var formattedWorkDates = HTMLworkDates.replace("%idno%", job);
        formattedWorkDates = formattedWorkDates.replace("%data%", work.jobs[job].dates)
        $("#work-entry-" + job).append(formattedWorkDates);

        var formattedWorkTitle = HTMLworkTitle.replace("%idno%", job);
        formattedWorkTitle = formattedWorkTitle.replace("%data%", work.jobs[job].title);
        $("#work-entry-" + job).append(formattedWorkTitle);

        var formattedWorkDescriptionStart = HTMLworkDescriptionStart.replace("%idno%", job);
        formattedWorkDescriptionStart = formattedWorkDescriptionStart.replace("%divpidno%", job);
        $("#work-entry-" + job).append(formattedWorkDescriptionStart);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $("#description-entry-p-" + job).append(formattedWorkDescription);
    }
}
work.displayWork();


var allProjects = {
    "projects": [{
        "title": "Project 1",
        "date": "April 2015",
        "description": "Suspendisse tincidunt, risus vitae tincidunt fermentum, magna nisl mollis ipsum, ac tempus massa sem vitae tortor. Morbi quis molestie sapien. Vivamus nec ipsum eget enim aliquet molestie. Duis lectus metus.",
        "images": [
            "images/fry.jpg",
            "images/fry.jpg",
            "images/fry.jpg",
            "images/fry.jpg"
        ]
    }, {
        "title": "Project 2",
        "date": "May 2015",
        "description": "Maecenas laoreet felis a felis feugiat, eget venenatis ante pharetra. Donec pulvinar sodales risus ac lacinia. Aenean feugiat, arcu quis bibendum molestie, lacus urna finibus tellus, id aliquam odio lectus.",
        "images": [
            "images/fry.jpg",
            "images/fry.jpg",
            "images/fry.jpg",
            "images/fry.jpg"
        ]
    }]
};

// display allProjects
allProjects.displayProjects = function() {
    // body...
    for (var project in allProjects.projects) {
        var formattedProjectStart = HTMLprojectStart.replace("%idno%", project);
        $("#projects").append(formattedProjectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%idno%", project);
        formattedProjectTitle = formattedProjectTitle.replace("%data%", allProjects.projects[project].title);
        $("#project-entry-" + project).append(formattedProjectTitle);

        var formattedProjectDate = HTMLprojectDates.replace("%idno%", project);
        formattedProjectDate = formattedProjectDate.replace("%data%", allProjects.projects[project].date);
        $("#project-entry-" + project).append(formattedProjectDate);

        var formattedProjectDescriptionText = HTMLprojectDescriptionText.replace("%idno%", project);
        $("#project-entry-" + project).append(formattedProjectDescriptionText);

        var formattedProjectDescriptionStart = HTMLprojectDescriptionStart.replace("%idno%", project);
        formattedProjectDescriptionStart = formattedProjectDescriptionStart.replace("%divpidno%", project);
        $("#project-entry-" + project).append(formattedProjectDescriptionStart);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", allProjects.projects[project].description);
        $("#projectDescription-entry-p-" + project).append(formattedProjectDescription);

        if (allProjects.projects[project].images.length > 0) {
            var formattedProjectImageText = HTMLprojectImageText.replace("%idno%", project);
            $("#project-entry-" + project).append(formattedProjectImageText);

            var formattedProjectImageStart = HTMLprojectImageStart.replace("%idno%", project);
            formattedProjectImageStart = formattedProjectImageStart.replace("%divimgidno%", project);
            $("#project-entry-" + project).append(formattedProjectImageStart);

            for (var image in allProjects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", allProjects.projects[project].images[image]);
                $("#projectImage-entry-img-" + project).append(formattedProjectImage);
            }
        };
    }

}
allProjects.displayProjects();


var education = {
    "schools": [{
        "name": "San Jose State University",
        "location": "San Jose, CA",
        "degree": "M.S. Software Engineering",
        "major": "Enterprise Software Technology",
        "date": "December 2007",
        "url": "http://www.sjsu.edu/"
    }, {
        "name": "Marathwada University",
        "location": "Aurangabad, MH, India",
        "degree": "Bachelor of Engineering",
        "major": "Enterprise Software Technology",
        "date": "June 2004",
        "url": "http://www.bamu.ac.in/"
    }],
    "onlineClasses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "October 2015",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "date": "March 2016",
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }]
};

// #education
education.displayEducation = function() {
    // body...
    for (var school in education.schools) {
        var formattedSchoolStart = HTMLschoolStart.replace("%idno%", school);
        $("#education").append(formattedSchoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%url%", education.schools[school].url);
        formattedSchoolName = formattedSchoolName.replace("%data%", education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("%idno%", school);
        $("#school-entry-" + school).append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%idno%", school);
        formattedSchoolLocation = formattedSchoolLocation.replace("%data%", education.schools[school].location);
        $("#school-entry-" + school).append(formattedSchoolLocation);

        var formattedSchoolInfoStart = HTMLschoolInfoStart.replace("%idno%", school);
        formattedSchoolInfoStart = formattedSchoolInfoStart.replace("%divpidno%", school);
        $("#school-entry-" + school).append(formattedSchoolInfoStart);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $("#schoolInfo-entry-p-" + school).append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $("#schoolInfo-entry-p-" + school).append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $("#schoolInfo-entry-p-" + school).append(formattedSchoolMajor);
    }
}
education.displayEducation();

// #education
education.displayOnlineClasses = function() {
    for (var onlineClass in education.onlineClasses) {
        var formattedOnlineClassesStart = HTMLonlineClassesStart.replace("%idno%", onlineClass);
        $("#education").append(formattedOnlineClassesStart);

        var formattedOnlineClassName = HTMLonlineClassName.replace("%url%", education.onlineClasses[onlineClass].url);
        formattedOnlineClassName = formattedOnlineClassName.replace("%data%", education.onlineClasses[onlineClass].title);
        formattedOnlineClassName = formattedOnlineClassName.replace("%idno%", onlineClass);
        $("#onlineClasses-entry-" + onlineClass).append(formattedOnlineClassName);

        var formattedOnlineDates = HTMLonlineDates.replace("%idno%", onlineClass);
        formattedOnlineDates = formattedOnlineDates.replace("%data%", education.onlineClasses[onlineClass].date);
        $("#onlineClasses-entry-" + onlineClass).append(formattedOnlineDates);

        var formattedOnlineSchoolInfoStart = HTMLonlineSchoolInfoStart.replace("%idno%", onlineClass);
        formattedOnlineSchoolInfoStart = formattedOnlineSchoolInfoStart.replace("%divpidno%", onlineClass);
        $("#onlineClasses-entry-" + onlineClass).append(formattedOnlineSchoolInfoStart);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
        $("#onlineSchoolInfo-entry-p-" + onlineClass).append(formattedOnlineSchool);
    }
}
education.displayOnlineClasses();


// collecting click locations
$(document).click(
    function(loc) {
        // console.log(loc);
        var x = loc.pageX;
        var y = loc.pageY;

        logClicks(x, y);
    }
);


// function to internationalize the name
function inName(fullName) {
    var splitNameArray = fullName.trim().split(" ");
    splitNameArray[0] = splitNameArray[0].slice(0, 1).toUpperCase() +
        splitNameArray[0].slice(1).toLowerCase();
    splitNameArray[1] = splitNameArray[1].toUpperCase();
    return splitNameArray[0] + " " + splitNameArray[1];
}

// add internationalizeButton
// $("#main").append(internationalizeButton);


// add map
$("#mapDiv").append(googleMap);
