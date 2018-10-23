# api
这是api 模拟接口工具

## 安装部署

> 1. npm install -g json-server

> 2. npm install

> 3. npm run api

> 4. 浏览器打开 http://localhost:4000

> 5. 用法说明

> get 用法 
  jQuery.get 或 fecth({method: "get"}) 访问 http://localhost:3003/news 
  
> post 用法

>_   以jquery的 $.ajax 方法举例,以下代码会实时的向 db.json 中的 news 对象push一条新的数据再次用 get 方式访问
                                    http://localhost:3003/news
                                    $.ajax({
                                    type: 'post',
                                    url: 'http://localhost:3003/news',
                                    data: {
                                    "id": 3,
                                    "title": "我是新加入的新闻",
                                    "date": "2016-08-12",
                                    "likes": 0,
                                    "views": 0
                                    }
                                    }
                                    )
> put 用法

>_ 同样以jquery的 $.ajax 方法举例,以下代码会实时的对 db.json 中的 news 对象中 id=1 数据进行修改
      $.ajax({
                                    type: 'put',
                                    url: 'http://localhost:3003/news/1',
                                    data: {
                                    "title": "曹县宣布昨日晚间登日失败",
                                    "date": "2016-08-12",
                                    "likes": 55,
                                    "views": 100086
                                    }
                                    }
                                    )
> PATCH 和 DELETE 使用方式同上，就不做演示了。
  
