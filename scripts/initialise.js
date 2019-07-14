/* initialise.js contains global variables which are referenced in other files
   this script must always be loaded before other scripts to ensure those scripts
   have access to the data in this file */

var majorScales = [
  {
      "key": "C",
      "value": ["C", "D", "E", "F", "G", "A", "B"]
  },
  {
      "key": "G",
      "value": ["G", "A", "B", "C", "D", "E", "F#"]
  },
  {
      "key": "D",
      "value": ["D", "E", "F#", "G", "A", "B", "C#"]
  },
  {
      "key": "A",
      "value": ["A", "B", "C#", "D", "E", "F#", "G#"]
  },
  {
      "key": "E",
      "value": ["E", "F#", "G#", "A", "B", "C#", "D#"]
  },
  {
      "key": "B",
      "value": ["B", "C#", "D#", "E", "F#", "G#", "A#"]
  },
  {
      "key": "F#",
      "value": ["F#", "G#", "A#", "B", "C#", "D#", "E#"]
  },
  {
      "key": "C#",
      "value": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]
  },
  {
      "key": "F",
      "value": ["F", "G", "A", "B♭", "C", "D", "E"]
  },
  {
      "key": "B♭",
      "value": ["B♭", "C", "D", "E♭", "F", "G", "A"]
  },
  {
      "key": "E♭",
      "value": ["E♭", "F", "G", "A♭", "B♭", "C", "D"]
  },
  {
      "key": "A♭",
      "value": ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]
  },
  {
      "key": "D♭",
      "value": ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]
  },
  {
      "key": "G♭",
      "value": ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]
  },
  {
      "key": "C♭",
      "value": ["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B"]
  },
];

var minorScales = [
  {
      "key": "A",
      "value": ["A", "B", "Caug", "D", "E", "F", "G#"]
  },
  {
      "key": "E",
      "value": ["E", "F#", "Gaug", "A", "B", "C", "D#"]
  },
  {
      "key": "B",
      "value": ["B", "C#", "Daug", "E", "F#", "G", "A#"]
  },
  {
      "key": "F",
      "value": ["F#", "G#", "Aaug", "B", "C#", "D", "E#"]
  },
  {
      "key": "C",
      "value": ["C#", "D#", "Eaug", "F#", "G#", "A", "B#"]
  },
  {
      "key": "G",
      "value": ["G#", "A#", "Baug", "C#", "D#", "E", "F#"]
  },

];

var majorChordProgressions = [
                        [1, 5, 4, 6],
                        [5, 6, 4, 1],
                        [4, 1, 5, 6],
                        [6, 4, 1, 5],
                        [3, 5, 4, 3],
                        [2, 5, 1],
                        ];

function getChordsFromScale(scale) {
  var chords = [];
  for (var j = 1; j <= scale.length; j++) {
    var chord = "";
    if ((j == 2) || (j == 3) || (j == 6)) {
      //minor chord
      chord = scale[j-1] + "m";
      chords.push(chord);
    } else if (j == 7) {
      //diminished chord
      chord = scale[j-1] + "dim";
      chords.push(chord);
    } else {
      //major chord
      chord = scale[j-1];
      chords.push(chord);
    }
  }
  //console.log(chords);
  return chords;
}


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
