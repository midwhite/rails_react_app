export default {
  ajax: params => {
    // CSRF Tokenを取得
    let token = "";
    const metaTags = document.getElementsByTagName("meta");
    for(let i=0; i<metaTags.length; i++){
      if(metaTags[i].name === "csrf-token"){
        token = metaTags[i].content;
      }
    }
    // Ajaxリクエストを送信
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && params.success){
        const data = JSON.parse(xhr.responseText);
        params.success(data);
      }
    }

    xhr.open(params.type, params.url, false);
    // open後にリクエストヘッダを設定
    xhr.setRequestHeader("X-CSRF-Token", token);

    const form = document.getElementById(params.formId);
    const data = new FormData(form);

    xhr.send(data);
    xhr.abort();
  },
  post: params => {
    // CSRF Tokenを取得
    let token = "";
    const metaTags = document.getElementsByTagName("meta");
    for(let i=0; i<metaTags.length; i++){
      if(metaTags[i].name === "csrf-token"){
        token = metaTags[i].content;
      }
    }
    // Ajaxリクエストを送信
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && params.success){
        const data = JSON.parse(xhr.responseText);
        params.success(data);
      }
    }

    xhr.open(params.type, params.url, false);
    // open後にリクエストヘッダを設定
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let data = "";
    for(let prop in params.data){
      data += "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(params.data[prop]);
    }

    xhr.send(data.substr(1));
    xhr.abort();
  }
}