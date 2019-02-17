var seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, function(msg, res) {
  var sum = msg.left + msg.right;
  res(null, {answer: sum});
});

seneca.add({role: 'math', cmd: 'product'}, function(msg, res) {
  var product = msg.left * msg.right;
  res(null, {answer: product});
});

seneca.add({role: 'math', cmd: 'sum', integer: true}, function(msg, res) {
  this.act({role: 'math', cmd: 'sum', left: Math.floor(msg.left), right: Math.floor(msg.right)}, res);
});

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, console.log);
seneca.act({role: 'math', cmd: 'sum', left: 3, right: 4, integer: true}, console.log);
