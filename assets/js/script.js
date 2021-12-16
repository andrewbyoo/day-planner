// Calls function to display time on screen and updates thereafter every second
displayTime()
function displayTime() {
  currentDate = moment().format('dddd, MMMM Do h:mm:ss A')
  $('#currentDay').text(currentDate);
}
setInterval(displayTime, 1000);

// Updates colors of the time slots every second depending on if the time slot has passed
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

// Runs function on button element click
$('button').click(function(event) {
  event.preventDefault();
  var btnClicked = $(event.target);

  // Defines the input and section element sibling of the button that was pressed
  var plannerTimeSlot = btnClicked.siblings('section');
  var plannerItem = btnClicked.siblings('input');

  console.log(plannerTimeSlot.text())
  console.log(plannerItem.val());

  // If nothing was input into the time slot, break out of the button click function
  if (!plannerItem.val()) {
    console.log('No planner entry has been made.');
    return
  } else {

    // If an item was input into the text field, lock the input field
    plannerItem.prop('disabled', true);
  }
})

// Unlocks the input fields (Code to be input to also clear local storage)
$('#resetBtn').click(function() {
  $('input[name="planner-input"]').removeAttr('disabled')
})
