// 宣告一個非同步函式 買咖啡
async function BuyCoffee() {
    await getCoffee();  // 等待 取得咖啡
    await payCash();    // 取得咖啡後，去付錢
}


BuyCoffee()
.then( success_msg => {
    console.log( "成功資訊：" + success_msg);
})
.catch( error_msg => {
    console.log("失敗資訊：" + error_msg);
});