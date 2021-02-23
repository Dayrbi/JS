let but_show = document.querySelector('button[data-action = "show"]');
let but_hide = document.querySelector('button[data-action = "hide"]');
let but_create = document.querySelector('button[data-action = "create"]');
let div_container = document.querySelector('.list-container');
let div_task = document.querySelector('.createTask');
let form_task = document.forms.formTask;
let list = document.querySelector('.list-container > ul');
// console.log(but_hide);
// console.log(form_task);
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
    this.create = function() {
        console.log("create");
        but_create.classList.remove("active");
        div_task.style.display = "flex";
    }

    if(event.target.classList.contains('active')){
        this[action]();
    }
    
    
})
    form_task.elements.sendButton.onclick = function () {
        console.log("Task");
        let val = form_task.elements.task.value;
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const li = document.createElement("li");
        const label = document.createElement("label");
        const img = document.createElement("img");


        list.appendChild(li);
        li.appendChild(checkbox);
        label.textContent = val;
        console.log('val', val);
        li.appendChild(label);
        img.src = './assets/images/icons8-delete-trash-24.png';
        img.classList.add("deleteIcon");
        li.appendChild(img);


        div_task.style.display = "none";

        form_task.elements.task.value = "";
        // console.log('val', val);

        but_create.classList.add("active");

        
    }