const express = require('express');
const helmet = require('helmet');
const path = require('node:path');

const app = express();
const port = Number.parseInt(process.env.PORT || '3000', 10);
const products = [
  { id: 1, name: 'Everyday Backpack', price: 49.99, category: 'Bags' },
  { id: 2, name: 'Ceramic Travel Mug', price: 18.5, category: 'Kitchen' },
  { id: 3, name: 'Desk Lamp', price: 32, category: 'Home' },
  { id: 4, name: 'Wireless Headphones', price: 79.95, category: 'Electronics' },
  { id: 5, name: 'Cotton T-Shirt', price: 24, category: 'Clothing' },
  { id: 6, name: 'Notebook Set', price: 12.75, category: 'Stationery' }
];

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', (_request, response) => {
  response.json(products);
});

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`ecom-demo listening on port ${port}`);
});
