let n = 4;
let output = "";
let num = 0;
for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) {
    output += " ";
  }
  for (let j = 0; j <= i; j++) {
    output += num;
    num++;
  }
  //   for (let j = 0; j < i; j++) {
  //     output += num;
  //     num--;
  //   }
  output += "\n";
}
console.log(output);
