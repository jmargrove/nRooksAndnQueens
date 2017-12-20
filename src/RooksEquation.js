exports.calc = n => {
  let rooks = 0;
  let solutions = 0;
  let col = Array(n).fill(0);

  function recur() {
    for (let i = 0; i < n; i++) {
      if (col[i] === 0) {
        col[i] = 1;
        rooks++;
        if (rooks === n) solutions++;
        recur();
        col[i] = 0;
        rooks--;
      }
    }
  }
  recur();
  return solutions;
};
