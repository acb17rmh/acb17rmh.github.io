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
      "value": ["A", "B", "C", "D", "E", "F", "G#"]
  },
  {
      "key": "E",
      "value": ["E", "F#", "G", "A", "B", "C", "D#"]
  },
  {
      "key": "B",
      "value": ["B", "C#", "D", "E", "F#", "G", "A#"]
  },
  {
      "key": "F",
      "value": ["F#", "G#", "A", "B", "C#", "D", "E#"]
  },
  {
      "key": "C",
      "value": ["C#", "D#", "E", "F#", "G#", "A", "B#"]
  },
  {
      "key": "G",
      "value": ["G#", "A#", "B", "C#", "D#", "E", "F#"]
  },

];

var chordProgressions = [
                        [1, 5, 4, 6],
                        [5, 6, 4, 1],
                        [4, 1, 5, 6],
                        [6, 4, 1, 5],
                        [3, 5, 4, 3],
                        [2, 5, 1],
                        [1, 5, 6, 3, 4, 1, 4, 5],
                        [1, 6, 3, 7],
                        [1, 6, 4, 5],
                        [1, 3, 4, 5],
                        [1, 4, 3, 6],
                        [1, 1, 4, 6],
                        [2, 5, 1, 4],
                        [1, 4],
                        [1, 5],
                        [1, 4, 5],
                        [1, 5, 2, 7],
                        [1, 4, 5, 5],
                        ];


/* implementation of the Fisher-Yates shuffle algorithm
   as seen here https://bost.ocks.org/mike/shuffle/ */
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

  // Pick a remaining element…
  i = Math.floor(Math.random() * m--);

  // And swap it with the current element.
  t = array[m];
  array[m] = array[i];
  array[i] = t;
}

return array;
}

function getChordsFromScale(scale, isMajor) {
  var chords = [];
  if (isMajor) {
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
  } else {
        for (var j = 1; j <= scale.length; j++) {
          var chord = "";
          if ((j == 1) || (j == 4) || (j == 5)) {
            //minor chord
            chord = scale[j-1] + "m";
            chords.push(chord);
          } else if (j == 2) {
            //augmented chord
            chord = scale[j-1] + "aug";
            chords.push(chord);
          } else {
            //major chord
            chord = scale[j-1];
            chords.push(chord);
          }
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
