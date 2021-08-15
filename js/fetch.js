let url = "https://www.gss.com/hr/get_user_info";

let post_data = {
    user_id: '5187',
    group: 'normal_user',
    user_name: 'roy_chen',
    auth_token:'48gfe4hhn898kj8y5856uh5&M$KJGDFSR$'
};

  
let req_int = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(post_data), // must match 'Content-Type' header
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
  };
  
  
  fetch( url, req_int)
  .then( data => {
      // 對取得回來的 user data 進行一些處理
  })
  .catch( error => {
      // 對取得回來的錯誤訊息，進行處理
  })