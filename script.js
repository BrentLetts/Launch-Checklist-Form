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

const launchStatusReset = document.getElementById('launchStatus');
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

      let isValid = false;
      
      //regex for the string validation
      let reg = "[a-zA-Z]"
      
      validateForm();
      
      function validateForm(){
         
         isValid = true;
         
         let isPilotReady = checkPilotStatus();
         let isCoReady = checkCopilotStatus();
         let isFuelReady = checkFuelLevel();
         let isCargoReady = checkCargoMass();
         
         isValid = (isPilotReady && isCoReady &&
            isFuelReady && isCargoReady);
        
         if(!isValid){
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();
            faultyItems.style.visibility = "visible";
            
         }else{
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "black";
            faultyItems.style.visibility = "visible";
            event.preventDefault();
         }
      }

      function checkPilotStatus(){
         if(pilotName.value === ""){
            pilotStatus.innerHTML = "Pilot name cannot be empty";
            isValid = false;
         }else if(!pilotName.value.match(reg)){
            pilotStatus.innerHTML = "is not a valid format"
            isValid = false;
            
         }else{
            pilotStatus.innerHTML = "is Ready";
            pilotStatus.style.color = "black";
            isValid = true;
         }

         if(!isValid){
            pilotStatus.style.color = "red";
         }

         pilotStatus.innerHTML = `${pilotName.value}  ${pilotStatus.innerHTML}`;
         return isValid;
      }
      
      function checkCopilotStatus(){
         if(copilotName.value === ""){
            copilotStatus.innerHTML = "Co-pilot name cannot be empty";
            isValid = false;
         }else if(!copilotName.value.match(reg)){
            copilotStatus.innerHTML = "Co-pilot not a valid format";
            isValid = false;
         }else{
            copilotStatus.innerHTML = "is Ready";
            copilotStatus.style.color = "black";
            isValid = true;
         }
         
         if(!isValid){
            copilotStatus.style.color = "red";
         }

         copilotStatus.innerHTML = `${copilotName.value}  ${copilotStatus.innerHTML}`;
         return isValid;
      }
      
      function checkFuelLevel(){
         if(fuelLevel.value === ""){
            fuelStatus.innerHTML = "Please enter a fuel status";
            isValid = false;
         }else if(fuelLevel.value < 10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            isValid = false;
         }else{
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            fuelStatus.style.color = "black";
            isValid = true;
         }

         if(!isValid){
            fuelStatus.style.color = "red";
         }
         
         return isValid;
      }
      
      function checkCargoMass(){
         if(cargoMass.value === ""){
            cargoStatus.innerHTML = "Please enter the cargo mass";
            isValid = false;
         }else if(cargoMass.value > 10000){
            cargoStatus.innerHTML = "Cargo Mass is too high for launch";
            isValid = false;
         }else{
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            cargoStatus.style.color = "black";
            isValid = true;
         }

         if(!isValid){
            cargoStatus.style.color = "red";
         }
         return isValid;
      }
      
   });
});

