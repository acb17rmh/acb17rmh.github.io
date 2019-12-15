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

//getScale(intervals, notes, "E", "minorPentatonic");

function getAllScales(intervals, notes) {
  const modes = Object.keys(intervals)
  for (var i = 0; i < (notes.length / 2); i++) {
    for (var j = 0; j < modes.length; j++) {
      getScale(intervals, notes, notes[i], modes[j])
    }
  }
}

var scales = getAllScales(intervals, notes)
console.log(scales)
