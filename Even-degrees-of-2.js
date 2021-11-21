function evenDegreesOf2(n) {
  n = Number(n);
  let num = 1;
  for (let i = 0; i <= n; i += 2) {
    console.log(Math.pow(2, i));
  }
}

evenDegreesOf2(3);
evenDegreesOf2(4);
evenDegreesOf2(5);
evenDegreesOf2(6);
evenDegreesOf2(7);
