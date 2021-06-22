import { NhanhApi } from "../service";
test("API created with version 1.0", () => {
  const client = new NhanhApi("__API_USERNAME__", "__API_KEY__");
  expect(client.version()).toBe("1.0");
});
