const args = process.argv.slice(2)
const [requisito1, ...requisitos] = args
const url = 'https://fakestoreapi.com/'

const resolveMethod = async () => {
  try {
    switch (requisito1) {
      case 'GET':{
        const [param] = requisitos
        if ((param.includes('products'))) { // valida que el parametro sea correcto
          const res = await fetch(url.concat("", param))
          const data = await res.json()
          console.log(data)
        } else {
          console.error("Parametro mal ingresado")
        }
        break
      }
      case 'POST':{
        if (requisitos.length == 4) { // verifica que la cantidad de parametros sea la pedida
          const [param, title, price, category] = requisitos
          if (param.includes('products')) { // verifia que el parametro sea el correcto
            const req = {
              title: title,
              price: price,
              category: category
            }
            const config = {
              method: "POST",
              body: JSON.stringify(req),
              headers: {
                "content-Type": "application/json"
              }
            }
            const res = await fetch(url.concat("", param), config)
            const data = await res.json()
            console.log(data.id)
          } else {
            console.error("parametro mal ingresado")
          }
        } else {
          console.error("Cantidad de parámetros mal ingresados")
        }
        break }
      case 'DELETE':{
        const [param] = requisitos
        if (param.includes('products/')) {
          const config = {
            method: 'DELETE'
          }
          const res = await fetch(url.concat("", param), config)
          if (res.status === 204) {
            console.log("Producto elminado")
          } else {
            const data = await res.json()
            console.log(data)
          }
        }
        break }
      default:{
        console.error("Método mal ingresado")
      }
    }
  } catch (error) {
    console.error('No se pudo procesar la solicitud', error.message)
  }
}

resolveMethod()
