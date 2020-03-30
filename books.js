//document.write("hello this is Vishal Varma");

function verify(){
    var bool = false;
    while(bool == false){
        var x = prompt("Enter username");
        var y = prompt("Enter the password");
        if(x == "cb.en.u4cse18334"){
            if(y == "cse90287"){
                bool = true;
            }
            else{
                alert("Either ur password or username is incorrect");
            }
        }
        else if(x == "cb.en.u4cse18352"){
            if(y == "cse65699"){
                bool = true;
            }
            else{
                alert("Either ur password or username is incorrect");
            }
        }
        else{
            alert("Either ur password or username is incorrect");
        }
    }
    return bool;
}
//var verification = verify();
if(verification == true){

}
