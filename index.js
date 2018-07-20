'use strict';
//user stories:
//Render the shopping list
function renderShoppingList() {
  console.log('renderShoppingList ran');
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
  renderShoppingList();
  handleNewItems();
  itemStrikethrough();
  itemDeleted();
}

handleShoppingList();

