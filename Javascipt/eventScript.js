let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
// }

// let div1=document.querySelector("#div1");


// div1.onmouseover=()=>{
//     console.log('you are inside div');
// }

// btn1.addEventListener("click",(evt)=> {

//     console.log("Button was clicked by evtlistener");
//     console.log(evt);

// })

// btn1.addEventListener("click",()=> {

//     console.log("Button was clicked by evtlistener2");

// })

// const handler3=()=> {

//     console.log("Button was clicked by evtlistener3");

// }




let mode=document.querySelector("#mode");
let currMode="light";

mode.addEventListener("click",() =>{

    if(currMode=="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currMode);
})


