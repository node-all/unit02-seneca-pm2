function init(msg, res) {
  console.log("plugin initallized!");
  console.log("expensive operation taking place now... Done!");
  res();
}

function math (options) {
  this.add({role: 'math', cmd: 'sum'}, function(msg, res) {
    res(null, {answer: msg.left + msg.right});
  });

  this.add({role: 'math', cmd: 'product'}, function(msg, res) {
    res(null, {answer: msg.left * msg.right});
  });
}

require('seneca')()
  .use(math)
  .act('role:math, cmd:sum, left:1, right:2', console.log);
