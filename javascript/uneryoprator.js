console.log("hello i'm here")
{
    let x=0;
    let y=0;

    console.log( x + ++x - ++x + --x + y); //0

}
{
    let x=0;
    let y=0;
    console.log(--y - ++x - ++y - x++ + x++ - x++ -y)//-4
    
}
{
    let x=0;
    let y=0;
    console.log(--x - ++x + --y + ++ x - y + x + 1 + --y) // 0
    
}
{
    let x=0;
    let y=0;
    console.log(x + y + ++y +y++ - x++ + --y + 2 + x++) // 6
    
}
{
    let x=0;
    let y=0;
    console.log(- y - x-- + x++ - x++ - ++y - ++x - --y) // -4
    
}
{
    let x=0;
    let y=0;
    console.log(--x + ++x - --y - ++x + y - x - 1 - --y) //-2
    
}
{
    let x=0;
    let y=0;
    console.log(y + x + ++x + x++ + --x + 2 + --y) //4
    
}
{
    let x=0;
    let y=0;
    console.log(x + y++ - y-- + y-- + --x + --y + ++x) //-4
    
}
console.log(typeof(1 + 2 + +"3"+ +2 + +2))// why this is number
console.log(false + 1 + true + +"true")//why this is nan
console.log(undefined + true)
console.log(typeof(1 + 2 - "3"+ +2 + +2))// why this is number
console.log("helo")
console.log("heetttt");
