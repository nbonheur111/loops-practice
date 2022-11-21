//2. loop that logs 0 - 15.
for(let i = 0; i <=15; i++){
    console.log(i);
}
console.log("");
// 3. loop that counts from 15 - 0
for(i = 15; i >= 0; i--){
    console.log(i);
}
// 4. add 1 to the laps variable after logging "that's another lap". AFTER the loop, log laps.

laps = 0;

for(let i = 0; i < 5; i++){
    console.log("that's another lap");
    laps+=1;
}
console.log(`laps = ${laps}`);

console.log("");

// 6. Make variable age. Make a loop from 0-100. In every loop check if i == age, 
// if so log something, else say “age doesn’t match”.
let age = 35;
for(let i = 0; i < 101; i++){
    if( i == age){
        console.log("Congratulations, you guessed right!");
    }else {
        console.log("age doesn't match")
    }
}

// 7. loop that logs all even numbers from 0 to 700;

for(let i = 0; i <= 700; i++){
    if( i % 2 == 0){
        console.log(i);
    }
}
console.log("");
//8. a loop that logs all odd numbers from  0 to 700;

for(let i = 0; i <= 700; i ++){
    if(i % 2 != 0){
        console.log(i);
    }
}
console.log("");

//9. Write a loop with some “if else” statements. 
// The loop should start at 1900 and go to 1949 and log when things were invented
for (let i = 1900; i < 1950; i++){
    if(i == 1900){
        console.log("It is 1900 - zeppelin is invented");
    }else if(i == 1902){
        console.log("It is 1902 - the teddy bear is invented");        
    }else if(i == 1910){
        console.log("It is 1910 - Talking motion pictures invented ");        
    }else if(i == 1913){
        console.log("It is 1913 - Bra is invented ");        
    }else if(i == 1918){
        console.log("It is 1918 - fortune cookie are invented ");        
    }else if(i == 1923){
        console.log("it is 1923 - traffic signal is invented ");        
    }else if(i == 1935){
        console.log("It is 1935 - Radar is invented ");        
    }else if(i == 1938){
        console.log("It is 1938 - Ballpoint pen invented ");        
    }else if(i == 1943){
        console.log("It is 1943 - slinky is invented"); 
    }       
    }