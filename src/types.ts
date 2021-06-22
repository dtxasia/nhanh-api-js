export interface ProductInBillList {
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
  products: ProductInBillList[];
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

export interface ProductInOrderList {
  productId: string;
  productName: string;
  productCode: string;
  productBarCode: string;
  productImage: string;
  price: string;
  quantity: string;
  weight: string;
  discount: string;
  description: string;
  imei: string;
}

export interface OrderData {
  id: string;
  privateId?: number;
  merchantTrackingNumber?: string;
  depotId: string;
  handoverId?: number;
  channel: string;
  depotName: string;
  type: string;
  typeId: string;
  shippingType: string;
  shippingTypeId: string;
  moneyDiscount: string;
  moneyDeposit: number;
  moneyTransfer: number;
  depositAccount: string;
  transferAccount: string;
  usedPoints: number;
  moneyUsedPoints: number;
  carrierId: number;
  carrierName: string;
  serviceId?: number;
  serviceName: string;
  carrierCode?: string;
  shipFee?: number;
  codFee?: number;
  customerShipFee: number;
  returnFee?: number;
  overWeightShipFee?: number;
  declaredFee?: number;
  description: string;
  privateDescription: string;
  customerId: string;
  customerName: string;
  customerEmail?: string;
  customerMobile: string;
  customerAddress: string;
  shipToCityLocationId: string;
  customerCityId: string;
  customerCity: string;
  shipToDistrictLocationId: string;
  customerDistrictId: string;
  customerDistrict: string;
  shipToWardLocationId: string;
  customerWard: string;
  createdById: string;
  createdByUserName: string;
  createdByName: string;
  saleId: string;
  saleName: string;
  createdDateTime: string;
  deliveryDate: string;
  sendCarrierDate?: string;
  statusName: string;
  statusCode: string;
  calcTotalMoney: number;
  trafficSourceId: string;
  trafficSourceName: string;
  products: ProductInOrderList[];
}

export interface GetOrdersResult {
  code: number;
  data: {
    totalPages: number;
    totalRecords: number;
    page: number;
    orders: { [orderId: string]: OrderData };
  };
  messages: string[];
}
