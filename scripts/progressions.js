var c = ["C", "D", "E", "F", "G", "A", "B"];
var cMajor = getChordsFromScale(c);


/* loops through the chord progressions specified in the file
   initialise.js and outputs them in the given key in an HTML table */
document.addEventListener('DOMContentLoaded', function() {
  var tbody = document.getElementById('tbody');
  for (var i = 0; i < majorChordProgressions.length; i++) {
    var tr = "<tr>"
    var output = convertProgToChords(majorChordProgressions[i], cMajor)
    tr += "<td>" + cMajor[0] + "<td>" + "<td>" + output.join(", ") + "</td><tr>";
    tbody.innerHTML += tr;
    }
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById("dropdown");
  for (var i = 0; i < majorScales.length; i++) {
    var key = majorScales[i];
    console.log(key);
    var el = document.createElement("a");
    el.textContent = (key.value)[0] + " major";
    el.value = (key.value)[0] + " major";
    el.className = "dropdown-item";
    dropdown.appendChild(el);
    }
}, false);
