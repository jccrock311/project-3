// const humanFires = document.getElementById("../data/Human-caused wildfires - Number of fires caused.csv").value;
// console.log(Papa.parse(humanFires))

const YearData = [];
const AlaskaHuman = [];
const AlaskaNature = [];
const NorthwestHuman= [];
const NorthwestNature= [];
const NCaliHuman = [];
const NCaliNature = [];
const SCaliHuman = [];
const SCaliNature = [];
const NRockiesHuman = [];
const NRockiesNature = [];
const GreatBasinHuman = [];
const GreatBasinNature = [];
const WGreatBasinHuman = [];
const WGreatBasinNature = [];
const SouthwestHuman = [];
const SouthwestNature = [];
const RockyMountainsHuman = [];
const RockyMountainsNature = [];
const EAreaHuman = [];
const EAreaNature = [];
const SAreaHuman = [];
const SAreaNature = [];
const TotalHuman = [];
const TotalNature = [];



// let fireData;

// //filtering the year
// // function createFilterData(year) {
// //     let filterData;

// //     if (year == "---") {
// //         filterData = fireData;
// //     } else {
// //         filterData = fireData.filter(years => years == years);
// //     }



//import CSV
const uploadconfirm = document.getElementById('uploadconfirm').
    addEventListener('click', () => {
        Papa.parse(document.getElementById('uploadfile').files[0],
        {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                // console.log(results);
                // console.log(results.data[0].Year);

                for (i=0; i<results.data.length; i++) {
                    YearData.push(results.data[i].Year);
                    AlaskaHuman.push(results.data[i].AlaskaHuman);
                    AlaskaNature.push(results.data[i].AlaskaNature);
                    NorthwestHuman.push(results.data[i].NorthwestHuman);
                    NorthwestNature.push(results.data[i].NorthwestNature);
                    NCaliHuman.push(results.data[i].NorthernCaliforniaHuman);
                    NCaliNature.push(results.data[i].NorthernCaliforniaNature);
                    SCaliHuman.push(results.data[i].SouthernCaliforniaHuman);
                    SCaliNature.push(results.data[i].SouthernCaliforniaNature);
                    NRockiesHuman.push(results.data[i].NorthernRockiesHuman);
                    NRockiesNature.push(results.data[i].NorthernRockiesNature);
                    GreatBasinHuman.push(results.data[i].GreatBasinHuman);
                    GreatBasinNature.push(results.data[i].GreatBasinNature);
                    WGreatBasinHuman.push(results.data[i].WesternGreatBasinHuman);
                    WGreatBasinNature.push(results.data[i].WesternGreatBasinNature);
                    SouthwestHuman.push(results.data[i].SouthwestHuman);
                    SouthwestNature.push(results.data[i].SouthwestNature);
                    RockyMountainsHuman.push(results.data[i].RockyMountainsHuman);
                    RockyMountainsNature.push(results.data[i].RockyMountainsNature);
                    EAreaHuman.push(results.data[i].EasternAreaHuman);
                    EAreaNature.push(results.data[i].EasternAreaNature);
                    SAreaHuman.push(results.data[i].SouthernAreaHuman);
                    SAreaNature.push(results.data[i].SouthernAreaNature);
                    TotalHuman.push(results.data[i].TotalHuman);
                    TotalNature.push(results.data[i].TotalNature);
                }
            }

        });
    });

    const data = {
        labels: ['Humans', 'Nature'],
            datasets: [
                {
                    label: ['Number of Human Fires', 'Number of Natural Fires'],
                    data: [0, 0],
                    backgroundColor: '#222',
                    borderColor: ['#f48404', '#5b1dec'],
                    borderWidth: [2, 2]
                },
            ]
    };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    function updateChart(label){
        if (label === "AlaskaHuman") {
            myChart.data.datasets[0].data = AlaskaHuman;
            myChart.data.datasets[0].data = AlaskaNature;
        }
        if (label === "NorthwestHuman") {
            myChart.data.datasets[0].data = NorthwestHuman;
            myChart.data.datasets[0].data = NorthwestNature;
        }
        if (label === "NCaliData") {
            myChart.data.datasets[0].data = NCaliHuman;
            myChart.data.datasets[0].data = NCaliNature;
        }
        if (label === "SCaliData") {
            myChart.data.datasets[0].data = SCaliHuman;
            myChart.data.datasets[0].data = SCaliNature;
        }
        if (label === "NRockiesData") {
            myChart.data.datasets[0].data = NRockiesHuman;
            myChart.data.datasets[0].data = NRockiesNature;
        }
        if (label === "GreatBasinData") {
            myChart.data.datasets[0].data = GreatBasinHuman;
            myChart.data.datasets[0].data = GreatBasinNature;
        }
        if (label === "WGreatBasinData") {
            myChart.data.datasets[0].data = WGreatBasinHuman;
            myChart.data.datasets[0].data = WGreatBasinNature;
        }
        if (label === "SouthwestData") {
            myChart.data.datasets[0].data = SouthwestHuman;
            myChart.data.datasets[0].data = SouthwestNature;
        }
        if (label === "RockyMountainsData") {
            myChart.data.datasets[0].data = RockyMountainsHuman;
            myChart.data.datasets[0].data = RockyMountainsNature;
        }
        if (label === "EAreaData") {
            myChart.data.datasets[0].data = EAreaHuman;
            myChart.data.datasets[0].data = EAreaNature;
        }
        if (label === "SAreaData") {
            myChart.data.datasets[0].data = SAreaHuman;
            myChart.data.datasets[0].data = SAreaNature;
        }
        if (label === "TotalData") {
            myChart.data.datasets[0].data = TotalHuman;
            myChart.data.datasets[0].data = TotalNature;
        }
        
        myChart.update();
    };



