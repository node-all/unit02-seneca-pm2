var seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, function(msg, res) {
  var sum = msg.left + msg.right;
  res('fuck', {answer: sum});
});

seneca.add({role: 'math', cmd: 'product'}, function(msg, res) {
  var product = msg.left * msg.right;
  res(null, {answer: product});
});

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, function(err, data) {
  // res (null, {answer: product}): if not 'null', then will get 'err' here
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
seneca.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log);
