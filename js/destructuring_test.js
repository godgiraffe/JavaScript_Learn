
/*
// 從陣列解構賦值
// 基本用法 - 宣告+賦值
const [basic_var1, basic_var2] = [1, 2]
console.log('base_var1 = ' + basic_var1)    // 1
console.log('base_var2 = ' + basic_var2)    // 2



// 先宣告，再賦值，要使用 let 才可以
let let_var1, let_var2
[let_var1, let_var2] = [1, 2]
console.log( ' let_var1 = ' + let_var1) // 1
console.log( ' let_var2 = ' + let_var2) // 2


// 略過某些值
const [pass_var1, , pass_var3] = [1, 2, 3]
console.log('pass_var1 = ' + pass_var1) //1
console.log('pass_var3 = ' + pass_var3) //3



// 其餘運算
const [ other_var1, ...other_var2] = [1, 2, 3]
console.log('other_var1 = ' + other_var1)   // 1
console.log('other_var2 = ' + other_var2)   // 2, 3


// 失敗保護
const [, , fail_var1, fail_var2] = [1, 2, 3]
console.log('fail_var1 = ' + fail_var1) // 3
console.log('fail_var2 = ' + fail_var2) // undfined


// 交換值的作法
let exchange_var1 = 1, exchange_var2 = 2;
[exchange_var1, exchange_var2] = [exchange_var2, exchange_var1]
console.log('exchange_var1 = ' + exchange_var1) // 2
console.log('exchange_var2 = ' + exchange_var2) // 1



// 多維復雜陣列
const [ multi_var1, [multi_var2, [multi_var3, multi_var4]]] = [1, [2, [[3, 4], 5], 6]]
console.log('multi_var1 = ' + multi_var1)   // 1
console.log('multi_var2 = ' + multi_var2)   // 2
console.log('multi_var3 = ' + multi_var3)   // 3, 4
console.log('multi_var4 = ' + multi_var4)   // 5


// 字串
const str = "hello"
const [str1, str2, str3, str4] = str
console.log( 'str1 = ' + str1)  // h
console.log( 'str2 = ' + str2)  // e
console.log( 'str3 = ' + str3)  // l
console.log( 'str4 = ' + str4)  // l

*/




// 從物件解構賦值
// 基本用法
let { user: base_user } = { user: 5}
console.log('basic_user = ' + base_user)        //  basic_user = 5

// 失敗保護
let { user: fail_user } = { user2: 88 } 
console.log( ' fail_user = ' + fail_user )          //  fail_user = undefined

// 屬性賦值語法
let{ prop: prop, prop2: prop2 } = { prop: 5, prop2: 10}
console.log('prop = ' + prop)                       //  prop = 5
console.log('prop2 = ' + prop2)                  //   prop2 = 10

// 屬性賦值的 簡短語法
let { attr, attr2 } = { attr: 38, attr2: 78 }
console.log('attr = ' + attr)                           // attr = 38
console.log('attr2 = ' + attr2)                       // attr2 = 78

// 陷阱
let a,b;
// {a, b } = { a:1, b:2}  // 這邊會噴錯，當前面沒有 let / const / var 時， { } 會代表程式碼區塊 ( block )，而不是物件
// 正確寫法如下，加一個 ( )
( {a, b} = { a:1, b:2} )



// ES7+ 的物件屬性  其餘運算符
let { ot_a, ot_b, ...ot_rest } = { ot_a:1, ot_b:2, ot_c:3, ot_d:4}
console.log( 'ot_a = ' + ot_a)                      //  ot_a  = 1
console.log('ot_b = ' + ot_b)                      //  ot_b  = 2
console.log('ot_rest = '+ ot_rest)               //  ot_rest = { ot_c: 3, ot_d: 4}




/*
// 物件 + 陣列賦值
let { prop: x, prop2: [, y]} = { prop: 5, prop2: [10, 100]}
console.log( 'x = ' + x)    //  5
console.log( 'y = ' + y)    // 100


// 多層次物件
const { 
    prop:  prop_x,
    prop2: {
        prop2:{
            nested: [ , , b]
        }
    }
} = { prop: "hello", prop2: { prop2: { neste: ["a", "b", "c"]}}}

console.log( 'prop_x = ' + prop_x)  // hello
console.log( ' b = ' + b)                   // c
*/



/*
// 解構賦值時的預設值
const  [missing = true ] = []
console.log( ' missing = ' + missing)   // true

const { message: msg = ' Something went wrong' } ={}
console.log(' msg = ' + msg )   // Something went wrong

cnost { x = 3 } = {}
console.log( 'x = ' + x);   // 3

*/

/*
// 解構賦值搭配函式使用
// 因為函式參數本身也可以有預設值
// 所以，使用上很容易解構賦值的預設值搞混

// 只有 a 有預設值
function func_a({a = 3, b}){
    return a+b
}

func_a( { a: 1, b: 2})      // 3
func_a( {b: 2 })             // 5
func_a({a: 1})               // 1 + undefnied = NaN
func_a({})                    // 3 + undfined = NaN
func_a()                      // Cannot read property 'a' of undefined


// a b 都有預設值
function func_ab( {a = 3,  b = 5} ) {
    return a+b
}

func_ab({a: 1, b: 2})       // 3
func_ab({a: 1})              // 6
func_ab({b: 2})             // 5
func_ab({})                  // 8
func_ab()                    // Cannot read property 'a' of undefined


// 讓函式參數也有預設值
// 會讓 func() 跟 func({}) 有一樣的結果
function func_default( {a =3, b = 5} = {}){
    return a+b
}


func_default({a: 1, b: 2})       // 3
func_default({a: 1})              // 6
func_default({b: 2})             // 5
func_default({})                  // 8
func_default()                    // 8

*/

