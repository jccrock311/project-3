const allFires = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/merged_fire_archive.csv";
const humanFires = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/Human-caused%20wildfires%20-%20Number%20of%20fires%20caused.csv";
const humanAcreage = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/Human-caused%20wildfires%20-Affected%20acreage.csv";
const natureFires = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/Lightning-caused%20wildfires%20-%20Number%20of%20fires%20caused.csv";
const natureAcreage = "https://raw.githubusercontent.com/jccrock311/project-3/main/data/Lightning-caused%20wildfires%20-%20Affected%20acreage.csv";

let fireData;
let referenceData;

function createFilterData(years) {
    let filterData;

    if (years == 2011) {
        filterData = fireData;
    } else {
        filterData = fireData.filter(years => years == years);
    }

    let humanNatureFires = {
        Humans: 0,
        Nature: 0,
    }

    let humanNatureAcreage = {
        Alaska: 0,
        Northwest: 0,
        NothernCalifornia: 0,
        SouthernCalifornia: 0,
        NothernRockies: 0,
        GreatBasin: 0,
        WesternGreatBasin: 0,
        Southwest: 0,
        RockyMountains: 0,
        EasternArea: 0,
        SouthernArea: 0,
        //Total: 0
    }

    let regionFiresCost = {}

    // loop through all the data calculate values our plots need
    filterData.forEach(fire => {
        if (fire.HumansCount >= 0) { humanNatureFires.Humans++ }
        if (fire.NatureCount >= 0) { humanNatureFires.Nature++ }

        humanNatureAcreage[fire.StatusTypeID]++;

        // set operator data value
        // if key does not exist yet, create it then increase count
        regionFiresCost[fire.OperatorID] = regionFiresCost[fire.OperatorID] || 0;
        regionFiresCost[fire.OperatorID]++;
    });


    // create Array of objects for operator data
    let regionArray = [];
    // fill array by looping through operator data
    for (const [key, value] of Object.entries(regionFiresCost)) {
        // select the correct operator from reference data
        let operatorObject = referenceData.OperatorTypes.filter(operator => operator.ID == key)[0];
        regionArray.push([operatorObject.Title, value]);
    }
    // sort Operator Data from highest to lowest (descending)
    regionArray.sort((a, b) => b[1] - a[1]);


    let calculatedData = {
        TotalFires: humanNatureFires,
        RegionFires: humanNatureAcreage,
        RegionFires: regionArray
    }

    return calculatedData;
}


// function fireDataMap() {

    //load CSVs with d3
    let fireCoords = d3.csv(allFires);
    //let humanFiresTotal = d3.csv(humanFires, function(data){
    //     console.log(data)
    // });
    let humanFiresAcreage = d3.csv(humanAcreage);
    let natureFiresTotal = d3.csv(natureFires);
    let natureFiresAcreage = d3.csv(natureAcreage);

    //let humanTotal = 

//--------------------------------------------------------------------------------------------------------------------------

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

// Filters the full data to a given state
//function createFilterData(state) {
    //let filterData;

    //if (state == 'USA') {
        //filterData = fireData;
    //} else {
        //filterData = fireData.filter(fire => fire.state == state);
    //}
//}

