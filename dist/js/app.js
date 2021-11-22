/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (() => {

var request = new XMLHttpRequest();

function displayPlaces(placesArray) {
  var placesSelect = document.getElementById('places');

  for (var a = 0; a < placesArray.length; a++) {
    var option = document.createElement('option');
    option.value = placesArray[a]['code'];
    option.text = placesArray[a]['name'];
    placesSelect.appendChild(option);
  }
}

function getForecasts(place_code) {
  var content = document.getElementById("long-term-prediction");
  content.innerHTML = '<h2>Loading...</h2>';
  fetch('https://api.meteo.lt/v1/places/' + place_code + '/forecasts/long-term').then(function (response) {
    return response.json();
  }).then(function (forecast) {
    printContent(forecast);
  });
}

function displayForecast() {
  var place_code = getPlaceSelected();
  removeOldLongTermPrediction();
  getForecasts(place_code); // console.log(forecastArray)
}

function printContentHeader(table) {
  var dateTime = document.createElement('th');
  var airTemperature = document.createElement('th');
  var cloudCover = document.createElement('th');
  var conditionCode = document.createElement('th');
  var relativeHumidity = document.createElement('th');
  var seaLevelPressure = document.createElement('th');
  var totalPrecipitation = document.createElement('th');
  var windDirection = document.createElement('th');
  var windGust = document.createElement('th');
  var windSpeed = document.createElement('th');
  var contentTr = document.createElement('tr');
  contentTr.setAttribute('class', 'forecast-table-header');
  table.appendChild(contentTr);
  dateTime.innerText = 'Date and time';
  contentTr.appendChild(dateTime);
  airTemperature.innerText = 'Air temperature';
  contentTr.appendChild(airTemperature);
  cloudCover.innerText = 'Cloud cover';
  contentTr.appendChild(cloudCover);
  conditionCode.innerText = 'Condition code';
  contentTr.appendChild(conditionCode);
  relativeHumidity.innerText = 'Relative humidity';
  contentTr.appendChild(relativeHumidity);
  seaLevelPressure.innerText = 'Sea level pressure';
  contentTr.appendChild(seaLevelPressure);
  totalPrecipitation.innerText = 'Total precipitation';
  contentTr.appendChild(totalPrecipitation);
  windDirection.innerText = 'Wind direction';
  contentTr.appendChild(windDirection);
  windGust.innerText = 'Wind gust';
  contentTr.appendChild(windGust);
  windSpeed.innerText = 'Wind speed';
  contentTr.appendChild(windSpeed);
}

function printContent(forecastArray) {
  removeOldLongTermPrediction();
  var contentDiv = document.getElementById('long-term-prediction');
  var contentTable = document.createElement('table');
  contentTable.setAttribute("class", "table table-dark table-striped");
  contentDiv.innerHTML = '';
  contentDiv.appendChild(contentTable);
  printContentHeader(contentTable);

  for (var s = 0; s < forecastArray['forecastTimestamps'].length; s++) {
    var contentTr = document.createElement('tr');
    contentTr.setAttribute('class', 'forecast-table-content');
    contentTable.appendChild(contentTr);
    var dateTime = document.createElement('td');
    dateTime.innerText = forecastArray['forecastTimestamps'][s]['forecastTimeUtc'];
    dateTime.setAttribute('class', 'col-sm-1');
    contentTr.appendChild(dateTime);
    var airTemperature = document.createElement('td');
    airTemperature.innerText = forecastArray['forecastTimestamps'][s]['airTemperature'];
    contentTr.appendChild(airTemperature);
    var cloudCover = document.createElement('td');
    cloudCover.innerText = forecastArray['forecastTimestamps'][s]['cloudCover'];
    contentTr.appendChild(cloudCover);
    var conditionCode = document.createElement('td');
    conditionCode.innerText = forecastArray['forecastTimestamps'][s]['conditionCode'];
    contentTr.appendChild(conditionCode);
    var relativeHumidity = document.createElement('td');
    relativeHumidity.innerText = forecastArray['forecastTimestamps'][s]['relativeHumidity'];
    contentTr.appendChild(relativeHumidity);
    var seaLevelPressure = document.createElement('td');
    seaLevelPressure.innerText = forecastArray['forecastTimestamps'][s]['seaLevelPressure'];
    contentTr.appendChild(seaLevelPressure);
    var totalPrecipitation = document.createElement('td');
    totalPrecipitation.innerText = forecastArray['forecastTimestamps'][s]['totalPrecipitation'];
    contentTr.appendChild(totalPrecipitation);
    var windDirection = document.createElement('td');
    windDirection.innerText = forecastArray['forecastTimestamps'][s]['windDirection'];
    contentTr.appendChild(windDirection);
    var windGust = document.createElement('td');
    windGust.innerText = forecastArray['forecastTimestamps'][s]['windGust'];
    contentTr.appendChild(windGust);
    var windSpeed = document.createElement('td');
    windSpeed.innerText = forecastArray['forecastTimestamps'][s]['windSpeed'];
    contentTr.appendChild(windSpeed);
  }

  for (var i = 0; i < forecastArray['forecastTimestamps'].length; i++) {
    var option = document.createElement('option');
    console.log(forecastArray['forecastTimestamps'][i]['airTemperature']);
  }
}

function getCity() {
  fetch('https://api.meteo.lt/v1/places').then(function (response) {
    return response.json();
  }).then(function (places) {
    displayPlaces(places);
  }); // console.log('responses: ' + JSON.parse(s));
}

function getPlaceSelected() {
  var x = document.getElementById("places");
  x = x.options[x.selectedIndex].value;
  return x;
}

function removeOldLongTermPrediction() {
  var longTermPrediction = document.getElementById("long-term-prediction");
  longTermPrediction.innerHTML = '<h2>Please select area to see forecast!</h2>';
}

getCity();
document.getElementById("places").addEventListener("change", displayForecast);

/***/ }),

/***/ "./resources/sass/style.scss":
/*!***********************************!*\
  !*** ./resources/sass/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcodeacademy"] = self["webpackChunkcodeacademy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./assets/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/sass/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;