
let todoList=[];

function addtodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    if(todoItem==='') document.getElementById('empty').innerText="Cannot be empty";
    else todoList.push({item:todoItem,duedate:todoDate});
    inputElement.value='';
    dateElement.value='';

    displayItems();
}

function displayItems() {
    let displayElement=document.querySelector("#todo-container");
    let newHtml='';

    for(let i=0;i<todoList.length;i++){
        newHtml+=`
        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
    <span style="margin-right: 10px;">${todoList[i].item} - Due Date: ${todoList[i].duedate}</span>
    <button onclick="todoList.splice(${i}, 1); displayItems();" style="padding: 5px; background-color: #ff5050; color: white; border: none; border-radius: 3px; cursor: pointer;">Delete</button>
</div>

        `;
    }
   displayElement.innerHTML=newHtml;

}
