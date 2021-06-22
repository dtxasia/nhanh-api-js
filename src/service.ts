import { createHash } from "crypto";
import axios, { AxiosPromise } from "axios";
import { format, parse } from "date-fns";
import { CustomerSearchResult, GetOrdersResult } from "./types";
const md5 = (input: string) => {
  return createHash("md5").update(input).digest("hex");
};
export class NhanhApi {
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
  __callAPI(endpoint = "", data: any) {
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
    return axios({
      url: this.baseUrl + endpoint,
      method: "POST",
      data: formUrlEncoded,
    });
  }
  version() {
    return "1.0";
  }
  getOrders(
    fromDate: string,
    endDate: string,
    page = 1,
  ): AxiosPromise<GetOrdersResult> {
    const parsedFromDate = parse(fromDate, "yyyy-MM-dd", new Date());
    const parsedEndDate = parse(endDate, "yyyy-MM-dd", new Date());
    if (!parsedFromDate || !parsedEndDate) {
      throw Error("Invalid date passed");
    }

    return this.__callAPI("/api/order/index", {
      fromDate: format(parsedFromDate, "yyyy-MM-dd"),
      toDate: format(parsedEndDate, "yyyy-MM-dd"),
      page,
    });
  }
  getCustomers(
    firstBoughtDate: string,
    lastBoughtDate: string,
    page = 1,
    perPage = 10,
  ): AxiosPromise<CustomerSearchResult> {
    const parsedFromDate = parse(firstBoughtDate, "yyyy-MM-dd", new Date());
    const parsedEndDate = parse(lastBoughtDate, "yyyy-MM-dd", new Date());
    if (!parsedFromDate || !parsedEndDate) {
      throw Error("Invalid date passed");
    }
    return this.__callAPI("/api/customer/search", {
      fromLastBoughtDate: format(parsedFromDate, "yyyy-MM-dd"),
      toLastBoughtDate: format(parsedEndDate, "yyyy-MM-dd"),
      page,
      icpp: perPage,
    });
  }
  getOrderById(id: number): AxiosPromise<GetOrdersResult> {
    if (!id) {
      throw Error("Please provide order id");
    }
    return this.__callAPI("/api/order/index", {
      id,
    });
  }
}
