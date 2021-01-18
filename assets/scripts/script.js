let but_show = document.querySelector('button[data-action = "show"]');
let but_hide = document.querySelector('button[data-action = "hide"]');
let div_container = document.querySelector('.list-container');
// console.log(but_hide);
// console.log(but_show);
document.addEventListener("click", function(event){
    let action = event.target.dataset.action;

    if (!action) return;

    this.show = function(){
        console.log("show list");
        but_show.classList.remove("active");
        but_hide.classList.add("active");
        div_container.classList.remove("hide")
       div_container.classList.add("show");
    }
    this.hide = function(){
        console.log("hide list");
        but_hide.classList.remove("active");
        but_show.classList.add("active");
        div_container.classList.remove("show")
        div_container.classList.add("hide");
    }

    if(event.target.classList.contains('active')){
        this[action]();
    }
    
})
