//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  const comments = fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf8');
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comments = fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf8');
  const commentsArray = JSON.parse(comments);
  commentsArray.push(req.body);
  fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(commentsArray));
  res.send('Comment added');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});