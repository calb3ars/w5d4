class Clock {
  constructor() {
    this.date = new Date();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();
    setInterval(this.incrementTime.bind(this), 1000);
  }

  padThaime(number) {
    return number < 10 ? `0${number}` : number;
  }


  incrementTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
    if (this.hours > 13) {this.hours = this.hours % 12;}
    console.log(`${this.hours}:${this.padThaime(this.minutes)}`+
                `:${this.padThaime(this.seconds)}`);
  }
}

// addNumbers
const reader = require("readline");

let rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function bankruptcyCallback(catzMonies) {
//   console.log(`I haz all your monies! $${catzMonies}, to be exact.`);
//   rl.close();
// }
//
// let robMe = function(catzMonies = 0, myMonies, callback){
//   if(myMonies <= 0) {
//     callback(catzMonies);
//     // return;
//   } else {
//     console.log(`I haz ${catzMonies}, but I wants MOOORE. You got ` +
//                 `${myMonies} left. GIMME GIMME!`);
//     rl.question("I needz Cheezeburger. Gimme the monies!", money => {
//       myMonies -= parseInt(money);
//       catzMonies += parseInt(money);
//       robMe(catzMonies, myMonies, callback);
//     });
//   }
// };

// robMe(undefined , 100, bankruptcyCallback);

// AbsurdBubbleSort

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2}??!?`, answer => {
    answer = answer === 'yes' ? 1 : 0;
    callback(answer);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, callback) {

  if (i < arr.length - 1) {
    madeAnySwaps = false;
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let thirdMember = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = thirdMember;
        madeAnySwaps = true;
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, callback);
      } else {
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, callback);
      }
    });
  } else if (i === arr.length - 1) {
    callback(madeAnySwaps);
  }
}


function sortCompletionCallback() {
  console.log("Sort Completed!!!!");
  rl.close();
}

function absurdBubbleSort(arr) {
  function outerBubbleSortLoop(madeAnySwaps) {
    console.log("In outer bubble sort");
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback();
      console.log(arr);
      return;
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([6,2,4]);
console.log("Final Countdown");
