function passWord() {
    var testV = 1;
    var pass1 = prompt('Type password'); 
    while (testV < 3) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "cc71078782f0d524b7dce49a53dbb167") { 
    alert('All Clear !'); 
    location.href ='index_main.html'; 
    
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