const AJAX = () => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/todos';
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      if(xhr.status === 200){
        res(console.log(JSON.parse(xhr.response)[1]));
      }
    }
    rej(new Error('데이터 불러오기 실패'));
  })
}

AJAX()
.then(res => res)
.catch(err => err);