let yuvrajoldinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZY2wsI1h1dx-PBlDXI8YFDy_zezFsKeJvlB9VYF3EE7IYsJ9ukoi9JqqGznj7Fq_YxrTxufiwVqE&usqp=CAU&ec=48665698",
    name: "Yuvraj Singh",
    description: "Indian Cricketer"
} 


let displayobject;

let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))

    document.getElementById("ywc").src=displayobject.imgurl;
    document.getElementById("ywc-name").innerHTML=displayobject.name;
    document.getElementById("ywc-des").innerHTML = displayobject.description;
}