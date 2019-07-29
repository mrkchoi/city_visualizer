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
var PLANO_COLOR = "#51eaea";
var IRVINE = "IRVINE";
var IRVINE_CITY = "IRVINE";
var IRVINE_CLASS = "city-Irvine";
var IRVINE_COLOR = "#ff9d76";
var MADISON = "MADISON";
var MADISON_CITY = "MADISON";
var MADISON_CLASS = "city-Madison";
var MADISON_COLOR = "#fb3569";
var FREMONT = "FREMONT";
var FREMONT_CITY = "FREMONT";
var FREMONT_CLASS = "city-Fremont";
var FREMONT_COLOR = "#fa86be";
var HUNTINGTON_BEACH = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CITY = "HUNTINGTON_BEACH";
var HUNTINGTON_BEACH_CLASS = "city-Huntington-Beach";
var HUNTINGTON_BEACH_COLOR = "#a275e3";
var FARGO = "FARGO";
var FARGO_CITY = "FARGO";
var FARGO_CLASS = "city-Fargo";
var FARGO_COLOR = "#ff1f5a";
var GRAND_PRAIRIE = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CITY = "GRAND_PRAIRIE";
var GRAND_PRAIRIE_CLASS = "city-Grand-Prairie";
var GRAND_PRAIRIE_COLOR = "#6900ff";
var SAN_JOSE = "SAN_JOSE";
var SAN_JOSE_CITY = "SAN_JOSE";
var SAN_JOSE_CLASS = "city-San-Jose";
var SAN_JOSE_COLOR = "#ffd700";
var SCOTTSDALE = "SCOTTSDALE";
var SCOTTSDALE_CITY = "SCOTTSDALE";
var SCOTTSDALE_CLASS = "city-Scottsdale";
var SCOTTSDALE_COLOR = "#ff6138";
var SAN_FRANCISCO = "SAN_FRANCISCO";
var SAN_FRANCISCO_CITY = "SAN_FRANCISCO";
var SAN_FRANCISCO_CLASS = "city-San-Francisco";
var SAN_FRANCISCO_COLOR = "#303481";
var BISMARCK = "BISMARCK";
var BISMARCK_CITY = "BISMARCK";
var BISMARCK_CLASS = "city-Bismarck";
var BISMARCK_COLOR = "#7cbd1e";
var OVERLAND_PARK = "OVERLAND_PARK";
var OVERLAND_PARK_CITY = "OVERLAND_PARK";
var OVERLAND_PARK_CLASS = "city-Overland-Park";
var OVERLAND_PARK_COLOR = "#009378";
var SANTA_ROSA = "SANTA_ROSA";
var SANTA_ROSA_CITY = "SANTA_ROSA";
var SANTA_ROSA_CLASS = "city-Santa-Rosa";
var SANTA_ROSA_COLOR = "#f60c86";
var AUSTIN = "AUSTIN";
var AUSTIN_CITY = "AUSTIN";
var AUSTIN_CLASS = "city-Austin";
var AUSTIN_COLOR = "#f9d00f";
var SIOUX_FALLS = "SIOUX_FALLS";
var SIOUX_FALLS_CITY = "SIOUX_FALLS";
var SIOUX_FALLS_CLASS = "city-Sioux-Falls";
var SIOUX_FALLS_COLOR = "#303841";
var PEARL_CITY = "PEARL_CITY";
var PEARL_CITY_CITY = "PEARL_CITY";
var PEARL_CITY_CLASS = "city-Pearl-City";
var PEARL_CITY_COLOR = "#96cd39";
var GLENDALE = "GLENDALE";
var GLENDALE_CITY = "GLENDALE";
var GLENDALE_CLASS = "city-Glendale";
var GLENDALE_COLOR = "#2fc5cc";
var SAN_DIEGO = "SAN_DIEGO";
var SAN_DIEGO_CITY = "SAN_DIEGO";
var SAN_DIEGO_CLASS = "city-San-Diego";
var SAN_DIEGO_COLOR = "#ff5b44";
var ST_PAUL = "ST_PAUL";
var ST_PAUL_CITY = "ST_PAUL";
var ST_PAUL_CLASS = "city-St-Paul";
var ST_PAUL_COLOR = "#bf68f6";
var CHARLESTON = "CHARLESTON";
var CHARLESTON_CITY = "CHARLESTON";
var CHARLESTON_CLASS = "city-Charleston";
var CHARLESTON_COLOR = "#f92727";
var GILBERT = "GILBERT";
var GILBERT_CITY = "GILBERT";
var GILBERT_CLASS = "city-Gilbert";
var GILBERT_COLOR = "#ff0592";
var ANAHEIM = "ANAHEIM";
var ANAHEIM_CITY = "ANAHEIM";
var ANAHEIM_CLASS = "city-Anaheim";
var ANAHEIM_COLOR = "#a58bff";
var RALEIGH = "RALEIGH";
var RALEIGH_CITY = "RALEIGH";
var RALEIGH_CLASS = "city-Raleigh";
var RALEIGH_COLOR = "#009378";
var CAPE_CORAL = "CAPE_CORAL";
var CAPE_CORAL_CITY = "CAPE_CORAL";
var CAPE_CORAL_CLASS = "city-Cape-Coral";
var CAPE_CORAL_COLOR = "#fc345c";
var CEDAR_RAPIDS = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CITY = "CEDAR_RAPIDS";
var CEDAR_RAPIDS_CLASS = "city-Cedar-Rapids";
var CEDAR_RAPIDS_COLOR = "#3d6cb9";
var CITIES = {
  PLANO: {
    city: "Plano",
    constant: PLANO,
    "class": PLANO_CLASS,
    color: PLANO_COLOR,
    emotionalWellbeing: 4,
    incomeEmployment: 3,
    communityEnvironment: 4,
    position: {
      x: 526,
      y: 390
    },
    happinessScore: 72.3,
    ranking: 1
  },
  IRVINE: {
    city: "Irvine",
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
    city: "Madison",
    constant: MADISON,
    "class": MADISON_CLASS,
    color: MADISON_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 8,
    communityEnvironment: 4,
    position: {
      x: 640,
      y: 160
    },
    happinessScore: 71.81,
    ranking: 3
  },
  FREMONT: {
    city: "Fremont",
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
    city: "Huntington Beach",
    constant: HUNTINGTON_BEACH,
    "class": HUNTINGTON_BEACH_CLASS,
    color: HUNTINGTON_BEACH_COLOR,
    emotionalWellbeing: 3,
    incomeEmployment: 25,
    communityEnvironment: 15,
    position: {
      x: 159,
      y: 290
    },
    happinessScore: 69.74,
    ranking: 5
  },
  FARGO: {
    city: "Fargo",
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
    city: "Grand Prairie",
    constant: GRAND_PRAIRIE,
    "class": GRAND_PRAIRIE_CLASS,
    color: GRAND_PRAIRIE_COLOR,
    emotionalWellbeing: 11,
    incomeEmployment: 19,
    communityEnvironment: 3,
    position: {
      x: 525,
      y: 410
    },
    happinessScore: 69.3,
    ranking: 7
  },
  SAN_JOSE: {
    city: "San Jose",
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
    city: "Scottsdale",
    constant: SCOTTSDALE,
    "class": SCOTTSDALE_CLASS,
    color: SCOTTSDALE_COLOR,
    emotionalWellbeing: 25,
    incomeEmployment: 7,
    communityEnvironment: 1,
    position: {
      x: 270,
      y: 341
    },
    happinessScore: 68.24,
    ranking: 9
  },
  SAN_FRANCISCO: {
    city: "San Francisco",
    constant: SAN_FRANCISCO,
    "class": SAN_FRANCISCO_CLASS,
    color: SAN_FRANCISCO_COLOR,
    emotionalWellbeing: 2,
    incomeEmployment: 1,
    communityEnvironment: 69,
    position: {
      x: 136,
      y: 212
    },
    happinessScore: 67.53,
    ranking: 10
  },
  BISMARCK: {
    city: "Bismarck",
    constant: BISMARCK,
    "class": BISMARCK_CLASS,
    color: BISMARCK_COLOR,
    emotionalWellbeing: 14,
    incomeEmployment: 2,
    communityEnvironment: 25,
    position: {
      x: 478,
      y: 106
    },
    happinessScore: 67.38,
    ranking: 11
  },
  OVERLAND_PARK: {
    city: "Overland Park",
    constant: OVERLAND_PARK,
    "class": OVERLAND_PARK_CLASS,
    color: OVERLAND_PARK_COLOR,
    emotionalWellbeing: 12,
    incomeEmployment: 31,
    communityEnvironment: 14,
    position: {
      x: 570,
      y: 278
    },
    happinessScore: 67.37,
    ranking: 12
  },
  SANTA_ROSA: {
    city: "Santa Rosa",
    constant: SANTA_ROSA,
    "class": SANTA_ROSA_CLASS,
    color: SANTA_ROSA_COLOR,
    emotionalWellbeing: 13,
    incomeEmployment: 29,
    communityEnvironment: 5,
    position: {
      x: 132,
      y: 196
    },
    happinessScore: 67.18,
    ranking: 13
  },
  AUSTIN: {
    city: "Austin",
    constant: AUSTIN,
    "class": AUSTIN_CLASS,
    color: AUSTIN_COLOR,
    emotionalWellbeing: 8,
    incomeEmployment: 4,
    communityEnvironment: 44,
    position: {
      x: 497,
      y: 430
    },
    happinessScore: 67.16,
    ranking: 14
  },
  SIOUX_FALLS: {
    city: "Sioux Falls",
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
    city: "Pearl City",
    constant: PEARL_CITY,
    "class": PEARL_CITY_CLASS,
    color: PEARL_CITY_COLOR,
    emotionalWellbeing: 1,
    incomeEmployment: 81,
    communityEnvironment: 8,
    position: {
      x: 350,
      y: 491
    },
    happinessScore: 66.77,
    ranking: 16
  },
  GLENDALE: {
    city: "Glendale",
    constant: GLENDALE,
    "class": GLENDALE_CLASS,
    color: GLENDALE_COLOR,
    emotionalWellbeing: 15,
    incomeEmployment: 56,
    communityEnvironment: 7,
    position: {
      x: 167,
      y: 272
    },
    happinessScore: 66.25,
    ranking: 17
  },
  SAN_DIEGO: {
    city: "San Diego",
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
    city: "St. Paul",
    constant: ST_PAUL,
    "class": ST_PAUL_CLASS,
    color: ST_PAUL_COLOR,
    emotionalWellbeing: 10,
    incomeEmployment: 38,
    communityEnvironment: 36,
    position: {
      x: 590,
      y: 133
    },
    happinessScore: 65.79,
    ranking: 19
  },
  CHARLESTON: {
    city: "Charleston",
    constant: CHARLESTON,
    "class": CHARLESTON_CLASS,
    color: CHARLESTON_COLOR,
    emotionalWellbeing: 41,
    incomeEmployment: 3,
    communityEnvironment: 2,
    position: {
      x: 805,
      y: 400
    },
    happinessScore: 65.48,
    ranking: 20
  },
  GILBERT: {
    city: "Gilbert",
    constant: GILBERT,
    "class": GILBERT_CLASS,
    color: GILBERT_COLOR,
    emotionalWellbeing: 30,
    incomeEmployment: 26,
    communityEnvironment: 5,
    position: {
      x: 277,
      y: 363
    },
    happinessScore: 65.07,
    ranking: 21
  },
  ANAHEIM: {
    city: "Anaheim",
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
    city: "Raleigh",
    constant: RALEIGH,
    "class": RALEIGH_CLASS,
    color: RALEIGH_COLOR,
    emotionalWellbeing: 7,
    incomeEmployment: 23,
    communityEnvironment: 48,
    position: {
      x: 830,
      y: 313
    },
    happinessScore: 64.99,
    ranking: 23
  },
  CAPE_CORAL: {
    city: "Cape Coral",
    constant: CAPE_CORAL,
    "class": CAPE_CORAL_CLASS,
    color: CAPE_CORAL_COLOR,
    emotionalWellbeing: 28,
    incomeEmployment: 48,
    communityEnvironment: 2,
    position: {
      x: 800,
      y: 480
    },
    happinessScore: 64.96,
    ranking: 24
  },
  CEDAR_RAPIDS: {
    city: "Cedar Rapids",
    constant: CEDAR_RAPIDS,
    "class": CEDAR_RAPIDS_CLASS,
    color: CEDAR_RAPIDS_COLOR,
    emotionalWellbeing: 23,
    incomeEmployment: 32,
    communityEnvironment: 11,
    position: {
      x: 600,
      y: 205
    },
    happinessScore: 64.9,
    ranking: 25
  }
};
var ANIMATION_DURATION = 1000;
var ANIMATION_DELAY = 0;
var ANIMATION_EASING = d3.easePoly;
var WIDTH = 900;
var HEIGHT = 500;
var MARGINS = 100; // export const SAN_FRANCISCO = "SAN_FRANCISCO";
// const SAN_FRANCISCO_CITY = "San Francisco";
// const SAN_FRANCISCO_CLASS = "city-San-Francisco";
// const SAN_FRANCISCO_COLOR = "#f1c40f";
// export const NEW_YORK = "NEW_YORK";
// const NEW_YORK_CITY = "New York";
// const NEW_YORK_CLASS = "city-New-York";
// const NEW_YORK_COLOR = "#2980b9";
// export const BOSTON = "BOSTON";
// const BOSTON_CITY = "Boston";
// const BOSTON_CLASS = "city-Boston";
// const BOSTON_COLOR = "#e74c3c";
// export const PORTLAND = "PORTLAND";
// const PORTLAND_CITY = "Portland";
// const PORTLAND_CLASS = "city-Portland";
// const PORTLAND_COLOR = "#FD971F";
// export const SEATTLE = "SEATTLE";
// const SEATTLE_CITY = "Seattle";
// const SEATTLE_CLASS = "city-Seattle";
// const SEATTLE_COLOR = "#F92672";
// export const AUSTIN = "AUSTIN";
// const AUSTIN_CITY = "Austin";
// const AUSTIN_CLASS = "city-Austin";
// const AUSTIN_COLOR = "#A6E22E";
// export const SAN_JOSE = "SAN_JOSE";
// const SAN_JOSE_CITY = "San Jose";
// const SAN_JOSE_CLASS = "city-San-Jose";
// const SAN_JOSE_COLOR = "#9b59b6";
// export const RALEIGH = "RALEIGH";
// const RALEIGH_CITY = "Raleigh";
// const RALEIGH_CLASS = "city-Raleigh";
// const RALEIGH_COLOR = "#f39c12";
// export const DENVER = "DENVER";
// const DENVER_CITY = "Denver";
// const DENVER_CLASS = "city-Denver";
// const DENVER_COLOR = "#66D9EF";
// export const PHOENIX = "PHOENIX";
// const PHOENIX_CITY = "Phoenix";
// const PHOENIX_CLASS = "city-Phoenix";
// const PHOENIX_COLOR = "#c0392b";
// // happinessRank: https://wallethub.com/edu/happiest-places-to-live/32619/
// // jobs: indeed search - software engineer w/ exact location only 3/24/2019
// // salary: https://www.glassdoor.com/blog/25-best-paying-cities-software-engineers/
// const calculateRanking = cities => {
//   return 0;
// };
// export const CITIES = {
//   SAN_FRANCISCO: {
//     adjustedSalary: 99751,
//     city: SAN_FRANCISCO_CITY,
//     color: SAN_FRANCISCO_COLOR,
//     constant: SAN_FRANCISCO,
//     class: SAN_FRANCISCO_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.41 },
//       { ethnicity: "Asian", percentage: 0.33 },
//       { ethnicity: "Hispanic", percentage: 0.15 },
//       { ethnicity: "Black", percentage: 0.05 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 2130 },
//       { type: "1BR", price: 2639 },
//       { type: "2BR", price: 3286 },
//       { type: "3BR", price: 4291 },
//       { type: "4BR", price: 4567 }
//     ],
//     happinessRank: 10,
//     medianHomePrice: 1331100,
//     medianSalary: 120000,
//     jobs: 7947,
//     position: { x: 20, y: 160 },
//     sunnyDays: 256,
//     points: 0
//   },
//   NEW_YORK: {
//     adjustedSalary: 100000,
//     city: NEW_YORK_CITY,
//     color: NEW_YORK_COLOR,
//     constant: NEW_YORK,
//     class: NEW_YORK_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.32 },
//       { ethnicity: "Asian", percentage: 0.13 },
//       { ethnicity: "Hispanic", percentage: 0.28 },
//       { ethnicity: "Black", percentage: 0.22 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1743 },
//       { type: "1BR", price: 1788 },
//       { type: "2BR", price: 2049 },
//       { type: "3BR", price: 2600 },
//       { type: "4BR", price: 2771 }
//     ],
//     happinessRank: 90,
//     medianHomePrice: 662100,
//     medianSalary: 110000,
//     jobs: 8364,
//     position: { x: 625, y: 135 },
//     sunnyDays: 224,
//     points: 0
//   },
//   BOSTON: {
//     adjustedSalary: 90171,
//     city: BOSTON_CITY,
//     color: BOSTON_COLOR,
//     constant: BOSTON,
//     class: BOSTON_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.46 },
//       { ethnicity: "Asian", percentage: 0.09 },
//       { ethnicity: "Hispanic", percentage: 0.18 },
//       { ethnicity: "Black", percentage: 0.22 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1639 },
//       { type: "1BR", price: 1836 },
//       { type: "2BR", price: 2238 },
//       { type: "3BR", price: 2805 },
//       { type: "4BR", price: 3027 }
//     ],
//     happinessRank: 58,
//     medianHomePrice: 587000,
//     medianSalary: 100000,
//     jobs: 3630,
//     position: { x: 650, y: 100 },
//     sunnyDays: 200,
//     points: 0
//   },
//   PORTLAND: {
//     adjustedSalary: 89374,
//     city: PORTLAND_CITY,
//     color: PORTLAND_COLOR,
//     constant: PORTLAND,
//     class: PORTLAND_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.71 },
//       { ethnicity: "Asian", percentage: 0.07 },
//       { ethnicity: "Hispanic", percentage: 0.09 },
//       { ethnicity: "Black", percentage: 0.05 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1123 },
//       { type: "1BR", price: 1225 },
//       { type: "2BR", price: 1432 },
//       { type: "3BR", price: 2073 },
//       { type: "4BR", price: 2516 }
//     ],
//     happinessRank: 84,
//     medianHomePrice: 427500,
//     medianSalary: 90000,
//     jobs: 2359,
//     position: { x: 45, y: 90 },
//     sunnyDays: 144,
//     points: 0
//   },
//   SEATTLE: {
//     adjustedSalary: 105735,
//     city: SEATTLE_CITY,
//     color: SEATTLE_COLOR,
//     constant: SEATTLE,
//     class: SEATTLE_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.66 },
//       { ethnicity: "Asian", percentage: 0.14 },
//       { ethnicity: "Hispanic", percentage: 0.06 },
//       { ethnicity: "Black", percentage: 0.07 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1570 },
//       { type: "1BR", price: 1728 },
//       { type: "2BR", price: 2108 },
//       { type: "3BR", price: 3033 },
//       { type: "4BR", price: 3583 }
//     ],
//     happinessRank: 54,
//     medianHomePrice: 761800,
//     medianSalary: 113242,
//     jobs: 10417,
//     position: { x: 45, y: 40 },
//     sunnyDays: 152,
//     points: 0
//   },
//   AUSTIN: {
//     adjustedSalary: 90171,
//     city: AUSTIN_CITY,
//     color: AUSTIN_COLOR,
//     constant: AUSTIN,
//     class: AUSTIN_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.48 },
//       { ethnicity: "Asian", percentage: 0.06 },
//       { ethnicity: "Hispanic", percentage: 0.34 },
//       { ethnicity: "Black", percentage: 0.07 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1017 },
//       { type: "1BR", price: 1186 },
//       { type: "2BR", price: 1437 },
//       { type: "3BR", price: 1897 },
//       { type: "4BR", price: 2294 }
//     ],
//     happinessRank: 14,
//     medianHomePrice: 346500,
//     medianSalary: 100000,
//     jobs: 4308,
//     position: { x: 320, y: 350 },
//     sunnyDays: 228,
//     points: 0
//   },
//   SAN_JOSE: {
//     adjustedSalary: 100989,
//     city: SAN_JOSE_CITY,
//     color: SAN_JOSE_COLOR,
//     constant: SAN_JOSE,
//     class: SAN_JOSE_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.27 },
//       { ethnicity: "Asian", percentage: 0.32 },
//       { ethnicity: "Hispanic", percentage: 0.33 },
//       { ethnicity: "Black", percentage: 0.02 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1927 },
//       { type: "1BR", price: 2286 },
//       { type: "2BR", price: 2807 },
//       { type: "3BR", price: 3797 },
//       { type: "4BR", price: 4350 }
//     ],
//     happinessRank: 8,
//     medianHomePrice: 1083000,
//     medianSalary: 122500,
//     jobs: 3023,
//     position: { x: 35, y: 190 },
//     sunnyDays: 204,
//     points: 0
//   },
//   RALEIGH: {
//     adjustedSalary: 90000,
//     city: RALEIGH_CITY,
//     color: RALEIGH_COLOR,
//     constant: RALEIGH,
//     class: RALEIGH_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.54 },
//       { ethnicity: "Asian", percentage: 0.04 },
//       { ethnicity: "Hispanic", percentage: 0.1 },
//       { ethnicity: "Black", percentage: 0.28 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 868 },
//       { type: "1BR", price: 975 },
//       { type: "2BR", price: 1115 },
//       { type: "3BR", price: 1435 },
//       { type: "4BR", price: 1811 }
//     ],
//     happinessRank: 23,
//     medianHomePrice: 260100,
//     medianSalary: 94142,
//     jobs: 1377,
//     position: { x: 600, y: 210 },
//     sunnyDays: 213,
//     points: 0
//   },
//   DENVER: {
//     adjustedSalary: 85878,
//     city: DENVER_CITY,
//     color: DENVER_COLOR,
//     constant: DENVER,
//     class: DENVER_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.52 },
//       { ethnicity: "Asian", percentage: 0.03 },
//       { ethnicity: "Hispanic", percentage: 0.31 },
//       { ethnicity: "Black", percentage: 0.09 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 1083 },
//       { type: "1BR", price: 1265 },
//       { type: "2BR", price: 1585 },
//       { type: "3BR", price: 2231 },
//       { type: "4BR", price: 2588 }
//     ],
//     happinessRank: 41,
//     medianHomePrice: 421900,
//     medianSalary: 90000,
//     jobs: 1973,
//     position: { x: 250, y: 170 },
//     sunnyDays: 245,
//     points: 0
//   },
//   PHOENIX: {
//     adjustedSalary: 86765,
//     city: PHOENIX_CITY,
//     color: PHOENIX_COLOR,
//     constant: PHOENIX,
//     class: PHOENIX_CLASS,
//     diversity: [
//       { ethnicity: "White", percentage: 0.46 },
//       { ethnicity: "Asian", percentage: 0.03 },
//       { ethnicity: "Hispanic", percentage: 0.4 },
//       { ethnicity: "Black", percentage: 0.06 }
//     ],
//     rentalCosts: [
//       { type: "Studio", price: 793 },
//       { type: "1BR", price: 928 },
//       { type: "2BR", price: 1147 },
//       { type: "3BR", price: 1659 },
//       { type: "4BR", price: 1900 }
//     ],
//     happinessRank: 127,
//     medianHomePrice: 229300,
//     medianSalary: 87997,
//     jobs: 1491,
//     position: { x: 150, y: 255 },
//     sunnyDays: 299,
//     points: 0
//   }
// };
// export const ANIMATION_DURATION = 1000;
// export const ANIMATION_DELAY = 0;
// export const ANIMATION_EASING = d3.easePoly;
// export const WIDTH = 900;
// export const HEIGHT = 500;
// export const MARGINS = 100;

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this.filterData();
  }

  _createClass(Filter, [{
    key: "filterData",
    value: function filterData() {
      var tooltip = d3.select(".header__tooltip").append("div").style("opacity", 0).attr("class", "tooltip").style("background-color", "white") // .style("position", "absolute")
      .style("border", "solid").style("border-width", "2px").style("border-radius", "5px").style("padding", "1rem");
      d3.selectAll('.city').on('mouseover', function (d, i) {
        var className;

        if (typeof d === 'string') {
          className = "city-".concat(d.split(' ').join('-'));
        } else if (d.data) {
          className = d.data["class"];
        } else {
          className = d["class"];
        }

        var allOtherCityData = document.querySelectorAll(".city:not(.".concat(className, ")"));
        allOtherCityData.forEach(function (data) {
          data.classList.add('filter');
        }); // tooltip  

        tooltip.style("opacity", 1).style("stroke", "black").html("\n              <div class=\"tooltip__inner\">\n                <p class=\"tooltip__city\"><strong>City:</strong> ".concat(d.city, "</p>\n                <p class=\"tooltip__detail\"><strong>Overall Rank:</strong> ").concat(d.ranking, "</p>\n                <p class=\"tooltip__detail\"><strong>Total Happiness Score:</strong> ").concat(d.happinessScore, "</p>\n                <p class=\"tooltip__detail\"><strong>Emotional & Physical Well-Being:</strong> ").concat(d.emotionalWellbeing, "</p>\n                <p class=\"tooltip__detail\"><strong>Income & Employment:</strong> ").concat(d.incomeEmployment, "</p>\n                <p class=\"tooltip__detail\"><strong>Community & Environment:</strong> ").concat(d.communityEnvironment, "</p>\n              </div>\n            ")); // if available, show toggleable data

        var toggleableData = document.querySelectorAll(".".concat(className, ".city-data-toggle"));
        toggleableData.forEach(function (data) {
          data.classList.add('show');
        });
      }).on('mouseleave', function () {
        var allCityData = document.querySelectorAll('.city');
        allCityData.forEach(function (data) {
          data.classList.remove('filter');
        }); // if available, hide toggleble data

        var toggleableData = document.querySelectorAll(".city-data-toggle");
        toggleableData.forEach(function (data) {
          data.classList.remove('show');
        });
      });
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/filter.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
// import _ from 'lodash';


document.addEventListener("DOMContentLoaded", function () {
  new _map__WEBPACK_IMPORTED_MODULE_1__["default"]('svg.map');
  new _filter__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
        if (d.city === "San Francisco") {
          return d.position.x - 110;
        } else if (d.city === "San Jose") {
          return d.position.x - 78;
        } else if (d.city === "Huntington Beach") {
          return d.position.x - 140;
        } else if (d.city === 'San Diego') {
          return d.position.x - 85;
        } else if (d.city === 'Bismarck') {
          return d.position.x - 85;
        } else if (d.city === 'Plano') {
          return d.position.x - 55;
        } else if (d.city === 'Sioux Falls') {
          return d.position.x - 90;
        } else if (d.city === 'Glendale') {
          return d.position.x - 75;
        }

        return d.position.x + 15;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyJdLCJuYW1lcyI6WyJDaGFydCIsInNlbGVjdG9yIiwib3B0aW9ucyIsInNldENoYXJ0Iiwic2V0RGF0YSIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJIRUlHSFQiLCJNQVJHSU5TIiwiV0lEVEgiLCJjaGFydCIsImFwcGVuZCIsImRhdGEiLCJDSVRJRVMiLCJkb21haW4iLCJ4U2NhbGUiLCJ0aWNrcyIsInRvY2tGb3JtYXQiLCJyYW5nZSIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsInlTY2FsZSIsInBhZGRpbmciLCJheGlzTGVmdCIsInNjYWxlIiwicG9zaXRpb24iLCJ0aWNrU2l6ZSIsInRleHQiLCJzZWxlY3RBbGwiLCJzb3J0ZWREYXRhIiwiZW50ZXIiLCJkIiwiY2l0eSIsInN0eWxlIiwiaSIsIlBMQU5PIiwiUExBTk9fQ0lUWSIsIlBMQU5PX0NMQVNTIiwiUExBTk9fQ09MT1IiLCJJUlZJTkUiLCJJUlZJTkVfQ0lUWSIsIklSVklORV9DTEFTUyIsIklSVklORV9DT0xPUiIsIk1BRElTT04iLCJNQURJU09OX0NJVFkiLCJNQURJU09OX0NMQVNTIiwiTUFESVNPTl9DT0xPUiIsIkZSRU1PTlQiLCJGUkVNT05UX0NJVFkiLCJGUkVNT05UX0NMQVNTIiwiRlJFTU9OVF9DT0xPUiIsIkhVTlRJTkdUT05fQkVBQ0giLCJIVU5USU5HVE9OX0JFQUNIX0NJVFkiLCJIVU5USU5HVE9OX0JFQUNIX0NMQVNTIiwiSFVOVElOR1RPTl9CRUFDSF9DT0xPUiIsIkZBUkdPIiwiRkFSR09fQ0lUWSIsIkZBUkdPX0NMQVNTIiwiRkFSR09fQ09MT1IiLCJHUkFORF9QUkFJUklFIiwiR1JBTkRfUFJBSVJJRV9DSVRZIiwiR1JBTkRfUFJBSVJJRV9DTEFTUyIsIkdSQU5EX1BSQUlSSUVfQ09MT1IiLCJTQU5fSk9TRSIsIlNBTl9KT1NFX0NJVFkiLCJTQU5fSk9TRV9DTEFTUyIsIlNBTl9KT1NFX0NPTE9SIiwiU0NPVFRTREFMRSIsIlNDT1RUU0RBTEVfQ0lUWSIsIlNDT1RUU0RBTEVfQ0xBU1MiLCJTQ09UVFNEQUxFX0NPTE9SIiwiU0FOX0ZSQU5DSVNDTyIsIlNBTl9GUkFOQ0lTQ09fQ0lUWSIsIlNBTl9GUkFOQ0lTQ09fQ0xBU1MiLCJTQU5fRlJBTkNJU0NPX0NPTE9SIiwiQklTTUFSQ0siLCJCSVNNQVJDS19DSVRZIiwiQklTTUFSQ0tfQ0xBU1MiLCJCSVNNQVJDS19DT0xPUiIsIk9WRVJMQU5EX1BBUksiLCJPVkVSTEFORF9QQVJLX0NJVFkiLCJPVkVSTEFORF9QQVJLX0NMQVNTIiwiT1ZFUkxBTkRfUEFSS19DT0xPUiIsIlNBTlRBX1JPU0EiLCJTQU5UQV9ST1NBX0NJVFkiLCJTQU5UQV9ST1NBX0NMQVNTIiwiU0FOVEFfUk9TQV9DT0xPUiIsIkFVU1RJTiIsIkFVU1RJTl9DSVRZIiwiQVVTVElOX0NMQVNTIiwiQVVTVElOX0NPTE9SIiwiU0lPVVhfRkFMTFMiLCJTSU9VWF9GQUxMU19DSVRZIiwiU0lPVVhfRkFMTFNfQ0xBU1MiLCJTSU9VWF9GQUxMU19DT0xPUiIsIlBFQVJMX0NJVFkiLCJQRUFSTF9DSVRZX0NJVFkiLCJQRUFSTF9DSVRZX0NMQVNTIiwiUEVBUkxfQ0lUWV9DT0xPUiIsIkdMRU5EQUxFIiwiR0xFTkRBTEVfQ0lUWSIsIkdMRU5EQUxFX0NMQVNTIiwiR0xFTkRBTEVfQ09MT1IiLCJTQU5fRElFR08iLCJTQU5fRElFR09fQ0lUWSIsIlNBTl9ESUVHT19DTEFTUyIsIlNBTl9ESUVHT19DT0xPUiIsIlNUX1BBVUwiLCJTVF9QQVVMX0NJVFkiLCJTVF9QQVVMX0NMQVNTIiwiU1RfUEFVTF9DT0xPUiIsIkNIQVJMRVNUT04iLCJDSEFSTEVTVE9OX0NJVFkiLCJDSEFSTEVTVE9OX0NMQVNTIiwiQ0hBUkxFU1RPTl9DT0xPUiIsIkdJTEJFUlQiLCJHSUxCRVJUX0NJVFkiLCJHSUxCRVJUX0NMQVNTIiwiR0lMQkVSVF9DT0xPUiIsIkFOQUhFSU0iLCJBTkFIRUlNX0NJVFkiLCJBTkFIRUlNX0NMQVNTIiwiQU5BSEVJTV9DT0xPUiIsIlJBTEVJR0giLCJSQUxFSUdIX0NJVFkiLCJSQUxFSUdIX0NMQVNTIiwiUkFMRUlHSF9DT0xPUiIsIkNBUEVfQ09SQUwiLCJDQVBFX0NPUkFMX0NJVFkiLCJDQVBFX0NPUkFMX0NMQVNTIiwiQ0FQRV9DT1JBTF9DT0xPUiIsIkNFREFSX1JBUElEUyIsIkNFREFSX1JBUElEU19DSVRZIiwiQ0VEQVJfUkFQSURTX0NMQVNTIiwiQ0VEQVJfUkFQSURTX0NPTE9SIiwiY29uc3RhbnQiLCJjb2xvciIsImVtb3Rpb25hbFdlbGxiZWluZyIsImluY29tZUVtcGxveW1lbnQiLCJjb21tdW5pdHlFbnZpcm9ubWVudCIsIngiLCJ5IiwiaGFwcGluZXNzU2NvcmUiLCJyYW5raW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiQU5JTUFUSU9OX0RFTEFZIiwiQU5JTUFUSU9OX0VBU0lORyIsImVhc2VQb2x5IiwiRmlsdGVyIiwiZmlsdGVyRGF0YSIsInRvb2x0aXAiLCJvbiIsImNsYXNzTmFtZSIsInNwbGl0Iiwiam9pbiIsImFsbE90aGVyQ2l0eURhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiaHRtbCIsInRvZ2dsZWFibGVEYXRhIiwiYWxsQ2l0eURhdGEiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFwIiwiY2lyY2xlIiwiY2l0eUxhYmVsIiwicG9pbnRlciIsIk9iamVjdCIsInZhbHVlcyIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNB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LEdBQUcsR0FBaEIsQyxDQVFQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QixPQU5qQixFQU9HQSxLQVBILENBT1MsV0FQVCxFQU9zQixFQVB0QixFQVFHQSxLQVJILENBUVMsYUFSVCxFQVF3QixHQVJ4QixFQVNHNUIsSUFUSCxDQVNRLE9BVFIsRUFTaUIsVUFBQTBCLENBQUM7QUFBQSw4QkFBWUEsQ0FBQyxTQUFiO0FBQUEsT0FUbEIsRUFVRzZJLFVBVkgsR0FXR0MsSUFYSCxDQVdRM0IsMkRBWFIsRUFZRzRCLFFBWkgsQ0FZWTlCLDZEQVpaLEVBYUczSSxJQWJILENBYVEsR0FiUixFQWFhLFVBQUEwQixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDTixRQUFGLENBQVdvSCxDQUFYLEdBQWUsQ0FBbkI7QUFBQSxPQWJkLEVBY0d4SSxJQWRILENBY1EsR0FkUixFQWNhLFVBQUEwQixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDTixRQUFGLENBQVdtSCxDQUFmO0FBQUEsT0FkZCxFQWVHM0csS0FmSCxDQWVTLGFBZlQsRUFld0IsUUFmeEIsRUFnQkdBLEtBaEJILENBZ0JTLFNBaEJULEVBZ0JvQixHQWhCcEI7QUFpQkQ7Ozs4QkFFUyxDQUFFOzs7O0VBeEZJdEMsOEM7O0FBMkZIMkssa0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBIRUlHSFQsXG4gIE1BUkdJTlMsXG4gIFdJRFRILFxuICBBTklNQVRJT05fRFVSQVRJT04sXG4gIEFOSU1BVElPTl9ERUxBWSxcbiAgQU5JTUFUSU9OX0VBU0lORyxcbiAgQ0lUSUVTXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0RGF0YSgpO1xuICB9XG5cbiAgc2V0Q2hhcnQoc2VsZWN0b3IsIG9wdGlvbnMgPSB7IHRvcE9mZnNldDogMCwgbGVmdE9mZnNldDogMCB9KSB7XG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIEhFSUdIVCArIE1BUkdJTlMgKiAyKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgV0lEVEggKyBNQVJHSU5TICogMilcbiAgICB0aGlzLmNoYXJ0ID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke01BUkdJTlMgKyBvcHRpb25zLmxlZnRPZmZzZXR9LCAke01BUkdJTlMgLyAyICsgb3B0aW9ucy50b3BPZmZzZXR9KWApO1xuICB9XG5cbiAgc2V0RGF0YSgpIHtcbiAgICB0aGlzLmRhdGEgPSBDSVRJRVM7XG4gIH1cblxuICB4QXhpcyhkb21haW4sIHhTY2FsZSwgdGlja3MgPSA1LCB0b2NrRm9ybWF0ID0gKCkgPT4ge30pIHtcbiAgICB0aGlzLnhTY2FsZSA9IGQzW3hTY2FsZV0oKVxuICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcblxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmNhbGwoYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkpXG4gICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgLnRpY2tGb3JtYXQodGlja0Zvcm1hdCgpKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApO1xuICB9XG5cbiAgeUF4aXMoZG9tYWluLCB5U2NhbGUsIHRpY2tzID0gNSwgdGlja0Zvcm1hdCA9ICgpID0+IHt9KSB7XG4gICAgaWYgKHlTY2FsZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMueVNjYWxlID0gZDNbeVNjYWxlXSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgICAgLnBhZGRpbmcoMC44KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnlTY2FsZSA9IGQzW3lTY2FsZV0oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgfVxuICAgIFxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNMZWZ0KHRoaXMueVNjYWxlKVxuICAgICAgICAgIC50aWNrcyh0aWNrcylcbiAgICAgICAgICAudGlja0Zvcm1hdCh0aWNrRm9ybWF0KCkpXG4gICAgICApXG4gIH1cblxuICBncmlkTGluZXMoc2NhbGUsIHBvc2l0aW9uLCB0aWNrcyA9IDUpIHtcbiAgICB0aGlzLmNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZ3JpZCcpXG4gICAgICAuY2FsbChkM1twb3NpdGlvbl0pKClcbiAgICAgICAgLnNjYWxlKHNjYWxlKVxuICAgICAgICAudGlja1NpemUoV0lEVEgsIDAsIDApXG4gICAgICAgIC50aWNrRm9ybWF0KCcnKVxuICAgICAgICAudGlja3ModGlja3MpO1xuICB9XG5cbiAgcmVjdGFuZ2xlTGFiZWxzKHRleHQpIHtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKClcbiAgICAgIC5kYXRhKHRoaXMuc29ydGVkRGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBiYXItbGFiZWwgY2l0eS1kYXRhLXRvZ2dsZWApXG4gICAgICAuYXR0cigneCcsIDUpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55U2NhbGUoZC5jaXR5KSAtIDIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnI2ZmZicpXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGRbdGV4dF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQuY2FsbChkLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gIH1cblxuICBsYWJlbFRvcCh0ZXh0KSB7XG4gICAgdGhpcy5jaGFydFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtdGV4dCcpXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5hdHRyKCd4JywgV0lEVEggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAtMjApXG4gICAgICAudGV4dCh0ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiIsImV4cG9ydCBjb25zdCBQTEFOTyA9IFwiUExBTk9cIjtcbmNvbnN0IFBMQU5PX0NJVFkgPSBcIlBsYW5vXCI7XG5jb25zdCBQTEFOT19DTEFTUyA9IFwiY2l0eS1QbGFub1wiO1xuY29uc3QgUExBTk9fQ09MT1IgPSBcIiM1MWVhZWFcIjtcblxuZXhwb3J0IGNvbnN0IElSVklORSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0lUWSA9IFwiSVJWSU5FXCI7XG5jb25zdCBJUlZJTkVfQ0xBU1MgPSBcImNpdHktSXJ2aW5lXCI7XG5jb25zdCBJUlZJTkVfQ09MT1IgPSBcIiNmZjlkNzZcIjtcblxuZXhwb3J0IGNvbnN0IE1BRElTT04gPSBcIk1BRElTT05cIjtcbmNvbnN0IE1BRElTT05fQ0lUWSA9IFwiTUFESVNPTlwiO1xuY29uc3QgTUFESVNPTl9DTEFTUyA9IFwiY2l0eS1NYWRpc29uXCI7XG5jb25zdCBNQURJU09OX0NPTE9SID0gXCIjZmIzNTY5XCI7XG5cbmV4cG9ydCBjb25zdCBGUkVNT05UID0gXCJGUkVNT05UXCI7XG5jb25zdCBGUkVNT05UX0NJVFkgPSBcIkZSRU1PTlRcIjtcbmNvbnN0IEZSRU1PTlRfQ0xBU1MgPSBcImNpdHktRnJlbW9udFwiO1xuY29uc3QgRlJFTU9OVF9DT0xPUiA9IFwiI2ZhODZiZVwiO1xuXG5leHBvcnQgY29uc3QgSFVOVElOR1RPTl9CRUFDSCA9IFwiSFVOVElOR1RPTl9CRUFDSFwiO1xuY29uc3QgSFVOVElOR1RPTl9CRUFDSF9DSVRZID0gXCJIVU5USU5HVE9OX0JFQUNIXCI7XG5jb25zdCBIVU5USU5HVE9OX0JFQUNIX0NMQVNTID0gXCJjaXR5LUh1bnRpbmd0b24tQmVhY2hcIjtcbmNvbnN0IEhVTlRJTkdUT05fQkVBQ0hfQ09MT1IgPSBcIiNhMjc1ZTNcIjtcblxuZXhwb3J0IGNvbnN0IEZBUkdPID0gXCJGQVJHT1wiO1xuY29uc3QgRkFSR09fQ0lUWSA9IFwiRkFSR09cIjtcbmNvbnN0IEZBUkdPX0NMQVNTID0gXCJjaXR5LUZhcmdvXCI7XG5jb25zdCBGQVJHT19DT0xPUiA9IFwiI2ZmMWY1YVwiO1xuXG5leHBvcnQgY29uc3QgR1JBTkRfUFJBSVJJRSA9IFwiR1JBTkRfUFJBSVJJRVwiO1xuY29uc3QgR1JBTkRfUFJBSVJJRV9DSVRZID0gXCJHUkFORF9QUkFJUklFXCI7XG5jb25zdCBHUkFORF9QUkFJUklFX0NMQVNTID0gXCJjaXR5LUdyYW5kLVByYWlyaWVcIjtcbmNvbnN0IEdSQU5EX1BSQUlSSUVfQ09MT1IgPSBcIiM2OTAwZmZcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9KT1NFID0gXCJTQU5fSk9TRVwiO1xuY29uc3QgU0FOX0pPU0VfQ0lUWSA9IFwiU0FOX0pPU0VcIjtcbmNvbnN0IFNBTl9KT1NFX0NMQVNTID0gXCJjaXR5LVNhbi1Kb3NlXCI7XG5jb25zdCBTQU5fSk9TRV9DT0xPUiA9IFwiI2ZmZDcwMFwiO1xuXG5leHBvcnQgY29uc3QgU0NPVFRTREFMRSA9IFwiU0NPVFRTREFMRVwiO1xuY29uc3QgU0NPVFRTREFMRV9DSVRZID0gXCJTQ09UVFNEQUxFXCI7XG5jb25zdCBTQ09UVFNEQUxFX0NMQVNTID0gXCJjaXR5LVNjb3R0c2RhbGVcIjtcbmNvbnN0IFNDT1RUU0RBTEVfQ09MT1IgPSBcIiNmZjYxMzhcIjtcblxuZXhwb3J0IGNvbnN0IFNBTl9GUkFOQ0lTQ08gPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbmNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0lUWSA9IFwiU0FOX0ZSQU5DSVNDT1wiO1xuY29uc3QgU0FOX0ZSQU5DSVNDT19DTEFTUyA9IFwiY2l0eS1TYW4tRnJhbmNpc2NvXCI7XG5jb25zdCBTQU5fRlJBTkNJU0NPX0NPTE9SID0gXCIjMzAzNDgxXCI7XG5cbmV4cG9ydCBjb25zdCBCSVNNQVJDSyA9IFwiQklTTUFSQ0tcIjtcbmNvbnN0IEJJU01BUkNLX0NJVFkgPSBcIkJJU01BUkNLXCI7XG5jb25zdCBCSVNNQVJDS19DTEFTUyA9IFwiY2l0eS1CaXNtYXJja1wiO1xuY29uc3QgQklTTUFSQ0tfQ09MT1IgPSBcIiM3Y2JkMWVcIjtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQU5EX1BBUksgPSBcIk9WRVJMQU5EX1BBUktcIjtcbmNvbnN0IE9WRVJMQU5EX1BBUktfQ0lUWSA9IFwiT1ZFUkxBTkRfUEFSS1wiO1xuY29uc3QgT1ZFUkxBTkRfUEFSS19DTEFTUyA9IFwiY2l0eS1PdmVybGFuZC1QYXJrXCI7XG5jb25zdCBPVkVSTEFORF9QQVJLX0NPTE9SID0gXCIjMDA5Mzc4XCI7XG5cbmV4cG9ydCBjb25zdCBTQU5UQV9ST1NBID0gXCJTQU5UQV9ST1NBXCI7XG5jb25zdCBTQU5UQV9ST1NBX0NJVFkgPSBcIlNBTlRBX1JPU0FcIjtcbmNvbnN0IFNBTlRBX1JPU0FfQ0xBU1MgPSBcImNpdHktU2FudGEtUm9zYVwiO1xuY29uc3QgU0FOVEFfUk9TQV9DT0xPUiA9IFwiI2Y2MGM4NlwiO1xuXG5leHBvcnQgY29uc3QgQVVTVElOID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DSVRZID0gXCJBVVNUSU5cIjtcbmNvbnN0IEFVU1RJTl9DTEFTUyA9IFwiY2l0eS1BdXN0aW5cIjtcbmNvbnN0IEFVU1RJTl9DT0xPUiA9IFwiI2Y5ZDAwZlwiO1xuXG5leHBvcnQgY29uc3QgU0lPVVhfRkFMTFMgPSBcIlNJT1VYX0ZBTExTXCI7XG5jb25zdCBTSU9VWF9GQUxMU19DSVRZID0gXCJTSU9VWF9GQUxMU1wiO1xuY29uc3QgU0lPVVhfRkFMTFNfQ0xBU1MgPSBcImNpdHktU2lvdXgtRmFsbHNcIjtcbmNvbnN0IFNJT1VYX0ZBTExTX0NPTE9SID0gXCIjMzAzODQxXCI7XG5cbmV4cG9ydCBjb25zdCBQRUFSTF9DSVRZID0gXCJQRUFSTF9DSVRZXCI7XG5jb25zdCBQRUFSTF9DSVRZX0NJVFkgPSBcIlBFQVJMX0NJVFlcIjtcbmNvbnN0IFBFQVJMX0NJVFlfQ0xBU1MgPSBcImNpdHktUGVhcmwtQ2l0eVwiO1xuY29uc3QgUEVBUkxfQ0lUWV9DT0xPUiA9IFwiIzk2Y2QzOVwiO1xuXG5leHBvcnQgY29uc3QgR0xFTkRBTEUgPSBcIkdMRU5EQUxFXCI7XG5jb25zdCBHTEVOREFMRV9DSVRZID0gXCJHTEVOREFMRVwiO1xuY29uc3QgR0xFTkRBTEVfQ0xBU1MgPSBcImNpdHktR2xlbmRhbGVcIjtcbmNvbnN0IEdMRU5EQUxFX0NPTE9SID0gXCIjMmZjNWNjXCI7XG5cbmV4cG9ydCBjb25zdCBTQU5fRElFR08gPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NJVFkgPSBcIlNBTl9ESUVHT1wiO1xuY29uc3QgU0FOX0RJRUdPX0NMQVNTID0gXCJjaXR5LVNhbi1EaWVnb1wiO1xuY29uc3QgU0FOX0RJRUdPX0NPTE9SID0gXCIjZmY1YjQ0XCI7XG5cbmV4cG9ydCBjb25zdCBTVF9QQVVMID0gXCJTVF9QQVVMXCI7XG5jb25zdCBTVF9QQVVMX0NJVFkgPSBcIlNUX1BBVUxcIjtcbmNvbnN0IFNUX1BBVUxfQ0xBU1MgPSBcImNpdHktU3QtUGF1bFwiO1xuY29uc3QgU1RfUEFVTF9DT0xPUiA9IFwiI2JmNjhmNlwiO1xuXG5leHBvcnQgY29uc3QgQ0hBUkxFU1RPTiA9IFwiQ0hBUkxFU1RPTlwiO1xuY29uc3QgQ0hBUkxFU1RPTl9DSVRZID0gXCJDSEFSTEVTVE9OXCI7XG5jb25zdCBDSEFSTEVTVE9OX0NMQVNTID0gXCJjaXR5LUNoYXJsZXN0b25cIjtcbmNvbnN0IENIQVJMRVNUT05fQ09MT1IgPSBcIiNmOTI3MjdcIjtcblxuZXhwb3J0IGNvbnN0IEdJTEJFUlQgPSBcIkdJTEJFUlRcIjtcbmNvbnN0IEdJTEJFUlRfQ0lUWSA9IFwiR0lMQkVSVFwiO1xuY29uc3QgR0lMQkVSVF9DTEFTUyA9IFwiY2l0eS1HaWxiZXJ0XCI7XG5jb25zdCBHSUxCRVJUX0NPTE9SID0gXCIjZmYwNTkyXCI7XG5cbmV4cG9ydCBjb25zdCBBTkFIRUlNID0gXCJBTkFIRUlNXCI7XG5jb25zdCBBTkFIRUlNX0NJVFkgPSBcIkFOQUhFSU1cIjtcbmNvbnN0IEFOQUhFSU1fQ0xBU1MgPSBcImNpdHktQW5haGVpbVwiO1xuY29uc3QgQU5BSEVJTV9DT0xPUiA9IFwiI2E1OGJmZlwiO1xuXG5leHBvcnQgY29uc3QgUkFMRUlHSCA9IFwiUkFMRUlHSFwiO1xuY29uc3QgUkFMRUlHSF9DSVRZID0gXCJSQUxFSUdIXCI7XG5jb25zdCBSQUxFSUdIX0NMQVNTID0gXCJjaXR5LVJhbGVpZ2hcIjtcbmNvbnN0IFJBTEVJR0hfQ09MT1IgPSBcIiMwMDkzNzhcIjtcblxuZXhwb3J0IGNvbnN0IENBUEVfQ09SQUwgPSBcIkNBUEVfQ09SQUxcIjtcbmNvbnN0IENBUEVfQ09SQUxfQ0lUWSA9IFwiQ0FQRV9DT1JBTFwiO1xuY29uc3QgQ0FQRV9DT1JBTF9DTEFTUyA9IFwiY2l0eS1DYXBlLUNvcmFsXCI7XG5jb25zdCBDQVBFX0NPUkFMX0NPTE9SID0gXCIjZmMzNDVjXCI7XG5cbmV4cG9ydCBjb25zdCBDRURBUl9SQVBJRFMgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NJVFkgPSBcIkNFREFSX1JBUElEU1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NMQVNTID0gXCJjaXR5LUNlZGFyLVJhcGlkc1wiO1xuY29uc3QgQ0VEQVJfUkFQSURTX0NPTE9SID0gXCIjM2Q2Y2I5XCI7XG5cbmV4cG9ydCBjb25zdCBDSVRJRVMgPSB7XG4gICAgICAgICBQTEFOTzoge1xuICAgICAgICAgICBjaXR5OiBcIlBsYW5vXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBQTEFOTyxcbiAgICAgICAgICAgY2xhc3M6IFBMQU5PX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogUExBTk9fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMyxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDUyNiwgeTogMzkwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA3Mi4zLFxuICAgICAgICAgICByYW5raW5nOiAxXG4gICAgICAgICB9LFxuICAgICAgICAgSVJWSU5FOiB7XG4gICAgICAgICAgIGNpdHk6IFwiSXJ2aW5lXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBJUlZJTkUsXG4gICAgICAgICAgIGNsYXNzOiBJUlZJTkVfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBJUlZJTkVfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogOCxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogNixcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDMsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE4MCwgeTogMzAwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44NixcbiAgICAgICAgICAgcmFua2luZzogMlxuICAgICAgICAgfSxcbiAgICAgICAgIE1BRElTT046IHtcbiAgICAgICAgICAgY2l0eTogXCJNYWRpc29uXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBNQURJU09OLFxuICAgICAgICAgICBjbGFzczogTUFESVNPTl9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IE1BRElTT05fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMixcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogOCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDY0MCwgeTogMTYwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA3MS44MSxcbiAgICAgICAgICAgcmFua2luZzogM1xuICAgICAgICAgfSxcbiAgICAgICAgIEZSRU1PTlQ6IHtcbiAgICAgICAgICAgY2l0eTogXCJGcmVtb250XCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBGUkVNT05ULFxuICAgICAgICAgICBjbGFzczogRlJFTU9OVF9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEZSRU1PTlRfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMjAsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxNTEsIHk6IDIyNSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNzEuMTcsXG4gICAgICAgICAgIHJhbmtpbmc6IDRcbiAgICAgICAgIH0sXG4gICAgICAgICBIVU5USU5HVE9OX0JFQUNIOiB7XG4gICAgICAgICAgIGNpdHk6IFwiSHVudGluZ3RvbiBCZWFjaFwiLFxuICAgICAgICAgICBjb25zdGFudDogSFVOVElOR1RPTl9CRUFDSCxcbiAgICAgICAgICAgY2xhc3M6IEhVTlRJTkdUT05fQkVBQ0hfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBIVU5USU5HVE9OX0JFQUNIX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDMsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDI1LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE1OSwgeTogMjkwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OS43NCxcbiAgICAgICAgICAgcmFua2luZzogNVxuICAgICAgICAgfSxcbiAgICAgICAgIEZBUkdPOiB7XG4gICAgICAgICAgIGNpdHk6IFwiRmFyZ29cIixcbiAgICAgICAgICAgY29uc3RhbnQ6IEZBUkdPLFxuICAgICAgICAgICBjbGFzczogRkFSR09fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBGQVJHT19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA5LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAxMSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDEzLFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiA0OTgsIHk6IDk0IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2OS41NyxcbiAgICAgICAgICAgcmFua2luZzogNlxuICAgICAgICAgfSxcbiAgICAgICAgIEdSQU5EX1BSQUlSSUU6IHtcbiAgICAgICAgICAgY2l0eTogXCJHcmFuZCBQcmFpcmllXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBHUkFORF9QUkFJUklFLFxuICAgICAgICAgICBjbGFzczogR1JBTkRfUFJBSVJJRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEdSQU5EX1BSQUlSSUVfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTEsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDE5LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMyxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTI1LCB5OiA0MTAgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY5LjMsXG4gICAgICAgICAgIHJhbmtpbmc6IDdcbiAgICAgICAgIH0sXG4gICAgICAgICBTQU5fSk9TRToge1xuICAgICAgICAgICBjaXR5OiBcIlNhbiBKb3NlXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBTQU5fSk9TRSxcbiAgICAgICAgICAgY2xhc3M6IFNBTl9KT1NFX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0FOX0pPU0VfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMTAsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNCxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMTQwLCB5OiAyNDAgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY4LjksXG4gICAgICAgICAgIHJhbmtpbmc6IDhcbiAgICAgICAgIH0sXG4gICAgICAgICBTQ09UVFNEQUxFOiB7XG4gICAgICAgICAgIGNpdHk6IFwiU2NvdHRzZGFsZVwiLFxuICAgICAgICAgICBjb25zdGFudDogU0NPVFRTREFMRSxcbiAgICAgICAgICAgY2xhc3M6IFNDT1RUU0RBTEVfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTQ09UVFNEQUxFX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI1LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA3LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMjcwLCB5OiAzNDEgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY4LjI0LFxuICAgICAgICAgICByYW5raW5nOiA5XG4gICAgICAgICB9LFxuICAgICAgICAgU0FOX0ZSQU5DSVNDTzoge1xuICAgICAgICAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgICAgICAgY29uc3RhbnQ6IFNBTl9GUkFOQ0lTQ08sXG4gICAgICAgICAgIGNsYXNzOiBTQU5fRlJBTkNJU0NPX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0FOX0ZSQU5DSVNDT19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAxLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNjksXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEzNiwgeTogMjEyIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny41MyxcbiAgICAgICAgICAgcmFua2luZzogMTBcbiAgICAgICAgIH0sXG4gICAgICAgICBCSVNNQVJDSzoge1xuICAgICAgICAgICBjaXR5OiBcIkJpc21hcmNrXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBCSVNNQVJDSyxcbiAgICAgICAgICAgY2xhc3M6IEJJU01BUkNLX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogQklTTUFSQ0tfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTQsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDIsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAyNSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNDc4LCB5OiAxMDYgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY3LjM4LFxuICAgICAgICAgICByYW5raW5nOiAxMVxuICAgICAgICAgfSxcbiAgICAgICAgIE9WRVJMQU5EX1BBUks6IHtcbiAgICAgICAgICAgY2l0eTogXCJPdmVybGFuZCBQYXJrXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBPVkVSTEFORF9QQVJLLFxuICAgICAgICAgICBjbGFzczogT1ZFUkxBTkRfUEFSS19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IE9WRVJMQU5EX1BBUktfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTIsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDMxLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU3MCwgeTogMjc4IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4zNyxcbiAgICAgICAgICAgcmFua2luZzogMTJcbiAgICAgICAgIH0sXG4gICAgICAgICBTQU5UQV9ST1NBOiB7XG4gICAgICAgICAgIGNpdHk6IFwiU2FudGEgUm9zYVwiLFxuICAgICAgICAgICBjb25zdGFudDogU0FOVEFfUk9TQSxcbiAgICAgICAgICAgY2xhc3M6IFNBTlRBX1JPU0FfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBTQU5UQV9ST1NBX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDEzLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyOSxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDUsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDEzMiwgeTogMTk2IH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xOCxcbiAgICAgICAgICAgcmFua2luZzogMTNcbiAgICAgICAgIH0sXG4gICAgICAgICBBVVNUSU46IHtcbiAgICAgICAgICAgY2l0eTogXCJBdXN0aW5cIixcbiAgICAgICAgICAgY29uc3RhbnQ6IEFVU1RJTixcbiAgICAgICAgICAgY2xhc3M6IEFVU1RJTl9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEFVU1RJTl9DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA4LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA0LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDQsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDQ5NywgeTogNDMwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ny4xNixcbiAgICAgICAgICAgcmFua2luZzogMTRcbiAgICAgICAgIH0sXG4gICAgICAgICBTSU9VWF9GQUxMUzoge1xuICAgICAgICAgICBjaXR5OiBcIlNpb3V4IEZhbGxzXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBTSU9VWF9GQUxMUyxcbiAgICAgICAgICAgY2xhc3M6IFNJT1VYX0ZBTExTX0NMQVNTLFxuICAgICAgICAgICBjb2xvcjogU0lPVVhfRkFMTFNfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogNixcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMzcsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA1MixcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNTAwLCB5OiAxNjggfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY2Ljk3LFxuICAgICAgICAgICByYW5raW5nOiAxNVxuICAgICAgICAgfSxcbiAgICAgICAgIFBFQVJMX0NJVFk6IHtcbiAgICAgICAgICAgY2l0eTogXCJQZWFybCBDaXR5XCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBQRUFSTF9DSVRZLFxuICAgICAgICAgICBjbGFzczogUEVBUkxfQ0lUWV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFBFQVJMX0NJVFlfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMSxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogODEsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiA4LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAzNTAsIHk6IDQ5MSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuNzcsXG4gICAgICAgICAgIHJhbmtpbmc6IDE2XG4gICAgICAgICB9LFxuICAgICAgICAgR0xFTkRBTEU6IHtcbiAgICAgICAgICAgY2l0eTogXCJHbGVuZGFsZVwiLFxuICAgICAgICAgICBjb25zdGFudDogR0xFTkRBTEUsXG4gICAgICAgICAgIGNsYXNzOiBHTEVOREFMRV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEdMRU5EQUxFX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDE1LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA1NixcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDcsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE2NywgeTogMjcyIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2Ni4yNSxcbiAgICAgICAgICAgcmFua2luZzogMTdcbiAgICAgICAgIH0sXG4gICAgICAgICBTQU5fRElFR086IHtcbiAgICAgICAgICAgY2l0eTogXCJTYW4gRGllZ29cIixcbiAgICAgICAgICAgY29uc3RhbnQ6IFNBTl9ESUVHTyxcbiAgICAgICAgICAgY2xhc3M6IFNBTl9ESUVHT19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNBTl9ESUVHT19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiA0LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAyMCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDI1LFxuICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAxODcsIHk6IDMyMSB9LFxuICAgICAgICAgICBoYXBwaW5lc3NTY29yZTogNjYuMDEsXG4gICAgICAgICAgIHJhbmtpbmc6IDE4XG4gICAgICAgICB9LFxuICAgICAgICAgU1RfUEFVTDoge1xuICAgICAgICAgICBjaXR5OiBcIlN0LiBQYXVsXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBTVF9QQVVMLFxuICAgICAgICAgICBjbGFzczogU1RfUEFVTF9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IFNUX1BBVUxfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTAsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDM4LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMzYsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDU5MCwgeTogMTMzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NS43OSxcbiAgICAgICAgICAgcmFua2luZzogMTlcbiAgICAgICAgIH0sXG4gICAgICAgICBDSEFSTEVTVE9OOiB7XG4gICAgICAgICAgIGNpdHk6IFwiQ2hhcmxlc3RvblwiLFxuICAgICAgICAgICBjb25zdGFudDogQ0hBUkxFU1RPTixcbiAgICAgICAgICAgY2xhc3M6IENIQVJMRVNUT05fQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBDSEFSTEVTVE9OX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDQxLFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiAzLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMixcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogODA1LCB5OiA0MDAgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY1LjQ4LFxuICAgICAgICAgICByYW5raW5nOiAyMFxuICAgICAgICAgfSxcbiAgICAgICAgIEdJTEJFUlQ6IHtcbiAgICAgICAgICAgY2l0eTogXCJHaWxiZXJ0XCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBHSUxCRVJULFxuICAgICAgICAgICBjbGFzczogR0lMQkVSVF9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEdJTEJFUlRfQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMzAsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDI2LFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogMjc3LCB5OiAzNjMgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY1LjA3LFxuICAgICAgICAgICByYW5raW5nOiAyMVxuICAgICAgICAgfSxcbiAgICAgICAgIEFOQUhFSU06IHtcbiAgICAgICAgICAgY2l0eTogXCJBbmFoZWltXCIsXG4gICAgICAgICAgIGNvbnN0YW50OiBBTkFIRUlNLFxuICAgICAgICAgICBjbGFzczogQU5BSEVJTV9DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IEFOQUhFSU1fQ09MT1IsXG4gICAgICAgICAgIGVtb3Rpb25hbFdlbGxiZWluZzogMTYsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDQzLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogMTksXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDE5NiwgeTogMjgyIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NS4wMixcbiAgICAgICAgICAgcmFua2luZzogMjJcbiAgICAgICAgIH0sXG4gICAgICAgICBSQUxFSUdIOiB7XG4gICAgICAgICAgIGNpdHk6IFwiUmFsZWlnaFwiLFxuICAgICAgICAgICBjb25zdGFudDogUkFMRUlHSCxcbiAgICAgICAgICAgY2xhc3M6IFJBTEVJR0hfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDcsXG4gICAgICAgICAgIGluY29tZUVtcGxveW1lbnQ6IDIzLFxuICAgICAgICAgICBjb21tdW5pdHlFbnZpcm9ubWVudDogNDgsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDgzMCwgeTogMzEzIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45OSxcbiAgICAgICAgICAgcmFua2luZzogMjNcbiAgICAgICAgIH0sXG4gICAgICAgICBDQVBFX0NPUkFMOiB7XG4gICAgICAgICAgIGNpdHk6IFwiQ2FwZSBDb3JhbFwiLFxuICAgICAgICAgICBjb25zdGFudDogQ0FQRV9DT1JBTCxcbiAgICAgICAgICAgY2xhc3M6IENBUEVfQ09SQUxfQ0xBU1MsXG4gICAgICAgICAgIGNvbG9yOiBDQVBFX0NPUkFMX0NPTE9SLFxuICAgICAgICAgICBlbW90aW9uYWxXZWxsYmVpbmc6IDI4LFxuICAgICAgICAgICBpbmNvbWVFbXBsb3ltZW50OiA0OCxcbiAgICAgICAgICAgY29tbXVuaXR5RW52aXJvbm1lbnQ6IDIsXG4gICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDgwMCwgeTogNDgwIH0sXG4gICAgICAgICAgIGhhcHBpbmVzc1Njb3JlOiA2NC45NixcbiAgICAgICAgICAgcmFua2luZzogMjRcbiAgICAgICAgIH0sXG4gICAgICAgICBDRURBUl9SQVBJRFM6IHtcbiAgICAgICAgICAgY2l0eTogXCJDZWRhciBSYXBpZHNcIixcbiAgICAgICAgICAgY29uc3RhbnQ6IENFREFSX1JBUElEUyxcbiAgICAgICAgICAgY2xhc3M6IENFREFSX1JBUElEU19DTEFTUyxcbiAgICAgICAgICAgY29sb3I6IENFREFSX1JBUElEU19DT0xPUixcbiAgICAgICAgICAgZW1vdGlvbmFsV2VsbGJlaW5nOiAyMyxcbiAgICAgICAgICAgaW5jb21lRW1wbG95bWVudDogMzIsXG4gICAgICAgICAgIGNvbW11bml0eUVudmlyb25tZW50OiAxMSxcbiAgICAgICAgICAgcG9zaXRpb246IHsgeDogNjAwLCB5OiAyMDUgfSxcbiAgICAgICAgICAgaGFwcGluZXNzU2NvcmU6IDY0LjksXG4gICAgICAgICAgIHJhbmtpbmc6IDI1XG4gICAgICAgICB9XG4gICAgICAgfTtcblxuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbmV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IDkwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA1MDA7XG5leHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDtcblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IFNBTl9GUkFOQ0lTQ08gPSBcIlNBTl9GUkFOQ0lTQ09cIjtcbi8vIGNvbnN0IFNBTl9GUkFOQ0lTQ09fQ0lUWSA9IFwiU2FuIEZyYW5jaXNjb1wiO1xuLy8gY29uc3QgU0FOX0ZSQU5DSVNDT19DTEFTUyA9IFwiY2l0eS1TYW4tRnJhbmNpc2NvXCI7XG4vLyBjb25zdCBTQU5fRlJBTkNJU0NPX0NPTE9SID0gXCIjZjFjNDBmXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBORVdfWU9SSyA9IFwiTkVXX1lPUktcIjtcbi8vIGNvbnN0IE5FV19ZT1JLX0NJVFkgPSBcIk5ldyBZb3JrXCI7XG4vLyBjb25zdCBORVdfWU9SS19DTEFTUyA9IFwiY2l0eS1OZXctWW9ya1wiO1xuLy8gY29uc3QgTkVXX1lPUktfQ09MT1IgPSBcIiMyOTgwYjlcIjtcblxuLy8gZXhwb3J0IGNvbnN0IEJPU1RPTiA9IFwiQk9TVE9OXCI7XG4vLyBjb25zdCBCT1NUT05fQ0lUWSA9IFwiQm9zdG9uXCI7XG4vLyBjb25zdCBCT1NUT05fQ0xBU1MgPSBcImNpdHktQm9zdG9uXCI7XG4vLyBjb25zdCBCT1NUT05fQ09MT1IgPSBcIiNlNzRjM2NcIjtcblxuLy8gZXhwb3J0IGNvbnN0IFBPUlRMQU5EID0gXCJQT1JUTEFORFwiO1xuLy8gY29uc3QgUE9SVExBTkRfQ0lUWSA9IFwiUG9ydGxhbmRcIjtcbi8vIGNvbnN0IFBPUlRMQU5EX0NMQVNTID0gXCJjaXR5LVBvcnRsYW5kXCI7XG4vLyBjb25zdCBQT1JUTEFORF9DT0xPUiA9IFwiI0ZEOTcxRlwiO1xuXG4vLyBleHBvcnQgY29uc3QgU0VBVFRMRSA9IFwiU0VBVFRMRVwiO1xuLy8gY29uc3QgU0VBVFRMRV9DSVRZID0gXCJTZWF0dGxlXCI7XG4vLyBjb25zdCBTRUFUVExFX0NMQVNTID0gXCJjaXR5LVNlYXR0bGVcIjtcbi8vIGNvbnN0IFNFQVRUTEVfQ09MT1IgPSBcIiNGOTI2NzJcIjtcblxuLy8gZXhwb3J0IGNvbnN0IEFVU1RJTiA9IFwiQVVTVElOXCI7XG4vLyBjb25zdCBBVVNUSU5fQ0lUWSA9IFwiQXVzdGluXCI7XG4vLyBjb25zdCBBVVNUSU5fQ0xBU1MgPSBcImNpdHktQXVzdGluXCI7XG4vLyBjb25zdCBBVVNUSU5fQ09MT1IgPSBcIiNBNkUyMkVcIjtcblxuLy8gZXhwb3J0IGNvbnN0IFNBTl9KT1NFID0gXCJTQU5fSk9TRVwiO1xuLy8gY29uc3QgU0FOX0pPU0VfQ0lUWSA9IFwiU2FuIEpvc2VcIjtcbi8vIGNvbnN0IFNBTl9KT1NFX0NMQVNTID0gXCJjaXR5LVNhbi1Kb3NlXCI7XG4vLyBjb25zdCBTQU5fSk9TRV9DT0xPUiA9IFwiIzliNTliNlwiO1xuXG4vLyBleHBvcnQgY29uc3QgUkFMRUlHSCA9IFwiUkFMRUlHSFwiO1xuLy8gY29uc3QgUkFMRUlHSF9DSVRZID0gXCJSYWxlaWdoXCI7XG4vLyBjb25zdCBSQUxFSUdIX0NMQVNTID0gXCJjaXR5LVJhbGVpZ2hcIjtcbi8vIGNvbnN0IFJBTEVJR0hfQ09MT1IgPSBcIiNmMzljMTJcIjtcblxuLy8gZXhwb3J0IGNvbnN0IERFTlZFUiA9IFwiREVOVkVSXCI7XG4vLyBjb25zdCBERU5WRVJfQ0lUWSA9IFwiRGVudmVyXCI7XG4vLyBjb25zdCBERU5WRVJfQ0xBU1MgPSBcImNpdHktRGVudmVyXCI7XG4vLyBjb25zdCBERU5WRVJfQ09MT1IgPSBcIiM2NkQ5RUZcIjtcblxuLy8gZXhwb3J0IGNvbnN0IFBIT0VOSVggPSBcIlBIT0VOSVhcIjtcbi8vIGNvbnN0IFBIT0VOSVhfQ0lUWSA9IFwiUGhvZW5peFwiO1xuLy8gY29uc3QgUEhPRU5JWF9DTEFTUyA9IFwiY2l0eS1QaG9lbml4XCI7XG4vLyBjb25zdCBQSE9FTklYX0NPTE9SID0gXCIjYzAzOTJiXCI7XG5cbi8vIC8vIGhhcHBpbmVzc1Jhbms6IGh0dHBzOi8vd2FsbGV0aHViLmNvbS9lZHUvaGFwcGllc3QtcGxhY2VzLXRvLWxpdmUvMzI2MTkvXG4vLyAvLyBqb2JzOiBpbmRlZWQgc2VhcmNoIC0gc29mdHdhcmUgZW5naW5lZXIgdy8gZXhhY3QgbG9jYXRpb24gb25seSAzLzI0LzIwMTlcbi8vIC8vIHNhbGFyeTogaHR0cHM6Ly93d3cuZ2xhc3Nkb29yLmNvbS9ibG9nLzI1LWJlc3QtcGF5aW5nLWNpdGllcy1zb2Z0d2FyZS1lbmdpbmVlcnMvXG5cbi8vIGNvbnN0IGNhbGN1bGF0ZVJhbmtpbmcgPSBjaXRpZXMgPT4ge1xuLy8gICByZXR1cm4gMDtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCBDSVRJRVMgPSB7XG4vLyAgIFNBTl9GUkFOQ0lTQ086IHtcbi8vICAgICBhZGp1c3RlZFNhbGFyeTogOTk3NTEsXG4vLyAgICAgY2l0eTogU0FOX0ZSQU5DSVNDT19DSVRZLFxuLy8gICAgIGNvbG9yOiBTQU5fRlJBTkNJU0NPX0NPTE9SLFxuLy8gICAgIGNvbnN0YW50OiBTQU5fRlJBTkNJU0NPLFxuLy8gICAgIGNsYXNzOiBTQU5fRlJBTkNJU0NPX0NMQVNTLFxuLy8gICAgIGRpdmVyc2l0eTogW1xuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiV2hpdGVcIiwgcGVyY2VudGFnZTogMC40MSB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQXNpYW5cIiwgcGVyY2VudGFnZTogMC4zMyB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiSGlzcGFuaWNcIiwgcGVyY2VudGFnZTogMC4xNSB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQmxhY2tcIiwgcGVyY2VudGFnZTogMC4wNSB9XG4vLyAgICAgXSxcbi8vICAgICByZW50YWxDb3N0czogW1xuLy8gICAgICAgeyB0eXBlOiBcIlN0dWRpb1wiLCBwcmljZTogMjEzMCB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjFCUlwiLCBwcmljZTogMjYzOSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjJCUlwiLCBwcmljZTogMzI4NiB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjNCUlwiLCBwcmljZTogNDI5MSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjRCUlwiLCBwcmljZTogNDU2NyB9XG4vLyAgICAgXSxcbi8vICAgICBoYXBwaW5lc3NSYW5rOiAxMCxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDEzMzExMDAsXG4vLyAgICAgbWVkaWFuU2FsYXJ5OiAxMjAwMDAsXG4vLyAgICAgam9iczogNzk0Nyxcbi8vICAgICBwb3NpdGlvbjogeyB4OiAyMCwgeTogMTYwIH0sXG4vLyAgICAgc3VubnlEYXlzOiAyNTYsXG4vLyAgICAgcG9pbnRzOiAwXG4vLyAgIH0sXG4vLyAgIE5FV19ZT1JLOiB7XG4vLyAgICAgYWRqdXN0ZWRTYWxhcnk6IDEwMDAwMCxcbi8vICAgICBjaXR5OiBORVdfWU9SS19DSVRZLFxuLy8gICAgIGNvbG9yOiBORVdfWU9SS19DT0xPUixcbi8vICAgICBjb25zdGFudDogTkVXX1lPUkssXG4vLyAgICAgY2xhc3M6IE5FV19ZT1JLX0NMQVNTLFxuLy8gICAgIGRpdmVyc2l0eTogW1xuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiV2hpdGVcIiwgcGVyY2VudGFnZTogMC4zMiB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQXNpYW5cIiwgcGVyY2VudGFnZTogMC4xMyB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiSGlzcGFuaWNcIiwgcGVyY2VudGFnZTogMC4yOCB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQmxhY2tcIiwgcGVyY2VudGFnZTogMC4yMiB9XG4vLyAgICAgXSxcbi8vICAgICByZW50YWxDb3N0czogW1xuLy8gICAgICAgeyB0eXBlOiBcIlN0dWRpb1wiLCBwcmljZTogMTc0MyB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjFCUlwiLCBwcmljZTogMTc4OCB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjJCUlwiLCBwcmljZTogMjA0OSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjNCUlwiLCBwcmljZTogMjYwMCB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjRCUlwiLCBwcmljZTogMjc3MSB9XG4vLyAgICAgXSxcbi8vICAgICBoYXBwaW5lc3NSYW5rOiA5MCxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDY2MjEwMCxcbi8vICAgICBtZWRpYW5TYWxhcnk6IDExMDAwMCxcbi8vICAgICBqb2JzOiA4MzY0LFxuLy8gICAgIHBvc2l0aW9uOiB7IHg6IDYyNSwgeTogMTM1IH0sXG4vLyAgICAgc3VubnlEYXlzOiAyMjQsXG4vLyAgICAgcG9pbnRzOiAwXG4vLyAgIH0sXG4vLyAgIEJPU1RPTjoge1xuLy8gICAgIGFkanVzdGVkU2FsYXJ5OiA5MDE3MSxcbi8vICAgICBjaXR5OiBCT1NUT05fQ0lUWSxcbi8vICAgICBjb2xvcjogQk9TVE9OX0NPTE9SLFxuLy8gICAgIGNvbnN0YW50OiBCT1NUT04sXG4vLyAgICAgY2xhc3M6IEJPU1RPTl9DTEFTUyxcbi8vICAgICBkaXZlcnNpdHk6IFtcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIldoaXRlXCIsIHBlcmNlbnRhZ2U6IDAuNDYgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkFzaWFuXCIsIHBlcmNlbnRhZ2U6IDAuMDkgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkhpc3BhbmljXCIsIHBlcmNlbnRhZ2U6IDAuMTggfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkJsYWNrXCIsIHBlcmNlbnRhZ2U6IDAuMjIgfVxuLy8gICAgIF0sXG4vLyAgICAgcmVudGFsQ29zdHM6IFtcbi8vICAgICAgIHsgdHlwZTogXCJTdHVkaW9cIiwgcHJpY2U6IDE2MzkgfSxcbi8vICAgICAgIHsgdHlwZTogXCIxQlJcIiwgcHJpY2U6IDE4MzYgfSxcbi8vICAgICAgIHsgdHlwZTogXCIyQlJcIiwgcHJpY2U6IDIyMzggfSxcbi8vICAgICAgIHsgdHlwZTogXCIzQlJcIiwgcHJpY2U6IDI4MDUgfSxcbi8vICAgICAgIHsgdHlwZTogXCI0QlJcIiwgcHJpY2U6IDMwMjcgfVxuLy8gICAgIF0sXG4vLyAgICAgaGFwcGluZXNzUmFuazogNTgsXG4vLyAgICAgbWVkaWFuSG9tZVByaWNlOiA1ODcwMDAsXG4vLyAgICAgbWVkaWFuU2FsYXJ5OiAxMDAwMDAsXG4vLyAgICAgam9iczogMzYzMCxcbi8vICAgICBwb3NpdGlvbjogeyB4OiA2NTAsIHk6IDEwMCB9LFxuLy8gICAgIHN1bm55RGF5czogMjAwLFxuLy8gICAgIHBvaW50czogMFxuLy8gICB9LFxuLy8gICBQT1JUTEFORDoge1xuLy8gICAgIGFkanVzdGVkU2FsYXJ5OiA4OTM3NCxcbi8vICAgICBjaXR5OiBQT1JUTEFORF9DSVRZLFxuLy8gICAgIGNvbG9yOiBQT1JUTEFORF9DT0xPUixcbi8vICAgICBjb25zdGFudDogUE9SVExBTkQsXG4vLyAgICAgY2xhc3M6IFBPUlRMQU5EX0NMQVNTLFxuLy8gICAgIGRpdmVyc2l0eTogW1xuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiV2hpdGVcIiwgcGVyY2VudGFnZTogMC43MSB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQXNpYW5cIiwgcGVyY2VudGFnZTogMC4wNyB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiSGlzcGFuaWNcIiwgcGVyY2VudGFnZTogMC4wOSB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQmxhY2tcIiwgcGVyY2VudGFnZTogMC4wNSB9XG4vLyAgICAgXSxcbi8vICAgICByZW50YWxDb3N0czogW1xuLy8gICAgICAgeyB0eXBlOiBcIlN0dWRpb1wiLCBwcmljZTogMTEyMyB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjFCUlwiLCBwcmljZTogMTIyNSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjJCUlwiLCBwcmljZTogMTQzMiB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjNCUlwiLCBwcmljZTogMjA3MyB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjRCUlwiLCBwcmljZTogMjUxNiB9XG4vLyAgICAgXSxcbi8vICAgICBoYXBwaW5lc3NSYW5rOiA4NCxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDQyNzUwMCxcbi8vICAgICBtZWRpYW5TYWxhcnk6IDkwMDAwLFxuLy8gICAgIGpvYnM6IDIzNTksXG4vLyAgICAgcG9zaXRpb246IHsgeDogNDUsIHk6IDkwIH0sXG4vLyAgICAgc3VubnlEYXlzOiAxNDQsXG4vLyAgICAgcG9pbnRzOiAwXG4vLyAgIH0sXG4vLyAgIFNFQVRUTEU6IHtcbi8vICAgICBhZGp1c3RlZFNhbGFyeTogMTA1NzM1LFxuLy8gICAgIGNpdHk6IFNFQVRUTEVfQ0lUWSxcbi8vICAgICBjb2xvcjogU0VBVFRMRV9DT0xPUixcbi8vICAgICBjb25zdGFudDogU0VBVFRMRSxcbi8vICAgICBjbGFzczogU0VBVFRMRV9DTEFTUyxcbi8vICAgICBkaXZlcnNpdHk6IFtcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIldoaXRlXCIsIHBlcmNlbnRhZ2U6IDAuNjYgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkFzaWFuXCIsIHBlcmNlbnRhZ2U6IDAuMTQgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkhpc3BhbmljXCIsIHBlcmNlbnRhZ2U6IDAuMDYgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkJsYWNrXCIsIHBlcmNlbnRhZ2U6IDAuMDcgfVxuLy8gICAgIF0sXG4vLyAgICAgcmVudGFsQ29zdHM6IFtcbi8vICAgICAgIHsgdHlwZTogXCJTdHVkaW9cIiwgcHJpY2U6IDE1NzAgfSxcbi8vICAgICAgIHsgdHlwZTogXCIxQlJcIiwgcHJpY2U6IDE3MjggfSxcbi8vICAgICAgIHsgdHlwZTogXCIyQlJcIiwgcHJpY2U6IDIxMDggfSxcbi8vICAgICAgIHsgdHlwZTogXCIzQlJcIiwgcHJpY2U6IDMwMzMgfSxcbi8vICAgICAgIHsgdHlwZTogXCI0QlJcIiwgcHJpY2U6IDM1ODMgfVxuLy8gICAgIF0sXG4vLyAgICAgaGFwcGluZXNzUmFuazogNTQsXG4vLyAgICAgbWVkaWFuSG9tZVByaWNlOiA3NjE4MDAsXG4vLyAgICAgbWVkaWFuU2FsYXJ5OiAxMTMyNDIsXG4vLyAgICAgam9iczogMTA0MTcsXG4vLyAgICAgcG9zaXRpb246IHsgeDogNDUsIHk6IDQwIH0sXG4vLyAgICAgc3VubnlEYXlzOiAxNTIsXG4vLyAgICAgcG9pbnRzOiAwXG4vLyAgIH0sXG4vLyAgIEFVU1RJTjoge1xuLy8gICAgIGFkanVzdGVkU2FsYXJ5OiA5MDE3MSxcbi8vICAgICBjaXR5OiBBVVNUSU5fQ0lUWSxcbi8vICAgICBjb2xvcjogQVVTVElOX0NPTE9SLFxuLy8gICAgIGNvbnN0YW50OiBBVVNUSU4sXG4vLyAgICAgY2xhc3M6IEFVU1RJTl9DTEFTUyxcbi8vICAgICBkaXZlcnNpdHk6IFtcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIldoaXRlXCIsIHBlcmNlbnRhZ2U6IDAuNDggfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkFzaWFuXCIsIHBlcmNlbnRhZ2U6IDAuMDYgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkhpc3BhbmljXCIsIHBlcmNlbnRhZ2U6IDAuMzQgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkJsYWNrXCIsIHBlcmNlbnRhZ2U6IDAuMDcgfVxuLy8gICAgIF0sXG4vLyAgICAgcmVudGFsQ29zdHM6IFtcbi8vICAgICAgIHsgdHlwZTogXCJTdHVkaW9cIiwgcHJpY2U6IDEwMTcgfSxcbi8vICAgICAgIHsgdHlwZTogXCIxQlJcIiwgcHJpY2U6IDExODYgfSxcbi8vICAgICAgIHsgdHlwZTogXCIyQlJcIiwgcHJpY2U6IDE0MzcgfSxcbi8vICAgICAgIHsgdHlwZTogXCIzQlJcIiwgcHJpY2U6IDE4OTcgfSxcbi8vICAgICAgIHsgdHlwZTogXCI0QlJcIiwgcHJpY2U6IDIyOTQgfVxuLy8gICAgIF0sXG4vLyAgICAgaGFwcGluZXNzUmFuazogMTQsXG4vLyAgICAgbWVkaWFuSG9tZVByaWNlOiAzNDY1MDAsXG4vLyAgICAgbWVkaWFuU2FsYXJ5OiAxMDAwMDAsXG4vLyAgICAgam9iczogNDMwOCxcbi8vICAgICBwb3NpdGlvbjogeyB4OiAzMjAsIHk6IDM1MCB9LFxuLy8gICAgIHN1bm55RGF5czogMjI4LFxuLy8gICAgIHBvaW50czogMFxuLy8gICB9LFxuLy8gICBTQU5fSk9TRToge1xuLy8gICAgIGFkanVzdGVkU2FsYXJ5OiAxMDA5ODksXG4vLyAgICAgY2l0eTogU0FOX0pPU0VfQ0lUWSxcbi8vICAgICBjb2xvcjogU0FOX0pPU0VfQ09MT1IsXG4vLyAgICAgY29uc3RhbnQ6IFNBTl9KT1NFLFxuLy8gICAgIGNsYXNzOiBTQU5fSk9TRV9DTEFTUyxcbi8vICAgICBkaXZlcnNpdHk6IFtcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIldoaXRlXCIsIHBlcmNlbnRhZ2U6IDAuMjcgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkFzaWFuXCIsIHBlcmNlbnRhZ2U6IDAuMzIgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkhpc3BhbmljXCIsIHBlcmNlbnRhZ2U6IDAuMzMgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkJsYWNrXCIsIHBlcmNlbnRhZ2U6IDAuMDIgfVxuLy8gICAgIF0sXG4vLyAgICAgcmVudGFsQ29zdHM6IFtcbi8vICAgICAgIHsgdHlwZTogXCJTdHVkaW9cIiwgcHJpY2U6IDE5MjcgfSxcbi8vICAgICAgIHsgdHlwZTogXCIxQlJcIiwgcHJpY2U6IDIyODYgfSxcbi8vICAgICAgIHsgdHlwZTogXCIyQlJcIiwgcHJpY2U6IDI4MDcgfSxcbi8vICAgICAgIHsgdHlwZTogXCIzQlJcIiwgcHJpY2U6IDM3OTcgfSxcbi8vICAgICAgIHsgdHlwZTogXCI0QlJcIiwgcHJpY2U6IDQzNTAgfVxuLy8gICAgIF0sXG4vLyAgICAgaGFwcGluZXNzUmFuazogOCxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDEwODMwMDAsXG4vLyAgICAgbWVkaWFuU2FsYXJ5OiAxMjI1MDAsXG4vLyAgICAgam9iczogMzAyMyxcbi8vICAgICBwb3NpdGlvbjogeyB4OiAzNSwgeTogMTkwIH0sXG4vLyAgICAgc3VubnlEYXlzOiAyMDQsXG4vLyAgICAgcG9pbnRzOiAwXG4vLyAgIH0sXG4vLyAgIFJBTEVJR0g6IHtcbi8vICAgICBhZGp1c3RlZFNhbGFyeTogOTAwMDAsXG4vLyAgICAgY2l0eTogUkFMRUlHSF9DSVRZLFxuLy8gICAgIGNvbG9yOiBSQUxFSUdIX0NPTE9SLFxuLy8gICAgIGNvbnN0YW50OiBSQUxFSUdILFxuLy8gICAgIGNsYXNzOiBSQUxFSUdIX0NMQVNTLFxuLy8gICAgIGRpdmVyc2l0eTogW1xuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiV2hpdGVcIiwgcGVyY2VudGFnZTogMC41NCB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQXNpYW5cIiwgcGVyY2VudGFnZTogMC4wNCB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiSGlzcGFuaWNcIiwgcGVyY2VudGFnZTogMC4xIH0sXG4vLyAgICAgICB7IGV0aG5pY2l0eTogXCJCbGFja1wiLCBwZXJjZW50YWdlOiAwLjI4IH1cbi8vICAgICBdLFxuLy8gICAgIHJlbnRhbENvc3RzOiBbXG4vLyAgICAgICB7IHR5cGU6IFwiU3R1ZGlvXCIsIHByaWNlOiA4NjggfSxcbi8vICAgICAgIHsgdHlwZTogXCIxQlJcIiwgcHJpY2U6IDk3NSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjJCUlwiLCBwcmljZTogMTExNSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjNCUlwiLCBwcmljZTogMTQzNSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjRCUlwiLCBwcmljZTogMTgxMSB9XG4vLyAgICAgXSxcbi8vICAgICBoYXBwaW5lc3NSYW5rOiAyMyxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDI2MDEwMCxcbi8vICAgICBtZWRpYW5TYWxhcnk6IDk0MTQyLFxuLy8gICAgIGpvYnM6IDEzNzcsXG4vLyAgICAgcG9zaXRpb246IHsgeDogNjAwLCB5OiAyMTAgfSxcbi8vICAgICBzdW5ueURheXM6IDIxMyxcbi8vICAgICBwb2ludHM6IDBcbi8vICAgfSxcbi8vICAgREVOVkVSOiB7XG4vLyAgICAgYWRqdXN0ZWRTYWxhcnk6IDg1ODc4LFxuLy8gICAgIGNpdHk6IERFTlZFUl9DSVRZLFxuLy8gICAgIGNvbG9yOiBERU5WRVJfQ09MT1IsXG4vLyAgICAgY29uc3RhbnQ6IERFTlZFUixcbi8vICAgICBjbGFzczogREVOVkVSX0NMQVNTLFxuLy8gICAgIGRpdmVyc2l0eTogW1xuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiV2hpdGVcIiwgcGVyY2VudGFnZTogMC41MiB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQXNpYW5cIiwgcGVyY2VudGFnZTogMC4wMyB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiSGlzcGFuaWNcIiwgcGVyY2VudGFnZTogMC4zMSB9LFxuLy8gICAgICAgeyBldGhuaWNpdHk6IFwiQmxhY2tcIiwgcGVyY2VudGFnZTogMC4wOSB9XG4vLyAgICAgXSxcbi8vICAgICByZW50YWxDb3N0czogW1xuLy8gICAgICAgeyB0eXBlOiBcIlN0dWRpb1wiLCBwcmljZTogMTA4MyB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjFCUlwiLCBwcmljZTogMTI2NSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjJCUlwiLCBwcmljZTogMTU4NSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjNCUlwiLCBwcmljZTogMjIzMSB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjRCUlwiLCBwcmljZTogMjU4OCB9XG4vLyAgICAgXSxcbi8vICAgICBoYXBwaW5lc3NSYW5rOiA0MSxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDQyMTkwMCxcbi8vICAgICBtZWRpYW5TYWxhcnk6IDkwMDAwLFxuLy8gICAgIGpvYnM6IDE5NzMsXG4vLyAgICAgcG9zaXRpb246IHsgeDogMjUwLCB5OiAxNzAgfSxcbi8vICAgICBzdW5ueURheXM6IDI0NSxcbi8vICAgICBwb2ludHM6IDBcbi8vICAgfSxcbi8vICAgUEhPRU5JWDoge1xuLy8gICAgIGFkanVzdGVkU2FsYXJ5OiA4Njc2NSxcbi8vICAgICBjaXR5OiBQSE9FTklYX0NJVFksXG4vLyAgICAgY29sb3I6IFBIT0VOSVhfQ09MT1IsXG4vLyAgICAgY29uc3RhbnQ6IFBIT0VOSVgsXG4vLyAgICAgY2xhc3M6IFBIT0VOSVhfQ0xBU1MsXG4vLyAgICAgZGl2ZXJzaXR5OiBbXG4vLyAgICAgICB7IGV0aG5pY2l0eTogXCJXaGl0ZVwiLCBwZXJjZW50YWdlOiAwLjQ2IH0sXG4vLyAgICAgICB7IGV0aG5pY2l0eTogXCJBc2lhblwiLCBwZXJjZW50YWdlOiAwLjAzIH0sXG4vLyAgICAgICB7IGV0aG5pY2l0eTogXCJIaXNwYW5pY1wiLCBwZXJjZW50YWdlOiAwLjQgfSxcbi8vICAgICAgIHsgZXRobmljaXR5OiBcIkJsYWNrXCIsIHBlcmNlbnRhZ2U6IDAuMDYgfVxuLy8gICAgIF0sXG4vLyAgICAgcmVudGFsQ29zdHM6IFtcbi8vICAgICAgIHsgdHlwZTogXCJTdHVkaW9cIiwgcHJpY2U6IDc5MyB9LFxuLy8gICAgICAgeyB0eXBlOiBcIjFCUlwiLCBwcmljZTogOTI4IH0sXG4vLyAgICAgICB7IHR5cGU6IFwiMkJSXCIsIHByaWNlOiAxMTQ3IH0sXG4vLyAgICAgICB7IHR5cGU6IFwiM0JSXCIsIHByaWNlOiAxNjU5IH0sXG4vLyAgICAgICB7IHR5cGU6IFwiNEJSXCIsIHByaWNlOiAxOTAwIH1cbi8vICAgICBdLFxuLy8gICAgIGhhcHBpbmVzc1Jhbms6IDEyNyxcbi8vICAgICBtZWRpYW5Ib21lUHJpY2U6IDIyOTMwMCxcbi8vICAgICBtZWRpYW5TYWxhcnk6IDg3OTk3LFxuLy8gICAgIGpvYnM6IDE0OTEsXG4vLyAgICAgcG9zaXRpb246IHsgeDogMTUwLCB5OiAyNTUgfSxcbi8vICAgICBzdW5ueURheXM6IDI5OSxcbi8vICAgICBwb2ludHM6IDBcbi8vICAgfVxuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDA7XG4vLyBleHBvcnQgY29uc3QgQU5JTUFUSU9OX0RFTEFZID0gMDtcbi8vIGV4cG9ydCBjb25zdCBBTklNQVRJT05fRUFTSU5HID0gZDMuZWFzZVBvbHk7XG5cbi8vIGV4cG9ydCBjb25zdCBXSURUSCA9IDkwMDtcbi8vIGV4cG9ydCBjb25zdCBIRUlHSFQgPSA1MDA7XG4vLyBleHBvcnQgY29uc3QgTUFSR0lOUyA9IDEwMDsiLCJjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IGQzXG4gICAgICAuc2VsZWN0KGAuaGVhZGVyX190b29sdGlwYClcbiAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgIC8vIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcInNvbGlkXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItd2lkdGhcIiwgXCIycHhcIilcbiAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCI1cHhcIilcbiAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxcmVtXCIpO1xuXG4gICAgZDMuc2VsZWN0QWxsKCcuY2l0eScpXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkLCBpKSA9PiB7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBgY2l0eS0ke2Quc3BsaXQoJyAnKS5qb2luKCctJyl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChkLmRhdGEpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBkLmRhdGEuY2xhc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZC5jbGFzcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxPdGhlckNpdHlEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNpdHk6bm90KC4ke2NsYXNzTmFtZX0pYCk7XG4gICAgICAgIGFsbE90aGVyQ2l0eURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHRvb2x0aXAgIFxuICAgICAgICB0b29sdGlwXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fY2l0eVwiPjxzdHJvbmc+Q2l0eTo8L3N0cm9uZz4gJHtcbiAgICAgICAgICAgICAgICAgIGQuY2l0eVxuICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPk92ZXJhbGwgUmFuazo8L3N0cm9uZz4gJHtcbiAgICAgICAgICAgICAgICAgIGQucmFua2luZ1xuICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sdGlwX19kZXRhaWxcIj48c3Ryb25nPlRvdGFsIEhhcHBpbmVzcyBTY29yZTo8L3N0cm9uZz4gJHtcbiAgICAgICAgICAgICAgICAgIGQuaGFwcGluZXNzU2NvcmVcbiAgICAgICAgICAgICAgICB9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5FbW90aW9uYWwgJiBQaHlzaWNhbCBXZWxsLUJlaW5nOjwvc3Ryb25nPiAke1xuICAgICAgICAgICAgICAgICAgZC5lbW90aW9uYWxXZWxsYmVpbmdcbiAgICAgICAgICAgICAgICB9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9vbHRpcF9fZGV0YWlsXCI+PHN0cm9uZz5JbmNvbWUgJiBFbXBsb3ltZW50Ojwvc3Ryb25nPiAke1xuICAgICAgICAgICAgICAgICAgZC5pbmNvbWVFbXBsb3ltZW50XG4gICAgICAgICAgICAgICAgfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvb2x0aXBfX2RldGFpbFwiPjxzdHJvbmc+Q29tbXVuaXR5ICYgRW52aXJvbm1lbnQ6PC9zdHJvbmc+ICR7XG4gICAgICAgICAgICAgICAgICBkLmNvbW11bml0eUVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgYXZhaWxhYmxlLCBzaG93IHRvZ2dsZWFibGUgZGF0YVxuICAgICAgICBjb25zdCB0b2dnbGVhYmxlRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX0uY2l0eS1kYXRhLXRvZ2dsZWApO1xuICAgICAgICB0b2dnbGVhYmxlRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ2l0eURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2l0eScpO1xuICAgICAgICBhbGxDaXR5RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gaWYgYXZhaWxhYmxlLCBoaWRlIHRvZ2dsZWJsZSBkYXRhXG4gICAgICAgIGNvbnN0IHRvZ2dsZWFibGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNpdHktZGF0YS10b2dnbGVgKTtcbiAgICAgICAgdG9nZ2xlYWJsZURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIG5ldyBNYXAoJ3N2Zy5tYXAnKTtcbiAgbmV3IEZpbHRlcjtcbn0pOyIsImltcG9ydCB7XG4gIEFOSU1BVElPTl9FQVNJTkcsXG4gIEFOSU1BVElPTl9EVVJBVElPTixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbmNsYXNzIE1hcCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIHRoaXMuY2lyY2xlKCk7XG4gICAgdGhpcy5jaXR5TGFiZWwoKTtcbiAgICB0aGlzLnJhbmtpbmcoKTtcbiAgICB0aGlzLnBvaW50ZXIoKTtcbiAgfVxuXG4gIGNpcmNsZSgpIHtcbiAgICB0aGlzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDEwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGQuY29sb3IpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LXBpbnBvaW50YClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IGQucG9zaXRpb24ueSlcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLnBvc2l0aW9uLngpXG4gICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIDEwMClcbiAgICAgIC5zdHlsZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gIH1cblxuICBjaXR5TGFiZWwoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAwKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBkID0+IGBtYXAtY2l0eS1sYWJlbCBjaXR5ICR7ZC5jbGFzc31gKVxuICAgICAgLnRleHQoZCA9PiBkLmNpdHkpXG4gICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTQpXG4gICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBkLmNvbG9yKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmVhc2UoQU5JTUFUSU9OX0VBU0lORylcbiAgICAgIC5kdXJhdGlvbihBTklNQVRJT05fRFVSQVRJT04gLyAxLjUpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHtcbiAgICAgICAgaWYgKGQuY2l0eSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIpIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54IC0gMTEwO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gXCJTYW4gSm9zZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDc4O1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gXCJIdW50aW5ndG9uIEJlYWNoXCIpIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54IC0gMTQwO1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gJ1NhbiBEaWVnbycpIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54IC0gODU7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jaXR5ID09PSAnQmlzbWFyY2snKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDg1O1xuICAgICAgICB9IGVsc2UgaWYgKGQuY2l0eSA9PT0gJ1BsYW5vJykge1xuICAgICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggLSA1NTtcbiAgICAgICAgfSBlbHNlIGlmIChkLmNpdHkgPT09ICdTaW91eCBGYWxscycpIHtcbiAgICAgICAgICByZXR1cm4gZC5wb3NpdGlvbi54IC0gOTA7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5jaXR5ID09PSAnR2xlbmRhbGUnKSB7XG4gICAgICAgICAgcmV0dXJuIGQucG9zaXRpb24ueCAtIDc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkLnBvc2l0aW9uLnggKyAxNTtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcInlcIiwgZCA9PiBkLnBvc2l0aW9uLnkgKyA1KVxuICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCAxMDApO1xuICB9XG5cbiAgcmFua2luZygpIHtcbiAgICB0aGlzLnN2Z1xuICAgICAgLnNlbGVjdEFsbChcIi5yYW5raW5nXCIpXG4gICAgICAuZGF0YShPYmplY3QudmFsdWVzKHRoaXMuZGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC50ZXh0KGQgPT4gZC5yYW5raW5nKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTIpXG4gICAgICAuc3R5bGUoXCJmb250LXdlaWdodFwiLCA3MDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIGQgPT4gYGNpdHkgJHtkLmNsYXNzfSBjaXR5LXBpbnBvaW50YClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5lYXNlKEFOSU1BVElPTl9FQVNJTkcpXG4gICAgICAuZHVyYXRpb24oQU5JTUFUSU9OX0RVUkFUSU9OKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gZC5wb3NpdGlvbi55ICsgNClcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IGQucG9zaXRpb24ueClcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAuc3R5bGUoJ3otaW5kZXgnLCAxMDApO1xuICB9XG5cbiAgcG9pbnRlcigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwic291cmNlUm9vdCI6IiJ9