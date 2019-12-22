// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

let pilotName = null;
let copilotName = null;
let  fuelLevel = null;
let cargoMass = null;
let submitButton = null;
let launchStatus = null;
let pilotStatus = null;
let copilotStatus = null;
let fuelStatus = null;
let cargoStatus = null;
let faultyItems = null;
let launchStatusCheck = null;

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      pilotName = document.querySelector("input[name=pilotName]");
      copilotName = document.querySelector('input[name=copilotName]');
      fuelLevel = document.querySelector('input[name=fuelLevel]');
      cargoMass = document.querySelector('input[name=cargoMass]');
      launchStatus = document.getElementById('launchStatus');
      pilotStatus = document.getElementById('pilotStatus');
      copilotStatus = document.getElementById('copilotStatus');
      fuelStatus = document.getElementById('fuelStatus');
      cargoStatus = document.getElementById('cargoStatus');
      faultyItems = document.getElementById('faultyItems');
      launchStatusCheck = document.getElementById('launchStatusCheck');

      
      validateForm();
      
      function validateForm(){
         //regex for the string validation
         let reg = "[a-zA-Z]"
         
         if(pilotName.value === "" ||
         copilotName.value === "" || 
         fuelLevel.value === "" || 
         cargoMass.value === ""){
            alert('All fields are required');
            event.preventDefault();
         }else if(!pilotName.value.match(reg)){
            alert("Pilot name is incorrect format");
            event.preventDefault();
            pilotName.value = "";
            pilotName.focus();
         }else if(!copilotName.value.match(reg)){
            alert("Copilot Name is incorrect format");
            event.preventDefault();
            copilotName.value = "";
            copilotName.focus();
         }
      }

      //TODO: NEED TO MAKE THE FUNCTIONALITY WORK FOR THE VALIDATION
      //EITHER USE WHAT WORKS ABOVE OR TRY THE BELOW TO GET IT WORKING

      let isValid = null;
      function checkStatus(){
         // if(!pilotName.value.match(reg)){
         //    pilotName.value = "";
         //    // pilotName.focus();
         //    pilotStatus.style.color = "red";
         //    isValid = false;
         //    pilotStatus.innerHTML = `${pilotName.value}  ${pilotStatus.innerHTML}`;
         // }
         // checkPilotStatus();
         // checkCopilotStatus();
         checkFuelLevel();
         checkCargoMass();
         if(!isValid){
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();
            faultyItems.style.visibility = "visible";
         }
         
      }

      function checkPilotStatus(){
         if(!pilotName.value.match(reg)){
            pilotName.value = "";
            // pilotName.focus();
            pilotStatus.style.color = "red";
            isValid = false;
            pilotStatus.innerHTML = `${pilotName.value}  ${pilotStatus.innerHTML}`;
         }
         
      }

      function checkCopilotStatus(){
         if(!copilotName.value.match(reg)){
            copilotName.value = "";
            // copilotName.focus();
            copilotStatus.style.color = "red";
            isValid = false;
         }
         copilotStatus.innerHTML = `${copilotName.value}  ${copilotStatus.innerHTML}`;
      }

      function checkFuelLevel(){
         if(fuelLevel.value < 10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            fuelStatus.style.color = "red";
            isValid = false;
         }
      }

      function checkCargoMass(){
         if(cargoMass.value > 10000){
            cargoStatus.innerHTML = "Cargo Mass is too high for launch";
            cargoStatus.style.color = "red";
            isValid = false;
         }
      }
   });
});