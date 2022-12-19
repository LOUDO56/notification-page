document.querySelector(".button-unread").addEventListener("click", function(){
    var unread = document.querySelectorAll(".unread");
    var dot_unread = document.querySelectorAll(".dot-unread");
    for(let i = 0; i < unread.length; i++){
        unread[i].classList.remove("unread");
        dot_unread[i].style.display = "none";
    }
    document.querySelector(".amount-notif").style.display = "none";
})