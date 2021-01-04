{
  const colors = ["silver", "red", "blue"];
  function addPresent() {
    // Create DOM element and set it to a variable
      const newElement = document.createElement();
    // Add class "present"
      element.classList.add("present");
    // Add a class for color,
    element.classList.add("color");
    // randomly adding either class
    // "silver", "red", or "blue".
    // Use the colors array.
    const randomAccess = ['colors']
    console.log(colors[3]);
    // Add event listener so when
    // the DOM element is clicked,
    // it is removed from the document
    newElement.addEventListener('click', function(e){
    element.parentElement.removeChild();
    // $ ('newElement').remove (); 
    // const removeElem = document.getElementById ("newElement"); 
    // element.parentElement.removeChild(elem); 
    }
    // Append your DOM element to the ".presents" div
    .presents.append(newElement);
  }
  // Add event listener so when .christmas-tree
  // is clicked, addPresent() is called
.christmas-tree.addEventListener('clicked', function(e){
  console.log(addPresent);
};
};