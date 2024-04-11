import inquirer from "inquirer";



let Random_number: number=Math.ceil(1.0);
console.log(`Seil Random number:${Random_number}`);

while(1 ){
    Random_number = Math.floor(Math.random() *10) + 1;
    console.log(`Random number:${Random_number}`);
    let guess = await inquirer.prompt([{message:"Enter My gues",type:"number",name:"guess"}]);
    if(guess.guess === Random_number){
         console.log("You Win");
        break;
    }else {
        console.log("Try again");
    }
    }


