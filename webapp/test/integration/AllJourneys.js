/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"alterno/GIT_EX/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"alterno/GIT_EX/test/integration/pages/App",
	"alterno/GIT_EX/test/integration/pages/Browser",
	"alterno/GIT_EX/test/integration/pages/Master",
	"alterno/GIT_EX/test/integration/pages/Detail",
	"alterno/GIT_EX/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "alterno.GIT_EX.view."
	});

	sap.ui.require([
		"alterno/GIT_EX/test/integration/MasterJourney",
		"alterno/GIT_EX/test/integration/NavigationJourney",
		"alterno/GIT_EX/test/integration/NotFoundJourney",
		"alterno/GIT_EX/test/integration/BusyJourney",
		"alterno/GIT_EX/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});