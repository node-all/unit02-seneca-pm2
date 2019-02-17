var seneca = require('seneca')();

seneca.add({cmd: 'wordcount'}, function(msg, res) {
  var length = msg.phrase.split(' ').length;
  res(null, {words: length});
});

seneca.add({cmd: 'wordcount', skipShort: true}, function(msg, res) {
  var words = msg.phrase.split(' ');
  var validWords = 0;
  for (var i=0; i< words.length; i++) {
    if (words[i].length > 3) {
      validWords ++;
    }
  }
  res(null, {words: validWords});
});

seneca.act({cmd: 'wordcount', phrase:'Hello world this is Seneca'}, function(err, res) {
  console.log(res);
});

seneca.act({cmd: 'wordcount', skipShort: true, phrase:'Hello world this is Seneca'}, function(err, res) {
  console.log(res);
});
