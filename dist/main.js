/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Chart =
/*#__PURE__*/
function () {
  function Chart(selector, options) {
    _classCallCheck(this, Chart);

    this.setChart(selector, options);
    this.setData();
  }

  _createClass(Chart, [{
    key: "setChart",
    value: function setChart(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        topOffset: 0,
        leftOffset: 0
      };
      var svg = d3.select(selector).attr('height', _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2).attr('width', _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] * 2);
      this.chart = svg.append('g').attr('transform', "translate(".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] + options.leftOffset, ", ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["MARGINS"] / 2 + options.topOffset, ")"));
    }
  }, {
    key: "setData",
    value: function setData() {
      this.data = _constants__WEBPACK_IMPORTED_MODULE_0__["CITIES"];
    }
  }, {
    key: "xAxis",
    value: function xAxis(domain, xScale) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var tockFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      this.xScale = d3[xScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]);
      this.chart.append('g').call(axisBottom(this.xScale)).ticks(ticks).tickFormat(tickFormat()).attr('transform', "translate(0, ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], ")"));
    }
  }, {
    key: "yAxis",
    value: function yAxis(domain, yScale) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      var tickFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      if (yScale === 'scaleBand') {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]).padding(0.8);
      } else {
        this.yScale = d3[yScale]().domain(domain).range([0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]]);
      }

      this.chart.append('g').call(d3.axisLeft(this.yScale).ticks(ticks).tickFormat(tickFormat()));
    }
  }, {
    key: "gridLines",
    value: function gridLines(scale, position) {
      var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      this.chart.append('g').attr('class', 'grid').call(d3[position])().scale(scale).tickSize(_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], 0, 0).tickFormat('').ticks(ticks);
    }
  }, {
    key: "rectangleLabels",
    value: function rectangleLabels(text) {
      var _this = this;

      this.chart.selectAll().data(this.sortedData).enter().append('text').attr('class', function (d) {
        return "city ".concat(d["class"], " bar-label city-data-toggle");
      }).attr('x', 5).attr('y', function (d) {
        return _this.yScale(d.city) - 2;
      }).style('fill', '#fff').text(function (d, i) {
        if (typeof text === 'string') {
          return d[text];
        } else {
          return text.call(d, i);
        }
      }).style('opacity', 0);
    }
  }, {
    key: "labelTop",
    value: function labelTop(text) {
      this.chart.append('text').attr('class', 'label-text').attr('text-anchor', 'middle').attr('x', _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2).attr('y', -20).text(text);
    }
  }]);

  return Chart;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: PLANO, IRVINE, MADISON, FREMONT, HUNTINGTON_BEACH, FARGO, GRAND_PRAIRIE, SAN_JOSE, SCOTTSDALE, SAN_FRANCISCO, BISMARCK, OVERLAND_PARK, SANTA_ROSA, AUSTIN, SIOUX_FALLS, PEARL_CITY, GLENDALE, SAN_DIEGO, ST_PAUL, CHARLESTON, GILBERT, ANAHEIM, RALEIGH, CAPE_CORAL, CEDAR_RAPIDS, CITIES, ANIMATION_DURATION, ANIMATION_DELAY, ANIMATION_EASING, WIDTH, HEIGHT, MARGINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANO", function() { return PLANO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRVINE", function() { return IRVINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MADISON", function() { return MADISON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREMONT", function() { return FREMONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUNTINGTON_BEACH", function() { return HUNTINGTON_BEACH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FARGO", function() { return FARGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAND_PRAIRIE", function() { return GRAND_PRAIRIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_JOSE", function() { return SAN_JOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOTTSDALE", function() { return SCOTTSDALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_FRANCISCO", function() { return SAN_FRANCISCO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BISMARCK", function() { return BISMARCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAND_PARK", function() { return OVERLAND_PARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANTA_ROSA", function() { return SANTA_ROSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUSTIN", function() { return AUSTIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIOUX_FALLS", function() { return SIOUX_FALLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEARL_CITY", function() { return PEARL_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLENDALE", function() { return GLENDALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAN_DIEGO", function() { return SAN_DIEGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ST_PAUL", function() { return ST_PAUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARLESTON", function() { return CHARLESTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GILBERT", function() { return GILBERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANAHEIM", function() { return ANAHEIM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RALEIGH", function() { return RALEIGH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPE_CORAL", function() { return CAPE_CORAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEDAR_RAPIDS", function() { return CEDAR_RAPIDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DELAY", function() { return ANIMATION_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_EASING", function() { return ANIMATION_EASING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGINS", function() { return MARGINS; });
var PLANO = "PLANO";
var PLANO_CITY = "Plano";
var PLANO_CLASS = "city-Plano";
var PLANO_COLOR = "#8F94FF";
var IRVINE = "IRVINE";
var IRVINE_CITY = "IRVINE";
var IRVINE_CLASS = "city-Irvine";
var IRVINE_COLOR = "#8F94FF";
var MADISON = "MADISON";
var MADISON_CITY = "MADISON";
var MADISON_CLASS = "city-Madison";
var MADISON_COLOR = "#8F94FF";
var FREMONT = "FREMONT";
var FREMONT_CITY = "FREMONT";
var FREMONT_CLASS = "city-Fremont";
var FREMONT_COLOR = "#8F94FF";
var HUNTINGTON_BEACH = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CITY = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CLASS = "city-Huntington-Beach";
var HUNTINGTON_BEACH_COLOR = "#8F94FF";
var FARGO = "FARGO";
var FARGO_CITY = "FARGO";
var FARGO_CLASS = "city-Fargo";
var FARGO_COLOR = "#8F94FF";
var GRAND_PRAIRIE = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CITY = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CLASS = "city-Grand-Prairie";
var GRAND_PRAIRIE_COLOR = "#8F94FF";
var SAN_JOSE = "SAN_JOSE";
var SAN_JOSE_CITY = "SAN_JOSE";
var SAN_JOSE_CLASS = "city-San-Jose";
var SAN_JOSE_COLOR = "#8F94FF";
var SCOTTSDALE = "SCOTTSDALE";
var SCOTTSDALE_CITY = "SCOTTSDALE";
var SCOTTSDALE_CLASS = "city-Scottsdale";
var SCOTTSDALE_COLOR = "#8F94FF";
var SAN_FRANCISCO = "SAN_FRANCISCO";
var SAN_FRANCISCO_CITY = "SAN_FRANCISCO";
var SAN_FRANCISCO_CLASS = "city-San-Francisco";
var SAN_FRANCISCO_COLOR = "#8F94FF";
var BISMARCK = "BISMARCK";
var BISMARCK_CITY = "BISMARCK";
var BISMARCK_CLASS = "city-Bismarck";
var BISMARCK_COLOR = "#8F94FF";
var OVERLAND_PARK = "OVERLAND_PARK";
var OVERLAND_PARK_CITY = "OVERLAND_PARK";
var OVERLAND_PARK_CLASS = "city-Overland-Park";
var OVERLAND_PARK_COLOR = "#8F94FF";
var SANTA_ROSA = "SANTA_ROSA";
var SANTA_ROSA_CITY = "SANTA_ROSA";
var SANTA_ROSA_CLASS = "city-Santa-Rosa";
var SANTA_ROSA_COLOR = "#8F94FF";
var AUSTIN = "AUSTIN";
var AUSTIN_CITY = "AUSTIN";
var AUSTIN_CLASS = "city-Austin";
var AUSTIN_COLOR = "#8F94FF";
var SIOUX_FALLS = "SIOUX_FALLS";
var SIOUX_FALLS_CITY = "SIOUX_FALLS";
var SIOUX_FALLS_CLASS = "city-Sioux-Falls";
var SIOUX_FALLS_COLOR = "#8F94FF";
var PEARL_CITY = "PEARL_CITY";
var PEARL_CITY_CITY = "PEARL_CITY";
var PEARL_CITY_CLASS = "city-Pearl-City";
var PEARL_CITY_COLOR = "#8F94FF";
var GLENDALE = "GLENDALE";
var GLENDALE_CITY = "GLENDALE";
var GLENDALE_CLASS = "city-Glendale";
var GLENDALE_COLOR = "#8F94FF";
var SAN_DIEGO = "SAN_DIEGO";
var SAN_DIEGO_CITY = "SAN_DIEGO";
var SAN_DIEGO_CLASS = "city-San-Diego";
var SAN_DIEGO_COLOR = "#8F94FF";
var ST_PAUL = "ST_PAUL";
var ST_PAUL_CITY = "ST_PAUL";
var ST_PAUL_CLASS = "city-St-Paul";
var ST_PAUL_COLOR = "#8F94FF";
var CHARLESTON = "CHARLESTON";
var CHARLESTON_CITY = "CHARLESTON";
var CHARLESTON_CLASS = "city-Charleston";
var CHARLESTON_COLOR = "#8F94FF";
var GILBERT = "GILBERT";
var GILBERT_CITY = "GILBERT";
var GILBERT_CLASS = "city-Gilbert";
var GILBERT_COLOR = "#8F94FF";
var ANAHEIM = "ANAHEIM";
var ANAHEIM_CITY = "ANAHEIM";
var ANAHEIM_CLASS = "city-Anaheim";
var ANAHEIM_COLOR = "#8F94FF";
var RALEIGH = "RALEIGH";
var RALEIGH_CITY = "RALEIGH";
var RALEIGH_CLASS = "city-Raleigh";
var RALEIGH_COLOR = "#8F94FF";
var CAPE_CORAL = "CAPE_CORAL";
var CAPE_CORAL_CITY = "CAPE_CORAL";
var CAPE_CORAL_CLASS = "city-Cape-Coral";
var CAPE_CORAL_COLOR = "#8F94FF";
var CEDAR_RAPIDS = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CITY = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CLASS = "city-Cedar-Rapids";
var CEDAR_RAPIDS_COLOR = "#8F94FF";
var CITIES = {
  PLANO: {
    city: PLANO_CITY,
    constant: PLANO,
    "class": PLANO_CLASS,
    color: PLANO_COLOR,
    emotionalWellbeing: 4,
    incomeEmployment: 3,
    communityEnvironment: 4,
    position: {
      x: 496,
      y: 360
    },
    happinessScore: 72.3,
    ranking: 1
  },
  IRVINE: {
    city: IRVINE_CITY,
    constant: IRVINE,
    "class": IRVINE_CLASS,
    color: IRVINE_COLOR,
    emotionalWellbeing: 8,
    incomeEmployment: 6,
    communityEnvironment: 3,
    position: {
      x: 180,
      y: 300
    },
    happinessScore: 71.86,
    ranking: 2
  },
  MADISON: {
    city: MADISON_CITY,
    constant: MADISON,
    "class": MADISON_CLASS,
    color: MADISON_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 8,
    communityEnvironment: 4,
    position: {
      x: 600,
      y: 160
    },
    happinessScore: 71.81,
    ranking: 3
  },
  FREMONT: {
    city: FREMONT_CITY,
    constant: FREMONT,
    "class": FREMONT_CLASS,
    color: FREMONT_COLOR,
    emotionalWellbeing: 5,
    incomeEmployment: 20,
    communityEnvironment: 1,
    position: {
      x: 151,
      y: 225
    },
    happinessScore: 71.17,
    ranking: 4
  },
  HUNTINGTON_BEACH: {
    city: HUNTINGTON_BEACH_CITY,
    constant: HUNTINGTON_BEACH,
    "class": HUNTINGTON_BEACH_CLASS,
    color: HUNTINGTON_BEACH_COLOR,
    emotionalWellbeing: 3,
    incomeEmployment: 25,
    communityEnvironment: 15,
    position: {
      x: 170,
      y: 280
    },
    happinessScore: 69.74,
    ranking: 5
  },
  FARGO: {
    city: FARGO_CITY,
    constant: FARGO,
    "class": FARGO_CLASS,
    color: FARGO_COLOR,
    emotionalWellbeing: 9,
    incomeEmployment: 11,
    communityEnvironment: 13,
    position: {
      x: 498,
      y: 94
    },
    happinessScore: 69.57,
    ranking: 6
  },
  GRAND_PRAIRIE: {
    city: GRAND_PRAIRIE_CITY,
    constant: GRAND_PRAIRIE,
    "class": GRAND_PRAIRIE_CLASS,
    color: GRAND_PRAIRIE_COLOR,
    emotionalWellbeing: 11,
    incomeEmployment: 19,
    communityEnvironment: 3,
    position: {
      x: 497,
      y: 350
    },
    happinessScore: 69.3,
    ranking: 7
  },
  SAN_JOSE: {
    city: SAN_JOSE_CITY,
    constant: SAN_JOSE,
    "class": SAN_JOSE_CLASS,
    color: SAN_JOSE_COLOR,
    emotionalWellbeing: 1,
    incomeEmployment: 10,
    communityEnvironment: 24,
    position: {
      x: 140,
      y: 240
    },
    happinessScore: 68.9,
    ranking: 8
  },
  SCOTTSDALE: {
    city: SCOTTSDALE_CITY,
    constant: SCOTTSDALE,
    "class": SCOTTSDALE_CLASS,
    color: SCOTTSDALE_COLOR,
    emotionalWellbeing: 25,
    incomeEmployment: 7,
    communityEnvironment: 1,
    position: {
      x: 270,
      y: 321
    },
    happinessScore: 68.24,
    ranking: 9
  },
  SAN_FRANCISCO: {
    city: SAN_FRANCISCO_CITY,
    constant: SAN_FRANCISCO,
    "class": SAN_FRANCISCO_CLASS,
    color: SAN_FRANCISCO_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 1,
    communityEnvironment: 69,
    position: {
      x: 135,
      y: 205
    },
    happinessScore: 67.53,
    ranking: 10
  },
  BISMARCK: {
    city: BISMARCK_CITY,
    constant: BISMARCK,
    "class": BISMARCK_CLASS,
    color: BISMARCK_COLOR,
    emotionalWellbeing: 14,
    incomeEmployment: 2,
    communityEnvironment: 25,
    position: {
      x: 458,
      y: 106
    },
    happinessScore: 67.38,
    ranking: 11
  },
  OVERLAND_PARK: {
    city: OVERLAND_PARK_CITY,
    constant: OVERLAND_PARK,
    "class": OVERLAND_PARK_CLASS,
    color: OVERLAND_PARK_COLOR,
    emotionalWellbeing: 12,
    incomeEmployment: 31,
    communityEnvironment: 14,
    position: {
      x: 529,
      y: 248
    },
    happinessScore: 67.37,
    ranking: 12
  },
  SANTA_ROSA: {
    city: SANTA_ROSA_CITY,
    constant: SANTA_ROSA,
    "class": SANTA_ROSA_CLASS,
    color: SANTA_ROSA_COLOR,
    emotionalWellbeing: 13,
    incomeEmployment: 29,
    communityEnvironment: 5,
    position: {
      x: 134,
      y: 183
    },
    happinessScore: 67.18,
    ranking: 13
  },
  AUSTIN: {
    city: AUSTIN_CITY,
    constant: AUSTIN,
    "class": AUSTIN_CLASS,
    color: AUSTIN_COLOR,
    emotionalWellbeing: 8,
    incomeEmployment: 4,
    communityEnvironment: 44,
    position: {
      x: 477,
      y: 410
    },
    happinessScore: 67.16,
    ranking: 14
  },
  SIOUX_FALLS: {
    city: SIOUX_FALLS_CITY,
    constant: SIOUX_FALLS,
    "class": SIOUX_FALLS_CLASS,
    color: SIOUX_FALLS_COLOR,
    emotionalWellbeing: 6,
    incomeEmployment: 37,
    communityEnvironment: 52,
    position: {
      x: 500,
      y: 168
    },
    happinessScore: 66.97,
    ranking: 15
  },
  PEARL_CITY: {
    city: PEARL_CITY_CITY,
    constant: PEARL_CITY,
    "class": PEARL_CITY_CLASS,
    color: PEARL_CITY_COLOR,
    emotionalWellbeing: 1,
    incomeEmployment: 81,
    communityEnvironment: 8,
    position: {
      x: 330,
      y: 461
    },
    happinessScore: 66.77,
    ranking: 16
  },
  GLENDALE: {
    city: GLENDALE_CITY,
    constant: GLENDALE,
    "class": GLENDALE_CLASS,
    color: GLENDALE_COLOR,
    emotionalWellbeing: 15,
    incomeEmployment: 56,
    communityEnvironment: 7,
    position: {
      x: 167,
      y: 262
    },
    happinessScore: 66.25,
    ranking: 17
  },
  SAN_DIEGO: {
    city: SAN_DIEGO_CITY,
    constant: SAN_DIEGO,
    "class": SAN_DIEGO_CLASS,
    color: SAN_DIEGO_COLOR,
    emotionalWellbeing: 4,
    incomeEmployment: 20,
    communityEnvironment: 25,
    position: {
      x: 187,
      y: 321
    },
    happinessScore: 66.01,
    ranking: 18
  },
  ST_PAUL: {
    city: ST_PAUL_CITY,
    constant: ST_PAUL,
    "class": ST_PAUL_CLASS,
    color: PLANO_COLOR,
    emotionalWellbeing: 10,
    incomeEmployment: 38,
    communityEnvironment: 36,
    position: {
      x: 555,
      y: 133
    },
    happinessScore: 65.79,
    ranking: 19
  },
  CHARLESTON: {
    city: CHARLESTON_CITY,
    constant: CHARLESTON,
    "class": CHARLESTON_CLASS,
    color: CHARLESTON_COLOR,
    emotionalWellbeing: 41,
    incomeEmployment: 3,
    communityEnvironment: 2,
    position: {
      x: 760,
      y: 366
    },
    happinessScore: 65.48,
    ranking: 20
  },
  GILBERT: {
    city: GILBERT_CITY,
    constant: GILBERT,
    "class": GILBERT_CLASS,
    color: GILBERT_COLOR,
    emotionalWellbeing: 30,
    incomeEmployment: 26,
    communityEnvironment: 5,
    position: {
      x: 277,
      y: 343
    },
    happinessScore: 65.07,
    ranking: 21
  },
  ANAHEIM: {
    city: ANAHEIM_CITY,
    constant: ANAHEIM,
    "class": ANAHEIM_CLASS,
    color: ANAHEIM_COLOR,
    emotionalWellbeing: 16,
    incomeEmployment: 43,
    communityEnvironment: 19,
    position: {
      x: 196,
      y: 282
    },
    happinessScore: 65.02,
    ranking: 22
  },
  RALEIGH: {
    city: RALEIGH_CITY,
    constant: RALEIGH,
    "class": RALEIGH_CLASS,
    color: RALEIGH_COLOR,
    emotionalWellbeing: 7,
    incomeEmployment: 23,
    communityEnvironment: 48,
    position: {
      x: 773,
      y: 283
    },
    happinessScore: 64.99,
    ranking: 23
  },
  CAPE_CORAL: {
    city: CAPE_CORAL_CITY,
    constant: CAPE_CORAL,
    "class": CAPE_CORAL_CLASS,
    color: CAPE_CORAL_COLOR,
    emotionalWellbeing: 28,
    incomeEmployment: 48,
    communityEnvironment: 2,
    position: {
      x: 741,
      y: 451
    },
    happinessScore: 64.96,
    ranking: 24
  },
  CEDAR_RAPIDS: {
    city: CEDAR_RAPIDS_CITY,
    constant: CEDAR_RAPIDS,
    "class": CEDAR_RAPIDS_CLASS,
    color: CEDAR_RAPIDS_COLOR,
    emotionalWellbeing: 23,
    incomeEmployment: 32,
    communityEnvironment: 11,
    position: {
      x: 566,
      y: 194
    },
    happinessScore: 64.9,
    ranking: 25
  }
};
var ANIMATION_DURATION = 1000;
var ANIMATION_DELAY = 0;
var ANIMATION_EASING = d3.easePoly;
var WIDTH = 200;
var HEIGHT = 200;
var MARGINS = 100;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/map.js");
// import _ from 'lodash';

document.addEventListener("DOMContentLoaded", function () {
  new _map__WEBPACK_IMPORTED_MODULE_0__["default"]('svg.map');
});

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Map =
/*#__PURE__*/
function (_Chart) {
  _inherits(Map, _Chart);

  function Map(selector) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, selector));
    _this.svg = d3.select(selector);

    _this.circle();

    _this.cityLabel();

    _this.ranking();

    _this.pointer();

    return _this;
  }

  _createClass(Map, [{
    key: "circle",
    value: function circle() {
      this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r", 10).style("fill", function (d) {
        return d.color;
      }).attr("class", function (d) {
        return "city ".concat(d["class"], " city-pinpoint");
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).attr("cy", function (d) {
        return d.position.y;
      }).attr("cx", function (d) {
        return d.position.x;
      }).style("z-index", 100).style("cursor", "pointer");
    }
  }, {
    key: "cityLabel",
    value: function cityLabel() {
      this.svg.selectAll("text").data(Object.values(this.data)).enter().append("text").attr("opacity", 0).attr("class", function (d) {
        return "map-city-label city ".concat(d["class"]);
      }).text(function (d) {
        return d.city;
      }).style("font-size", 14).style("stroke-width", 3).style("fill", function (d) {
        return d.color;
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"] / 1.5).attr("opacity", 1).attr("x", function (d) {
        // if (d.city === "New York") {
        //   return d.position.x - 90;
        // } else if (d.city === "Boston") {
        //   return d.position.x - 75;
        // } else if (d.city === "Raleigh") {
        //   return d.position.x - 80;
        // }
        return d.position.x + 25;
      }).attr("y", function (d) {
        return d.position.y + 5;
      }).style("z-index", 100);
    }
  }, {
    key: "ranking",
    value: function ranking() {
      this.svg.selectAll(".ranking").data(Object.values(this.data)).enter().append("text").text(function (d) {
        return d.ranking;
      }).style("fill", "white").style("font-size", 12).style("font-weight", 700).attr("class", function (d) {
        return "city ".concat(d["class"], " city-pinpoint");
      }).transition().ease(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_EASING"]).duration(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_DURATION"]).attr("y", function (d) {
        return d.position.y + 4;
      }).attr("x", function (d) {
        return d.position.x;
      }).style("text-anchor", "middle").style('z-index', 100);
    }
  }, {
    key: "pointer",
    value: function pointer() {}
  }]);

  return Map;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiXSwibmFtZXMiOlsiQ2hhcnQiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCJzZXRDaGFydCIsInNldERhdGEiLCJ0b3BPZmZzZXQiLCJsZWZ0T2Zmc2V0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiSEVJR0hUIiwiTUFSR0lOUyIsIldJRFRIIiwiY2hhcnQiLCJhcHBlbmQiLCJkYXRhIiwiQ0lUSUVTIiwiZG9tYWluIiwieFNjYWxlIiwidGlja3MiLCJ0b2NrRm9ybWF0IiwicmFuZ2UiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tGb3JtYXQiLCJ5U2NhbGUiLCJwYWRkaW5nIiwiYXhpc0xlZnQiLCJzY2FsZSIsInBvc2l0aW9uIiwidGlja1NpemUiLCJ0ZXh0Iiwic2VsZWN0QWxsIiwic29ydGVkRGF0YSIsImVudGVyIiwiZCIsImNpdHkiLCJzdHlsZSIsImkiLCJQTEFOTyIsIlBMQU5PX0NJVFkiLCJQTEFOT19DTEFTUyIsIlBMQU5PX0NPTE9SIiwiSVJWSU5FIiwiSVJWSU5FX0NJVFkiLCJJUlZJTkVfQ0xBU1MiLCJJUlZJTkVfQ09MT1IiLCJNQURJU09OIiwiTUFESVNPTl9DSVRZIiwiTUFESVNPTl9DTEFTUyIsIk1BRElTT05fQ09MT1IiLCJGUkVNT05UIiwiRlJFTU9OVF9DSVRZIiwiRlJFTU9OVF9DTEFTUyIsIkZSRU1PTlRfQ09MT1IiLCJIVU5USU5HVE9OX0JFQUNIIiwiSFVOVElOR1RPTl9CRUFDSF9DSVRZIiwiSFVOVElOR1RPTl9CRUFDSF9DTEFTUyIsIkhVTlRJTkdUT05fQkVBQ0hfQ09MT1IiLCJGQVJHTyIsIkZBUkdPX0NJVFkiLCJGQVJHT19DTEFTUyIsIkZBUkdPX0NPTE9SIiwiR1JBTkRfUFJBSVJJRSIsIkdSQU5EX1BSQUlSSUVfQ0lUWSIsIkdSQU5EX1BSQUlSSUVfQ0xBU1MiLCJHUkFORF9QUkFJUklFX0NPTE9SIiwiU0FOX0pPU0UiLCJTQU5fSk9TRV9DSVRZIiwiU0FOX0pPU0VfQ0xBU1MiLCJTQU5fSk9TRV9DT0xPUiIsIlNDT1RUU0RBTEUiLCJTQ09UVFNEQUxFX0NJVFkiLCJTQ09UVFNEQUxFX0NMQVNTIiwiU0NPVFRTREFMRV9DT0xPUiIsIlNBTl9GUkFOQ0lTQ08iLCJTQU5fRlJBTkNJU0NPX0NJVFkiLCJTQU5fRlJBTkNJU0NPX0NMQVNTIiwiU0FOX0ZSQU5DSVNDT19DT0xPUiIsIkJJU01BUkNLIiwiQklTTUFSQ0tfQ0lUWSIsIkJJU01BUkNLX0NMQVNTIiwiQklTTUFSQ0tfQ09MT1IiLCJPVkVSTEFORF9QQVJLIiwiT1ZFUkxBTkRfUEFSS19DSVRZIiwiT1ZFUkxBTkRfUEFSS19DTEFTUyIsIk9WRVJMQU5EX1BBUktfQ09MT1IiLCJTQU5UQV9ST1NBIiwiU0FOVEFfUk9TQV9DSVRZIiwiU0FOVEFfUk9TQV9DTEFTUyIsIlNBTlRBX1JPU0FfQ09MT1IiLCJBVVNUSU4iLCJBVVNUSU5fQ0lUWSIsIkFVU1RJTl9DTEFTUyIsIkFVU1RJTl9DT0xPUiIsIlNJT1VYX0ZBTExTIiwiU0lPVVhfRkFMTFNfQ0lUWSIsIlNJT1VYX0ZBTExTX0NMQVNTIiwiU0lPVVhfRkFMTFNfQ09MT1IiLCJQRUFSTF9DSVRZIiwiUEVBUkxfQ0lUWV9DSVRZIiwiUEVBUkxfQ0lUWV9DTEFTUyIsIlBFQVJMX0NJVFlfQ09MT1IiLCJHTEVOREFMRSIsIkdMRU5EQUxFX0NJVFkiLCJHTEVOREFMRV9DTEFTUyIsIkdMRU5EQUxFX0NPTE9SIiwiU0FOX0RJRUdPIiwiU0FOX0RJRUdPX0NJVFkiLCJTQU5fRElFR09fQ0xBU1MiLCJTQU5fRElFR09fQ09MT1IiLCJTVF9QQVVMIiwiU1RfUEFVTF9DSVRZIiwiU1RfUEFVTF9DTEFTUyIsIlNUX1BBVUxfQ09MT1IiLCJDSEFSTEVTVE9OIiwiQ0hBUkxFU1RPTl9DSVRZIiwiQ0hBUkxFU1RPTl9DTEFTUyIsIkNIQVJMRVNUT05fQ09MT1IiLCJHSUxCRVJUIiwiR0lMQkVSVF9DSVRZIiwiR0lMQkVSVF9DTEFTUyIsIkdJTEJFUlRfQ09MT1IiLCJBTkFIRUlNIiwiQU5BSEVJTV9DSVRZIiwiQU5BSEVJTV9DTEFTUyIsIkFOQUhFSU1fQ09MT1IiLCJSQUxFSUdIIiwiUkFMRUlHSF9DSVRZIiwiUkFMRUlHSF9DTEFTUyIsIlJBTEVJR0hfQ09MT1IiLCJDQVBFX0NPUkFMIiwiQ0FQRV9DT1JBTF9DSVRZIiwiQ0FQRV9DT1JBTF9DTEFTUyIsIkNBUEVfQ09SQUxfQ09MT1IiLCJDRURBUl9SQVBJRFMiLCJDRURBUl9SQVBJRFNfQ0lUWSIsIkNFREFSX1JBUElEU19DTEFTUyIsIkNFREFSX1JBUElEU19DT0xPUiIsImNvbnN0YW50IiwiY29sb3IiLCJlbW90aW9uYWxXZWxsYmVpbmciLCJpbmNvbWVFbXBsb3ltZW50IiwiY29tbXVuaXR5RW52aXJvbm1lbnQiLCJ4IiwieSIsImhhcHBpbmVzc1Njb3JlIiwicmFua2luZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkFOSU1BVElPTl9ERUxBWSIsIkFOSU1BVElPTl9FQVNJTkciLCJlYXNlUG9seSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hcCIsImNpcmNsZSIsImNpdHlMYWJlbCIsInBvaW50ZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtB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SCxHQUlHcEIsTUFKSCxDQUlVLE1BSlYsRUFLR2lCLElBTEgsQ0FLUSxVQUFBSSxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZ0gsT0FBTjtBQUFBLE9BTFQsRUFNRzlHLEtBTkgsQ0FNUyxNQU5ULEVBTWlCLE9BTmpCLEVBT0dBLEtBUEgsQ0FPUyxXQVBULEVBT3NCLEVBUHRCLEVBUUdBLEtBUkgsQ0FRUyxhQVJULEVBUXdCLEdBUnhCLEVBU0c1QixJQVRILENBU1EsT0FUUixFQVNpQixVQUFBMEIsQ0FBQztBQUFBLDhCQUFZQSxDQUFDLFNBQWI7QUFBQSxPQVRsQixFQVVHNkgsVUFWSCxHQVdHQyxJQVhILENBV1FYLDJEQVhSLEVBWUdZLFFBWkgsQ0FZWWQsNkRBWlosRUFhRzNJLElBYkgsQ0FhUSxHQWJSLEVBYWEsVUFBQTBCLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNOLFFBQUYsQ0FBV29ILENBQVgsR0FBZSxDQUFuQjtBQUFBLE9BYmQsRUFjR3hJLElBZEgsQ0FjUSxHQWRSLEVBY2EsVUFBQTBCLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNOLFFBQUYsQ0FBV21ILENBQWY7QUFBQSxPQWRkLEVBZUczRyxLQWZILENBZVMsYUFmVCxFQWV3QixRQWZ4QixFQWdCR0EsS0FoQkgsQ0FnQlMsU0FoQlQsRUFnQm9CLEdBaEJwQjtBQWlCRDs7OzhCQUVTLENBQUU7Ozs7RUE5RUl0Qyw4Qzs7QUFpRkgySixrRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIEhFSUdIVCxcbiAgTUFSR0lOUyxcbiAgV0lEVEgsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbiAgQU5JTUFUSU9OX0RFTEFZLFxuICBBTklNQVRJT05fRUFTSU5HLFxuICBDSVRJRVNcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXREYXRhKCk7XG4gIH1cblxuICBzZXRDaGFydChzZWxlY3Rvciwgb3B0aW9ucyA9IHsgdG9wT2Zmc2V0OiAwLCBsZWZ0T2Zmc2V0OiAwIH0pIHtcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpXG4gICAgICAuYXR0cignaGVpZ2h0JywgSEVJR0hUICsgTUFSR0lOUyAqIDIpXG4gICAgICAuYXR0cignd2lkdGgnLCBXSURUSCArIE1BUkdJTlMgKiAyKVxuICAgIHRoaXMuY2hhcnQgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7TUFSR0lOUyArIG9wdGlvbnMubGVmdE9mZnNldH0sICR7TUFSR0lOUyAvIDIgKyBvcHRpb25zLnRvcE9mZnNldH0pYCk7XG4gIH1cblxuICBzZXREYXRhKCkge1xuICAgIHRoaXMuZGF0YSA9IENJVElFUztcbiAgfVxuXG4gIHhBeGlzKGRvbWFpbiwgeFNjYWxlLCB0aWNrcyA9IDUsIHRvY2tGb3JtYXQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMueFNjYWxlID0gZDNbeFNjYWxlXSgpXG4gICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuXG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuY2FsbChheGlzQm90dG9tKHRoaXMueFNjYWxlKSlcbiAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYCk7XG4gIH1cblxuICB5QXhpcyhkb21haW4sIHlTY2FsZSwgdGlja3MgPSA1LCB0aWNrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICBpZiAoeVNjYWxlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy55U2NhbGUgPSBkM1t5U2NhbGVdKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgICAucGFkZGluZygwLjgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0xlZnQodGhpcy55U2NhbGUpXG4gICAgICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQoKSlcbiAgICAgIClcbiAgfVxuXG4gIGdyaWRMaW5lcyhzY2FsZSwgcG9zaXRpb24sIHRpY2tzID0gNSkge1xuICAgIHRoaXMuY2hhcnQuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdncmlkJylcbiAgICAgIC5jYWxsKGQzW3Bvc2l0aW9uXSkoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC50aWNrU2l6ZShXSURUSCwgMCwgMClcbiAgICAgICAgLnRpY2tGb3JtYXQoJycpXG4gICAgICAgIC50aWNrcyh0aWNrcyk7XG4gIH1cblxuICByZWN0YW5nbGVMYWJlbHModGV4dCkge1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgLmRhdGEodGhpcy5zb3J0ZWREYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgY2l0eSAke2QuY2xhc3N9IGJhci1sYWJlbCBjaXR5LWRhdGEtdG9nZ2xlYClcbiAgICAgIC5hdHRyKCd4JywgNSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnlTY2FsZShkLmNpdHkpIC0gMilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICcjZmZmJylcbiAgICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gZFt0ZXh0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGV4dC5jYWxsKGQsIGkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgfVxuXG4gIGxhYmVsVG9wKHRleHQpIHtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbC10ZXh0JylcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLmF0dHIoJ3gnLCBXSURUSCAvIDIpXG4gICAgICAuYXR0cigneScsIC0yMClcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiZXhwb3J0IGNvbnN0IFBMQU5PID0gXCJQTEFOT1wiO1xuY29uc3QgUExBTk9fQ0lUWSA9IFwiUGxhbm9cIjtcbmNvbnN0IFBMQU5PX0NMQVNTID0gXCJjaXR5LVBsYW5vXCI7XG5jb25zdCBQTEFOT19DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgSVJWSU5FID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DSVRZID0gXCJJUlZJTkVcIjtcbmNvbnN0IElSVklORV9DTEFTUyA9IFwiY2l0eS1JcnZpbmVcIjtcbmNvbnN0IElSVklORV9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgTUFESVNPTiA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DSVRZID0gXCJNQURJU09OXCI7XG5jb25zdCBNQURJU09OX0NMQVNTID0gXCJjaXR5LU1hZGlzb25cIjtcbmNvbnN0IE1BRElTT05fQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IEZSRU1PTlQgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0lUWSA9IFwiRlJFTU9OVFwiO1xuY29uc3QgRlJFTU9OVF9DTEFTUyA9IFwiY2l0eS1GcmVtb250XCI7XG5jb25zdCBGUkVNT05UX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBIVU5USU5HVE9OX0JFQUNIID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NJVFkgPSBcIkhVTlRJTkdUT05fQkVBQ0hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MgPSBcImNpdHktSHVudGluZ3Rvbi1CZWFjaFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgRkFSR08gPSBcIkZBUkdPXCI7XG5jb25zdCBGQVJHT19DSVRZID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0xBU1MgPSBcImNpdHktRmFyZ29cIjtcbmNvbnN0IEZBUkdPX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBHUkFORF9QUkFJUklFID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NJVFkgPSBcIkdSQU5EX1BSQUlSSUVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ0xBU1MgPSBcImNpdHktR3JhbmQtUHJhaXJpZVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0pPU0UgPSBcIlNBTl9KT1NFXCI7XG5jb25zdCBTQU5fSk9TRV9DSVRZID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0xBU1MgPSBcImNpdHktU2FuLUpvc2VcIjtcbmNvbnN0IFNBTl9KT1NFX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09UVFNEQUxFID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NJVFkgPSBcIlNDT1RUU0RBTEVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ0xBU1MgPSBcImNpdHktU2NvdHRzZGFsZVwiO1xuY29uc3QgU0NPVFRTREFMRV9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgU0FOX0ZSQU5DSVNDTyA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DSVRZID0gXCJTQU5fRlJBTkNJU0NPXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NMQVNTID0gXCJjaXR5LVNhbi1GcmFuY2lzY29cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IEJJU01BUkNLID0gXCJCSVNNQVJDS1wiO1xuY29uc3QgQklTTUFSQ0tfQ0lUWSA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NMQVNTID0gXCJjaXR5LUJpc21hcmNrXCI7XG5jb25zdCBCSVNNQVJDS19DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgT1ZFUkxBTkRfUEFSSyA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DSVRZID0gXCJPVkVSTEFORF9QQVJLXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NMQVNTID0gXCJjaXR5LU92ZXJsYW5kLVBhcmtcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IFNBTlRBX1JPU0EgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0lUWSA9IFwiU0FOVEFfUk9TQVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DTEFTUyA9IFwiY2l0eS1TYW50YS1Sb3NhXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBBVVNUSU4gPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NJVFkgPSBcIkFVU1RJTlwiO1xuY29uc3QgQVVTVElOX0NMQVNTID0gXCJjaXR5LUF1c3RpblwiO1xuY29uc3QgQVVTVElOX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBTSU9VWF9GQUxMUyA9IFwiU0lPVVhfRkFMTFNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NJVFkgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DTEFTUyA9IFwiY2l0eS1TaW91eC1GYWxsc1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IFBFQVJMX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0lUWSA9IFwiUEVBUkxfQ0lUWVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DTEFTUyA9IFwiY2l0eS1QZWFybC1DaXR5XCI7XG5jb25zdCBQRUFSTF9DSVRZX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBHTEVOREFMRSA9IFwiR0xFTkRBTEVcIjtcbmNvbnN0IEdMRU5EQUxFX0NJVFkgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DTEFTUyA9IFwiY2l0eS1HbGVuZGFsZVwiO1xuY29uc3QgR0xFTkRBTEVfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9ESUVHTyA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0lUWSA9IFwiU0FOX0RJRUdPXCI7XG5jb25zdCBTQU5fRElFR09fQ0xBU1MgPSBcImNpdHktU2FuLURpZWdvXCI7XG5jb25zdCBTQU5fRElFR09fQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IFNUX1BBVUwgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0lUWSA9IFwiU1RfUEFVTFwiO1xuY29uc3QgU1RfUEFVTF9DTEFTUyA9IFwiY2l0eS1TdC1QYXVsXCI7XG5jb25zdCBTVF9QQVVMX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFSTEVTVE9OID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NJVFkgPSBcIkNIQVJMRVNUT05cIjtcbmNvbnN0IENIQVJMRVNUT05fQ0xBU1MgPSBcImNpdHktQ2hhcmxlc3RvblwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgR0lMQkVSVCA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DSVRZID0gXCJHSUxCRVJUXCI7XG5jb25zdCBHSUxCRVJUX0NMQVNTID0gXCJjaXR5LUdpbGJlcnRcIjtcbmNvbnN0IEdJTEJFUlRfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IEFOQUhFSU0gPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0lUWSA9IFwiQU5BSEVJTVwiO1xuY29uc3QgQU5BSEVJTV9DTEFTUyA9IFwiY2l0eS1BbmFoZWltXCI7XG5jb25zdCBBTkFIRUlNX0NPTE9SID0gXCIjOEY5NEZGXCI7XG5cbmV4cG9ydCBjb25zdCBSQUxFSUdIID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NJVFkgPSBcIlJBTEVJR0hcIjtcbmNvbnN0IFJBTEVJR0hfQ0xBU1MgPSBcImNpdHktUmFsZWlnaFwiO1xuY29uc3QgUkFMRUlHSF9DT0xPUiA9IFwiIzhGOTRGRlwiO1xuXG5leHBvcnQgY29uc3QgQ0FQRV9DT1JBTCA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DSVRZID0gXCJDQVBFX0NPUkFMXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NMQVNTID0gXCJjaXR5LUNhcGUtQ29yYWxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IENFREFSX1JBUElEUyA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0lUWSA9IFwiQ0VEQVJfUkFQSURTXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ0xBU1MgPSBcImNpdHktQ2VkYXItUmFwaWRzXCI7XG5jb25zdCBDRURBUl9SQVBJRFNfQ09MT1IgPSBcIiM4Rjk0RkZcIjtcblxuZXhwb3J0IGNvbnN0IENJVElFUyA9IHtcbiAgICAgICAgIFBMQU5POiB7XG4gICAgICAgICAgIGNpdHk6IFBMQU5PX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBQTEFOTyxcbiAgICAgICAgICAgY2xhc3M6IFBMQU5PX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogUExBTk9fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQ5NiwgeTogMzYwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA3Mi4zLFxuICAgICAgICAgICByYW5raW5nOiAxXG4gICAgICAgICB9LFxuICAgICAgICAgSVJWSU5FOiB7XG4gICAgICAgICAgIGNpdHk6IElSVklORV9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogSVJWSU5FLFxuICAgICAgICAgICBjbGFzczogSVJWSU5FX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogSVJWSU5FX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDgsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDYsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxODAsIHk6IDMwMCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzEuODYsXG4gICAgICAgICAgIHJhbmtpbmc6IDJcbiAgICAgICAgIH0sXG4gICAgICAgICBNQURJU09OOiB7XG4gICAgICAgICAgIGNpdHk6IE1BRElTT05fQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IE1BRElTT04sXG4gICAgICAgICAgIGNsYXNzOiBNQURJU09OX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogTUFESVNPTl9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA4LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNCxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjAwLCB5OiAxNjAgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDcxLjgxLFxuICAgICAgICAgICByYW5raW5nOiAzXG4gICAgICAgICB9LFxuICAgICAgICAgRlJFTU9OVDoge1xuICAgICAgICAgICBjaXR5OiBGUkVNT05UX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBGUkVNT05ULFxuICAgICAgICAgICBjbGFzczogRlJFTU9OVF9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEZSRU1PTlRfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNTEsIHk6IDIyNSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzEuMTcsXG4gICAgICAgICAgIHJhbmtpbmc6IDRcbiAgICAgICAgIH0sXG4gICAgICAgICBIVU5USU5HVE9OX0JFQUNIOiB7XG4gICAgICAgICAgIGNpdHk6IEhVTlRJTkdUT05fQkVBQ0hfQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IEhVTlRJTkdUT05fQkVBQ0gsXG4gICAgICAgICAgIGNsYXNzOiBIVU5USU5HVE9OX0JFQUNIX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogSFVOVElOR1RPTl9CRUFDSF9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAzLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyNSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDE1LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNzAsIHk6IDI4MCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjkuNzQsXG4gICAgICAgICAgIHJhbmtpbmc6IDVcbiAgICAgICAgIH0sXG4gICAgICAgICBGQVJHTzoge1xuICAgICAgICAgICBjaXR5OiBGQVJHT19DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogRkFSR08sXG4gICAgICAgICAgIGNsYXNzOiBGQVJHT19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEZBUkdPX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDksXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDExLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTMsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQ5OCwgeTogOTQgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY5LjU3LFxuICAgICAgICAgICByYW5raW5nOiA2XG4gICAgICAgICB9LFxuICAgICAgICAgR1JBTkRfUFJBSVJJRToge1xuICAgICAgICAgICBjaXR5OiBHUkFORF9QUkFJUklFX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBHUkFORF9QUkFJUklFLFxuICAgICAgICAgICBjbGFzczogR1JBTkRfUFJBSVJJRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEdSQU5EX1BSQUlSSUVfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTEsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDE5LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNDk3LCB5OiAzNTAgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY5LjMsXG4gICAgICAgICAgIHJhbmtpbmc6IDdcbiAgICAgICAgIH0sXG4gICAgICAgICBTQU5fSk9TRToge1xuICAgICAgICAgICBjaXR5OiBTQU5fSk9TRV9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogU0FOX0pPU0UsXG4gICAgICAgICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNBTl9KT1NFX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDEwLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE0MCwgeTogMjQwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OC45LFxuICAgICAgICAgICByYW5raW5nOiA4XG4gICAgICAgICB9LFxuICAgICAgICAgU0NPVFRTREFMRToge1xuICAgICAgICAgICBjaXR5OiBTQ09UVFNEQUxFX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBTQ09UVFNEQUxFLFxuICAgICAgICAgICBjbGFzczogU0NPVFRTREFMRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNDT1RUU0RBTEVfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMjUsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDcsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAyNzAsIHk6IDMyMSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjguMjQsXG4gICAgICAgICAgIHJhbmtpbmc6IDlcbiAgICAgICAgIH0sXG4gICAgICAgICBTQU5fRlJBTkNJU0NPOiB7XG4gICAgICAgICAgIGNpdHk6IFNBTl9GUkFOQ0lTQ09fQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IFNBTl9GUkFOQ0lTQ08sXG4gICAgICAgICAgIGNsYXNzOiBTQU5fRlJBTkNJU0NPX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0FOX0ZSQU5DSVNDT19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAxLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNjksXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEzNSwgeTogMjA1IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny41MyxcbiAgICAgICAgICAgcmFua2luZzogMTBcbiAgICAgICAgIH0sXG4gICAgICAgICBCSVNNQVJDSzoge1xuICAgICAgICAgICBjaXR5OiBCSVNNQVJDS19DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogQklTTUFSQ0ssXG4gICAgICAgICAgIGNsYXNzOiBCSVNNQVJDS19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEJJU01BUkNLX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE0LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQ1OCwgeTogMTA2IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zOCxcbiAgICAgICAgICAgcmFua2luZzogMTFcbiAgICAgICAgIH0sXG4gICAgICAgICBPVkVSTEFORF9QQVJLOiB7XG4gICAgICAgICAgIGNpdHk6IE9WRVJMQU5EX1BBUktfQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IE9WRVJMQU5EX1BBUkssXG4gICAgICAgICAgIGNsYXNzOiBPVkVSTEFORF9QQVJLX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogT1ZFUkxBTkRfUEFSS19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMixcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMzEsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxNCxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTI5LCB5OiAyNDggfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY3LjM3LFxuICAgICAgICAgICByYW5raW5nOiAxMlxuICAgICAgICAgfSxcbiAgICAgICAgIFNBTlRBX1JPU0E6IHtcbiAgICAgICAgICAgY2l0eTogU0FOVEFfUk9TQV9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogU0FOVEFfUk9TQSxcbiAgICAgICAgICAgY2xhc3M6IFNBTlRBX1JPU0FfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTQU5UQV9ST1NBX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEzLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyOSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEzNCwgeTogMTgzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xOCxcbiAgICAgICAgICAgcmFua2luZzogMTNcbiAgICAgICAgIH0sXG4gICAgICAgICBBVVNUSU46IHtcbiAgICAgICAgICAgY2l0eTogQVVTVElOX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBBVVNUSU4sXG4gICAgICAgICAgIGNsYXNzOiBBVVNUSU5fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBBVVNUSU5fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQ0LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA0NzcsIHk6IDQxMCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjcuMTYsXG4gICAgICAgICAgIHJhbmtpbmc6IDE0XG4gICAgICAgICB9LFxuICAgICAgICAgU0lPVVhfRkFMTFM6IHtcbiAgICAgICAgICAgY2l0eTogU0lPVVhfRkFMTFNfQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IFNJT1VYX0ZBTExTLFxuICAgICAgICAgICBjbGFzczogU0lPVVhfRkFMTFNfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTSU9VWF9GQUxMU19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA2LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzNyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUyLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1MDAsIHk6IDE2OCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuOTcsXG4gICAgICAgICAgIHJhbmtpbmc6IDE1XG4gICAgICAgICB9LFxuICAgICAgICAgUEVBUkxfQ0lUWToge1xuICAgICAgICAgICBjaXR5OiBQRUFSTF9DSVRZX0NJVFksXG4gICAgICAgICAgIGNvbnN0YW50OiBQRUFSTF9DSVRZLFxuICAgICAgICAgICBjbGFzczogUEVBUkxfQ0lUWV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFBFQVJMX0NJVFlfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogODEsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA4LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzMzAsIHk6IDQ2MSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuNzcsXG4gICAgICAgICAgIHJhbmtpbmc6IDE2XG4gICAgICAgICB9LFxuICAgICAgICAgR0xFTkRBTEU6IHtcbiAgICAgICAgICAgY2l0eTogR0xFTkRBTEVfQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IEdMRU5EQUxFLFxuICAgICAgICAgICBjbGFzczogR0xFTkRBTEVfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBHTEVOREFMRV9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNTYsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA3LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNjcsIHk6IDI2MiB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuMjUsXG4gICAgICAgICAgIHJhbmtpbmc6IDE3XG4gICAgICAgICB9LFxuICAgICAgICAgU0FOX0RJRUdPOiB7XG4gICAgICAgICAgIGNpdHk6IFNBTl9ESUVHT19DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogU0FOX0RJRUdPLFxuICAgICAgICAgICBjbGFzczogU0FOX0RJRUdPX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0FOX0RJRUdPX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDIwLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMjUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6MTg3LCB5OiAzMjEgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY2LjAxLFxuICAgICAgICAgICByYW5raW5nOiAxOFxuICAgICAgICAgfSxcbiAgICAgICAgIFNUX1BBVUw6IHtcbiAgICAgICAgICAgY2l0eTogU1RfUEFVTF9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogU1RfUEFVTCxcbiAgICAgICAgICAgY2xhc3M6IFNUX1BBVUxfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBQTEFOT19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxMCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMzgsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAzNixcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTU1LCB5OiAxMzMgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY1Ljc5LFxuICAgICAgICAgICByYW5raW5nOiAxOVxuICAgICAgICAgfSxcbiAgICAgICAgIENIQVJMRVNUT046IHtcbiAgICAgICAgICAgY2l0eTogQ0hBUkxFU1RPTl9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogQ0hBUkxFU1RPTixcbiAgICAgICAgICAgY2xhc3M6IENIQVJMRVNUT05fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBDSEFSTEVTVE9OX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQxLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNzYwLCB5OiAzNjYgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY1LjQ4LFxuICAgICAgICAgICByYW5raW5nOiAyMFxuICAgICAgICAgfSxcbiAgICAgICAgIEdJTEJFUlQ6IHtcbiAgICAgICAgICAgY2l0eTogR0lMQkVSVF9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogR0lMQkVSVCxcbiAgICAgICAgICAgY2xhc3M6IEdJTEJFUlRfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBHSUxCRVJUX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMwLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyNixcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDI3NywgeTogMzQzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wNyxcbiAgICAgICAgICAgcmFua2luZzogMjFcbiAgICAgICAgIH0sXG4gICAgICAgICBBTkFIRUlNOiB7XG4gICAgICAgICAgIGNpdHk6IEFOQUhFSU1fQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IEFOQUhFSU0sXG4gICAgICAgICAgIGNsYXNzOiBBTkFIRUlNX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQU5BSEVJTV9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAxNixcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNDMsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxOSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTk2LCB5OiAyODIgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY1LjAyLFxuICAgICAgICAgICByYW5raW5nOiAyMlxuICAgICAgICAgfSxcbiAgICAgICAgIFJBTEVJR0g6IHtcbiAgICAgICAgICAgY2l0eTogUkFMRUlHSF9DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogUkFMRUlHSCxcbiAgICAgICAgICAgY2xhc3M6IFJBTEVJR0hfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDcsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDIzLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDgsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDc3MywgeTogMjgzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45OSxcbiAgICAgICAgICAgcmFua2luZzogMjNcbiAgICAgICAgIH0sXG4gICAgICAgICBDQVBFX0NPUkFMOiB7XG4gICAgICAgICAgIGNpdHk6IENBUEVfQ09SQUxfQ0lUWSxcbiAgICAgICAgICAgY29uc3RhbnQ6IENBUEVfQ09SQUwsXG4gICAgICAgICAgIGNsYXNzOiBDQVBFX0NPUkFMX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQ0FQRV9DT1JBTF9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyOCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNDgsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA3NDEsIHk6IDQ1MSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjQuOTYsXG4gICAgICAgICAgIHJhbmtpbmc6IDI0XG4gICAgICAgICB9LFxuICAgICAgICAgQ0VEQVJfUkFQSURTOiB7XG4gICAgICAgICAgIGNpdHk6IENFREFSX1JBUElEU19DSVRZLFxuICAgICAgICAgICBjb25zdGFudDogQ0VEQVJfUkFQSURTLFxuICAgICAgICAgICBjbGFzczogQ0VEQVJfUkFQSURTX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQ0VEQVJfUkFQSURTX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDIzLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzMixcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDExLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA1NjYsIHk6IDE5NCB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjQuOSxcbiAgICAgICAgICAgcmFua2luZzogMjVcbiAgICAgICAgIH1cbiAgICAgICB9O1xuXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fREVMQVkgPSAwO1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSBkMy5lYXNlUG9seTtcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gMjAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDIwMDtcbmV4cG9ydCBjb25zdCBNQVJHSU5TID0gMTAwO1xuIiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIG5ldyBNYXAoJ3N2Zy5tYXAnKTtcbn0pOyIsImltcG9ydCB7XG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbmNsYXNzIE1hcCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMuY2lyY2xlKCk7XG4gICAgdGhpcy5jaXR5TGFiZWwoKTtcbiAgICB0aGlzLnJhbmtpbmcoKTtcbiAgICB0aGlzLnBvaW50ZXIoKTtcbiAgfVxuXG4gIGNpcmNsZSgpIHtcbiAgICB0aGlzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDEwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGQuY29sb3IpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LXBpbnBvaW50YClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IGQucG9zaXRpb24ueSlcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLnBvc2l0aW9uLngpXG4gICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIDEwMClcbiAgICAgIC5zdHlsZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gIH1cblxuICBjaXR5TGFiZWwoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBtYXAtY2l0eS1sYWJlbCBjaXR5ICR7ZC5jbGFzc31gKVxuICAgICAgLnRleHQoZCA9PiBkLmNpdHkpXG4gICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTQpXG4gICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBkLmNvbG9yKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04gLyAxLjUpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHtcbiAgICAgICAgLy8gaWYgKGQuY2l0eSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDkwO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gXCJCb3N0b25cIikge1xuICAgICAgICAvLyAgIHJldHVybiBkLnBvc2l0aW9uLnggLSA3NTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChkLmNpdHkgPT09IFwiUmFsZWlnaFwiKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDgwO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggKyAyNTtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcInlcIiwgZCA9PiBkLnBvc2l0aW9uLnkgKyA1KVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCAxMDApO1xuICB9XG5cbiAgcmFua2luZygpIHtcbiAgICB0aGlzLnN2Z1xuICAgICAgLnNlbGVjdEFsbChcIi5yYW5raW5nXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC50ZXh0KGQgPT4gZC5yYW5raW5nKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTIpXG4gICAgICAuc3R5bGUoXCJmb250LXdlaWdodFwiLCA3MDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LXBpbnBvaW50YClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gZC5wb3NpdGlvbi55ICsgNClcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IGQucG9zaXRpb24ueClcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAuc3R5bGUoJ3otaW5kZXgnLCAxMDApO1xuICB9XG5cbiAgcG9pbnRlcigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwic291cmNlUm9vdCI6IiJ9