// //function firePlots() {
//     // plot style options
//     const colorBackground = "#222";
//     const colorPlotBackground = "black";
//     const colorFont = "#f9736c";
//     const titleFontSize = 26;
//     const axisTitleFontSize = 18;
//     const config = {responsive: true};

//     // Humans vs. Nature (Lightning) plot
//     let humanTrace = {
//         x: ["whatever"],
//         y: [3],
//         type: 'bar',
//         text: [],
//         marker: {
//         color: '#f48404'
//         }
//     };

//     let natureTrace = {
//         x: ["Nature (Lightning)"],
//         y: [8],
//         type: 'bar',
//         text: [],
//         marker: {
//         color: '#5b1dec'
//         }
//     };
  
//     let data1 = [humanTrace, natureTrace];
  
//     let layout1 = {

//         title: "Human vs. Nature Wildfire Count by Year",
//         font:{
//             size: axisTitleFontSize,
//             family: 'Arial, Helvetica, sans-serif'
//         },

//         showlegend: false,
//         xaxis: {
//             zeroline: false,
//             gridwidth: 2
//         },

//         yaxis: {
//             title: "Total Fires (per year)",
//             zeroline: false,
//             gridwidth: 2
//         },

//         bargap :0.05,
//         margin: {t: 50, b: 130, l: 60, r: 20},
//         plot_bgcolor: colorPlotBackground,
//         paper_bgcolor: colorBackground,
//         font: { color: colorFont },
//         titlefont: { size: titleFontSize }
//     };
  
//     Plotly.newPlot('Acreage', data1, layout1);

//     /*
//      Create plot showcasing human and lightning-caused regional acreage burn per year, also indicating a total amount.
//      */

//     let donutData = [{
//         values: [11843, 163580, 190768, 84673, 56045, 270330, 0, 918803, 252562, 68293, 1360728], //human numbers (per year)
//         labels: ["Alaska", "Nortwest", "Northern California", "Southern California", "Northern Rockies", "Great Basin", 
//                 "Western Great Basin", "Southwest", "Rocky Mountains", "Eastern Area", "Southern Area"],
//         domain: {column: 0},
//         name: 'Human-Caused Acreage',
//         hoverinfo: 'label+percent+name',
//         hole: .4,
//         type: 'pie'
//     },{
//         values: [111, 3124, 24142, 2422, 3452, 31, 1553, 15153, 4122, 2312, 2241], //lightning numbers (per year)
//         labels: ["Alaska", "Nortwest", "Northern California", "Southern California", "Northern Rockies", "Great Basin", 
//                 "Western Great Basin", "Southwest", "Rocky Mountains", "Eastern Area", "Southern Area"],
//         text: 'Nature-Caused Acreage',
//         domain: {column: 1},
//         name: 'Nature-Caused Acreage',
//         hoverinfo: 'label+percent+name',
//         hole: .4,
//         type: 'pie'
//     }];
      
