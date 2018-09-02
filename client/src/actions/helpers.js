const requestOptions = {
  method: "GET",
  headers: new Headers(),
}

const requestOptionsSetter = (method, body) => {
  requestOptions.method = method;
  requestOptions.body = body;
  return requestOptions;
}

export const fetchData = (endpoint, method, body) => {  
  return fetch(endpoint, requestOptionsSetter(method, body))
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data;
    });
}