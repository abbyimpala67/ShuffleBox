function shuffle() {
  var container = document.getElementById("shuffle");
  var elementsArray = Array.prototype.slice.call(
    container.getElementsByClassName("grid-item")
  );
  elementsArray.forEach(function (element) {
    container.removeChild(element);
  });
  shuffleArray(elementsArray);
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function sortedArray() {
  var container = document.getElementById("shuffle");
  var elementsArray = Array.prototype.slice.call(
    container.getElementsByClassName("grid-item")
  );
  elementsArray.forEach(function (element) {
    container.removeChild(element);
  });
  sortArray(elementsArray);
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
}

function sortArray(arraySort) {
  var elems = document.getElementsByClassName("grid-item");

  // convert nodelist to array
  // var array = [];
  for (var i = elems.length >>> 0; i--; ) {
    arraySort[i] = elems[i];
  }

  // perform sort
  arraySort.sort(function (a, b) {
    return Number(a.innerHTML) - Number(b.innerHTML);
  });

  // join the array back into HTML
  var output = "";
  for (var i = 0; i < arraySort.length; i++) {
    output += arraySort[i].outerHTML;
  }
  return arraySort;
}
