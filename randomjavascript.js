
var WinnersList = []

var StoreNames;

function SaveNames(){
    var namesInTextBox =document.getElementById('itemInput');
    StoreNames = namesInTextBox.value.split(',');
    disableButton()
    return StoreNames
}

var saveButton = document.getElementById('saveButton');
function disableButton(){
  saveButton.disabled =true
}


function enableTextBox(){
  saveButton.disabled = false
}


var loadGif = document.getElementById('loadingGif');
var buttonRoll = document.getElementById('roll')
function wait5Seconds() {
    //SaveNames();
    buttonRoll.disabled = true
    loadGif.style.opacity = 1
    
    setTimeout(pickAName,2000);
}


var selectName =document.getElementById('nameLabel')
var listOfWinners = document.getElementById('winnersAlready')
function pickAName() {
  loadGif.style.opacity = 0
  buttonRoll.disabled = false
  
  var nameList = StoreNames
  var randomName;
  
  if (nameList.length>1) {
    var randomIndex =Math.floor(Math.random() * nameList.length);
    randomName =nameList[randomIndex];
    

    
    WinnersList.push(randomName)
    nameList.splice(randomIndex,1)
    
    //console.log(WinnersList,"Winner List")
    StoreNames = nameList
    //console.log(nameList,"Current nameList")
    
  
    selectName.textContent=randomName

    
    listOfWinners.textContent = WinnersList.join(',')
    
  }  else {
    //randomName = 'emptyList'
    alert('Name box is empty')
  }
}

function clearWinners(){
  WinnersList = []
  listOfWinners.textContent = []
  selectName.textContent = ''
}
