const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('listening on port 3000');
});
app.use(express.static('public'));

app.get('/api', function(req, res){
  res.send('hello from API');
});

app.use(function(err){
  console.error('ahhhh');
});
