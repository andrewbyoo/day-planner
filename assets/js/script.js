var inputStorage = [];

// Calls function to display time on screen and updates thereafter every second
displayTime()
function displayTime() {
  currentDate = moment().format('dddd, MMMM Do h:mm:ss A')
  $('#currentDay').text(currentDate);
}
setInterval(displayTime, 1000);

// Calls function to updates colors of the time slots every second depending on if the time slot has passed
updateColors()
function updateColors() {
  var rows = $('.row')
  var currentTimeString = moment().format('H');
  var currentTime = parseInt(currentTimeString);

  // Array that checks which time slots have passed
  Array.from(rows).forEach(row => {
    var rowHour = row.dataset.hour;
    var rowChildren = row.children
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

// for (var i = 0; i < localStorage.length; i++) {
//   storageKey = localStorage.key(i);
//   storageValue = localStorage.getItem(localStorage.key(i));

//   console.log(storageKey);
//   console.log(storageValue);
// }

// Runs function on button element click
$('button').click(function(event) {
  event.preventDefault();
  var btnClicked = $(event.target);

  // Defines the input element and id of sibling of the button that was pressed
  var plannerItem = btnClicked.siblings('input');
  var plannerItemId = plannerItem.attr('id');
  var plannerItemText = plannerItem.val();

  console.log(plannerItemText);
  console.log(plannerItemId);

  // If nothing was input into the time slot, break out of the button click function
  if (!plannerItem.val()) {
    console.log('No planner entry has been made.');
    return
  } else {
    inputStorage = JSON.parse(localStorage.getItem("inputStorage"));
    console.log(inputStorage)

    var newInput = {"idtest": plannerItemId, "valuetest": plannerItemText};
    console.log(newInput.idtest)

    inputStorage.forEach(function(inputStorage) {
      if (newInput.idtest === inputStorage.idtest) {
        inputStorage.valuetest = newInput.valuetest
      };
    });

    localStorage.setItem("inputStorage", JSON.stringify(inputStorage));

    // If an item was input into the text field, lock the input field
    plannerItem.prop('disabled', true);
  }
})

// Unlocks the input fields (Code to be input to also clear local storage)
$('#resetBtn').click(function() {
  $('input[name="planner-input"]').removeAttr('disabled')
  clearLocalStorage()
})


function clearLocalStorage() {
  inputStorage = [
    {"idtest": "input1", "valuetest": ""},
    {"idtest": "input2", "valuetest": ""},
    {"idtest": "input3", "valuetest": ""},
    {"idtest": "input4", "valuetest": ""},
    {"idtest": "input5", "valuetest": ""},
    {"idtest": "input6", "valuetest": ""},
    {"idtest": "input7", "valuetest": ""},
    {"idtest": "input8", "valuetest": ""},
    {"idtest": "input9", "valuetest": ""}
  ];
  var stringifiedJSON = JSON.stringify(inputStorage);
  localStorage.setItem("inputStorage", stringifiedJSON);

  return
}

