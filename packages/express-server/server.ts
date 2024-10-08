import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
const port = 3001;

app.get('/', (req, res) => {
  res.json({ foo: 'bar' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
