import Variables from "../variables";

function generateColor() {
  return Object.keys(Variables).reduce((color, variable) => {
    let temp = color;
    temp[variable] = { color: Variables[variable] };
    temp[`${variable}Bg`] = { backgroundColor: Variables[variable] };
    return temp;
  }, {});
}

console.log(generateColor());

export default {
  ...generateColor(),
};
