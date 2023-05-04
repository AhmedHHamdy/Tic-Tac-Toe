
document.querySelector('#restartButton').addEventListener('click', restart)

function restart() {
  // reload the page
  location.reload();
}


const boxOne = document.querySelector('#box-one');
const boxTwo = document.querySelector('#box-two')
const boxThree = document.querySelector('#box-three')
const boxFour = document.querySelector('#box-four')
const boxFive = document.querySelector('#box-five')
const boxSix = document.querySelector('#box-six')
const boxSeven = document.querySelector('#box-seven')
const boxEight = document.querySelector('#box-eight')
const boxNine = document.querySelector('#box-nine')


const iXOne = document.querySelector('#boxOne-x')
const iXTwo = document.querySelector('#boxTwo-x')
const iXThree = document.querySelector('#boxThree-x')

const iOOne = document.querySelector('#boxOne-o')
const iOTwo = document.querySelector('#boxTwo-o')
const iOThree = document.querySelector('#boxThree-o')

const iXFour = document.querySelector('#boxFour-x')
const iXFive = document.querySelector('#boxFive-x')
const iXSix = document.querySelector('#boxSix-x')

const iOFour = document.querySelector('#boxFour-o')
const iOFive = document.querySelector('#boxFive-o')
const iOSix = document.querySelector('#boxSix-o')

const iXSeven = document.querySelector('#boxSeven-x')
const iXEight = document.querySelector('#boxEight-x')
const iXNine = document.querySelector('#boxNine-x')

const iOSeven = document.querySelector('#boxSeven-o')
const iOEight = document.querySelector('#boxEight-o')
const iONine = document.querySelector('#boxNine-o')


let total = 0


function testWinningConditionAi(n) {
  if(n == 'x') {
    if (iXOne.classList.contains(`ai-${n}`) && iXTwo.classList.contains(`ai-${n}`) && iXThree.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOne').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOne').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true


    } else if (iXFour.classList.contains(`ai-${n}`) && iXFive.classList.contains(`ai-${n}`) && iXSix.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughTwo').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughTwo').classList.add('active')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXSeven.classList.contains(`ai-${n}`) && iXEight.classList.contains(`ai-${n}`) && iXNine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThree').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThree').classList.add('active')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXOne.classList.contains(`ai-${n}`) && iXFour.classList.contains(`ai-${n}`) && iXSeven.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOneHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOneHorizontal').classList.add('active-hor')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXTwo.classList.contains(`ai-${n}`) && iXFive.classList.contains(`ai-${n}`) && iXEight.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughTwoHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughTwoHorizontal').classList.add('active-hor')
      console.log('test issue')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXThree.classList.contains(`ai-${n}`) && iXSix.classList.contains(`ai-${n}`) && iXNine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThreeHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThreeHorizontal').classList.add('active-hor')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXOne.classList.contains(`ai-${n}`) && iXFive.classList.contains(`ai-${n}`) && iXNine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOneDiagonal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOneDiagonal').classList.add('active-dia')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXSeven.classList.contains(`ai-${n}`) && iXFive.classList.contains(`ai-${n}`) && iXThree.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThreeDiagonal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThreeDiagonal').classList.add('active-dia')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else {
      return false
    }
  } else if (n == 'o') {
    if (iOOne.classList.contains(`ai-${n}`) && iOTwo.classList.contains(`ai-${n}`) && iOThree.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOne').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOne').classList.add('active')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOFour.classList.contains(`ai-${n}`) && iOFive.classList.contains(`ai-${n}`) && iOSix.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughTwo').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughTwo').classList.add('active')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOSeven.classList.contains(`ai-${n}`) && iOEight.classList.contains(`ai-${n}`) && iONine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThree').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThree').classList.add('active')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOOne.classList.contains(`ai-${n}`) && iOFour.classList.contains(`ai-${n}`) && iOSeven.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOneHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOneHorizontal').classList.add('active-hor')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOTwo.classList.contains(`ai-${n}`) && iOFive.classList.contains(`ai-${n}`) && iOEight.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughTwoHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughTwoHorizontal').classList.add('active-hor')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOThree.classList.contains(`ai-${n}`) && iOSix.classList.contains(`ai-${n}`) && iONine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThreeHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThreeHorizontal').classList.add('active-hor')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOOne.classList.contains(`ai-${n}`) && iOFive.classList.contains(`ai-${n}`) && iONine.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughOneDiagonal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOneDiagonal').classList.add('active-dia')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOSeven.classList.contains(`ai-${n}`) && iOFive.classList.contains(`ai-${n}`) && iOThree.classList.contains(`ai-${n}`)) {
      document.querySelector('#lineThroughThreeDiagonal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThreeDiagonal').classList.add('active-dia')
      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
   } else {
    return false
   } 
  }

}

