

function chooseRight(){
    let number = 10;
    let a = prompt("chosse a Number ");
    
    while (true){

        if (number == a){
            alert("Hurrey !  you are winner !!!!!!!!!!!");
            break;
        }

        if (number < a){
            alert("Opps ! value is so High ");
        }

        if (number > a)
        {
            alert("Opps ! value is so low");
        }
        
        a = prompt("try again !!")
        continue;
    }


        // let h3 = document.createElement('h3');
        // h3.setAttribute ('id',"text", 'class','mt-5');
        // h3.appendChild(text);
        // document.getElementById("display-text").appendChild(h3);


}