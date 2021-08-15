function *foo() {
    console.log('before yield');
    let x = [1,2,3];
    let y = yield ' Send me a value';
    /**
     * yield =
     *  no.1 next(v) = 把 yield 後面的值，包成物件  吐回去
     *  no.2 next(v) = 把 v 取代 yield，然後執行 yield 前面的那行 code
     */

   console.log( 'after yield');
    console.log( ' y is ' + y );

    let qq = yield  x;
    console.log(' QQ is ' + qq);
}

/**
 *  next() & yield 做了什麼？
 * 1. 如果有找到上一個 yield，這次的 next() 如果有帶參數，就把參數帶進 上一個 yield，並且執行上一個 yield 前面的code
 *     ( 不會執行上一次 yield 後面的 code, 因為上一次已經包成物件吐回去了)，之後會繼續往下執行
 * 2. yield 可以想像成設置中斷點，就像我們一般使用 設置中斷點的方式 debug，可以想像成 在這函式中的 yield 就是中斷點
 * 3. 把 yield 後面的東東，包成 { value:東東, done:true/false } 吐回去
 */
const it = foo();
console.log(' no 1 trigger next()');
console.log( it.next(3) );   // { value: ' Send me a value', done" false}
console.log('-----');

console.log(' no 2 trigger next()');
console.log( it.next() );  // y is 5
console.log('-----');


console.log(' no 3 trigger next()');
console.log( it.next(8 )); 
console.log('-----');


console.log(' no 4 trigger next()');
console.log( it.next(10 )); 



console.log("=======================");

function getA() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}



function getB() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    })
}



function getC() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    })
}

function* add() {
    var x = yield getA();
    var y = yield getB();
    var z = yield getC();

    console.log( x + y + z );
}


var gen = add();
//  會把後面的 getA (Promise物件) 吐回來，放進 r1
gen.next().value.then( r1 => {
    // 把 getA 的結果，放到 x 裡，並把 getB (Promise物件)吐回來，放進 r2
    gen.next(r1).value.then( r2 => {
        // 把 getB 的結果，放到 y 裡，並把 getC (Promise物件)吐回來，放進 r3
        gen.next(r2).value.then(r3 => {
            // 把 getC 的結果，放到 z 裡，並且 console.log 出 x + y + z
            gen.next(r3);
        })
    })
})