//     let layout2 = {
//         title: 'Human vs. Lightning-Caused Fires (Regional Acreage)',
//         annotations: [
//           {
//             font: {
//                 size: 25
//             },

//             showarrow: false,
//             text: 'Human',
//             x: 0.21,
//             y: 0.5
//           },
//           {
//             font: {
//                 size: 25
//             },

//             showarrow: false,
//             text: 'Nature',
//             x: 0.79,
//             y: 0.5
//           }
//         ],
        
//         showlegend: false, //legend?
//         grid: {rows: 1, columns: 2},
//         margin: {t: 50, b: 50, l: 60, r: 20},
//         plot_bgcolor: colorPlotBackground,
//         paper_bgcolor: colorBackground,
//         font: { color: colorFont },
//         titlefont: { size: titleFontSize }
//     };
      
//       Plotly.newPlot('Pie', donutData, layout2);



//     /*
//      Create plot that showcases the amount of regional fires occured (in given year) compared to total acreage burned, 
//      all in reference to the total cost of the fires.
//      */

//     let bubbleTrace = {
//         x: [5, 4, 4], //total fires
//         y: [5, 5, 63], //total acreage
//         text: ['Region1', 'Region2', 'Region3'], //which region
//         mode: 'markers',
//         marker: {
//           color: ['#5b1dec', '#eee',  '#eee2'],
//           size: [12, 16, 35] //total cost reference
//         }
//       };
      
//       let data3 = [bubbleTrace];
      
//       let layout3 = {
//         title: 'Total Regional Fires Compared to Acreage Burned and Cost (per year)',
//         xaxis: {
//             title: "Total Fires"
//         },
//         yaxis: {
//             title: "Total Acreage"
//         },
//         showlegend: true,
//         bargap :0.05,
//         margin: {t: 50, b: 50, l: 60, r: 20},
//         plot_bgcolor: colorPlotBackground,
//         paper_bgcolor: colorBackground,
//         font: { color: colorFont },
//         titlefont: { size: titleFontSize }
//       }; //legend??
      
//       Plotly.newPlot('Bubble', data3, layout3);
    



    // let regionFiresCost = {}

    // // loop through all the data calculate values our plots need
    // filterData.forEach(fire => {
    //     if (fire.HumansCount >= 0) { humanNatureFires.Humans++ }
    //     if (fire.NatureCount >= 0) { humanNatureFires.Nature++ }

    //     humanNatureAcreage[fire.StatusTypeID]++;

    //     // set operator data value
    //     // if key does not exist yet, create it then increase count
    //     regionFiresCost[fire.OperatorID] = regionFiresCost[fire.OperatorID] || 0;
    //     regionFiresCost[fire.OperatorID]++;
    // });


    // // create Array of objects for operator data
    // let regionArray = [];
    // // fill array by looping through operator data
    // for (const [key, value] of Object.entries(regionFiresCost)) {
    //     // select the correct operator from reference data
    //     let operatorObject = referenceData.OperatorTypes.filter(operator => operator.ID == key)[0];
    //     regionArray.push([operatorObject.Title, value]);
    // }
    // // sort Operator Data from highest to lowest (descending)
    // regionArray.sort((a, b) => b[1] - a[1]);


    // let calculatedData = {
    //     TotalFires: humanNatureFires,
    //     RegionFires: humanNatureAcreage,
    //     RegionFires: regionArray
    // }

    // return calculatedData;


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
    // const map = L.map('map', {
    // //US-Centered
    // center: [37, -95.7],
    // zoom: 4
    // });

    // //Creating tile layer
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
    // }).addTo(map);

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



const url = "http://localhost:5000/api/latitude_and_longitude";
      
d3.json(url).then(data => {
    console.log("Fetched data:", data); 
    console.log("Type of data:", typeof data);
    console.log("Type of data.locations:", typeof data.locations);
    
    if (data && data.locations) {
        console.log("Data and data.locations exist. Processing...");
        
        data.locations.forEach(entry => {
            const lat = entry.latitude;
            const lon = entry.longitude;
            const marker = L.marker([lat, lon]).addTo(myMap);
            
        });
    } else {
        console.error("Data or data.locations is undefined or null");
    }
}).catch(error => {
    console.error("Error fetching data:", error);
});


   

     /*
     Linear regression plot - Evan
     */

//}



//fireData();

