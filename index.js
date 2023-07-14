// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

// Rest of your code that uses the cats array


function appendCat(name){
    let newCat = [...cats, name]
    return newCat;
}
function prependCat(name){
    let newCat = [name, ...cats]
    return newCat ;
}
function removeLastCat(){
    let newCat = [...cats]
    newCat.pop()
    return newCat
}
function removeFirstCat(){
    let newCat = cats.slice(1)
    return newCat;
}

function destructivelyAppendCat(name) {
    cats.push(name);
  }

function destructivelyPrependCat(name) {
    cats.unshift(name);
  }  

function destructivelyRemoveFirstCat() {
    cats.shift();
  }
function destructivelyRemoveLastCat() {
    cats.pop();
  }  