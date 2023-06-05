let yuvrajoldinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZY2wsI1h1dx-PBlDXI8YFDy_zezFsKeJvlB9VYF3EE7IYsJ9ukoi9JqqGznj7Fq_YxrTxufiwVqE&usqp=CAU&ec=48665698",
    name: "Yuvraj Singh",
    description: "Indian Cricketer"
} 

let yuvrajnewinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHOTw0LvRC6fJhL4sgm1aQy-VfUdy0muM3zDfCcQpyg&usqp=CAU&ec=48665698",
    name: "Yuvraj Singh",
    description: "Man of the Series - World Cup 2011"
}

let isyuvrajold = true;
let displayobject;

let flipdata = function(){
    if(isyuvrajold == true){
        displayobject = yuvrajnewinfo;
        isyuvrajold = false;
    }
    else{
        displayobject = yuvrajoldinfo;
        isyuvrajold = true;
    }
    document.getElementById("ywc").src=displayobject.imgurl;
    document.getElementById("ywc-name").innerHTML=displayobject.name;
    document.getElementById("ywc-des").innerHTML = displayobject.description;
}