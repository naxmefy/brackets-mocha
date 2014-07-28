/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */


define(function (require, exports) {
    "use strict";

    // Brackets modules
    var AppInit           = brackets.getModule("utils/AppInit"),
        CommandManager    = brackets.getModule("command/CommandManager"),
        Menus             = brackets.getModule("command/Menus"),
        FileSystem        = brackets.getModule("filesystem/FileSystem"),
        ProjectManager    = brackets.getModule("project/ProjectManager");

    // IDs
    var PKGNAME                 = "naxmeify.brackets-mocha",
        COMMAND_SHOW_ID         = "naxmeify.brackets-mocha.show",
        COMMAND_TEST_ID         = "naxmeify.brackets-mocha.test",
        COMMAND_TESTFILE_ID     = "naxmeify.brackets-mocha.testfile";

    var Strings                 = require("../strings");

    var $icon                   = $("<a id='brackets-mocha-toolbar-icon' class='sprite-grey' href='#'></a>")
                                    .attr("title", Strings.LOADING)
                                    .addClass("loading")
                                    .appendTo($("#main-toolbar .buttons"));


    function init() {
    }

    function initUI() {
        // Init Panel
        // Init Notifications
        // Init Toolbar Button
        // $icon.on("click", Panel.toggle);
    }

    exports.$icon = $icon;
    exports.init = init;
});
