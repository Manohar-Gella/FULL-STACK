function cal() {
    let ans = 0;
    let x = document.getElementById('val1').value;
    let y = document.getElementById('val2').value;
    let op = document.getElementById('op').value;

    if(op == '+'){
        ans = parseInt(x) + parseInt(y);
    }
    else if(op == '-'){
        ans = parseInt(x) - parseInt(y);
    }
    else if(op == '*'){
        ans = parseInt(x) * parseInt(y);
    }
    else if(op == '/'){
        ans = parseInt(x) / parseInt(y);
    }
    else{
        document.getElementById('ans').innerText = 'Mother fucker you forget to enter the op';
        process.exit(0);
    }

    document.getElementById('ans').innerText = 'Ans: '+ans;

}

function clr() {
    let value1 = document.getElementById('val1');
    let value2 = document.getElementById('val2');
    let opp = document.getElementById('op');
    let end = document.getElementById('ans');

    value1.value = '';
    value2.value = '';
    opp.value = '';
    end.value = '';

}
