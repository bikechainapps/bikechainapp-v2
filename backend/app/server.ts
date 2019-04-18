import express, { Request, Response } from "express";
import path from "path";
// controllers
import { ApiController } from "./controllers";

const REACT_BUILD_PATH: string = path.join(
  process.cwd(),
  "waitlist-front/build"
);

const app: express.Application = express();
// port defaults to 3000, port can be provided as a runtime argument
const port: number = <number>(process.env.PORT || 3000);

// mounted routes
app.use("/api", ApiController);
app.use(express.static(REACT_BUILD_PATH));

// any REACT PATH request should come here
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(REACT_BUILD_PATH, "index.html"));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
