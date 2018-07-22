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
  let genString = compileShoppingListStrings(store);
  $('.js-shopping-list').html(genString);
}
//function1: a function that generates a string of html element
//function2: maps over store applies function1 

function generateItemElement(obj, index){
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
}
function compileShoppingListStrings(arr) {
  //iterate over the Store array and run generateItemElement on each object
  //return the resulting elements
  const elements = arr.map(function(obj, index) {
    return generateItemElement(obj, index);
  });
  return elements.join('');
}
function addItemToStore(newItem) {
  const newShoppingItemObj = {
    item: newItem,
    checked: false
  };
  store.push(newShoppingItemObj);
}

// Handling adding new items--take input and add to the list
function handleNewItems(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToStore(newItemName);
    renderShoppingList(store);
  });
}
function toggleCheckedForListItem(itemIndex) {
  return (store[itemIndex].checked  === true ? store[itemIndex].checked  = false : store[itemIndex].checked  = true);
}
function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

//Be able to cross items off the list
function itemStrikethrough(){
  $('.js-shopping-list').on('click', '.js-item-toggle', function(event) {  
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedForListItem(itemIndex);
    renderShoppingList(store);
  });
}
//Be able to delete items from the list 
//listen for click event
//get index of item
//delete whole li element that index represents
function itemDeleted() {
  $('.js-shopping-list').on('click', '.js-item-delete', function(event) {
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    console.log('delete button clicked', itemIndex);
    store.splice(itemIndex, 1);
    renderShoppingList(store);
  });
  
}

function handleShoppingList(){
  renderShoppingList(store);
  handleNewItems();
  itemStrikethrough();
  itemDeleted();
}

console.log('test2');

handleShoppingList();

