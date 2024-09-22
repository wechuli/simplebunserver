import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


const PORT = 3000;


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`);
});