function* next_pi_digit(){
    [q, r, t, k, m, x] = [1n, 0n, 1n, 1n, 3n, 3n];
    while (true){
      if (4n * q + r - t < m * t){
        yield m;

        [q, r, t, k, m, x] = [10n*q, 10n*(r-m*t), t, k, (10n*(3n*q+r))/t - 10n*m, x];
      } else {
        [q, r, t, k, m, x] = [q*k, (2n*q+r)*x, t*x, k+1n, (q*(7n*k+2n)+r*x)/(t*x), x+2n];
      }
  
    }
  }

var iterator = next_pi_digit();
let listOfPI = [];
let i = 0
while (true){
  lastpi = iterator.next()['value'];
  listOfPI.push(lastpi);
  postMessage([i,lastpi]);
  i+=1;
}
