import { NhanhApi } from "../service";
import * as dotenv from "dotenv";
dotenv.config();
let client: NhanhApi;
beforeAll(() => {
  client = new NhanhApi(
    process.env.NHANH_API_USERNAME ?? "",
    process.env.NHANH_API_SECRET ?? "",
  );
});
test("API created with version 1.0", () => {
  expect(client.version()).toBe("1.0");
});
test("API can call order", async () => {
  const data = await client.getOrders("2021-01-10", "2021-01-15");
  expect(data.data.code).toBe(1);
});
test("API can call customer search", async () => {
  const resp = await client.getCustomers("2021-01-10", "2021-01-15");
  expect(resp.data.code).toBe(1);
  const customers = resp.data.data.customers;
  const customersKeys = Object.keys(customers);
  customersKeys.forEach((cID) => {
    const customer = customers[cID];
    expect(customer.billList).toEqual(expect.any(Array));
  });
});
