let pw=document.querySelector(".pw");
let p=0;
let tp=document.querySelector(".tp");
pw.addEventListener("click", function(){
    if(p==0)
    {pw.name="eye"
    tp.type="text";
p=1;}
    else{
        pw.name="eye-off";
        tp.type="password";
p=0;
    }
});
let pw1=document.querySelector(".pw1");
let p1=0;
let tp1=document.querySelector(".tp1");
pw1.addEventListener("click", function(){
    if(p1==0)
    {pw1.name="eye"
    tp1.type="text";
p1=1;}
    else{
        pw1.name="eye-off";
        tp1.type="password";
p1=0;
    }
});
const screen = document.querySelector(".screen");
const login = document.querySelector(".login-link");
const register = document.querySelector(".reg-link");
register.addEventListener("click",function(){
    screen.classList.add("active");
});
login.addEventListener("click",function(){
    screen.classList.remove("active");
});
function show(){
    screen.classList.add("incoming");
}
const cut=document.querySelector(".close-icon");
cut.addEventListener("click",function(){
    screen.classList.remove("incoming");
});
function validation(){
    // let email=document.querySelector(".email-l");
    // var  error5=document.querySelector(".m-invalid-l");
    // if(email_validation(email.value)){
    //     error5.innerHTML="";
    // }
    // else{
    //     error5.innerHTML="Invalid Email Address";
    //     return false;
    // }
    let password = document.querySelector(".tp");
    var error6= document.querySelector(".p-invalid-l");
    if(password_validation(password.value)){
        error6.innerHTML="";
    }
    else{
        error6.innerHTML="Password should be greater than 8 characters";
        return false;
    }
    return true;
}
function validate(){
    let uname=document.querySelector(".uname");
    var error=document.querySelector(".n-invalid-r");
    if(name_validation(uname.value)){
        error.innerHTML="";
    }
    else{
        error.innerHTML="Invalid Username";
        return false;
    }
    let contact= document.querySelector(".contact");
    var error1=document.querySelector(".c-invalid-r");
    if(contact_validation(contact.value)){
        error1.innerHTML="";
    }
    else{
        error1.innerHTML="Invalid Contact No.";
        return false;
    }
    // let email=document.querySelector(".email-r");
    // var  error3=document.querySelector(".m-invali-r");
    // if(email_validation(email.value)){
    //     error3.innerHTML="";
    // }
    // else{
    //     error3.innerHTML="Invallid Email Address";
    //     return false;
    // }
    let password = document.querySelector(".tp1");
    var error2= document.querySelector(".p-invalid-r");
    if(password_validation(password.value)){
        error2.innerHTML="";
    }
    else{
        error2.innerHTML="Password should be greater than 8 characters";
        return false;
    }
}
function name_validation(value){
    if(value.length.trim()>=5){
        // if(value[0]>='0'&&value[0]<='9'){ return false;}
        let p=true;
        for(var i=0;i<value.length;i++){
            if((value[i]>='A'&&value[i]<='Z')||(value[i]>='a'&&value[i]<='z')||value[i]==" "){
                // (value[i]=='_')||(value[i]=='-')||(value[i]=='&')||(value[i]>='0'&&value[i]<='9')
            }
            else{
                p=false;
                break;
            }
        }
        return p;
    }
    else return false;
}
function contact_validation(value){
    if(value.length==10){
        let p=true;
        for(let i=0;i<value.length;i++){
            if(value[i]>='0'&&value[i]<='9'){}
            else{
                p=false; break;
            }
        }
        return p;
    }
    else return false;
}
function password_validation(value){
    if(value.length>=8) return true;
    else return false;
}
// function email_validation(value){
//     var validFormat=new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/");
//     return value.match(validFormat);
// }       
//Pta ni kya hi h!!! chalta to h ni, jo chalta usko bhi kharab kr deta ;(