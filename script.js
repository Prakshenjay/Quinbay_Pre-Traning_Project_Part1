const taskinput = document.getElementById("taskItem");

let tasks = [];

document.getElementById("newTask").addEventListener("click", function (e) {
    e.preventDefault();
    addListItem();
});

const addListItem = () => {
    const input_text = taskinput.value.trim();
    
    if(input_text.length > 0){
        tasks.push(input_text);
        createListItem(input_text);
        taskinput.value = "";
    }
};

const createListItem = (input) => {
    
};