import app from './App';
import CONFIG from './config/config';
import './config/db';

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
  console.log("server is running on port :" + PORT);
}).on('error', function (err) {
  if (err) {
    return console.log(err);
  }
});