function testWinningConditionPlayer(n) {
  if(n == 'x') {
    if (iXOne.classList.contains(`player-${n}`) && iXTwo.classList.contains(`player-${n}`) && iXThree.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOne').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOne').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXFour.classList.contains(`player-${n}`) && iXFive.classList.contains(`player-${n}`) && iXSix.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughTwo').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughTwo').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXSeven.classList.contains(`player-${n}`) && iXEight.classList.contains(`player-${n}`) && iXNine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThree').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThree').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXOne.classList.contains(`player-${n}`) && iXFour.classList.contains(`player-${n}`) && iXSeven.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOneHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOneHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXTwo.classList.contains(`player-${n}`) && iXFive.classList.contains(`player-${n}`) && iXEight.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughTwoHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughTwoHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXThree.classList.contains(`player-${n}`) && iXSix.classList.contains(`player-${n}`) && iXNine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThreeHorizontal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThreeHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXOne.classList.contains(`player-${n}`) && iXFive.classList.contains(`player-${n}`) && iXNine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOneDiagonal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughOneDiagonal').classList.add('active-dia')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iXSeven.classList.contains(`player-${n}`) && iXFive.classList.contains(`player-${n}`) && iXThree.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThreeDiagonal').style.borderColor = '#C2CBF5'
      document.querySelector('#lineThroughThreeDiagonal').classList.add('active-dia')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerO').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else {
      return false
    }
  } else if (n == 'o') {
    if (iOOne.classList.contains(`player-${n}`) && iOTwo.classList.contains(`player-${n}`) && iOThree.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOne').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOne').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOFour.classList.contains(`player-${n}`) && iOFive.classList.contains(`player-${n}`) && iOSix.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughTwo').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughTwo').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOSeven.classList.contains(`player-${n}`) && iOEight.classList.contains(`player-${n}`) && iONine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThree').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThree').classList.add('active')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOOne.classList.contains(`player-${n}`) && iOFour.classList.contains(`player-${n}`) && iOSeven.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOneHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOneHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOTwo.classList.contains(`player-${n}`) && iOFive.classList.contains(`player-${n}`) && iOEight.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughTwoHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughTwoHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOThree.classList.contains(`player-${n}`) && iOSix.classList.contains(`player-${n}`) && iONine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThreeHorizontal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThreeHorizontal').classList.add('active-hor')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOOne.classList.contains(`player-${n}`) && iOFive.classList.contains(`player-${n}`) && iONine.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughOneDiagonal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughOneDiagonal').classList.add('active-dia')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else if (iOSeven.classList.contains(`player-${n}`) && iOFive.classList.contains(`player-${n}`) && iOThree.classList.contains(`player-${n}`)) {
      document.querySelector('#lineThroughThreeDiagonal').style.borderColor = '#FFB86C'
      document.querySelector('#lineThroughThreeDiagonal').classList.add('active-dia')

      setTimeout(() => {
        document.querySelector('.section-one').classList.add('hidden')
        document.querySelector('.section-two').classList.add('hidden')
        document.querySelector('.section-three').classList.add('hidden')
        document.querySelector('#result').classList.toggle('hidden')
        document.querySelector('#winnerX').classList.add('hidden')
      }, 1000)

      document.querySelector('#button-ok').addEventListener('click', restartGame)
      function restartGame() {
        location.reload();
      }
      return true
    } else {
      return false
    }
  }
}


function checkForTie(n) {
  // let v = testWinningConditionAi(n)
  // let b = testWinningConditionPlayer(n)
  // // console.log(v, b);
  // // console.log(testWinningConditionAi(n));
  // // console.log(testWinningConditionPlayer(n));
  // if (v == false && b == false) {
  //   console.log('fff');
  //   setTimeout(() => {
  //     document.querySelector('.section-one').classList.add('hidden')
  //     document.querySelector('.section-two').classList.add('hidden')
  //     document.querySelector('.section-three').classList.add('hidden')
  //     document.querySelector('#result').classList.toggle('hidden')
  //     document.querySelector('#span-result').innerText = 'DRAW!'
  //   }, 1000)
  
  //   document.querySelector('#button-ok').addEventListener('click', restartGame)
  //   function restartGame() {
  //     location.reload();
  //   }
  // } else {
  //   return
  // }

}


