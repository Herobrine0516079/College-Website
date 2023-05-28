var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Insert text here');
  survey_options.appendChild(newField);
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 2) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

var future_ideas = document.getElementById('future_ideas');
var add_future_fields = document.getElementById('add_future_fields');
var remove_future_fields = document.getElementById('remove_future_fields');

add_future_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','future_ideas[]');
  newField.setAttribute('class','future_ideas');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Insert text here');
  future_ideas.appendChild(newField);
}

remove_future_fields.onclick = function(){
  var input_tags = future_ideas.getElementsByTagName('input');
  if(input_tags.length > 2) {
    future_ideas.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

