const years = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

let yearSelect = document.getElementById('year');

for (let i = 0; i < years.length; i++) {
    let option = document.createElement("option");
    option.text = years[i];
    yearSelect.add(option);
};


// let stateSelect = document.getElementById('state');

// for (let i = 0; i < states.length; i++) {
//     let option = document.createElement("option");
//     option.text = states[i].name;
//     option.value = states[i].abbreviation;
//     stateSelect.add(option);
// };

// const states = [
//     {
//         "name": "Alabama",
//         "abbreviation": "AL"
//     },
//     {
//         "name": "Alaska",
//         "abbreviation": "AK"
//     },
//     {
//         "name": "American Samoa",
//         "abbreviation": "AS"
//     },
//     {
//         "name": "Arizona",
//         "abbreviation": "AZ"
//     },
//     {
//         "name": "Arkansas",
//         "abbreviation": "AR"
//     },
//     {
//         "name": "California",
//         "abbreviation": "CA"
//     },
//     {
//         "name": "Colorado",
//         "abbreviation": "CO"
//     },
//     {
//         "name": "Connecticut",
//         "abbreviation": "CT"
//     },
//     {
//         "name": "Delaware",
//         "abbreviation": "DE"
//     },
//     {
//         "name": "District Of Columbia",
//         "abbreviation": "DC"
//     },
//     {
//         "name": "Florida",
//         "abbreviation": "FL"
//     },
//     {
//         "name": "Georgia",
//         "abbreviation": "GA"
//     },
//     {
//         "name": "Hawaii",
//         "abbreviation": "HI"
//     },
//     {
//         "name": "Idaho",
//         "abbreviation": "ID"
//     },
//     {
//         "name": "Illinois",
//         "abbreviation": "IL"
//     },
//     {
//         "name": "Indiana",
//         "abbreviation": "IN"
//     },
//     {
//         "name": "Iowa",
//         "abbreviation": "IA"
//     },
//     {
//         "name": "Kansas",
//         "abbreviation": "KS"
//     },
//     {
//         "name": "Kentucky",
//         "abbreviation": "KY"
//     },
//     {
//         "name": "Louisiana",
//         "abbreviation": "LA"
//     },
//     {
//         "name": "Maine",
//         "abbreviation": "ME"
//     },
//     {
//         "name": "Maryland",
//         "abbreviation": "MD"
//     },
//     {
//         "name": "Massachusetts",
//         "abbreviation": "MA"
//     },
//     {
//         "name": "Michigan",
//         "abbreviation": "MI"
//     },
//     {
//         "name": "Minnesota",
//         "abbreviation": "MN"
//     },
//     {
//         "name": "Mississippi",
//         "abbreviation": "MS"
//     },
//     {
//         "name": "Missouri",
//         "abbreviation": "MO"
//     },
//     {
//         "name": "Montana",
//         "abbreviation": "MT"
//     },
//     {
//         "name": "Nebraska",
//         "abbreviation": "NE"
//     },
//     {
//         "name": "Nevada",
//         "abbreviation": "NV"
//     },
//     {
//         "name": "New Hampshire",
//         "abbreviation": "NH"
//     },
//     {
//         "name": "New Jersey",
//         "abbreviation": "NJ"
//     },
//     {
//         "name": "New Mexico",
//         "abbreviation": "NM"
//     },
//     {
//         "name": "New York",
//         "abbreviation": "NY"
//     },
//     {
//         "name": "North Carolina",
//         "abbreviation": "NC"
//     },
//     {
//         "name": "North Dakota",
//         "abbreviation": "ND"
//     },
//     {
//         "name": "Ohio",
//         "abbreviation": "OH"
//     },
//     {
//         "name": "Oklahoma",
//         "abbreviation": "OK"
//     },
//     {
//         "name": "Oregon",
//         "abbreviation": "OR"
//     },
//     {
//         "name": "Pennsylvania",
//         "abbreviation": "PA"
//     },
//     {
//         "name": "Puerto Rico",
//         "abbreviation": "PR"
//     },
//     {
//         "name": "Rhode Island",
//         "abbreviation": "RI"
//     },
//     {
//         "name": "South Carolina",
//         "abbreviation": "SC"
//     },
//     {
//         "name": "South Dakota",
//         "abbreviation": "SD"
//     },
//     {
//         "name": "Tennessee",
//         "abbreviation": "TN"
//     },
//     {
//         "name": "Texas",
//         "abbreviation": "TX"
//     },
//     {
//         "name": "Utah",
//         "abbreviation": "UT"
//     },
//     {
//         "name": "Vermont",
//         "abbreviation": "VT"
//     },
//     {
//         "name": "Virginia",
//         "abbreviation": "VA"
//     },
//     {
//         "name": "Washington",
//         "abbreviation": "WA"
//     },
//     {
//         "name": "West Virginia",
//         "abbreviation": "WV"
//     },
//     {
//         "name": "Wisconsin",
//         "abbreviation": "WI"
//     },
//     {
//         "name": "Wyoming",
//         "abbreviation": "WY"
//     },
// ];

