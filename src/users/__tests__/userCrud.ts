import * as testUtils from "../../db/testUtils";
import * as UserService from "../";
import { User } from "../models";
describe("User crud", () => {
  beforeAll(done => testUtils.setupTestDb().then(_ => done()));
  beforeEach(done =>
    testUtils.seedDatabase().then(() => {
      done();
    }));

  it("should retrieve a list of users", done => {
    UserService.getAllUsers().then(res => {
      expect(res).toHaveLength(1);
      done();
    });
  });
  it("should get a user by id", async () => {
    const user = await UserService.getUser(1);
    expect(user.first_name).toBe("Dan");
  });
  it("should create a user", done => {
    UserService.createUser({
      first_name: "Dan",
      last_name: "Weaver",
      username: "dweaver"
    }).then(() => {
      UserService.getAllUsers().then(res => {
        expect(res.length).toBe(2);
        done();
      });
    });
  });
});
