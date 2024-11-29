// alert("hello");
// let a=prompt("Enter a number: ");
// console.log(a);

// if(a%5===0)
// {
//     console.log("Yes");
// }
// else
// {
//     console.log("No")
// }

// for (let count=0; count<=100; count++)
// {
//     if(count%2!=0)
//         {
//             console.log(count);
//         }
// }



// let gno=25;

// let uno=prompt("Enter ")

function vcount(str)
{
    let count=0;
    for(const char of str)
        {
            if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
            {
                count++;
            }
        }

        console.log(count);
}

const countVowels=(str) =>{
    let count=0;
    for(const char of str)
        {
            if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
            {
                count++;
            }
        }

        console.log(count);
}