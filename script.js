// --variable--
var form = document.getElementById('frm');
var input = document.getElementById('to-do-content');
var items = document.getElementById('items');
var display_div = document.getElementById('display-div');
var clear = document.getElementById('clear');

var todoCount = 0;
var newTodo = '';

//page load
window.onload = updateTable;

// --Events--
form.addEventListener('submit', addTodo);
clear.addEventListener('click',clearDiv)

// --funtions--
function updateTable(){
    if(todoCount>0){
        display_div.style.display = '';
        items.appendChild(newTodo);

    }
    else{
        display_div.style.display = 'none';
    }
}

function clearDiv(){
    //div and table
    // display_div.style.display = 'none';
    while (items.nodeValue(2)) {
        items.nodeValue(2).remove()
    }
    
}

function addTodo(e){
    //stop behaviour
    e.preventDefault();
    //new table row
    var row = document.createElement('tr');
    row.className = 'item';

    var td1 = document.createElement('td');
    td1.className = 'ch-box';
    var ch_box = document.createElement('input');
    ch_box.type = 'checkbox';
    td1.appendChild(ch_box);
    

    var td2 = document.createElement('td');
    td2.className = 'title';
    td2.appendChild(document.createTextNode(input.value));
    

    var td3 = document.createElement('td');
    td3.className = 'status';
    td3.appendChild(document.createTextNode('pending'));

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    todoCount ++;
    newTodo = row;

    //update table
    updateTable()
    

}