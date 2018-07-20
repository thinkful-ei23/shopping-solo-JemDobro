'use strict';
/*global $ */
//user stories:
//store variable containing current shopping list items
const store = [
  { item: 'Papayas', checked: false },
  { item: 'Hummus', checked: true }
];

//Render the shopping list
  //Target the '.js-shopping-list' element and insert <li>s inside
  //For each item in the array 'store', generate a string representing an <li>--we will write
  //function(generateString for this and then pass it in to renderShoppingList()).
function renderShoppingList(store) {
  // console.log('renderShoppingList ran');
  let genString = generateString(store);
  console.log(genString);
  $('.js-shopping-list').html(genString);
}
//function1: a function that generates a string of html element
//function2: maps over store applies function1 

function generateItemElement(){
  return 
}
function 



function generateString(store){
  console.log('generateString ran');
  return store.map(function(obj, index) {
    return `
      <li class="js-item-index-element" data-item-index="${index}">
        <span class="shopping-item js-shopping-item ${obj.checked ? 'shopping-item__checked' : ''}">${obj.item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
  });
}





//Handling adding new items--take input and add to the list
function handleNewItems(){
  console.log('handleNewItems ran');
}
//Be able to cross items off the list
function itemStrikethrough(){
  console.log('itemStrikethrough ran');
}
//Be able to delete items from the list
function itemDeleted() {
  console.log('itemDeleted ran');
}

function handleShoppingList(){
  renderShoppingList(store);
  handleNewItems();
  itemStrikethrough();
  itemDeleted();
}

handleShoppingList();

