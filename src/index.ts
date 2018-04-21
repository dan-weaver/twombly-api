import * as express from "express";
import * as bodyParser from "body-parser"
import * as Questionnaire from "./questionnaire";

const app = express()

app.use(bodyParser())

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

// Slack event subscriptions: e.g. direct messages
app.post(
  "/slack/listening/",
  (req: express.Request, res: express.Response) => {
    if (req.body.challenge) {
      return res.send(req.body.challenge)
    }

    return res.send("I heard you")
  }
)

// Slash command integration
app.post(
  "/slack/dailystandup/",
  (req: express.Request, res: express.Response) => {
    console.log("Request Body:", req.body)
    const responseData = {
      response_type: "in_channel",
      channel: req.body.channel_id,
      text: "Thanks for the update!",
      attachments: [
        {
          text: req.body.text
        }
      ]
    }
    return res.json(responseData)
  }
)

app.listen(3000, () => {
  console.log("app ready");
});

export default app;
