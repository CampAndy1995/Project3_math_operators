window.alert(Math.random()*100);

var X = 5;
X++;
document.write(X);

var X = 7;
X--;
document.write(X);

function negation_Operator() {
    var x = 10;
    document.getElementById("Math")
.innerHTML = -x
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHML = "When you divide 25 by 6 you have a remainder of: " simple_Math;
}

function more_Math () {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals " + simple_Math; 
    }
    
    function multiplication () {
        var simple_Math = 2 * 2;
        document,getElementById("Math").innerHTML = "2 * 2 =" + simple_Math;
    }
    
    function division () {
        var simple_Math = 2 / 2;
        document,getElementById("Math").innerHTML = "2 / 2 =" + simple_Math;                // Here are the division and adding functions//
        
        function addition_function () {
        var addition = 2 + 2;
        document,getElementById("Math").innerHTML = "2 + 2 =" + addition
    }
    
    function subtraction_function () {
        var subtraction = 2 - 2;
        document,getElementById("Math").innerHTML = "2 - 2 =" + subtraction;                 // Here is  the subtraction functions//
    }