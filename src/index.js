const args = process.argv.slice(2)
const [requisito1, ...requisitos] = args
let url = 'https://fakestoreapi.com/'

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
        console.log('Opción POST')
        break
      }
      case 'DELETE':{
        console.log('Opción DELETE')
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
