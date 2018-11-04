/*
  method,
  data,
  url,
  contentType,
  callback
*/

function doAjax(request) {
  let xhr = new XMLHttpRequest();

  if(request.method === 'GET') {
    request.url += '?' + request.data;
    request.data = null;
  }
  xhr.open(requst.method, request.url);

  if(typeof request.data !== 'object' ) {
    xhr.setRequestHeader('Content-Type', request.contentType);
  }
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      request.callback(xhr.response);
    }
  }
  xhr.send(request.data);
}