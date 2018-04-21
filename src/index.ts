import * as express from "express";
import * as notes from "./notes";
const app = express();

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.send("hello dan");
});

app.post("/note/", (req: express.Request, res: express.Response) => {});

app.get("/note/:id/", async (req: express.Request, res: express.Response) => {
  const note = await notes.getNote(req.params.id);
  if (!note) {
    res.status(404);
    return res.send({ message: "not found" });
  }
  return res.send(note);
});

app.listen(3000, () => {
  console.log("app ready");
});

export default app;
