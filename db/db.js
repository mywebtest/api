let Mock = require("mockjs");
let Random = Mock.Random;

module.exports = function() {
  var data = {
    slide: [],
    news: [],
    login: [],
    reg: []
  };
  // 幻灯片
  for (var i = 0; i < 4; i++) {
    data.slide.push({
      id: i,
      thumb: Random.image("200x100", Random.color(), Random.word(2, 6))
    });
  }

  // 新闻列表
  var images = [1, 2, 3].map(x =>
    Random.image("200x100", Random.color(), Random.word(2, 6))
  );

  for (var i = 0; i < 100; i++) {
    var content = Random.cparagraph(0, 10);

    data.news.push({
      id: i,
      title: Random.cword(8, 20),
      desc: content.substr(0, 40),
      addTime: Random.datetime(),
      tag: Random.cword(2, 6),
      views: Random.integer(100, 5000),
      thumb: Random.image("200x100", Random.color(), Random.word(2, 6))
      // images: images.slice(0, Random.integer(1, 3))
    });
  }

  // 会员登陆
  data.login.push({
    id: 0,
    username: Random.cword(8, 20),
    password: "123"
  });

  // 会员注册
  data.reg.push({
    id: 0,
    username: Random.cword(8, 20),
    password: "123",
    rpassword: "123",
    code: 1236
  });

  return data;
};
