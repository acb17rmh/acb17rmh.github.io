var cMajor = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];

/* given a chord progression in number form, returns that progression
   in a given key

   @params progression - an array of chord indices
   @params key - an array of the diatonic chords in that key

*/
function convertProgToChords(progression, key) {
  var output = []
  for (var i = 0; i < progression.length; i++) {
    output.push(key[progression[i] - 1])
  }
  return output;
}

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
