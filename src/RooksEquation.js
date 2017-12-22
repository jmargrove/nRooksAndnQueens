calc = n => {
  let rooks = 0;
  let j = 0;
  let solutions = 0;
  let col = Array(n).fill(0);

  function recur() {
    for (let i = 0; i < n; i++) {
      if (col[i] === 0) {
        col[i] = 1;

        rooks++;
        if (rooks === n) {
          console.log("i", i, "j", j);
          solutions++;
        }
        j++;
        setTimeout(() => {
          // console.log("timeout finsihed");
        }, 500);
        recur();
        col[i] = 0;
        j--;
        rooks--;
      }
    }
  }
  recur();
  return solutions;
};

console.log(calc(4));
