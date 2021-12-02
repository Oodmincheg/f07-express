import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const router = express.Router();

router.get('/', (request, response) => {
  //   response.send('get request');
  response.render('products');
});

router.get('/:id/:name/:age', (request, response) => {
  return response.send(request.query);
});

//CRUD - create read update delete
router.post('/', (request, response) => {
  //   response.send(request.body);
  response.render('productSuccessAdd', { ...request.body });
});

router.put('/', (request, response) => {
  response.send(`put request`);
});

router.delete('/', (request, response) => {
  response.send('delete request');
});

export default router;
