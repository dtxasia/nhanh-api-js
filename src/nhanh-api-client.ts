import got, { CancelableRequest, Response } from "got";
import { createHash } from "crypto";
import { Bill } from "./types/bill";
import { Customer } from "./types/customer";
import { Order } from "./types/order";
const md5 = (input: string) => {
  return createHash("md5").update(input).digest("hex");
};
export class NhanhAPIClient {
  apiUsername = "";
  apiKey = "";
  storeId? = "";
  baseUrl = "https://graph.nhanh.vn";
  constructor(
    apiUsername: string,
    apiKey: string,
    storeId?: string,
    baseUrl?: string,
  ) {
    if (!apiUsername || !apiKey) {
      throw Error("Can't create client: invalid or missing credentials.");
    }
    this.apiKey = apiKey;
    this.apiUsername = apiUsername;
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
    this.storeId = storeId;
  }
  __callAPI<APIReq = any, APIRes = any>(
    endpoint = "",
    data: APIReq,
  ): CancelableRequest<Response<APIRes>> {
    const dataStringified = JSON.stringify(data);
    const checksum1 = md5(this.apiKey + dataStringified);
    const checksum2 = md5(checksum1 + dataStringified);
    const formUrlEncoded = new URLSearchParams({
      version: "1.0",
      apiUsername: this.apiUsername,
      data: dataStringified,
      checksum: checksum2,
      storeId: "",
    });
    return got(this.baseUrl + endpoint, {
      method: "POST",
      responseType: "json",
      form: formUrlEncoded,
    });
  }
  version() {
    return "1.0";
  }
  getOrders(input: Order.IndexInput) {
    return this.__callAPI<Order.IndexInput, Order.IndexResult>(
      "/api/order/index",
      input,
    );
  }
  getOrderById({ id }: Order.IndexInput) {
    if (!id) {
      throw Error("Please provide order id");
    }
    return this.__callAPI<Order.IndexInput, Order.IndexResult>(
      "/api/order/index",
      {
        id,
      },
    );
  }
  getCustomers(input: Customer.SearchInput) {
    return this.__callAPI<Customer.SearchInput, Customer.SearchResult>(
      "/api/customer/search",
      input,
    );
  }
  searchBill(input: Bill.SearchInput) {
    return this.__callAPI<Bill.SearchInput, Bill.SearchResult>(
      "/api/bill/search",
      input,
    );
  }
}
