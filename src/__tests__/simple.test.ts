import { NhanhAPIClient } from "../nhanh-api-client";
import * as dotenv from "dotenv";
dotenv.config();
let client: NhanhAPIClient;
beforeAll(() => {
  client = new NhanhAPIClient(
    process.env.NHANH_API_USERNAME ?? "",
    process.env.NHANH_API_SECRET ?? "",
  );
});
test("API created with version 1.0", () => {
  expect(client.version()).toBe("1.0");
});
test("API can call order", async () => {
  const resp = await client.getOrders({
    fromDate: "2021-01-10",
    toDate: "2021-01-15",
  });
  expect(resp.body.code).toBe(1);
});
test("API can call get order by id", async () => {
  const resp = await client.getOrderById({ id: 106053278 });
  expect(resp.body.code).toBe(1);
});
test("API can call customer search", async () => {
  const resp = await client.getCustomers({
    fromLastBoughtDate: "2021-01-10",
    toLastBoughtDate: "2021-01-15",
  });
  expect(resp.body.code).toBe(1);
  const customers = resp.body.data.customers;
  const customersKeys = Object.keys(customers);
  customersKeys.forEach((cID) => {
    const customer = customers[cID];
    expect(customer.billList).toEqual(expect.any(Array));
  });
});

test("API can call bill search", async () => {
  const resp = await client.searchBill({});
  expect(resp.body.code).toBe(1);
});
