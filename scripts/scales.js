/*/* A list of the different notes, iterated through when creating scales
   (There has to be a better way of doing this...) */
var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
            "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/*Object whichdDefines the number of semitones
between each note within each type of scale*/
var intervals = {
      "major" : [2, 2, 1, 2, 2, 2, 1],
      "minor" : [2, 1, 2, 2, 1, 2, 2],
      "minorBlues" : [3, 2, 1, 1, 3, 2],
      "majorBlues" : [2, 1, 1, 3, 2, 3],
      "minorPentatonic" : [3, 2, 2, 3, 2],
      "majorPentatonic" : [2, 2, 3, 2, 3]
};

/* Function to get a scale.
  @param intervals - a list of the number of semitones between each note in a mode
  @param notes - an array of the different notes
  @param rootNote - a String of the note you want to build a scale on
  @param mode - a String describing which mode you want to use, from the intervals object above

  @return an object containing the scales rootNote, mode and the notes within that scale
*/

function getScale(intervals, notes, rootNote, mode) {
  var scaleNotes = [];
  var scaleIntervals = intervals[mode];
  var runningIndex = 0;
  var returnObject = {
    "rootNote" : "",
    "mode" : "",
    "scaleNotes" : ""
  }

  for (var i = 0; i < notes.length; i++) {
    if (rootNote == notes[i]) {
      runningIndex = i;
      for (var j = 0; j < scaleIntervals.length; j++) {
        //console.log("RUNNING INDEX: " + runningIndex)
        scaleNotes.push(notes[runningIndex])
        runningIndex += scaleIntervals[j];
      }
      break;
    }
  }

  //Debug printouts
  //console.log(rootNote + " " + mode + " scale: " + scaleNotes)
  returnObject["rootNote"] = rootNote
  returnObject["mode"] = mode
  returnObject["scaleNotes"] = scaleNotes
  return returnObject
}

function getAllScales(intervals, notes, mode) {
  const modes = Object.keys(intervals)
  var scales = []
  for (var i = 0; i < (notes.length / 2); i++) {
      scales.push(getScale(intervals, notes, notes[i], mode))
    }
  return scales
}

document.addEventListener('DOMContentLoaded', function() {
  var majorScalesTable = document.getElementById('tbody_majorscales');
  var minorScalesTable = document.getElementById('tbody_minorscales');
  var minorBluesScalesTable = document.getElementById('tbody_minorbluesscales');
  var majorBluesScalesTable = document.getElementById('tbody_majorbluesscales');
  var minorPentatonicScalesTable = document.getElementById('tbody_minorpentatonicscales');
  var majorPentatonicScalesTable = document.getElementById('tbody_majorpentatonicscales');

  var majorScales = getAllScales(intervals, notes, "major")
    for (var i = 0; i < majorScales.length; i++) {
      var tr = "<tr>";
      var chords = majorScales[i].value;
      tr += "<td>" + (majorScales[i])["rootNote"] + "</td><td>" + (majorScales[i])["scaleNotes"].join(", ") + "</td></tr>";
      // We add the table row to the table body
      majorScalesTable.innerHTML += tr;
  }

  var minorScales = getAllScales(intervals, notes, "minor")
  for (var i = 0; i < minorScales.length; i++) {
      var tr = "<tr>";
      var chords = minorScales[i].value;
      //Must not forget the $ sign
      tr += "<td>" + (minorScales[i])["rootNote"] + "</td><td>" + (minorScales[i])["scaleNotes"].join(", ") + "</td></tr>";
      // We add the table row to the table body
      minorScalesTable.innerHTML += tr;
  }

  var minorBluesScales = getAllScales(intervals, notes, "minorBlues")
  for (var i = 0; i < minorBluesScales.length; i++) {
      var tr = "<tr>";
      var chords = minorBluesScales[i].value;
      //Must not forget the $ sign
      tr += "<td>" + (minorBluesScales[i])["rootNote"] + "</td><td>" + (minorBluesScales[i])["scaleNotes"].join(", ") + "</td></tr>";
      // We add the table row to the table body
      minorBluesScalesTable.innerHTML += tr;
   }

   var majorBluesScales = getAllScales(intervals, notes, "majorBlues")
   for (var i = 0; i < majorBluesScales.length; i++) {
       var tr = "<tr>";
       var chords = majorBluesScales[i].value;
       //Must not forget the $ sign
       tr += "<td>" + (majorBluesScales[i])["rootNote"] + "</td><td>" + (majorBluesScales[i])["scaleNotes"].join(", ") + "</td></tr>";
       // We add the table row to the table body
       majorBluesScalesTable.innerHTML += tr;
    }

   var minorPentatonicScales = getAllScales(intervals, notes, "minorPentatonic")
   for (var i = 0; i < minorPentatonicScales.length; i++) {
       var tr = "<tr>";
       var chords = minorPentatonicScales[i].value;
       //Must not forget the $ sign
       tr += "<td>" + (minorPentatonicScales[i])["rootNote"] + "</td><td>" + (minorPentatonicScales[i])["scaleNotes"].join(", ") + "</td></tr>";
       // We add the table row to the table body
       minorPentatonicScalesTable.innerHTML += tr;
    }

    var majorPentatonicScales = getAllScales(intervals, notes, "majorPentatonic")
    for (var i = 0; i < majorPentatonicScales.length; i++) {
        var tr = "<tr>";
        var chords = majorPentatonicScales[i].value;
        //Must not forget the $ sign
        tr += "<td>" + (majorPentatonicScales[i])["rootNote"] + "</td><td>" + (majorPentatonicScales[i])["scaleNotes"].join(", ") + "</td></tr>";
        // We add the table row to the table body
        majorPentatonicScalesTable.innerHTML += tr;
     }
}, false);


/*
document.addEventListener('DOMContentLoaded', function() {
  var scales = getAllScales(intervals, notes)
  console.log(scales)
  $("#tbody").empty();
  var tbody = document.getElementById('tbody');
  for (var i = 0; i < scales.length; i++) {
    var tr = "<tr>"
    tr += "<td>" + (scales[i])["rootNote"] + "</td><td>" + (scales[i])["mode"] + "</td><td>" + (scales[i])["scaleNotes"].join(", ") + "</td></tr>";
    tbody.innerHTML += tr;
    }
}, false);
*/
