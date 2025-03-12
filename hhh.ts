const a = [2, 5, 7, 3, 9, 4, 0];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a);

console.log("what is this  is ko rkhna ffffffffff ya hello branch ka haa ok");
console.log("hello branch ");
