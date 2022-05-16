var a = document.getElementById("btn");
a.addEventListener("click",fun);
a.addEventListener("mouseover",fun1);
a.addEventListener("mouseout",fun2);

function fun(){
    console.log("click");
}

function fun1(){
    console.log("mouse over");
}

function fun2(){
    console.log("mouse out");
}