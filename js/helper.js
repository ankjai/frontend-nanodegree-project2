/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLintroStart = '<div id="bio-entry" class="div-lvl-2"></div>';
var HTMLheaderName = '<span id="name" class="span-lvl-2-left">%data%</span>';
var HTMLheaderRole = '<span id="role" class="span-lvl-2-right">%data%</span><hr/>';
var HTMLobjective = '<span id="objective" class="span-lvl-2-subHeading">Objective</span>';

var HTMLFooterContactsStart = '<div id="contacts-entry" class="div-lvl-2"><ul id="footerContacts"></ul></div>';
var HTMLmobile = '<li><a href="tel:%data%" class="zocial-call"><small> Call</small></a></li>';
var HTMLemail = '<li><a href="mailto:%data%" class="zocial-email"><small> Email</small></a></li>';
var HTMLgithub = '<li><a href="%data%" class="zocial-github"><small> GitHub</small></a></li>';
var HTMLlinkedIn = '<li><a href="%data%" class="zocial-linkedin"><small> LinkedIn</small></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<div id="welcome-msg" class="div-lvl-3"><div id="welcome-msg-p" class="div-lvl-3-p"><p>%data%</p></div></div>';

var HTMLskillsStart = '<div id="skills-entry-%idno%" class="div-lvl-2"></div>';
var HTMLskillSet = '<span id="skillSet-name-%idno%" class="span-lvl-2-left">%data%</span><hr/>';
var HTMLskillListStart = '<div id="skillList-entry-%idno%" class="div-lvl-3"><div id="skillList-entry-ul-%divulidno%" class="div-lvl-3-ul"><ul id="skillList-items-%ulidno%"></ul></div></div>';
var HTMLskillList = '<li>%data%</li>';

var HTMLworkStart = '<div id="work-entry-%idno%" class="div-lvl-2"></div>';
var HTMLworkEmployer = '<span id="work-emp-%idno%" class="span-lvl-2-left"><a href="#">%data%</a></span>'
var HTMLworkDates = '<span id="work-dates-%idno%" class="span-lvl-2-right">%data%</span><hr/>';
var HTMLworkTitle = '<span id="work-title-%idno%" class="span-lvl-2-subHeading">%data%</span>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescriptionStart = '<div id="description-entry-%idno%" class="div-lvl-3"><div id="description-entry-p-%divpidno%" class="div-lvl-3-p"></div></div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div id="project-entry-%idno%" class="div-lvl-2"></div>';
var HTMLprojectTitle = '<span id="project-name-%idno%" class="span-lvl-2-left">%data%</span>';
var HTMLprojectDates = '<span id="project-date-%idno%" class="span-lvl-2-right">%data%</span><hr/>';
var HTMLprojectDescriptionText = '<span id="projectDescription-text-%idno%" class="span-lvl-2-subHeading">Description</span>';
var HTMLprojectDescriptionStart = '<div id="projectDescription-entry-%idno%" class="div-lvl-3"><div id="projectDescription-entry-p-%divpidno%" class="div-lvl-3-p"></div></div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImageText = '<hr/><span id="projectImage-text-%idno%" class="span-lvl-2-subHeading">Screenshots</span>';
var HTMLprojectImageStart = '<div id="projectImage-entry-%idno%" class="div-lvl-3"><div id="projectImage-entry-img-%divimgidno%" class="div-lvl-3-img"></div></div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div id="school-entry-%idno%" class="div-lvl-2"></div>';
var HTMLschoolName = '<span id="school-name-%idno%" class="span-lvl-2-left"><a href="%url%">%data%</a></span>';
var HTMLschoolLocation = '<span id="school-loc-%idno%" class="span-lvl-2-right">%data%</span><hr/>';
var HTMLschoolInfoStart = '<div id="schoolInfo-entry-%idno%" class="div-lvl-3"><div id="schoolInfo-entry-p-%divpidno%" class="div-lvl-3-p"></div></div>';
var HTMLschoolDegree = '<p>Degree: %data%</p>';
var HTMLschoolDates = '<p>Graduation: %data%</p>';
var HTMLschoolMajor = '<p>Major: %data%</p>';

var HTMLonlineClassesStart = '<div id="onlineClasses-entry-%idno%" class="div-lvl-2"></div>';
var HTMLonlineClassName = '<span id="onlineClass-name-%idno%" class="span-lvl-2-left"><a href="%url%">%data%</a></span>';
var HTMLonlineDates = '<span id="class-date-%idno%" class="span-lvl-2-right">%data%</span><hr/>';
var HTMLonlineSchoolInfoStart = '<div id="onlineSchoolInfo-entry-%idno%" class="div-lvl-3"><div id="onlineSchoolInfo-entry-p-%divpidno%" class="div-lvl-3-p"></div></div>';
var HTMLonlineSchool = '<p>School: %data%</p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map" class="div-lvl-2"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
    $('button').click(function() {
        var iName = inName() || function() {};
        $('#name').html(iName);
    });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
// Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
