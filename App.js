window.addEventListener('load',() => {
    const form = document.getElementById("new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.getElementById("tasks");

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("please provide task");
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText=task;
        
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");


        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_input_el);
        list_el.appendChild(task_el);


    })

})