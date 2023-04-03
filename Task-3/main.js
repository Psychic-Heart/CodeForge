var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
function randomValueFromArray(array) {
    var random = [Math.floor(Math.random()*array.length)];
    return array[random];
}
var sTory = 'It was 94 farenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz Bob saw the whole thing, but was not surprised - insertx weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen','Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted.','melted into a puddle on the sidewalk.', 'turned into a slug and crawled away.'];
randomize.addEventListener('click', result);

function result() {
  var sillyStory = sTory;
  var xInsert =randomValueFromArray (insertX);
  var yInsert =randomValueFromArray (insertY);
var zInsert =randomValueFromArray (insertZ);
  var sillyStory = sillyStory.replaceAll('insertx',xInsert);
  var sillyStory = sillyStory.replace('inserty',yInsert);
  var sillyStory = sillyStory.replace('insertz',zInsert);

if (customName.value!=='') {
        var name = customName.value;
        sillyStory = sillyStory.replace('Bob',name);
    }
    if (document.getElementById("uk").checked) {
        var weight = Math.round(300*0.07142) + 'stone';
        var temperature = Math.round((94-32)*(5/9)) + '℃';
      var sillyStory= sillyStory.replace('94 farenheit',temperature);
      var sillyStory= sillyStory.replace('300 pounds',weight);
    }
    story.textContent = sillyStory;
    story.style.visibility = 'visible';
}
