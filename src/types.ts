export interface Product {
  id: string;
  code: string;
  name: string;
  quantity: string;
  price: string;
  imei: string;
}

export interface BillList {
  id: string;
  depotId: string;
  depotName: string;
  createdDateTime: string;
  discount?: number;
  points?: number;
  type: string;
  mode: string;
  createdByName: string;
  createdByUserName: string;
  products: Product[];
}

export interface CustomerData {
  id: string;
  type: string;
  name: string;
  mobile: string;
  gender: string;
  email: string;
  address: string;
  birthday: string;
  code?: string;
  level: string;
  group: string;
  levelId: string;
  groupId: string;
  cityLocationId: string;
  districtLocationId: string;
  wardLocationId: string;
  totalMoney: string;
  startedDate: string;
  startedDepotId: string;
  points?: number;
  totalBills: string;
  lastBoughtDate: string;
  billList: BillList[];
}

export interface CustomerSearchResult {
  code: number;
  messages: string[];
  data: {
    page: number;
    totalPages: number;
    customers: { [customerId: string]: CustomerData };
  };
}
