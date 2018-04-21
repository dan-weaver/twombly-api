import * as testUtils from "../../db/testUtils";
import * as UserService from "../";
describe("test", () => {
  beforeEach(done => testUtils.refreshDatabase().then(done));
  it("should work", done => {
    UserService.createUser({
      first_name: "Dan",
      last_name: "Weaver",
      username: "dweaver"
    }).then(() => {
      UserService.getAllUsers().then(res => {
        expect(res.length).toBe(1);
        done();
      });
    });
  });
});
