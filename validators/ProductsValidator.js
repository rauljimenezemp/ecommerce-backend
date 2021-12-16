// Paquete Celebrate middleware/intermediario para validar las peticiones: https://www.npmjs.com/package/celebrate
// Paquete Joi validación del schema (propiedades): https://joi.dev
const { celebrate, Joi, Segments } = require('celebrate');

const ProductsValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    imgUrl: Joi.string()
      .uri()
      .empty('')
      .default(
        'https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png'
      ),
    category: Joi.string()
      .valid('men', 'women', 'kids', 'accesorie' )
      .required()
  })
});

module.exports = ProductsValidator;
