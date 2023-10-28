// const humanFires = document.getElementById("../data/Human-caused wildfires - Number of fires caused.csv").value;
// console.log(Papa.parse(humanFires))

//AlaskaHuman, NorthwestHuman, NorthernCaliforniaHuman, SouthernCaliforniaHuman, NorthernRockiesHuman, GreatBasinHuman, WesternGreatBasinHuman, SouthwestHuman, RockyMountainsHuman, EasternAreaHuman, SouthernAreaHuman, TotalHuman, 

//AlaskaNature, NorthwestNature, NorthernCaliforniaNature, SouthernCaliforniaNature, NorthernRockiesNature, GreatBasinNature, WesternGreatBasinNature, SouthwestNature, RockyMountainsNature, EasternAreaNature, SouthernAreaNature, TotalNature, 


const YearData = [];
const AlaskaHuman = [];
const AlaskaNature = [];
const NorthwestHuman = [];
const NorthwestNature = [];
const NorthernCaliforniaHuman = [];
const NorthernCaliforniaNature = [];
const SouthernCaliforniaHuman = [];
const SouthernCaliforniaNature = [];
const NorthernRockiesHuman = [];
const NorthernRockiesNature = [];
const GreatBasinHuman = [];
const GreatBasinNature = [];
const WesternGreatBasinHuman = [];
const WesternGreatBasinNature = [];
const SouthwestHuman = [];
const SouthwestNature = [];
const RockyMountainsHuman = [];
const RockyMountainsNature = [];
const EasternAreaHuman = [];
const EasternAreaNature = [];
const SouthernAreaHuman = [];
const SouthernAreaNature = [];
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
                console.log(results);
                // console.log(results.data[0].Year);

                for (i=0; i<results.data.length; i++) {
                    YearData.push(results.data[i].Year);
                    AlaskaHuman.push(results.data[i].AlaskaHuman);
                    AlaskaNature.push(results.data[i].AlaskaNature);
                    NorthwestHuman.push(results.data[i].NorthwestHuman);
                    NorthwestNature.push(results.data[i].NorthwestNature);
                    NorthernCaliforniaHuman.push(results.data[i].NorthernCaliforniaHuman);
                    NorthernCaliforniaNature.push(results.data[i].NorthernCaliforniaNature);
                    SouthernCaliforniaHuman.push(results.data[i].SouthernCaliforniaHuman);
                    SouthernCaliforniaNature.push(results.data[i].SouthernCaliforniaNature);
                    NorthernRockiesHuman.push(results.data[i].NorthernRockiesHuman);
                    NorthernRockiesNature.push(results.data[i].NorthernRockiesNature);
                    GreatBasinHuman.push(results.data[i].GreatBasinHuman);
                    GreatBasinNature.push(results.data[i].GreatBasinNature);
                    WesternGreatBasinHuman.push(results.data[i].WesternGreatBasinHuman);
                    WesternGreatBasinNature.push(results.data[i].WesternGreatBasinNature);
                    SouthwestHuman.push(results.data[i].SouthwestHuman);
                    SouthwestNature.push(results.data[i].SouthwestNature);
                    RockyMountainsHuman.push(results.data[i].RockyMountainsHuman);
                    RockyMountainsNature.push(results.data[i].RockyMountainsNature);
                    EasternAreaHuman.push(results.data[i].EasternAreaHuman);
                    EasternAreaNature.push(results.data[i].EasternAreaNature);
                    SouthernAreaHuman.push(results.data[i].SouthernAreaHuman);
                    SouthernAreaNature.push(results.data[i].SouthernAreaNature);
                    TotalHuman.push(results.data[i].TotalHuman);
                    TotalNature.push(results.data[i].TotalNature);
                }
            }
        });
        //console.log(AlaskaHuman);
        //console.log(AlaskaNature);
    });

    
    const data = {
        labels: ['Alaska','Northwest', 'Northern California', 'Southern California', 'Northern Rockies', 'Great Basin', 'Western Great Basin', 'Southwest', 'Rocky Mountains', 'Eastern Area', 'Southern Area'],
        datasets: [
            {
                label: ['Number of Human Fires'],
                data: AlaskaHuman,
                backgroundColor: '#222',
                borderColor: ['#f48404', '#5b1dec'],
                borderWidth: [2, 2]
            },
            {
                label: ['Number of Natural Fires'],
                data: AlaskaNature, 
                backgroundColor: '#222',
                borderColor: ['#5b1dec'],
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
    
        // const checkChart = new Chart(
        //     document.getElementById('checkChart'),
        //     config
        // );
    
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
        
    );

    console.log(AlaskaHuman);
    console.log(AlaskaNature);

    function updateChart(label) {

    
        if (label === "AlaskaHuman") {
            myChart.data.datasets[0].data = AlaskaHuman;
            myChart.data.datasets[1].data = AlaskaNature;
        }
       else if (label === "NorthwestHuman") {
            myChart.data.datasets[0].data = NorthwestHuman;
            myChart.data.datasets[1].data = NorthwestNature;
        }
        else if (label === "NorthernCaliforniaHuman") {
            myChart.data.datasets[0].data = NorthernCaliforniaHuman;
            myChart.data.datasets[1].data = NorthernCaliforniaNature;
        }   
        else if (label === "SouthernCaliforniaHuman") {
            myChart.data.datasets[0].data = SouthernCaliforniaHuman;
            myChart.data.datasets[1].data = SouthernCaliforniaNature;
        }
        else if (label === "NorthernRockiesHuman") {
            myChart.data.datasets[0].data = NorthernRockiesHuman;
            myChart.data.datasets[1].data = NorthernRockiesNature;
        }
        else if (label === "GreatBasinHuman") {
            myChart.data.datasets[0].data = GreatBasinHuman;
            myChart.data.datasets[1].data = GreatBasinNature;
        }
        else if (label === "WesternGreatBasinHuman") {
            myChart.data.datasets[0].data = WesternGreatBasinHuman;
            myChart.data.datasets[1].data = WesternGreatBasinNature;
        }
        else if (label === "SouthwestHuman") {
            myChart.data.datasets[0].data = SouthwestHuman;
            myChart.data.datasets[1].data = SouthwestNature;
        }
        else if (label === "RockyMountainsHuman") {
            myChart.data.datasets[0].data = RockyMountainsHuman;
            myChart.data.datasets[1].data = RockyMountainsNature;
        }
        else if (label === "EasternAreaHuman") {
            myChart.data.datasets[0].data = EasternAreaHuman;
            myChart.data.datasets[1].data = EasternAreaNature;
        }
        else if (label === "SouthernAreaHuman") {
            myChart.data.datasets[0].data = SouthernAreaHuman;
            myChart.data.datasets[1].data = SouthernAreaNature;
        }
        else if (label === "TotalHuman") {
            myChart.data.datasets[0].data = TotalHuman;
            myChart.data.datasets[1].data = TotalNature;
        }
        myChart.update();
    };


// //function firePlots() {
    // plot style options
    const colorBackground = "#222";
    const colorPlotBackground = "black";
    const colorFont = "#f9736c";
    const titleFontSize = 26;
    const axisTitleFontSize = 18;
    const config2 = {responsive: true};

    let data2 = [
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

    let years2 = data2.map(item => item.Year);
    let fires = data2.map(item => item.Fires);
    let total = data2.map(item => item.Total);
    let acres = data2.map(item => item.Acres);

    let bubbleSize = fires.map(value => {
        return 10 + (value - Math.min.apply(null, fires)) /
            (Math.max.apply(null, fires) - Math.min.apply(null, fires)) * 80;
    });

    let bubbleSize2 = acres.map(value => {
        return 10 + (value - Math.min.apply(null, acres)) /
            (Math.max.apply(null, acres) - Math.min.apply(null, acres)) * 80;
    });


    let textData = data2.map(item => `Year: ${item.Year}<br>Fires: ${item.Fires}`);
    let textData2 = data2.map(item => `Year: ${item.Year}<br>Acres: ${item.Acres}`);


    let trace = {
        x: years2,
        y: total,
        text: textData,
        mode: 'markers',
        marker: {
            size: bubbleSize,
            sizemode: 'diameter',
            color: '#f48404',
            opacity: 0.8
        }
    };

    let trace2 = {
        x: years2,
        y: total,
        text: textData2,
        mode: 'markers',
        marker: {
            size: bubbleSize2,
            sizemode: 'diameter',
            color: '#5b1dec',
            opacity: 0.8
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
        margin: {t: 50, b: 40, l: 100, r: 100},
        plot_bgcolor: colorPlotBackground,
        paper_bgcolor: colorBackground,
        font: { color: colorFont },
        titlefont: { size: titleFontSize }
        
    };

    let chartData = [trace, trace2];

    Plotly.newPlot("Bubble", chartData, layout);


// function fireDataMap() {


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

            // Range is approximately 0-4,000 enitres ( aka lat and long coordinates)
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




