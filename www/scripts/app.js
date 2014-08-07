// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "scripts/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      "jiminychris": "../jiminychris",
      "domReady": "domReady"
    }
});

// Load the main app module to start the app
requirejs(["knockout", "app/viewmodels/mainviewmodel", "domReady!"], function(ko, MainViewModel) {
	//ko.applyBindings(new MainViewModel());
});