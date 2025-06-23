function callToApi() {
  return fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json") 
    .then((response) => response.json())
    .then(data => {return data.items})
 
}


export default callToApi;