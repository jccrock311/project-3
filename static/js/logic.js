// const humanFires = document.getElementById("../data/Human-caused wildfires - Number of fires caused.csv").value;
// console.log(Papa.parse(humanFires))

const YearData = [];
const AlaskaHuman = [];
const AlaskaNature = [];
const NorthwestHuman = [];
const NorthwestNature = [];
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

    
    console.log(Chart);
    
    document.addEventListener('DOMContentLoaded', function () {
        const datas = {
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
            data: datas,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    
        const checkChart = new Chart(
            document.getElementById('checkChart'),
            config
        );
    
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

function updateChart(label) {
    if (label === "AlaskaHuman") {
        myChart.data.datasets[0].data = AlaskaHuman;
        myChart.data.datasets[1].data = AlaskaNature;
    }
    if (label === "NorthwestHuman") {
        myChart.data.datasets[0].data = NorthwestHuman;
        myChart.data.datasets[1].data = NorthwestNature;
    }
    if (label === "NCaliData") {
        myChart.data.datasets[0].data = NCaliHuman;
        myChart.data.datasets[1].data = NCaliNature;
    }
    if (label === "SCaliData") {
        myChart.data.datasets[0].data = SCaliHuman;
        myChart.data.datasets[1].data = SCaliNature;
    }
    if (label === "NRockiesData") {
        myChart.data.datasets[0].data = NRockiesHuman;
        myChart.data.datasets[1].data = NRockiesNature;
    }
    if (label === "GreatBasinData") {
        myChart.data.datasets[0].data = GreatBasinHuman;
        myChart.data.datasets[1].data = GreatBasinNature;
    }
    if (label === "WGreatBasinData") {
        myChart.data.datasets[0].data = WGreatBasinHuman;
        myChart.data.datasets[1].data = WGreatBasinNature;
    }
    if (label === "SouthwestData") {
        myChart.data.datasets[0].data = SouthwestHuman;
        myChart.data.datasets[1].data = SouthwestNature;
    }
    if (label === "RockyMountainsData") {
        myChart.data.datasets[0].data = RockyMountainsHuman;
        myChart.data.datasets[1].data = RockyMountainsNature;
    }
    if (label === "EAreaData") {
        myChart.data.datasets[0].data = EAreaHuman;
        myChart.data.datasets[1].data = EAreaNature;
    }
    if (label === "SAreaData") {
        myChart.data.datasets[0].data = SAreaHuman;
        myChart.data.datasets[1].data = SAreaNature;
    }
    if (label === "TotalData") {
        myChart.data.datasets[0].data = TotalHuman;
        myChart.data.datasets[1].data = TotalNature;
    }

    myChart.update();
};
});


// //function firePlots() {
    // plot style options
    const colorBackground = "#222";
    const colorPlotBackground = "black";
    const colorFont = "#f9736c";
    const titleFontSize = 26;
    const axisTitleFontSize = 18;
    const config = {responsive: true};

    let data = [
        { Year: "2022", Fires: 68988.00, Acres: 7577183.00, Total: 3549000000 },
        { Year: "2021", Fires: 58985.00, Acres: 7125643.00, Total: 4389000000 },
        { Year: "2020", Fires: 58950.00, Acres: 10122336.00, Total: 2274000000 },
        { Year: "2019", Fires: 50477.00, Acres: 4664364.00, Total: 1590000000 },
        { Year: "2018", Fires: 58083.00, Acres: 8767492.00, Total: 3143256000 },
        { Year: "2017", Fires: 71499.00, Acres: 10026086.00, Total: 2918165000 },
        { Year: "2016", Fires: 67595.00, Acres: 5503538.00, Total: 1975545000 },
        { Year: "2015", Fires: 68151.00, Acres: 10125149.00, Total: 2130543000 },
        { Year: "2014", Fires: 63212.00, Acres: 3595613.00, Total: 1522149000 },
        { Year: "2013", Fires: 47579.00, Acres: 4319546.00, Total: 1740934000 },
        { Year: "2012", Fires: 67774.00, Acres: 9326238.00, Total: 1902446000 },
        { Year: "2011", Fires: 74126.00, Acres: 8711367.00, Total: 1374525000 },
        { Year: "2010", Fires: 71971.00, Acres: 3422724.00, Total: 809499000 },
        { Year: "2009", Fires: 78792.00, Acres: 5921786.00, Total: 920529000 },
        { Year: "2008", Fires: 78979.00, Acres: 5292468.00, Total: 1585856000 },
        { Year: "2007", Fires: 85705.00, Acres: 9328045.00, Total: 1620145000 },
        { Year: "2006", Fires: 96385.00, Acres: 9873745.00, Total: 1704477000 },
        { Year: "2005", Fires: 66753.00, Acres: 8689389.00, Total: 818954000 },
        { Year: "2004", Fires: 65461.00, Acres: 8097880.00, Total: 1007244000 },
        { Year: "2003", Fires: 63629.00, Acres: 3960842.00, Total: 1327138000 },
        { Year: "2002", Fires: 73457.00, Acres: 7184712.00, Total: 1674040000 },
        { Year: "2001", Fires: 84079.00, Acres: 3570911.00, Total: 952696000 }
    ];

    let years = data.map(item => item.Year);
    let fires = data.map(item => item.Fires);
    let total = data.map(item => item.Total);
    let acres = data.map(item => item.Acres);

    let bubbleSize = fires.map(value => {
        return 20 + (value - Math.min.apply(null, fires)) /
            (Math.max.apply(null, fires) - Math.min.apply(null, fires)) * 80;
    });


    let textData = data.map(item => `Year: ${item.Year}<br>Fires: ${item.Fires}`);


    let trace = {
        x: years,
        y: total,
        text: textData,
        mode: 'markers',
        marker: {
            size: bubbleSize,
            sizemode: 'diameter',
            color: '#f48404',
            opacity: 0.7
        }
    };

    let layout = {
        title: 'Cost of Wildfires vs Wildfire Amount',
        font:{
                size: axisTitleFontSize,
                family: 'Arial, Helvetica, sans-serif'
             },
        xaxis:{ 
                title: 'Years',
                zeroline: false,
                gridwidth: 2
             },
        yaxis: { title: 'Total Cost' },
        bargap :0.05,
        margin: {t: 50, b: 130, l: 60, r: 20},
        plot_bgcolor: colorPlotBackground,
        paper_bgcolor: colorBackground,
        font: { color: colorFont },
        titlefont: { size: titleFontSize }
        
    };

    let chartData = [trace];

    Plotly.newPlot("Bubble", chartData, layout);

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

   

    //let humanTotal = 

//--------------------------------------------------------------------------------------------------------------------------

    // Creating map object
    const map = L.map('map', {
        //US-Centered
        center: [37, -95.7],
        zoom: 4,
        fullscreenControl: { pseudoFullscreen: true }
        });
    
        //Creating tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
        }).addTo(map);


 
    
     //load CSVs with d3
     let one ="csv.file"
     let parsed_one=d3.csvParse(one);
     let fireCoords = d3.csv(parsed_one);
     
     //let humanFiresTotal = d3.csv(humanFires, function(data){
     //     console.log(data)
     // });
     let two ="csv.file"
     let parsed_two=d3.csvParse(two);
     let humanFiresAcreage = d3.csv(parsed_two);

     let three="csv.file"
     let parsed_three=d3.csvParse(three);
     let natureFiresTotal = d3.csv(parsed_three);

     let four="csv.file"
     let parsed_four=d3.csvParse(four);
     let natureFiresAcreage = d3.csv(parsed_four);

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





var url = "http://localhost:5000/api/latitude_and_longitude";


var fuego = L.icon({
    iconUrl: 'https://www.pngmart.com/files/23/Fire-Icon-PNG-Pic.png', 
    iconSize: [20, 20], 
    iconAnchor: [4, 20], 
    popupAnchor: [0, -62] 
});

d3.json(url)
    .then(dataString => {
        console.log(typeof dataString);

        var data = JSON.parse(dataString);
        console.log(data);

      
        if (data && data.length > 0) {
            console.log( data[0]);

            // Range is approximately 0-4,000
            for (let i = 0; i < Math.min(3000, data.length); i++) {
                var entry = data[i];
                var lat = parseFloat(entry.latitude);
                var lon = parseFloat(entry.longitude);

                if (!isNaN(lat) && !isNaN(lon)) {
                   
                    var marker = L.marker([lat, lon], { icon: fuego }).addTo(map);
                    
                }}}});






   


     /*
     Linear regression plot - Evan
     */

//}


//fireData();




