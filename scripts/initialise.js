/* initialise.js contains global variables which are referenced in other files
   this script must always be loaded before other scripts to ensure those scripts
   have access to the data in this file */

var DiatonicMajorChords = [
  {
      "key": "C",
      "value": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"]
  },
  {
      "key": "G",
      "value": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"]
  },
  {
      "key": "D",
      "value": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"]
  },
  {
      "key": "A",
      "value": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"]
  },
  {
      "key": "E",
      "value": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"]
  },
  {
      "key": "B",
      "value": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"]
  },
  {
      "key": "F#",
      "value": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"]
  },
  {
      "key": "C#",
      "value": ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"]
  },
  {
      "key": "F",
      "value": ["F", "Gm", "Am", "B♭", "C", "D", "Edim"]
  },
  {
      "key": "B♭",
      "value": ["B♭", "Cm", "Dm", "E♭", "F", "G", "Adim"]
  },
  {
      "key": "E♭",
      "value": ["E♭", "Fm", "Gm", "A♭", "B♭", "Cm", "Ddim"]
  },
  {
      "key": "A♭",
      "value": ["A♭", "B♭m", "Cm", "D♭", "E♭", "Fm", "Gdim"]
  },
  {
      "key": "D♭",
      "value": ["D♭", "E♭m", "Fm", "G♭", "A♭", "B♭m", "Cdim"]
  },
  {
      "key": "G♭",
      "value": ["G♭", "A♭m", "B♭m", "C♭", "D♭", "E♭m", "Fdim"]
  },
  {
      "key": "C♭",
      "value": ["C♭", "D♭m", "E♭m", "F♭", "G♭", "A♭m", "Bdim"]
  },
];

var DiatonicMinorChords = [
  {
      "key": "A minor",
      "value": ["Am", "Bdim", "Caug", "D", "E", "F", "G#dim"]
  },
  {
      "key": "E minor",
      "value": ["Em", "F#dim", "Gaug", "Am", "B", "C", "D#dim"]
  },
  {
      "key": "B minor",
      "value": ["Bm", "C#dim", "Daug", "Em", "F#", "G", "A#dim"]
  },
  {
      "key": "F# minor",
      "value": ["F#m", "G#dim", "Aaug", "Bm", "C#", "D", "E#dim"]
  },
  {
      "key": "C# minor",
      "value": ["C#m", "D#dim", "Eaug", "F#m", "G#", "A", "B#dim"]
  },
  {
      "key": "G# minor",
      "value": ["G#m", "A#dim", "Baug", "C#m", "D#", "E", "F#dim"]
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
