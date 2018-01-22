import { getData } from "./utils";

describe("utils", () => {
  it("should return correct data structure", () => {
    expect(getData([]).length).toBe(0);
  });
});
