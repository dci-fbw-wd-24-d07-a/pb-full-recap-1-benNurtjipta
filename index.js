const ingredients = [
  "Reis",
  "Paprika",
  "Schmand",
  "Putenstreifen",
  "Salz und Pfeffer",
  "Sambal Oelek",
];

const shuffle = (arr) => {
  let newArr = [];
  while (arr.length > 0) {
    let removeIndex = Math.floor(Math.random() * arr.length);
    newArr.push(arr[removeIndex]);
    arr.splice(removeIndex, 1);
  }
  return newArr;
};

console.log(shuffle(ingredients));
