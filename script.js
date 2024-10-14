document.addEventListener("DOMContentLoaded", function () {
    const stateTaxRates = {
        "Alabama": "4.00%",
        "Alaska": "0.00%",
        "Arizona": "5.60%",
        "Arkansas": "6.50%",
        "California": "8.25%",
        "Colorado": "2.90%",
        "Connecticut": "6.35%",
        "Delaware": "0.00%",
        "Florida": "6.00%",
        "Georgia": "4.00%",
        "Hawaii": "4.00%",
        "Idaho": "6.00%",
        "Illinois": "6.25%",
        "Indiana": "7.00%",
        "Iowa": "6.00%",
        "Kansas": "6.50%",
        "Kentucky": "6.00%",
        "Louisiana": "4.45%",
        "Maine": "5.50%",
        "Maryland": "6.00%",
        "Massachusetts": "6.25%",
        "Michigan": "6.00%",
        "Minnesota": "6.88%",
        "Mississippi": "7.00%",
        "Missouri": "4.23%",
        "Montana": "0.00%",
        "Nebraska": "5.50%",
        "Nevada": "6.85%",
        "New Hampshire": "0.00%",
        "New Jersey": "6.63%",
        "New Mexico": "5.13%",
        "New York": "4.00%",
        "North Carolina": "4.75%",
        "North Dakota": "5.00%",
        "Ohio": "5.75%",
        "Oklahoma": "4.50%",
        "Oregon": "0.00%",
        "Pennsylvania": "6.00%",
        "Rhode Island": "7.00%",
        "South Carolina": "6.00%",
        "South Dakota": "4.50%",
        "Tennessee": "7.00%",
        "Texas": "6.25%",
        "Utah": "4.85%",
        "Vermont": "6.00%",
        "Virginia": "5.30%",
        "Washington": "6.50%",
        "West Virginia": "6.00%",
        "Wisconsin": "5.00%",
        "Wyoming": "4.00%"
    };
    
    const taxInfoDiv = document.getElementById("tax-info");

    // Initialize the map
    const map = L.map('map').setView([37.8, -96], 2);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,

    }).addTo(map);

    // Load GeoJSON data for US states
    fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
        .then(response => response.json())
        .then(data => {
            // Add GeoJSON layer to the map
            L.geoJSON(data, {
                style: function (feature) {
                    return {
                        color: "#000",
                        weight: 2,
                        fillColor: "#4CAF50",
                        fillOpacity: 0.5
                    };
                },
                onEachFeature: function (feature, layer) {
                    layer.on('click', function () {
                        const state = feature.properties.name;
                        const taxRate = stateTaxRates[state] || "Tax information not available";
                        taxInfoDiv.textContent = `The tax rate in ${state} is ${taxRate}.`;
                        taxHowMuch = taxRate;
                    });
                }
            }).addTo(map);
        });
});


// 원가 팁 택스 퍽센트 
let taxHowMuch = 0;
document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const numberInput = document.getElementById('numberInput').value;
    const dropdownMenu = document.getElementById('dropdownMenu').value;
  
    const resultContainer = document.getElementById('resultContainer');
    const tipContainer = document.getElementById('tipContainer');
    const tipPercentContainer = document.getElementById('tipPercentContainer');
    const originalContainer = document.getElementById('originalContainer');
    if (numberInput && dropdownMenu) {//값 올바른지 겁사
      console.log(Number(numberInput) + Number(tip(numberInput, dropdownMenu)[0]));
      let all1 = Number(numberInput) + Number(tip(numberInput, dropdownMenu)[0]);
      let all2 = Number(numberInput) + Number(tip(numberInput, dropdownMenu)[1]);
      originalContainer.textContent = `cost: ${numberInput}$`;

        resultContainer.textContent = 
        `you pay: 
        ${even(all1 * (1+String(taxHowMuch).split("%")[0]/100))}$
       ~ 
       ${even(all2 * (1+String(taxHowMuch).split("%")[0]/100))}$`;
        tipContainer.textContent = 
       `tip: ${even(Number(tip(numberInput, dropdownMenu)[0]))}$
        ~ 
        ${even(Number(tip(numberInput, dropdownMenu)[1]))}$`
        tipPercentContainer.textContent = `tip percent: ${tipPercent(numberInput, dropdownMenu)[0]} ~ ${tipPercent(numberInput, dropdownMenu)[1]}`;
        
    } else {
      resultContainer.textContent = 'Please enter a number and select an option.';
    }
    document.getElementById("recipt").style.opacity = 1;
  });
  function even(a) {
    return Math.round(a*10)/10;
  }
  function tip(howmuch, type) {
    if(type==1)//식당
    {return [howmuch*15/100, howmuch*20/100]}
    if(type==2)//
    {return [howmuch*10/100, howmuch*20/100]}
    if(type==3)//
    {return [howmuch*10/100, howmuch*20/100]}
    if(type==4)//
    {return [howmuch*10/100, howmuch*20/100]}
  }
  function tipPercent(howmuch, type) {
    if(type==1)//식당
    {return ["15%", "20%"]}
    if(type==2)//
    {return ["10%", "20%"]}
    if(type==3)//
    {return ["10%", "20%"]}
    if(type==4)//
    {return ["10%", "20%"]}
  }
  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropbtn = dropdown.querySelector('.dropbtn');
    const triangleIcon = dropdown.querySelector('.triangle-icon');

    dropbtn.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
      
      // 삼각형 아이콘의 방향을 변경
      if (dropdownContent.classList.contains('show')) {
        triangleIcon.style.transform = 'rotate(180deg)';
      } else {
        triangleIcon.style.transform = 'rotate(0deg)';
      }
    });
  });
