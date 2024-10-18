const temperature = parseFloat(prompt("Enter a temperature"));
const unit = prompt("Enter a unit(C for celsius,F for fahrenheit):");

if (unit =="C")
{
    const fahrenheit  = parseFloat((9/5 * `${temperature}`)+32);
    console.log(`${temperature}°C is equal to ${fahrenheit}°F`);
}
else{
    const celsius = parseFloat((`${temperature}` - 32)*5/9);
    console.log(`${temperature}°F is equal to ${celsius}°C`);
}