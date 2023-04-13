import { compareASC, form, parseISO, startOfToday } from 'date-fns';

let toDoArray = [];

export const createToDo = () => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    
    if(title == "" || description == "" || dueDate == ""){
        alert("Fill the blank space please!");
        return;
    }
    if(parseISO(dueDate) < startOfToday()){
        alert("Enter a valid date please!");
        return;
    }
    toDoArray.push({ title, description, dueDate, priority });
    console.log(toDoArray);

    return { title, description, dueDate, priority }
}