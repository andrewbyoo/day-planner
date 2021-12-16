function displayTime() {
  var currentDate = moment().format('dddd, MMMM Do h:mm:ss A')
  $('#currentDay').text(currentDate);
}
setInterval(displayTime, 1000);

function updateColors() {
  var rows = $('.row')
  var currentTimeString = moment().format('H');
  var currentTime = parseInt(currentTimeString);

  Array.from(rows).forEach(row => {
    var rowHour = row.dataset.hour;
    var rowChildren = row.children
    var rowInput = rowChildren[1];

    if (currentTime > rowHour) {
      rowInput.style.backgroundColor = 'rgb(221, 221, 221)';
    }

    if (currentTime == rowHour) {
      rowInput.style.backgroundColor = 'rgb(255, 117, 117)';
    }

    if (currentTime < rowHour) {
      rowInput.style.backgroundColor = 'rgb(127, 255, 123)';
    }
  })
}
setInterval(updateColors, 1000);

$('button').click(function(event) {
  event.preventDefault();
  var btnClicked = $(event.target);
  var plannerTimeSlot = btnClicked.siblings('section');
  var plannerItem = btnClicked.siblings('input');

  console.log(plannerTimeSlot.text())
  console.log(plannerItem.val());

  if (!plannerItem.val()) {
    console.log('No planner entry has been made.');
    return
  } else {
    plannerItem.prop('disabled', true);
  }
})

$('#resetBtn').click(function() {
  $('input[name="planner-input"]').removeAttr('disabled')
})
