import express from 'express';
import morgan from 'morgan';
import path from 'path';
import chalk from 'chalk';
import compression from 'compression';
import {NODE_SERVER_PORT} from '../configs/config.js';
const app = express();
app.set('port', process.env.PORT || NODE_SERVER_PORT);
// app.use(compression);
// setting dev logger
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
//app.get('*',(req,res) =>{
//  res.sendFile(path.join('./public', 'index.html'));
//});
app.get('*',(req,res) => {
  res.send(
    `<html>
      <body>
        <div id='app'></div>
        <script src='assets/bundle.js'></script>
      </body>
    </html>`
  )
})
app.listen(app.get('port'),() =>{
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log(__dirname);
  console.log(`Current directory: ${process.cwd()}`)
})
