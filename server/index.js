import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PostgreSQL } from './db.js';
import routes from './routes.js';
import http from 'http';

const app = express();

const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(PostgreSQL);
app.use('/api/', routes);

app.get('*splat', (req, res) => {
  res.status(404).json({ 404: 'Page Not Found' });
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(8080, function () {
  console.log(`Server is running on port 8080`);
});

export { server };
