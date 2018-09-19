const app = require('./index.js');

app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});
