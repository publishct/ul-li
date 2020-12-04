const html = document.querySelector('html');

const panel = document.createElement('div');
html.appendChild(panel);

const list = document.createElement('ul');
// list.textContent = 'Select an appointment time';
panel.appendChild(list);

const itemOne = document.createElement('li');
// itemOne.textContent = 'First';
itemOne.setAttribute('id', 'item-one');
list.appendChild(itemOne);

const itemTwo = document.createElement('li');
// itemTwo.textContent = 'Second';
itemTwo.setAttribute('id', 'item-two');
list.appendChild(itemTwo);

const itemThree = document.createElement('li');
// itemThree.textContent = 'Third';
itemThree.setAttribute('id', 'item-three');
list.appendChild(itemThree);

document.querySelector('ul').addEventListener('click', function(e) {
if ( e.target && e.target.nodeName == 'LI') {
    // List item found, output the ID
    console.log('List item ', e.target.id.replace('item-', ''), ' was clicked!');
}
});

module.exports = UnorderedList; 



