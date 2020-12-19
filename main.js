var inputs = [];
function getpara1() {
    for(var i = 1 ; i <= 6 ; i++){
        inputs.push(document.getElementById("p1_input_" + i).value);
    };
    document.getElementById("showpara1").innerHTML = inputs.join(". ");
}

var input = [];
function getpara2() {
    for(var x = 1 ; x <= 6 ; x++){
        input.push(document.getElementById("p2_input_" + x).value);
    };
    document.getElementById("showpara2").innerHTML = input.join(". ");
}