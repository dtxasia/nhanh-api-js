export namespace Customer {
  export interface Data {
    totalPages: number;
    page: number;
    customers: { [key: string]: Customer };
  }

  export interface Customer {
    id: number;
    type: number;
    name: string;
    mobile: string;
    gender?: number;
    email: string;
    address: string;
    birthday: Date;
    code: string;
    level: string;
    group: string;
    levelId: number;
    groupId: number;
    cityLocationId: number;
    districtLocationId: number;
    wardLocationId: number;
    totalMoney: number;
    startedDate: Date;
    startedDepotId: string;
    points: number;
    totalBills: number;
    lastBoughtDate: Date;
    billList: BillList[];
  }

  export interface BillList {
    id: number;
    depotId: number;
    depotName: string;
    createdDateTime: Date;
    discount?: number;
    points: number;
    type: number;
    mode: number;
    saleName?: string;
    saleUserName?: string;
    createdByName: string;
    createdByUserName: string;
    products: Product[];
  }

  export interface Product {
    id: number;
    code: string;
    name: string;
    quantity: number;
    price: number;
    imei: number;
  }

  export interface SearchInput {
    page?: number;
    icpp?: number;
    id?: number;
    mobile?: string;
    fromLastBoughtDate?: string;
    toLastBoughtDate?: string;
  }
  export interface SearchResult {
    code: number;
    data: Data;
    messages: string[];
  }
}
