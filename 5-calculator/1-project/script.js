const input = document.querySelector(".input");

const buttons = document.querySelectorAll(".buttons span");

let arr = [];

buttons.forEach((btn)=>{
   btn.addEventListener("click", ()=>{

    if(btn.innerHTML == "00"){
        arr.push('0');
        arr.push(btn.innerHTML)
    } else{
        arr.push(btn.innerHTML)
    }

    if(arr.length > 15){
        document.querySelector(".input").style.fontSize = "19px"
    }

    if(btn.innerHTML == "=" && input.innerHTML !== "00"){
        input.innerHTML = eval(input.innerHTML)
        document.querySelector(".input").style.fontSize = "30px"
    } else{
        if(btn.innerHTML == "Clear"){
            input.innerHTML = "00"
            document.querySelector(".input").style.fontSize = "30px"
        } else{
            if(btn.innerHTML == "+" && input.innerHTML == "00" || btn.innerHTML == "-" && input.innerHTML == "00" || btn.innerHTML == "*" && input.innerHTML == "00" || btn.innerHTML == "/" && input.innerHTML == "00" || btn.innerHTML == "=" && input.innerHTML == "00" ){
                input.innerHTML == "00"
            } else{
                    if(input.innerHTML == "00"){
                        input.innerHTML = "";
                    }
                    input.innerHTML = input.innerHTML + btn.innerHTML;
                    document.querySelector(".input").style.fontSize = "30px"
            }
        }
    }    
   })
})







    // if(btn.innerHTML == "Clear"){
    //     input.innerHTML = "00";
    // } else{
    //     if(btn.innerHTML == "=" &&  input.innerHTML !== "00"){
    //         input.innerHTML = eval(input.innerHTML)
    //     } else{
    //       if(btn.innerHTML == "+" && input.innerHTML == "00" || btn.innerHTML == "-" && input.innerHTML == "00" || btn.innerHTML == "*" && input.innerHTML == "00" || btn.innerHTML == "/" && input.innerHTML == "00"){
    //           input.innerHTML = "00"
    //       } else{
    //           if(input.innerHTML == "00"){
    //               input.innerHTML = ""
    //           } 
    //           input.innerHTML = input.innerHTML + btn.innerHTML;
    //       }
    //     }
    // }