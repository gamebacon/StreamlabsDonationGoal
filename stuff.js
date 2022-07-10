// Events will be sent when someone followers
// Please use event listeners to run functions.


let inf = new Intl.NumberFormat('en-US');

function format(givenNumber) {
  return "$" + inf.format(givenNumber);
}

function getCurrent(curr, max) {
  percent = curr/max * 100;
  return format(curr) + ` (${percent}%)`;
}

document.addEventListener('goalLoad', function(obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  
  let max = obj.detail.amount.target;
  let start = obj.detail.amount.start;
  
  let current = obj.detail.amount.current;
  let slider = $('#mySlider');
  
  slider.max = max;
  slider.min = start;
  
  let sliderVal =  (current / max) * 100;
  
  slider.val(sliderVal);

  $('#goal-start').text(format(start));
  
  $('#title').html(obj.detail.title);
  $('#goal-current').text(getCurrent(current, max));
  $('#goal-total').text(format(max));
  $('#goal-end-date').text(obj.detail.to_go.ends_at);
});

document.addEventListener('goalEvent', function(obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail);
  let max = obj.detail.amount.target;
  let start = obj.detail.amount.start;
  let current = obj.detail.amount.current;

  $('#goal-current').text(getCurrent(current, max));  
  
  let sliderVal =  (current / max) * 100;
  $('#mySlider').val(sliderVal)

  //$('#goal-current').text(obj.detail.amount.current);
});