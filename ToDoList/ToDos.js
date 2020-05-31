/* Create new list item */
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("listInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  li.className = "unchecked";

  var span = document.createElement("span");
  var addX = document.createTextNode("\u00D7");
  span.className = "close";

  span.onclick = function() {
    var div = this.parentElement;
    div.remove();
  }

  span.appendChild(addX);
  li.appendChild(span)

  document.getElementById("list").appendChild(li);

  document.getElementById("listInput").value = "";
} 

// Create 'x's
var itemList = document.getElementsByTagName("li");
for (var i = 0; i < itemList.length; i++) {
  var span = document.createElement("span");
  var addX = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(addX);
  itemList[i].appendChild(span);
}

// Click on x button to delete the item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();   
  }
}

// Add a "checked" class when item is clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    ev.target.classList.toggle('unchecked');
  }
  var checkedCount = 0;
  var numChecked = document.getElementsByClassName("checked");
  for(var i = 0; i < numChecked.length; i++) {
    checkedCount += 1;
  }
  var output = document.getElementById("tasksLeft");
  output.innerText = (itemList.length - checkedCount) + " tasks left.";
}, false);

//Add event listeners for display buttons
var displayAll = document.getElementById("displayAll");
displayAll.addEventListener('click', function(ev) {
  for(var i = 0; i < itemList.length; i++) {
    itemList[i].style.display = 'block';
  }
})

var displayActive = document.getElementById("displayActive");
displayActive.addEventListener('click', function(ev) {
  var checked = document.getElementsByClassName("checked");
  for(var i = 0; i < checked.length; i++) {
    checked[i].style.display = 'none';
  }

  var unchecked = document.getElementsByClassName("unchecked");
  for(var i = 0; i < unchecked.length; i++) {
    unchecked[i].style.display = 'block';
  }
})

var displayCompleted = document.getElementById("displayCompleted");
displayCompleted.addEventListener('click', function(ev) {
  var unchecked = document.getElementsByClassName("unchecked");
  for(var i = 0; i < unchecked.length; i++) {
    unchecked[i].style.display = 'none';
  }

  var checked = document.getElementsByClassName("checked");
  for(var i = 0; i < checked.length; i++) {
    checked[i].style.display = 'block';
  }
})