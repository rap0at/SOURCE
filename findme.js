function passWord() {
    var testV = 1;
    var pass1 = prompt('Type password'); 
    while (testV < 3) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "%%@$36rnj8") { 
    alert('Level 2 clear'); 
    location.href ='Riddle3.html'; 
    
    break;
    } 
    testV+=1;
    var pass1 = 
    prompt('Wrong password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
    history.go(-1);
    return " ";
    } 