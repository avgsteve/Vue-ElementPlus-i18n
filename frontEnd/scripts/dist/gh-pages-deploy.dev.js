"use strict";

/* eslint-disable no-console */
var execa = require("execa");

var fs = require("fs");

(function _callee() {
  var folderName;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(execa("git", ["checkout", "--orphan", "gh-pages"]));

        case 3:
          // eslint-disable-next-line no-console
          console.log("Building started...");
          _context.next = 6;
          return regeneratorRuntime.awrap(execa("npm", ["run", "build"]));

        case 6:
          // await execa("yarn", ["build"]);
          // Understand if it's dist or build folder
          folderName = fs.existsSync("dist") ? "dist" : "build";
          _context.next = 9;
          return regeneratorRuntime.awrap(execa("git", ["--work-tree", folderName, "add", "--all"]));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]));

        case 11:
          console.log("Pushing to gh-pages...");
          _context.next = 14;
          return regeneratorRuntime.awrap(execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(execa("rm", ["-r", folderName]));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(execa("git", ["checkout", "-f", "setup-for-deployment"]));

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(execa("git", ["branch", "-D", "gh-pages"]));

        case 20:
          console.log("Successfully deployed, check your settings");
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.log(_context.t0.message);
          process.exit(1);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
})(); // https://medium.com/swlh/auto-deploy-vue-js-to-github-pages-using-actions-723a2206e4d3