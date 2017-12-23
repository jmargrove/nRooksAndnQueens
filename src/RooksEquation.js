exports.calc = n => {
  let rooks = 0;
  let j = 0;
  let solutions = 0;
  let col = Array(n).fill(0);
  const individualRes = [1, 2, 3, 4];
  const allRes = [];

  function recur() {
    for (let i = 0; i < n; i++) {
      if (col[i] === 0) {
        col[i] = 1;
        individualRes[j] = i;
        rooks++;
        if (rooks === n) {
          allRes.push(individualRes.concat());
          solutions++;
        }
        j++;
        recur();
        col[i] = 0;
        j--;
        rooks--;
      }
    }
  }
  recur();
  return allRes;
};

// calc(3);
