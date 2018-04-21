import * as express from "express";
import * as Questionnaire from "./questionnaire";
const app = express();

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.send("hello dan");
});

app.post(
  "/questionnaire/",
  (req: express.Request, res: express.Response) => {}
);

app.get(
  "/questionnaire/:id/",
  async (req: express.Request, res: express.Response) => {
    const note = await Questionnaire.getQuestionnaire(req.params.id);
    if (!note) {
      res.status(404);
      return res.send({ message: "not found" });
    }
    return res.send(note);
  }
);

app.listen(3000, () => {
  console.log("app ready");
});

export default app;
