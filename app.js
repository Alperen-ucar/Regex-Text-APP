function runRegex(){

   let txt = document.getElementById("txt");
   let txtType = document.getElementsByName("choice");
   let regexTxt = txt.value.match(/[A-Za-z]+/g);
   let regexNum = txt.value.match(/[0-9]+/g);;
   let regexChar = txt.value.match(/\W+/g);
    
   for(let i = 0; i < txtType.length; i++) {
    if(txtType[i].checked) {
        //console.log(txtType[i].value);
        if(txtType[i].value == "text") {
            document.getElementById("txtResult").innerHTML = regexTxt;
            txt.value = "";
        }
        else if(txtType[i].value == "number") {
            document.getElementById("txtResult").innerHTML = regexNum;
            txt.value = "";
        }
        else if(txtType[i].value == "character") {
            document.getElementById("txtResult").innerHTML = regexChar;
            txt.value = "";
        }
        else {
            console.log("Error | txtType[i].value");
        }
    }
   }
   
}


