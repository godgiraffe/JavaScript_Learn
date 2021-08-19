//  展開運算子  Spread operator

// 用為類似 cancat 用法
let arr1 = ['emma', 'is']
let arr2 = [...arr1, 18, 'years old']

console.log(arr2)   //  ['emma', 'is', 18, 'years old']


// 做為陣列的淺拷貝 ( 不會影響到被拷貝的陣列 )
arr1 = ['emme', 'is']
arr2 = [...arr1]
arr2.push(18, 'years old')  // 這邊不會影響到 arr1
console.log(arr1)       //  ['emma', 'is']
console.log(arr2)       // ['emma', 'is', 'years old']


// 傳入函式作為參數
function mySum(x, y) {
    return x + y;
}

let arr = [1, 2]
mySum(...arr)       // 3    等同於把  arr，拆解成 2 個變數放進參數


// 將可迭代的物件傳成陣列
//  JavaScript 中可迭代的物件有 String, Array, TypedArray, Map, Set 物件
let name = 'jayce'
let spreadName = [...name]

console.log(spreadName)




// 其餘運算子 Rest operator

// 其餘參數 ( Rest parameters )
// 用於將 不確定數量 的值，給函式當參數：
// 注意:  參數只能有一個 其餘參數，必須是參數中最後一位


function sumUp(...nums) {
    console.log(nums)       //  傳入的參數，會被組成陣列

    let total = 0;
    nums.forEach( number => {
        total += number
    })
    return total
}

sumUp(1)                // [1]                      1
sumUp(1,2,3,4,5)    //  [1, 2, 3, 4, 5]       15



function many(x, y, ...z){
    console.log( "x = " + x )
    console.log( "y = " + y )
    console.log( "z = " + z )
}

many( 'jayce' , 'is')
// x = jayce
// y = is
// z = []           沒有傳入值的話，會是空陣列




// 解構賦值
let [n1, ...n2] = [1, 2, 3]
console.log(n1)      // 1
console.log(n2)      // [2, 3]


// 解構物件
let { a, b, ...rest} = { a:1, c:2, b:3, d:4}
console.log(a)      // 1    對應 a
console.log(b)      // 3    對應 b
console.log(rest)   // [c:2, d:4]