import express from 'express';
import path from 'path';
import productsRouter from './routes/products.js';
import { engine } from 'express-handlebars';
import Handlebars from 'handlebars';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.engine('handlebars', engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', 'views');
Handlebars.registerPartial('header', '');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('console on every request');
  next();
});

app.use('/products', productsRouter);

app.get('/', (request, response, nest) => {
  response.render('index', { user: 'Vlad' });
});
app.listen(port, () => console.log(`Server is running on ${port}`));
