let runPromise = someone => {
    let run_time = parseInt(Math.random() * 2000 );  // 隨機跑速
    let run_result = parseInt(Math.random() *2 );   // 隨機成功/失敗
    console.log( someone + "起跑！");
    return new Promise((resolve, reject) => {
        if(run_result) {
            setTimeout(() => {
                resolve( someone + " 跑了 " + run_time/1000 + " 秒");
            }, run_time);
        } else {
            reject(new Error( someone + " 跌倒了 QQQ ") );
        }
    });
}





runPromise("台灣第一男")
.then( scuess_data => {
    console.log(scuess_data);
    return runPromise("日本第一男");
})
.catch( err => {
    console.log(err);
    return runPromise("日本第一男");
})
.then( scuess_data => {
    console.log(scuess_data);
    return runPromise("美洲第一男");
})
.catch( err => {
    console.log(err);
    return runPromise("美洲第一男");
})
.then(scuess_data =>{
    console.log(scuess_data);
})
.catch( err => {
    console.log(err);
})




/*
Promise.all([runPromise('台灣第一男'), runPromise('日本第一男'), runPromise('美洲第一男')])
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
});
*/