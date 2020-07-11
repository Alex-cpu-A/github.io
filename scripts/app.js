var result = document.querySelector("#result");
var input1 = document.querySelector('#par1');
var input2 = document.getElementById('par2');
var input3 = document.getElementById('par3');
var inputs = [input1, input2, input3];
var operation = '';

function getResultSymbol() {
    var index = input2.value;
    if(!parseInt(index) || index > input1.value.length){
        alert('invalid length');
    } else {
        result.textContent = input1.value.charAt(--index);
    }
}

function getResultSubstring() {
    var ind1 = input2.value;
    var ind2 = input3.value;
    if(!parseInt(ind1) || ind1 > input1.value.length) {
        alert('invalid index from');
    } else if (!parseInt(ind2)) {
        alert('invalid length');
    } else {
        result.textContent = input1.value.substr(--ind1, ind2);
    }
}

function printResult(){
    switch (operation) {
        case 'length': result.textContent = input1.value.length;
            break;
        case 'symbol': getResultSymbol();
            break;
        case 'substring': getResultSubstring();
            break;
    }
}
function getStrLength() {
    reset();
    input1.hidden = false;
    input1.setAttribute('placeholder', 'string');
    operation = 'length';
}
function getStrSymbol() {
    reset();
    getStrLength();
    input2.hidden = false;
    input2.setAttribute('placeholder', 'index of symbol');
    operation = 'symbol';
}
function getSubstring() {
    reset();
    getStrLength();
    input2.hidden = false;
    input2.setAttribute('placeholder', 'index from');
    input3.hidden = false;
    input3.setAttribute('placeholder', 'length');
    operation = 'substring';
}
function reset() {
    for(let i=0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].hidden = true;
    }
    result.textContent = '';

    // input1.value = '';
    // input2.value = '';
    // input3.value = '';
    //
    // input1.hidden = true;
    // input2.hidden = true;
    // input3.hidden = true;

}