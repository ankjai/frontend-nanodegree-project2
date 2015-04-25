var fullName = "Ankit Jaiswal";
var formattedName = HTMLheaderName.replace("%data%", fullName);

var role = "Full Stack Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

//using append instead of prepend
$("#header").append(formattedName, formattedRole);

var bio = {
	"name":fullName,
	"role":role,
	"pictureUrl":"images/me.jpg",
	"welcomeMsg":"Hello",
	"skills":"Developer"
};

// NOT WORKING NEED TO DEBUG
$("#workExperience").append("some workExperience");