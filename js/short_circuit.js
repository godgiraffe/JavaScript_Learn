// ||
console.log( ' true || true   ->  '   +  true|| true)   // true

console.log( ' true || false   ->  '   +  true|| false) // true

console.log( ' false || false   ->  '   +  false|| false)   // false

console.log( ' true || 3==4   ->  '   +  true|| 3==4)    // true


// 字串也被當成是 true，如果兩邊都是 true ，那會返回第一個是 true 的值
console.log( ' "apple" || true   ->  '   +  "apple"|| true) // apple

console.log( ' "apple" || "banana"   ->  '   +  "apple"|| "banana") // apple

console.log( ' true || "banana"   ->  '   +  true || "banana")  // true

console.log( " 3==3 || 'banana'   ->  "   +  3==3 || "banana")  // true



// 利用 || 的特性，我們很常使用在賦予變數預設值，這樣子不用寫 if else 的判斷式
user_data ='';
let data = user_data || {}       // 如果 user_data 這變數存在的話，data 的預設值就是 user_data，否則就賦予空物件 {}
// 上面這個寫法，等同於下面使用 if 的寫法
if ( !user_data){
    data = {}
}else{
    data = user_data
}



const customer = {
    name: 'Tom',
    city: 'Taipei',
    cart: ['iPhone', 'MacBookPro']
}

customer.cart && console.log(`你的商品數量：${customer["cart"].length}`)

// 上面這段程式碼，等同於下面 使用 if 的寫法
if( customer.cart ){
    console.log(`你的商品數量：${customer["cart"].length}`)
}



let dog ={
    bark: function () {
        console.log("Woof Woof")
    }
}
// 防止 dog 未定義時， 就 dog.bark()   會噴錯 " Cannot read property 'bark' of undefined.  "
dog&&dog.bark()


console.log( " true &&  true  = " + true && true )      // true

console.log(" true &&  false  = " + true && false )     // false

console.log(" false  && true  = " + false && true )     // false

console.log(" false && (3==4)  = " + false && ( 3==4))      // false

console.log( " 'Cat' && 'Dog'  =  " +  'Cat' && 'Dog' )     // Dog

console.log(" false && 'Cat'  =  "  +  false  && 'Cat'  )       // false

console.log( " 'Cat'  && false  = " + 'Cat'  && false  )        // false

console.log( "  ''   &&  false  =  "  +  ''  && false  )        // false

console.log( " false  &&   ''   =  "  +  false && ''  )         // false




let a = 3, b;

if ( a == 3 ) {
    b = 1;
}else if ( a == 5 ) {
    b = 2;
}else{
    b = 3;
}



let a =3, b;
b = a==3 && 1 || a == 5 && 2 ||3;



let price = 0 

console.log(  0 || 100 )        //  100
console.log(  0 ?? 100 )      //   0





let person = {
    name: 'Wooo',
    age: 23,
    driving: null
}


person.driving = person.age > 18 ? "Alloed"  : "Not allowed"
console.log(person) // { name: 'Wooo', age: 23, driving: "Allowed"}

// 其實等同於下面  if  的寫法
if ( person.age > 18 ) {
    person.driving = "Allowed"
}else{
    person.driving = "Not allowed"
}



let university = false
let workingYears = 3

let jobOffer = university ? true : workingYears > 2 ? true : false

console.log(jobOffer)   // true





