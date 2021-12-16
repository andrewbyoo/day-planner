var currentDate = moment().format('dddd, MMMM Do');
var currentTimeString = moment().format('H');
var currentTime = parseInt(currentTimeString);
$('#currentDay').text(currentDate);

var rows = $('.row')

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

$('button').click(function(event) {
  event.preventDefault();
  var btnClicked = $(event.target);
  var plannerItem = btnClicked.siblings('input');

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
