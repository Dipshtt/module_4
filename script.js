(function () {

var names = ["Yaakov", "Dohn", "Den", "Dason", "Paul", "Frank", "Larry", "Paula", "Laura", "Dim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'd') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();