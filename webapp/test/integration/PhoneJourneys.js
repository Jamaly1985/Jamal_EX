/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"alterno/GIT_EX/test/integration/NavigationJourneyPhone",
		"alterno/GIT_EX/test/integration/NotFoundJourneyPhone",
		"alterno/GIT_EX/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});