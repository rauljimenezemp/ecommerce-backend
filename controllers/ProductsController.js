const createProduct = (req, res) => {
  return res.send({ message: 'Hola desde CREATE products!'});
}

const findAllProduct = (req, res) => {
  return res.send( {message: 'Hola desde READ ALL products!'});
}

const findOneProduct = (req, res) => {
  return res.send( {message: 'Hola desde READ ONE products!'});
}

const updateProduct = (req, res) => {
  return res.send({message: 'Hola desde UPDATE products!'});
}

const deleteProduct = (req, res) => {
  return res.send({message: 'Hola desde DELETE products!'});
}

const destroyProduct = (req, res) => {
  return res.send({message: 'Hola desde DESTROY products!'});
}

module.exports = {createProduct, findAllProduct, findOneProduct, updateProduct, deleteProduct, destroyProduct}
