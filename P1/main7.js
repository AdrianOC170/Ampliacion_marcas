
let NUM = Math.floor(Math.random() * 13)+1;
let NUM2 = Math.floor(Math.random() * 13)+1;
console.log("la primera carta da"+ NUM);
console.log("la segunda carta da"+ NUM2);
console.log("tus cartas son"+NUM+","+NUM2);
let palabro = prompt("carta mas(press c) o plantarse(press p)");
if(palabro== "p" )
{
    console.log("se planta como plantera");

}
else if(palabro== "c")
{
    console.log("el jugador pide una mas");

}
else
{
    console.log("por favor limitese a C o P");
}
if(NUM > 10)
    {
        NUM = 10;
    }

if(NUM2> 10)
    {
        NUM = 10;
    }

    