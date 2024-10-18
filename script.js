const per = parseInt(prompt("Enter Your Percentage"));

if (per > 100 && per < 99) 
     {
        console.log("Grade A");
     }
     else if (per >= 80 && per <= 89)
     {
        console.log("Grade B");
     }
     else if  (per >= 70 && per <= 79)
     {
        console.log("Grade C");
     }
     else if   (per >= 60 && per <= 69)
     {
        console.log("Grade D");
     }
     else if   (per >= 0 && per <= 59)
     {
        console.log("Grade F");
     }