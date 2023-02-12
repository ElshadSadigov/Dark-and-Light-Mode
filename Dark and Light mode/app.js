alert("Web-səhifənin əsas məksədi gecə və gündüz modu oluşturmaq")

let body=document.querySelector(".body")
let btn = document.querySelector(".moon-sun")

function Toggle(){
    body.classList.toggle("dark")
    btn.classList.toggle("moon-sun-active")
}