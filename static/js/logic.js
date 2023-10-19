const allFires = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/merged_fire_archive.csv";

// function fireData() {

    //load CSV with d3
    fireCoords = d3.csv(allFires);

    // Creating map object
    const map = L.map('map', {
    //US-Centered
    center: [37, -95.7],
    zoom: 4
    });

    //Creating tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
    }).addTo(map);

    let heatArray = [];
    let circleMarkersOperator = [];

    // for faster rendering of many points
    let canvasRenderer = L.canvas({ padding: 0.1 });

    // create data for the different overlay maps
    for (let i = 0; i < fireCoords.length; i++) {
        let location = fireCoords[i]
        heatArray.push([location.latitude, location.longitude]);
        circleMarkersOperator.push(createCircleMarker(canvasRenderer, location));
    }

//}

let fireData;
let referenceData;

function setSelectOptions() {
    let stateSelect = document.getElementById('state');

    for (let i=0; i<states.length; i++) {
        let option = document.createElement("option");
        option.text = states[i].name;
        option.value = states[i].abbreviation;
        stateSelect.addEventListener(option);
    }
}


// Filters the full data to a given state
//function createFilterData(state) {
    //let filterData;

    //if (state == 'USA') {
        //filterData = fireData;
    //} else {
        //filterData = fireData.filter(fire => fire.state == state);
    //}
//}



