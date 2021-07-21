function* next_pi_digit(){
    [q, r, t, k, m, x] = [1, 0, 1, 1, 3, 3];
    while (true){
      if (4 * q + r - t < m * t){
        yield m;
        [q, r, t, k, m, x] = [10*q, 10*(r-m*t), t, k, Math.floor((10*(3*q+r))/t - 10*m), x];
      } else {
        [q, r, t, k, m, x] = [q*k, (2*q+r)*x, t*x, k+1, Math.floor((q*(7*k+2)+r*x)/(t*x)), x+2];
      }
  
    }
  }
  
  
  
var iterator = next_pi_digit();
//let elementPi = document.getElementById("pi");



i = 0
while (i<50){
//  postMessage(iterator.next()['value']);
  postMessage("Web Worker Counter: " + i)
  i+=1;
}


//function worker() {
//  elementPi.append(iterator.next()['value']);
//}