function gameLoop() {

  let player = '';
  let ai = '';
  let first = '0';
  let second = '0';
  let arrIndex = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  
  function setRules() {
    const rules = ['x', 'o'];
    const order = ['first', 'second']
    const randomIndex = Math.floor(Math.random() * rules.length);
  
    // Setting who is x , who is o
    if (rules[randomIndex] === 'x') {
      ai = 'x';
      player = 'o';
      console.log('ai: ' + ai);
      console.log('player: ' + player);
    } else {
      ai = 'o'
      player = 'x';
      console.log('ai: ' + ai);
      console.log('player: ' + player);
    }
  
   // Setting who is first , who is second
   const randomOrderIndex = Math.floor(Math.random() * order.length);
   if (order[randomOrderIndex] === 'first') {
     first = `ai`
     second = `player`
     console.log('first: ' + first);
     console.log('second: ' + second);
   } else {
     first = `player`
     second = `ai`
     console.log('first: ' + first);
     console.log('second: ' + second);
   }
  }

  let locations = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine]

  setRules();
  let exactLoc;

  if (first === 'ai') {
    // AI starts the game
  if(ai === 'x') {

    function aiTurn() {
      document.querySelector('#x').style.borderColor = '#3C3E48'
      document.querySelector('#o').style.borderColor = '#FFB86C'
      let randomPos = Math.floor(Math.random() * locations.length)
      console.log(arrIndex);
      document.querySelector(`#box${arrIndex[randomPos]}-x`).classList.toggle('hidden')
      document.querySelector(`#box${arrIndex[randomPos]}-x`).classList.add('ai-x')
      exactLoc = locations[randomPos]
      
      switch(exactLoc) {
        case boxOne:
          console.log(exactLoc);
          boxOne.removeEventListener('click', sketchOne);
          break;
        case boxTwo:
          console.log(exactLoc);
          boxTwo.removeEventListener('click', sketchTwo);
          break;
        case boxThree:
          console.log(exactLoc);
          boxThree.removeEventListener('click', sketchThree);
          break;
        case boxFour:
          console.log(exactLoc);
          boxFour.removeEventListener('click', sketchFour);
          break;
        case boxFive:
          console.log(exactLoc);
          boxFive.removeEventListener('click', sketchFive);
          break;
        case boxSix:
          console.log(exactLoc);
          boxSix.removeEventListener('click', sketchSix);
          break;
        case boxSeven:
          console.log(exactLoc);
          boxSeven.removeEventListener('click', sketchSeven);
          break;
        case boxEight:
          console.log(exactLoc);
          boxEight.removeEventListener('click', sketchEight);
          break;
        case boxNine:
          console.log(exactLoc);
          boxNine.removeEventListener('click', sketchNine);
          break;

      }

      locations.splice(randomPos, 1)
      arrIndex.splice(randomPos, 1)
      console.log(locations)
      console.log(arrIndex)

      if (locations.length == 0) {
        console.log("e");
        checkForTie('x')
      }

      testWinningConditionAi('x')
    }

    aiTurn()
      let clickBoxOne = boxOne.addEventListener('click', sketchOne);
      let clickBoxTwo = boxTwo.addEventListener('click', sketchTwo);
      let clickBoxThree = boxThree.addEventListener('click', sketchThree);
      let clickBoxFour = boxFour.addEventListener('click', sketchFour);
      let clickBoxFive = boxFive.addEventListener('click', sketchFive);
      let clickBoxSix = boxSix.addEventListener('click', sketchSix);
      let clickBoxSeven = boxSeven.addEventListener('click', sketchSeven);
      let clickBoxEight = boxEight.addEventListener('click', sketchEight);
      let clickBoxNine = boxNine.addEventListener('click', sketchNine);

      switch(exactLoc) {
        case boxOne:
          console.log(exactLoc);
          boxOne.removeEventListener('click', sketchOne);
          break;
        case boxTwo:
          console.log(exactLoc);
          boxTwo.removeEventListener('click', sketchTwo);
          break;
        case boxThree:
          console.log(exactLoc);
          boxThree.removeEventListener('click', sketchThree);
          break;
        case boxFour:
          console.log(exactLoc);
          boxFour.removeEventListener('click', sketchFour);
          break;
        case boxFive:
          console.log(exactLoc);
          boxFive.removeEventListener('click', sketchFive);
          break;
        case boxSix:
          console.log(exactLoc);
          boxSix.removeEventListener('click', sketchSix);
          break;
        case boxSeven:
          console.log(exactLoc);
          boxSeven.removeEventListener('click', sketchSeven);
          break;
        case boxEight:
          console.log(exactLoc);
          boxEight.removeEventListener('click', sketchEight);
          break;
        case boxNine:
          console.log(exactLoc);
          boxNine.removeEventListener('click', sketchNine);
          break;
      }
      
      function sketchOne() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxOne-o').classList.toggle('hidden')
        document.querySelector('#boxOne-o').classList.add('player-o')
        boxOne.removeEventListener('click', sketchOne);

        locations.splice(locations.indexOf(boxOne), 1)
        arrIndex.splice(arrIndex.indexOf("One"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)

        console.log(locations)
        console.log(arrIndex)
      }

      function sketchTwo() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxTwo-o').classList.toggle('hidden')
        document.querySelector('#boxTwo-o').classList.add('player-o')
        boxTwo.removeEventListener('click', sketchTwo);

        locations.splice(locations.indexOf(boxTwo), 1)
        arrIndex.splice(arrIndex.indexOf("Two"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchThree() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxThree-o').classList.toggle('hidden')
        document.querySelector('#boxThree-o').classList.add('player-o')
        boxThree.removeEventListener('click', sketchThree);

        locations.splice(locations.indexOf(boxThree), 1)
        arrIndex.splice(arrIndex.indexOf("Three"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchFour() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxFour-o').classList.toggle('hidden')
        document.querySelector('#boxFour-o').classList.add('player-o')
        boxFour.removeEventListener('click', sketchFour);

        locations.splice(locations.indexOf(boxFour), 1)
        arrIndex.splice(arrIndex.indexOf("Four"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchFive() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxFive-o').classList.toggle('hidden')
        document.querySelector('#boxFive-o').classList.add('player-o')
        boxFive.removeEventListener('click', sketchFive);

        locations.splice(locations.indexOf(boxFive), 1)
        arrIndex.splice(arrIndex.indexOf("Five"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchSix() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxSix-o').classList.toggle('hidden')
        document.querySelector('#boxSix-o').classList.add('player-o')
        boxSix.removeEventListener('click', sketchSix);

        locations.splice(locations.indexOf(boxSix), 1)
        arrIndex.splice(arrIndex.indexOf("Six"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchSeven() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxSeven-o').classList.toggle('hidden')
        document.querySelector('#boxSeven-o').classList.add('player-o')
        boxSeven.removeEventListener('click', sketchSeven);

        locations.splice(locations.indexOf(boxSeven), 1)
        arrIndex.splice(arrIndex.indexOf("Seven"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchEight() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxEight-o').classList.toggle('hidden')
        document.querySelector('#boxEight-o').classList.add('player-o')
        boxEight.removeEventListener('click', sketchEight);

        locations.splice(locations.indexOf(boxEight), 1)
        arrIndex.splice(arrIndex.indexOf("Eight"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchNine() {
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#boxNine-o').classList.toggle('hidden')
        document.querySelector('#boxNine-o').classList.add('player-o')
        boxNine.removeEventListener('click', sketchNine);

        locations.splice(locations.indexOf(boxNine), 1)
        arrIndex.splice(arrIndex.indexOf("Nine"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }

        testWinningConditionPlayer('o')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }
      

  } else {
    function aiTurn() {
      document.querySelector('#o').style.borderColor = '#3C3E48'
      document.querySelector('#x').style.borderColor = '#C2CBF5'
      let randomPos = Math.floor(Math.random() * locations.length)
      document.querySelector(`#box${arrIndex[randomPos]}-o`).classList.toggle('hidden')
      document.querySelector(`#box${arrIndex[randomPos]}-o`).classList.add('ai-o')
      exactLoc = locations[randomPos]
      
      switch(exactLoc) {
        case boxOne:
          console.log(exactLoc);
          boxOne.removeEventListener('click', sketchOne);
          break;
        case boxTwo:
          console.log(exactLoc);
          boxTwo.removeEventListener('click', sketchTwo);
          break;
        case boxThree:
          console.log(exactLoc);
          boxThree.removeEventListener('click', sketchThree);
          break;
        case boxFour:
          console.log(exactLoc);
          boxFour.removeEventListener('click', sketchFour);
          break;
        case boxFive:
          console.log(exactLoc);
          boxFive.removeEventListener('click', sketchFive);
          break;
        case boxSix:
          console.log(exactLoc);
          boxSix.removeEventListener('click', sketchSix);
          break;
        case boxSeven:
          console.log(exactLoc);
          boxSeven.removeEventListener('click', sketchSeven);
          break;
        case boxEight:
          console.log(exactLoc);
          boxEight.removeEventListener('click', sketchEight);
          break;
        case boxNine:
          console.log(exactLoc);
          boxNine.removeEventListener('click', sketchNine);
          break;

      }

      locations.splice(randomPos, 1)
      arrIndex.splice(randomPos, 1)
      console.log(locations)
      console.log(arrIndex)

      if (locations.length == 0) {
        console.log("e");
        checkForTie('o')
      }

      testWinningConditionAi('o')
    }

    aiTurn()

      let clickBoxOne = boxOne.addEventListener('click', sketchOne);
      let clickBoxTwo = boxTwo.addEventListener('click', sketchTwo);
      let clickBoxThree = boxThree.addEventListener('click', sketchThree);
      let clickBoxFour = boxFour.addEventListener('click', sketchFour);
      let clickBoxFive = boxFive.addEventListener('click', sketchFive);
      let clickBoxSix = boxSix.addEventListener('click', sketchSix);
      let clickBoxSeven = boxSeven.addEventListener('click', sketchSeven);
      let clickBoxEight = boxEight.addEventListener('click', sketchEight);
      let clickBoxNine = boxNine.addEventListener('click', sketchNine);

      switch(exactLoc) {
        case boxOne:
          console.log(exactLoc);
          boxOne.removeEventListener('click', sketchOne);
          break;
        case boxTwo:
          console.log(exactLoc);
          boxTwo.removeEventListener('click', sketchTwo);
          break;
        case boxThree:
          console.log(exactLoc);
          boxThree.removeEventListener('click', sketchThree);
          break;
        case boxFour:
          console.log(exactLoc);
          boxFour.removeEventListener('click', sketchFour);
          break;
        case boxFive:
          console.log(exactLoc);
          boxFive.removeEventListener('click', sketchFive);
          break;
        case boxSix:
          console.log(exactLoc);
          boxSix.removeEventListener('click', sketchSix);
          break;
        case boxSeven:
          console.log(exactLoc);
          boxSeven.removeEventListener('click', sketchSeven);
          break;
        case boxEight:
          console.log(exactLoc);
          boxEight.removeEventListener('click', sketchEight);
          break;
        case boxNine:
          console.log(exactLoc);
          boxNine.removeEventListener('click', sketchNine);
          break;
      }
      
      function sketchOne() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxOne-x').classList.toggle('hidden')
        document.querySelector('#boxOne-x').classList.add('player-x')
        boxOne.removeEventListener('click', sketchOne);

        locations.splice(locations.indexOf(boxOne), 1)
        arrIndex.splice(arrIndex.indexOf("One"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        // aiTurn()

        console.log(locations)
        console.log(arrIndex)
      }

      function sketchTwo() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxTwo-x').classList.toggle('hidden')
        document.querySelector('#boxTwo-x').classList.add('player-x')
        boxTwo.removeEventListener('click', sketchTwo);

        locations.splice(locations.indexOf(boxTwo), 1)
        arrIndex.splice(arrIndex.indexOf("Two"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchThree() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxThree-x').classList.toggle('hidden')
        document.querySelector('#boxThree-x').classList.add('player-x')
        boxThree.removeEventListener('click', sketchThree);

        locations.splice(locations.indexOf(boxThree), 1)
        arrIndex.splice(arrIndex.indexOf("Three"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchFour() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxFour-x').classList.toggle('hidden')
        document.querySelector('#boxFour-x').classList.add('player-x')
        boxFour.removeEventListener('click', sketchFour);

        locations.splice(locations.indexOf(boxFour), 1)
        arrIndex.splice(arrIndex.indexOf("Four"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchFive() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxFive-x').classList.toggle('hidden')
        document.querySelector('#boxFive-x').classList.add('player-x')
        boxFive.removeEventListener('click', sketchFive);

        locations.splice(locations.indexOf(boxFive), 1)
        arrIndex.splice(arrIndex.indexOf("Five"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchSix() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxSix-x').classList.toggle('hidden')
        document.querySelector('#boxSix-x').classList.add('player-x')
        boxSix.removeEventListener('click', sketchSix);

        locations.splice(locations.indexOf(boxSix), 1)
        arrIndex.splice(arrIndex.indexOf("Six"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchSeven() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxSeven-x').classList.toggle('hidden')
        document.querySelector('#boxSeven-x').classList.add('player-x')
        boxSeven.removeEventListener('click', sketchSeven);

        locations.splice(locations.indexOf(boxSeven), 1)
        arrIndex.splice(arrIndex.indexOf("Seven"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchEight() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxEight-x').classList.toggle('hidden')
        document.querySelector('#boxEight-x').classList.add('player-x')
        boxEight.removeEventListener('click', sketchEight);

        locations.splice(locations.indexOf(boxEight), 1)
        arrIndex.splice(arrIndex.indexOf("Eight"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }

      function sketchNine() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        document.querySelector('#boxNine-x').classList.toggle('hidden')
        document.querySelector('#boxNine-x').classList.add('player-x')
        boxNine.removeEventListener('click', sketchNine);

        locations.splice(locations.indexOf(boxNine), 1)
        arrIndex.splice(arrIndex.indexOf("Nine"), 1)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }

        testWinningConditionPlayer('x')

        setTimeout(() => aiTurn(), 300)
        console.log(locations)
        console.log(arrIndex)
      }
  }

} else if (first === 'player') {
    // Player starts the game
    if(player === 'x') {
      document.querySelector('#o').style.borderColor = '#3C3E48'
      document.querySelector('#x').style.borderColor = '#C2CBF5'
      function aiTurn() {
        document.querySelector('#o').style.borderColor = '#3C3E48'
        document.querySelector('#x').style.borderColor = '#C2CBF5'
        let randomPos = Math.floor(Math.random() * locations.length)
        if (locations.length == 0) {
          console.log('end');
        } else {
          document.querySelector(`#box${arrIndex[randomPos]}-o`).classList.toggle('hidden')
          document.querySelector(`#box${arrIndex[randomPos]}-o`).classList.add('ai-o')
          exactLoc = locations[randomPos]
          
          switch(exactLoc) {
            case boxOne:
              console.log(exactLoc);
              boxOne.removeEventListener('click', sketchOne);
              break;
            case boxTwo:
              console.log(exactLoc);
              boxTwo.removeEventListener('click', sketchTwo);
              break;
            case boxThree:
              console.log(exactLoc);
              boxThree.removeEventListener('click', sketchThree);
              break;
            case boxFour:
              console.log(exactLoc);
              boxFour.removeEventListener('click', sketchFour);
              break;
            case boxFive:
              console.log(exactLoc);
              boxFive.removeEventListener('click', sketchFive);
              break;
            case boxSix:
              console.log(exactLoc);
              boxSix.removeEventListener('click', sketchSix);
              break;
            case boxSeven:
              console.log(exactLoc);
              boxSeven.removeEventListener('click', sketchSeven);
              break;
            case boxEight:
              console.log(exactLoc);
              boxEight.removeEventListener('click', sketchEight);
              break;
            case boxNine:
              console.log(exactLoc);
              boxNine.removeEventListener('click', sketchNine);
              break;
  
        }
        if (locations.length == 0) {
          console.log("e");
          checkForTie('x')
        }
        }

        locations.splice(randomPos, 1)
        arrIndex.splice(randomPos, 1)
        console.log(locations)
        console.log(arrIndex)




        testWinningConditionAi('o')
      }
    

        let clickBoxOne = boxOne.addEventListener('click', sketchOne);
        let clickBoxTwo = boxTwo.addEventListener('click', sketchTwo);
        let clickBoxThree = boxThree.addEventListener('click', sketchThree);
        let clickBoxFour = boxFour.addEventListener('click', sketchFour);
        let clickBoxFive = boxFive.addEventListener('click', sketchFive);
        let clickBoxSix = boxSix.addEventListener('click', sketchSix);
        let clickBoxSeven = boxSeven.addEventListener('click', sketchSeven);
        let clickBoxEight = boxEight.addEventListener('click', sketchEight);
        let clickBoxNine = boxNine.addEventListener('click', sketchNine);

        switch(exactLoc) {
          case boxOne:
            console.log(exactLoc);
            boxOne.removeEventListener('click', sketchOne);
            break;
          case boxTwo:
            console.log(exactLoc);
            boxTwo.removeEventListener('click', sketchTwo);
            break;
          case boxThree:
            console.log(exactLoc);
            boxThree.removeEventListener('click', sketchThree);
            break;
          case boxFour:
            console.log(exactLoc);
            boxFour.removeEventListener('click', sketchFour);
            break;
          case boxFive:
            console.log(exactLoc);
            boxFive.removeEventListener('click', sketchFive);
            break;
          case boxSix:
            console.log(exactLoc);
            boxSix.removeEventListener('click', sketchSix);
            break;
          case boxSeven:
            console.log(exactLoc);
            boxSeven.removeEventListener('click', sketchSeven);
            break;
          case boxEight:
            console.log(exactLoc);
            boxEight.removeEventListener('click', sketchEight);
            break;
          case boxNine:
            console.log(exactLoc);
            boxNine.removeEventListener('click', sketchNine);
            break;
        }
        
        function sketchOne() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxOne-x').classList.toggle('hidden')
          document.querySelector('#boxOne-x').classList.add('player-x')
          boxOne.removeEventListener('click', sketchOne);
  
          locations.splice(locations.indexOf(boxOne), 1)
          arrIndex.splice(arrIndex.indexOf("One"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)

          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchTwo() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxTwo-x').classList.toggle('hidden')
          document.querySelector('#boxTwo-x').classList.add('player-x')
          boxTwo.removeEventListener('click', sketchTwo);
  
          locations.splice(locations.indexOf(boxTwo), 1)
          arrIndex.splice(arrIndex.indexOf("Two"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchThree() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxThree-x').classList.toggle('hidden')
          document.querySelector('#boxThree-x').classList.add('player-x')
          boxThree.removeEventListener('click', sketchThree);
  
          locations.splice(locations.indexOf(boxThree), 1)
          arrIndex.splice(arrIndex.indexOf("Three"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchFour() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          // error with the player start
          document.querySelector('#boxFour-x').classList.toggle('hidden')
          document.querySelector('#boxFour-x').classList.add('player-x')
          boxFour.removeEventListener('click', sketchFour);
  
          locations.splice(locations.indexOf(boxFour), 1)
          arrIndex.splice(arrIndex.indexOf("Four"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchFive() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxFive-x').classList.toggle('hidden')
          document.querySelector('#boxFive-x').classList.add('player-x')
          boxFive.removeEventListener('click', sketchFive);

          locations.splice(locations.indexOf(boxFive), 1)
          arrIndex.splice(arrIndex.indexOf("Five"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchSix() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxSix-x').classList.toggle('hidden')
          document.querySelector('#boxSix-x').classList.add('player-x')
          boxSix.removeEventListener('click', sketchSix);
  
          locations.splice(locations.indexOf(boxSix), 1)
          arrIndex.splice(arrIndex.indexOf("Six"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchSeven() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxSeven-x').classList.toggle('hidden')
          document.querySelector('#boxSeven-x').classList.add('player-x')
          boxSeven.removeEventListener('click', sketchSeven);
  
          locations.splice(locations.indexOf(boxSeven), 1)
          arrIndex.splice(arrIndex.indexOf("Seven"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchEight() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxEight-x').classList.toggle('hidden')
          document.querySelector('#boxEight-x').classList.add('player-x')
          boxEight.removeEventListener('click', sketchEight);
  
          locations.splice(locations.indexOf(boxEight), 1)
          arrIndex.splice(arrIndex.indexOf("Eight"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchNine() {
          document.querySelector('#o').style.borderColor = '#FFB86C'
          document.querySelector('#x').style.borderColor = '#3C3E48'
          document.querySelector('#boxNine-x').classList.toggle('hidden')
          document.querySelector('#boxNine-x').classList.add('player-x')
          boxNine.removeEventListener('click', sketchNine);
  
          locations.splice(locations.indexOf(boxNine), 1)
          arrIndex.splice(arrIndex.indexOf("Nine"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('x')
          }

          testWinningConditionPlayer('x')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }


    } else if (player === 'o') {
      document.querySelector('#o').style.borderColor = '#FFB86C'
      document.querySelector('#x').style.borderColor = '#3C3E48'
      function aiTurn() {
        document.querySelector('#o').style.borderColor = '#FFB86C'
        document.querySelector('#x').style.borderColor = '#3C3E48'
        let randomPos = Math.floor(Math.random() * locations.length)
        if (locations.length == 0) {
          console.log('end');

        } else {
          document.querySelector(`#box${arrIndex[randomPos]}-x`).classList.toggle('hidden')
          document.querySelector(`#box${arrIndex[randomPos]}-x`).classList.add('ai-x')
          exactLoc = locations[randomPos]
          
          switch(exactLoc) {
            case boxOne:
              console.log(exactLoc);
              boxOne.removeEventListener('click', sketchOne);
              break;
            case boxTwo:
              console.log(exactLoc);
              boxTwo.removeEventListener('click', sketchTwo);
              break;
            case boxThree:
              console.log(exactLoc);
              boxThree.removeEventListener('click', sketchThree);
              break;
            case boxFour:
              console.log(exactLoc);
              boxFour.removeEventListener('click', sketchFour);
              break;
            case boxFive:
              console.log(exactLoc);
              boxFive.removeEventListener('click', sketchFive);
              break;
            case boxSix:
              console.log(exactLoc);
              boxSix.removeEventListener('click', sketchSix);
              break;
            case boxSeven:
              console.log(exactLoc);
              boxSeven.removeEventListener('click', sketchSeven);
              break;
            case boxEight:
              console.log(exactLoc);
              boxEight.removeEventListener('click', sketchEight);
              break;
            case boxNine:
              console.log(exactLoc);
              boxNine.removeEventListener('click', sketchNine);
              break;
  
        }

        }

        locations.splice(randomPos, 1)
        arrIndex.splice(randomPos, 1)
        console.log(locations)
        console.log(arrIndex)

        if (locations.length == 0) {
          console.log("e");
          checkForTie('o')
        }


        testWinningConditionAi('x')
      }
    

        let clickBoxOne = boxOne.addEventListener('click', sketchOne);
        let clickBoxTwo = boxTwo.addEventListener('click', sketchTwo);
        let clickBoxThree = boxThree.addEventListener('click', sketchThree);
        let clickBoxFour = boxFour.addEventListener('click', sketchFour);
        let clickBoxFive = boxFive.addEventListener('click', sketchFive);
        let clickBoxSix = boxSix.addEventListener('click', sketchSix);
        let clickBoxSeven = boxSeven.addEventListener('click', sketchSeven);
        let clickBoxEight = boxEight.addEventListener('click', sketchEight);
        let clickBoxNine = boxNine.addEventListener('click', sketchNine);

        switch(exactLoc) {
          case boxOne:
            console.log(exactLoc);
            boxOne.removeEventListener('click', sketchOne);
            break;
          case boxTwo:
            console.log(exactLoc);
            boxTwo.removeEventListener('click', sketchTwo);
            break;
          case boxThree:
            console.log(exactLoc);
            boxThree.removeEventListener('click', sketchThree);
            break;
          case boxFour:
            console.log(exactLoc);
            boxFour.removeEventListener('click', sketchFour);
            break;
          case boxFive:
            console.log(exactLoc);
            boxFive.removeEventListener('click', sketchFive);
            break;
          case boxSix:
            console.log(exactLoc);
            boxSix.removeEventListener('click', sketchSix);
            break;
          case boxSeven:
            console.log(exactLoc);
            boxSeven.removeEventListener('click', sketchSeven);
            break;
          case boxEight:
            console.log(exactLoc);
            boxEight.removeEventListener('click', sketchEight);
            break;
          case boxNine:
            console.log(exactLoc);
            boxNine.removeEventListener('click', sketchNine);
            break;
        }
        
        function sketchOne() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxOne-o').classList.toggle('hidden')
          document.querySelector('#boxOne-o').classList.add('player-o')
          boxOne.removeEventListener('click', sketchOne);
  
          locations.splice(locations.indexOf(boxOne), 1)
          arrIndex.splice(arrIndex.indexOf("One"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)

          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchTwo() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxTwo-o').classList.toggle('hidden')
          document.querySelector('#boxTwo-o').classList.add('player-o')
          boxTwo.removeEventListener('click', sketchTwo);
  
          locations.splice(locations.indexOf(boxTwo), 1)
          arrIndex.splice(arrIndex.indexOf("Two"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchThree() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxThree-o').classList.toggle('hidden')
          document.querySelector('#boxThree-o').classList.add('player-o')
          boxThree.removeEventListener('click', sketchThree);
  
          locations.splice(locations.indexOf(boxThree), 1)
          arrIndex.splice(arrIndex.indexOf("Three"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchFour() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          // error with the player start
          document.querySelector('#boxFour-o').classList.toggle('hidden')
          document.querySelector('#boxFour-o').classList.add('player-o')
          boxFour.removeEventListener('click', sketchFour);
  
          locations.splice(locations.indexOf(boxFour), 1)
          arrIndex.splice(arrIndex.indexOf("Four"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchFive() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxFive-o').classList.toggle('hidden')
          document.querySelector('#boxFive-o').classList.add('player-o')
          boxFive.removeEventListener('click', sketchFive);

          locations.splice(locations.indexOf(boxFive), 1)
          arrIndex.splice(arrIndex.indexOf("Five"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchSix() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxSix-o').classList.toggle('hidden')
          document.querySelector('#boxSix-o').classList.add('player-o')
          boxSix.removeEventListener('click', sketchSix);
  
          locations.splice(locations.indexOf(boxSix), 1)
          arrIndex.splice(arrIndex.indexOf("Six"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchSeven() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxSeven-o').classList.toggle('hidden')
          document.querySelector('#boxSeven-o').classList.add('player-o')
          boxSeven.removeEventListener('click', sketchSeven);
  
          locations.splice(locations.indexOf(boxSeven), 1)
          arrIndex.splice(arrIndex.indexOf("Seven"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchEight() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxEight-o').classList.toggle('hidden')
          document.querySelector('#boxEight-o').classList.add('player-o')
          boxEight.removeEventListener('click', sketchEight);
  
          locations.splice(locations.indexOf(boxEight), 1)
          arrIndex.splice(arrIndex.indexOf("Eight"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }
  
        function sketchNine() {
          document.querySelector('#o').style.borderColor = '#3C3E48'
          document.querySelector('#x').style.borderColor = '#C2CBF5'
          document.querySelector('#boxNine-o').classList.toggle('hidden')
          document.querySelector('#boxNine-o').classList.add('player-o')
          boxNine.removeEventListener('click', sketchNine);
  
          locations.splice(locations.indexOf(boxNine), 1)
          arrIndex.splice(arrIndex.indexOf("Nine"), 1)

          if (locations.length == 0) {
            console.log("e");
            checkForTie('o')
          }

          testWinningConditionPlayer('o')

          setTimeout(() => aiTurn(), 300)
          console.log(locations)
          console.log(arrIndex)
        }

    }

}

}


let value = gameLoop()
console.log(value);

