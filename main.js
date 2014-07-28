/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";

    // Brackets modules
    var AppInit                 = brackets.getModule("utils/AppInit"),
        ExtensionUtils          = brackets.getModule("utils/ExtensionUtils");

    // Local Modulus
    var Main                    = require("src/Main");

    // Load Styles
    ExtensionUtils.loadStyleSheet(module, "styles/brackets-mocha.css");

    AppInit.appReady(function () {
        Main.init();
    });

});
