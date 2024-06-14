const AJAX = () => {
  const xhr = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/todos';
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = () => {
    if(xhr.status === 200){
      const data = JSON.parse(xhr.response)[1];
      dataList(data);
    }
  }
}

const dataList = (data) => {
  for(const dataChild in data){
    console.log(dataChild);
  }
}

AJAX();