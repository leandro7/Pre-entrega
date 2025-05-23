Esta es una pre entrega del curso de node JS 

Requerimiento #2: Lógica de Gestión de Productos

Con la base del proyecto lista, ahora necesitamos implementar las funcionalidades principales usando la API FakeStore. El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones:
Consultar Todos los Productos:
Si ejecutas npm run start GET products, el programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.
Ejemplo: npm run start GET products
Consultar un Producto Específico:
Si ejecutas npm run start GET products/<productId>, el programa debe obtener y mostrar el producto correspondiente al productId indicado.
Ejemplo: npm run start GET products/15
Crear un Producto Nuevo:
Si ejecutas npm run start POST products <title> <price> <category>, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el id del producto creado como resultado en la consola.
Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras
Eliminar un Producto:
Si ejecutas npm run start DELETE products/<productId>, el programa debe enviar una petición DELETE para eliminar el producto correspondiente al productId y devolver la respuesta en la consola. Ejemplo: npm run start DELETE products/7
