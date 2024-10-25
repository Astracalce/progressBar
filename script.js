var btn = document.querySelector("button");
var progress = document.querySelector(".progress");
var counter = 0;
var int;


btn.addEventListener("click", () => {

    

        int = setInterval(() => {
        
            if(counter<100) {
            counter++;
            progress.style.width = counter + "%";
            console.log(counter);
        
        }

            else {
     
                clearInterval(int);
        }
        
            
        }, 10); 
       
        

})