exports.calcQueens = n => {
  let queens = 0;
  let j = 0;
  let solutions = 0;
  let col = Array(n).fill(0);
  let aL = Array(n).fill(0);
  let aR = Array(n).fill(0);
  const individualRes = [1, 2, 3, 4];
  const allRes = [];

  function recur() {
    for (let i = 0; i < n; i++) {
      var paL = aL.slice(); // hiostory
      var paR = aR.slice(); // hoistory, needs nerw reference
      if (col[i] === 0 && aL[i] === 0 && aR[i] === 0) {
        col[i] = 1;
        individualRes[j] = i;
        // the prevous ones
        // take the next linearaL.push(0)
        aL.push(0);
        aL.shift();
        aR.unshift(0);
        aR.pop();
        // adding the new diag avoid
        if (aL[i - 1] === 0) aL[i - 1] = 1;
        if (aR[i + 1] === 0) aR[i + 1] = 1;
        queens++;
        /// are there any spaces
        let test = [];
        aL.forEach((el, i) => (test[i] = aL[i] | aR[i] | col[i]));
        if (queens === n) {
          allRes.push(individualRes.concat());
          solutions++;
        }
        j++;
        if (!(test.join("") === "1".repeat(n))) recur();
        j--;
        col[i] = 0;
        aL = paL;
        aR = paR;
        queens--;
      }
    }
  }
  recur();
  // console.log('Solution: ', solutions)
  return allRes;
};

// console.log(calc(4));

// module.exports = calc;