//function firePlots() {
    // plot style options
    const colorBackground = "#222";
    const colorPlotBackground = "black";
    const colorFont = "#f9736c";
    const titleFontSize = 26;
    const axisTitleFontSize = 18;
    const config = {responsive: true};

    // Humans vs. Nature (Lightning) plot
    let humanTrace = {
        x: ["whatever"],
        y: [3],
        type: 'bar',
        text: [],
        marker: {
        color: '#f48404'
        }
    };

    let natureTrace = {
        x: ["Nature (Lightning)"],
        y: [8],
        type: 'bar',
        text: [],
        marker: {
        color: '#5b1dec'
        }
    };
  
    let data1 = [humanTrace, natureTrace];
  
    let layout1 = {

        title: "Human vs. Nature Wildfire Count by Year",
        font:{
            size: axisTitleFontSize,
            family: 'Arial, Helvetica, sans-serif'
        },

        showlegend: false,
        xaxis: {
            zeroline: false,
            gridwidth: 2
        },

        yaxis: {
            title: "Total Fires (per year)",
            zeroline: false,
            gridwidth: 2
        },

        bargap :0.05,
        margin: {t: 50, b: 130, l: 60, r: 20},
        plot_bgcolor: colorPlotBackground,
        paper_bgcolor: colorBackground,
        font: { color: colorFont },
        titlefont: { size: titleFontSize }
    };
  
    Plotly.newPlot('Acreage', data1, layout1);

    /*
     Create plot showcasing human and lightning-caused regional acreage burn per year, also indicating a total amount.
     */

    let donutData = [{
        values: [11843, 163580, 190768, 84673, 56045, 270330, 0, 918803, 252562, 68293, 1360728], //human numbers (per year)
        labels: ["Alaska", "Nortwest", "Northern California", "Southern California", "Northern Rockies", "Great Basin", 
                "Western Great Basin", "Southwest", "Rocky Mountains", "Eastern Area", "Southern Area"],
        domain: {column: 0},
        name: 'Human-Caused Acreage',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
    },{
        values: [111, 3124, 24142, 2422, 3452, 31, 1553, 15153, 4122, 2312, 2241], //lightning numbers (per year)
        labels: ["Alaska", "Nortwest", "Northern California", "Southern California", "Northern Rockies", "Great Basin", 
                "Western Great Basin", "Southwest", "Rocky Mountains", "Eastern Area", "Southern Area"],
        text: 'Nature-Caused Acreage',
        domain: {column: 1},
        name: 'Nature-Caused Acreage',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
    }];
      
    let layout2 = {
        title: 'Human vs. Lightning-Caused Fires (Regional Acreage)',
        annotations: [
          {
            font: {
                size: 25
            },

            showarrow: false,
            text: 'Human',
            x: 0.21,
            y: 0.5
          },
          {
            font: {
                size: 25
            },

            showarrow: false,
            text: 'Nature',
            x: 0.79,
            y: 0.5
          }
        ],
        
        showlegend: false, //legend?
        grid: {rows: 1, columns: 2},
        margin: {t: 50, b: 50, l: 60, r: 20},
        plot_bgcolor: colorPlotBackground,
        paper_bgcolor: colorBackground,
        font: { color: colorFont },
        titlefont: { size: titleFontSize }
    };
      
      Plotly.newPlot('Pie', donutData, layout2);



    /*
     Create plot that showcases the amount of regional fires occured (in given year) compared to total acreage burned, 
     all in reference to the total cost of the fires.
     */

    let bubbleTrace = {
        x: [5, 4, 4], //total fires
        y: [5, 5, 63], //total acreage
        text: ['Region1', 'Region2', 'Region3'], //which region
        mode: 'markers',
        marker: {
          color: ['#5b1dec', '#eee',  '#eee2'],
          size: [12, 16, 35] //total cost reference
        }
      };
      
      let data3 = [bubbleTrace];
      
      let layout3 = {
        title: 'Total Regional Fires Compared to Acreage Burned and Cost (per year)',
        xaxis: {
            title: "Total Fires"
        },
        yaxis: {
            title: "Total Acreage"
        },
        showlegend: true,
        bargap :0.05,
        margin: {t: 50, b: 50, l: 60, r: 20},
        plot_bgcolor: colorPlotBackground,
        paper_bgcolor: colorBackground,
        font: { color: colorFont },
        titlefont: { size: titleFontSize }
      }; //legend??
      
      Plotly.newPlot('Bubble', data3, layout3);
    

// Logic.js

$(document).ready(function() {
    // Make an AJAX request to get your CSV data (if not already loaded)
    $.ajax({
        url: 'project-3/data/Latitude_and_Longitude.csv', // Replace with the actual URL to your CSV file
        dataType: 'text',
        success: function(data) {
            createMarkers(parseCSV(data));
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });

    // Function to parse CSV data and create markers on the map
    function parseCSV(csvData) {
        // Assuming your CSV has latitude and longitude columns
        var rows = csvData.split('\n');
        var markers = [];

        for (var i = 1; i < rows.length; i++) { // Start from 1 to skip the header
            var cols = rows[i].split(',');
            var latitude = parseFloat(cols[0]);
            var longitude = parseFloat(cols[1]);
            
            if (!isNaN(latitude) && !isNaN(longitude)) {
                markers.push([latitude, longitude]);
            }
        }

        return markers;
    }

    function createMarkers(markerData) {
        var map = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        markerData.forEach(function(coordinate) {
            L.marker(coordinate).addTo(map);
        });
    }
});

   

     /*
     Linear regression plot - Evan
     */

//}



//fireData();

