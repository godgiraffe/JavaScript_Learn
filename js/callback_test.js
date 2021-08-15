// 為了確保先執行 funcA 再執行 funcB
// 我們在 funcA 加上了 callback 參數

let funcA = function(callback) {
    let i = Math.random() +1;

    setTimeout(function(){
        console.log('function A');
        callback();
    }, i * 1000);
};

let funcB = function() {
    let i = Math.random() +1;

    setTimeout(function(){
        console.log('function B');
    }, i * 1000);
};


funcA( funcB );