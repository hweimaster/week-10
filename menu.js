//Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//A Bootstrap styled table representing your choice of data.
//A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

let id = 0; 

document.getElementById('add').addEventListener('click',() => {//creates a fucntion that will create the table when the button is clicked
    let table = document.getElementById('list');
    let row = table.insertRow(1);//start at one since all arrays start at 0, this is our description line
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('new-menu-item').value;//added the value inputted to the table
    row.insertCell(1).innerHTML = document.getElementById('new-calendar-item').value;
    row.insertCell(2).innerHTML = document.getElementById('new-course-item').value;
    let actions = row.insertCell(3);
    actions.appendChild(deleteButton(id++));//adding the action to the button
    document.getElementById('new-menu-item').value = '';
    document.getElementById('new-calendar-item').value = '';
    document.getElementById('new-course-item').value = ''; //starts the loop over agian so the info will clear out of the text bar automatically
})

function deleteButton(id){ //binds a function to the button in the row
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete'//tells the btn whaty to say
    btn.onclick = () => {
        console.log(`delete row with id: item-${id}`)
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);//finds parent and then remove it from that once it is located 
    }
    return btn;
}