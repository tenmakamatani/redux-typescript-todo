"use strict";

import * as Express from "express";

const app = Express();

app.get("/", (req: Express.Request, res: Express.Response) => {
    res.send("tenma");
});

app.listen(8000, () => {
    console.log("server listening at port 8000");
});