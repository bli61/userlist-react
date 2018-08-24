//controller 就是我具体发来请求处理的地方，

import express from "express";
import user from "../controllers/user";

const route = express();

route.use("/user", user());

export default route;
