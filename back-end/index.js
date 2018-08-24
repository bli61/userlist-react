//project back-end 入口
//bodyParser 是一个middlewhale，用来把http request 返回的东西转为json
//import routes 是用来把http 的请求发过来的分流，例如user，post，comment分到不同route
//const app = express(); 表示我要使用express，app就是一个变量表示express
//app.use(bodyParser.json()) -- (.use)就是指middlewhale，所以请求都要先经过bodyParser.json()这个middleswhale才能往下传
//app.listen(3005 ....  表示后端监听哪个端口

import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";

const app = express();

app.use(bodyParser.json());
app.use("./api", routes);

app.listen(3005, () => {
  console.log("On port 3005!");
});
