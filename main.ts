
let noteFreq: number[] = [131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 555, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988]
let myScales: number[][] = [
    [0, 4, 5, 7, 10, 12, 13, 13, 5, 10],
    [0, 1, 4, 5, 7, 8, 11, 12, 13, 13],
    [0, 3, 6, 7, 9, 12, 7, 0, 12, 13],
    [0, 13, 2, 3, 13, 5, 6, 7, 8, 9],
    [1, 3, 6, 8, 10, 1, 3, 13, 13, 13]
    ]

//basic.showNumber(myScales[3][5])

let octaves: number[] = [ 1, 2, 4, 6 ];
let availReps: number[] = [ 2, 2, 4, 4, 4, 4, 8, 8, 1 ];
let availTimesigs: number[] =  [6, 6, 6, 10, 7, 8, 8, 8, 8, 8];
let availmodReps: number[] =  [1, 1, 2, 3, 4, 8] ;

let currentMelody: number[] = [ 0, 4, 7, 0, 1, 5, 8, 1 ];
let melodyOctaves: number[] = [ 2, 3, 3, 3, 0, 3, 3, 2 ];
let currentRhythm: number[] = [1,4,4,4,2,4,4,4];
/*
const int scales[50] = {
  0, 4, 5, 7, 10, 12, 13, 13, 5, 10, //mopho
  0, 1, 4, 5, 7, 8, 11, 12, 13, 13, //oriental
  0, 3, 6, 7, 9, 12, 7, 0, 12, 13, //minor
  0, 13, 2, 3, 13, 5, 6, 7, 8, 9, //chromo
  1, 3, 6, 8, 10, 1, 3, 13, 13, 13 //pentatonic
};
*/
enum scaleSelector {
    //% block="mopho"
    mopho = 0,
    //% block="oriental"
    oriental = 1,
    //% block="minor"
    minor = 1,
    //% block="chromatic"
    chromatic = 1,
    //% block="pentatonic"
    pentatonic = 1,
}

enum rootNote {
    //% block="C"
    C = 0,
    //% block="C#"
    CSharp = 1,
    //% block="D"
    D = 2,
    //% block="D#"
    DSharp = 3,
    //% block="E"
    E = 4,
    //% block="F"
    F = 5,
    //% block="F#"
    FSharp = 6,
    //% block="G"
    G = 7,
    //% block="G#"
    GSharp = 8,
    //% block="A"
    A = 9,
    //% block="A#"
    ASharp = 10,
    //% block="B"
    B = 11
}

//basic.showNumber(myEnum(0))

function test(){
    return 5
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace generativeMelody {
    /**
     * TODO: describe your function here
     * @param rootNote describe parameter here, eg: 5 
     * @param scale describe parameter here, eg: "Hello"
     */
    //% block
    export function generateMelody(rootNote: rootNote, scale: scaleSelector): number[] {
        return [1]
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}



