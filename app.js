createParagraph = () =>{

    var wordOne = document.getElementById('blank-1').value;
    var wordTwo = document.getElementById('blank-2').value;
    var wordThree = document.getElementById('blank-3').value;
    var wordFour = document.getElementById('blank-4').value;
    var wordFive = document.getElementById('blank-5').value;
    var wordSix = document.getElementById('blank-6').value;
    var wordSeven = document.getElementById('blank-7').value;
    var wordEight = document.getElementById('blank-8').value;
    var wordNine = document.getElementById('blank-9').value;
    var wordTen = document.getElementById('blank-10').value;
    var wordEleven = document.getElementById('blank-11').value;
    var wordTweleve = document.getElementById('blank-12').value;
    var wordThirdteen = document.getElementById('blank-13').value;
    var wordFourteen = document.getElementById('blank-14').value;
    var wordFifthteen = document.getElementById('blank-15').value;
    var wordSixteen = document.getElementById('blank-16').value;



    var paragraph = 'Meet our hero, '+wordOne+'a super intelligent '+wordTwo+'. A run-in with the'+wordThree+' military leads him to create his alter-ego'+wordFour+', a ' +wordFive+ +wordSix+ 'giant capable of great destruction. He '+wordSeven+'battles the military with his girlfriend. '+wordEight+"Eventually it is discovered that our hero's long-time colleague"+wordNine+',distinguished by his'+wordTen+'is trying to turn'+wordEleven+'into a weapon, leading to a climactic (if pointless battle in downtown'+wordTweleve+'with an evil version of the same giant alter-ego called. ' +wordThirdteen+ 'Eventually the enemy is subdued by'+wordFourteen+'ing him with a '+wordFourteen+'. In the final reel, '+wordFifthteen+' appears to propose joining him in a '+wordSixteen+'.';

    document.getElementById('answer').innerHTML = paragraph;
}