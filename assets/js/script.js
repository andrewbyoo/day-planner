// Global variables for date and local storage
var currentDate = moment().format('dddd, MMMM Do')
var inputStorage = JSON.parse(localStorage.getItem(currentDate));

// If there is no data in the current day's local storage, run the clearLocalStorage function
if (inputStorage == null){
  clearLocalStorage();
}

// Calls function to display time on screen and updates thereafter every second
displayTime();
function displayTime() {
  $('#currentDay').text(currentDate);
}
setInterval(displayTime, 1000);

// Calls function to updates colors of the time slots every second depending on if the time slot has passed
updateColors();
function updateColors() {
  var rows = $('.row');
  var currentTimeString = moment().format('H');
  var currentTime = parseInt(currentTimeString);

  // Array that checks which time slots have passed
  Array.from(rows).forEach(row => {
    var rowHour = row.dataset.hour;
    var rowChildren = row.children;
    var rowInput = rowChildren[1];

    // If the time slot has passed, sets background to grey
    if (currentTime > rowHour) {
      rowInput.style.backgroundColor = 'rgb(221, 221, 221)';
    }

    // If the time slot is the present time, sets background to red
    if (currentTime == rowHour) {
      rowInput.style.backgroundColor = 'rgb(255, 117, 117)';
    }

    // If the time slot is in the future, sets background color to green
    if (currentTime < rowHour) {
      rowInput.style.backgroundColor = 'rgb(127, 255, 123)';
    }
  })
}
setInterval(updateColors, 1000);

// For loop that retrieves local storage values from previous browser instance and displays it in their respective time slots
for (var i = 0; i < inputStorage.length; i++) {
  inputStorage = JSON.parse(localStorage.getItem(currentDate));
  var retrievedId = inputStorage[i].id;
  var retrievedValue = inputStorage[i].value;
  var thisId = document.getElementById(retrievedId);
  thisId.value() = retrievedValue;

  if (retrievedValue != "") {
    thisId.setAttribute('disabled', true);
  }
}

// Runs function on button element click
$('button').click(function(event) {
  event.preventDefault();
  var btnClicked = $(event.target);

  // Defines the input element and id of sibling of the button that was pressed
  var plannerItem = btnClicked.siblings('textarea');
  var plannerItemId = plannerItem.attr('id');
  var plannerItemText = plannerItem.val();

  // If nothing was input into the time slot, break out of the button click function
  if (!plannerItem.val()) {
    console.log('No planner entry has been made.');
    return
  } else {
    inputStorage = JSON.parse(localStorage.getItem(currentDate));

    var newInput = {"id": plannerItemId, "value": plannerItemText};

    inputStorage.forEach(function(inputStorage) {
      if (newInput.id === inputStorage.id) {
        inputStorage.value = newInput.value;
      };
    });

    localStorage.setItem(currentDate, JSON.stringify(inputStorage));

    // If an item was input into the text field, lock the input field
    plannerItem.prop('disabled', true);
  }
})

// Unlocks the input fields (Code to be input to also clear local storage)
$('#resetBtn').click(function() {
  $('textarea[name="planner-input"]').removeAttr('disabled');
  clearLocalStorage();
})

// Clears local storage and sets up new local storage for the current day
function clearLocalStorage() {
  localStorage.clear();
  $('textarea').val("");
  inputStorage = [
    {"id": "input1", "value": ""},
    {"id": "input2", "value": ""},
    {"id": "input3", "value": ""},
    {"id": "input4", "value": ""},
    {"id": "input5", "value": ""},
    {"id": "input6", "value": ""},
    {"id": "input7", "value": ""},
    {"id": "input8", "value": ""},
    {"id": "input9", "value": ""}
  ];
  var stringifiedJSON = JSON.stringify(inputStorage);
  localStorage.setItem(currentDate, stringifiedJSON);
  return
}
