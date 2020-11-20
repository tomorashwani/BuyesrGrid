/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cf/buyersgrid/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});