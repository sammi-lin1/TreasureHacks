document.getElementById('push').addEventListener('click',() => {
    const input_field = document.querySelector("#newtask input");
    if (input_field.value == ''){
        alert("Please provide a task");
        return;
    }
    const newtask = input_field.value;
    
    const newPara = document.createElement("span");
    const text = document.createTextNode(newtask);
    newPara.appendChild(text);

    const parent = document.getElementById("tasks");
    parent.appendChild(newPara);

});