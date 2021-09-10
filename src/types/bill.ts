export namespace Bill {
  export interface Data {
    totalPages: number;
    page: number;
    bill: { [key: string]: Bill };
  }

  export interface Bill {
    id: number;
    relatedBillId: number;
    relatedDepotId: number;
    relatedUserName: string;
    orderId: number;
    requirementBillId: number;
    inventoryCheckId: number;
    warrantyBillId: number;
    depotId: number;
    date: Date;
    createdDateTime: Date;
    customerId: number;
    customerName: string;
    customerMobile: string;
    saleId: number;
    saleName: string;
    type: number;
    mode: number;
    saleUserName: string;
    createdById: number;
    createdByName: string;
    createdByUserName: string;
    technicalId: number;
    technicalName: string;
    discount: number;
    points: number;
    usedPoints: number;
    money: number;
    saleBonus: number;
    moneyTransfer: number;
    cash: number;
    installmentMoney: number;
    creditMoney: number;
    usedPointsMoney: number;
    returnFee: number;
    payment: number;
    description: string;
    supplierId: string;
    supplierName: string;
    couponCode: string;
    couponValue: string;
    customerMoney: number;
    moneyReturn: number;
    cashAccount: string;
    transferAccount: string;
    creditAccount: string;
    creditCode: string;
    installmentAccount: string;
    installmentCode: string;
    products: { [key: string]: Product };
  }

  export interface Product {
    id: number;
    code: string;
    name: string;
    quantity: number;
    price: number;
    discount: number;
    vat: number;
    extendedWarrantyMoney: number;
    money: number;
    imei: string[];
  }

  export interface SearchInput {
    page?: number;
    icpp?: number;
    id?: number;
    type?: number;
    mode?: number;
    modes?: number[];
    customerId?: number;
    customerMobile?: string;
    fromDate?: string;
    toDate?: string;
  }
  export interface SearchResult {
    code: number;
    data: Data;
    messages: string[];
  }
}
