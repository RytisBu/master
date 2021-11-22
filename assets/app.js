const request = new XMLHttpRequest();

function displayPlaces(placesArray) {
    let placesSelect = document.getElementById('places');

    for(let a = 0; a < placesArray.length; a++){
        let option = document.createElement('option');
        option.value = placesArray[a]['code'];
        option.text = placesArray[a]['name'];
        placesSelect.appendChild(option);
    }
}

function getForecasts(place_code) {
    let content = document.getElementById("long-term-prediction");
    content.innerHTML = '<h2>Loading...</h2>';
    fetch('https://api.meteo.lt/v1/places/' + place_code + '/forecasts/long-term')
        .then(response => {
            return response.json();
        })
        .then(forecast => {
            printContent(forecast);
        })
}

function displayForecast() {
    let place_code = getPlaceSelected();
    removeOldLongTermPrediction();
    getForecasts(place_code);

    // console.log(forecastArray)
}
function printContentHeader (table) {
    let dateTime = document.createElement('th');
    let airTemperature = document.createElement('th');
    let cloudCover = document.createElement('th');
    let conditionCode = document.createElement('th');
    let relativeHumidity = document.createElement('th');
    let seaLevelPressure = document.createElement('th');
    let totalPrecipitation = document.createElement('th');
    let windDirection = document.createElement('th');
    let windGust = document.createElement('th');
    let windSpeed = document.createElement('th');
    let contentTr = document.createElement('tr');

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

    let contentDiv = document.getElementById('long-term-prediction');
    let contentTable = document.createElement('table');
    contentTable.setAttribute("class", "table table-dark table-striped");
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contentTable);

    printContentHeader(contentTable);

    for(let s = 0; s < forecastArray['forecastTimestamps'].length; s++) {
        let contentTr = document.createElement('tr');
        contentTr.setAttribute('class', 'forecast-table-content');
        contentTable.appendChild(contentTr);

        let dateTime = document.createElement('td');
        dateTime.innerText = forecastArray['forecastTimestamps'][s]['forecastTimeUtc'];
        dateTime.setAttribute('class', 'col-sm-1');
        contentTr.appendChild(dateTime);

        let airTemperature = document.createElement('td');
        airTemperature.innerText = forecastArray['forecastTimestamps'][s]['airTemperature'];
        contentTr.appendChild(airTemperature);

        let cloudCover = document.createElement('td');
        cloudCover.innerText = forecastArray['forecastTimestamps'][s]['cloudCover'];
        contentTr.appendChild(cloudCover);

        let conditionCode = document.createElement('td');
        conditionCode.innerText = forecastArray['forecastTimestamps'][s]['conditionCode'];
        contentTr.appendChild(conditionCode);

        let relativeHumidity = document.createElement('td');
        relativeHumidity.innerText = forecastArray['forecastTimestamps'][s]['relativeHumidity'];
        contentTr.appendChild(relativeHumidity);

        let seaLevelPressure = document.createElement('td');
        seaLevelPressure.innerText = forecastArray['forecastTimestamps'][s]['seaLevelPressure'];
        contentTr.appendChild(seaLevelPressure);

        let totalPrecipitation = document.createElement('td');
        totalPrecipitation.innerText = forecastArray['forecastTimestamps'][s]['totalPrecipitation'];
        contentTr.appendChild(totalPrecipitation);

        let windDirection = document.createElement('td');
        windDirection.innerText = forecastArray['forecastTimestamps'][s]['windDirection'];
        contentTr.appendChild(windDirection);

        let windGust = document.createElement('td');
        windGust.innerText = forecastArray['forecastTimestamps'][s]['windGust'];
        contentTr.appendChild(windGust);

        let windSpeed = document.createElement('td');
        windSpeed.innerText = forecastArray['forecastTimestamps'][s]['windSpeed'];
        contentTr.appendChild(windSpeed);
    }

    for(let i = 0; i < forecastArray['forecastTimestamps'].length; i++) {
        let option = document.createElement('option');
        console.log(forecastArray['forecastTimestamps'][i]['airTemperature']);
    }
}

function getCity() {
    fetch('https://api.meteo.lt/v1/places')
        .then(response => {
            return response.json();
        })
        .then(places => {
            displayPlaces(places);
        })

    // console.log('responses: ' + JSON.parse(s));
}

function getPlaceSelected() {
    let x = document.getElementById("places");
    x = x.options[x.selectedIndex].value;
    return x;
}

function removeOldLongTermPrediction () {
    const longTermPrediction = document.getElementById("long-term-prediction");
    longTermPrediction.innerHTML = '<h2>Please select area to see forecast!</h2>';

}

getCity();

document.getElementById("places").addEventListener("change", displayForecast);
