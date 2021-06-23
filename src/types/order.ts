export namespace Order {
  export interface Data {
    totalPages: number;
    totalRecords: number;
    page: number;
    orders: { [key: string]: Order };
  }
  export interface Product {}
  export interface Order {
    id: number;
    privateId?: number;
    merchantTrackingNumber?: string;
    depotId: number;
    handoverId?: number;
    channel: string;
    depotName: string;
    type: string;
    typeId: number;
    shippingType: string;
    shippingTypeId: number;
    moneyDiscount: number;
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
    customerEmail: string;
    customerMobile: string;
    customerAddress: string;
    shipToCityLocationId: number;
    customerCityId: number;
    customerCity: string;
    shipToDistrictLocationId: number;
    customerDistrictId: number;
    customerDistrict: number;
    shipToWardLocationId: number;
    customerWard: string;
    createdById: number;
    createdByUserName: string;
    createdByName: string;
    saleId: number;
    saleName: string;
    createdDateTime: Date;
    deliveryDate: Date;
    sendCarrierDate: Date;
    statusName: string;
    statusCode: StatusCode;
    calcTotalMoney: number;
    trafficSourceId: number;
    trafficSourceName: string;
    products: Product[];
  }

  export enum StatusCode {
    Confirming,
    CustomerConfirming,
    Confirmed,
    Packing,
    Packed,
    ChangeDepot,
    Pickup,
    Shipping,
    Success,
    Failed,
    Canceled,
    Aborted,
    CarrierCanceled,
    SoldOut,
    Returning,
    Returned,
  }
  export enum OrderReason {
    WrongProduct,
    HighShipFee,
    NotTransfer,
    Duplicated,
    CannotCall,
    SoldOut,
    WaitingTransfer,
    NotLikeProduct,
    NotPleasureDeliverer,
    SlowShipping,
    Bought,
    CustomerNotAtHome,
    WrongAddress,
    NotBuy,
    CannotCallSender,
    SellerNotSellOnline,
    SellerNotHandoverCarrier,
    SellerNotProcessOrder,
    WrongPickupAddress,
    WrongPrice,
    SelfShipping,
    CarrierPickupLate,
    CarrierLostProduct,
    Other,
  }
  export enum OrderType {
    Shipping,
    Shopping,
    PreOrder,
  }
  export interface IndexInput {
    page?: number;
    fromDate?: string;
    toDate?: string;
    /** order id */
    id?: number;
    customerMobile?: number;
    statuses?: StatusCode;
    fromDeliveryDate?: string;
    toDeliveryDate?: string;
    carrierId?: number;
    carrierCode?: string;
    type?: OrderType;
    shippingType?: string; //should be enum
    customerCityId?: number; //shipping location api
    customerDistrictId?: number; //shipping location api
    handoverId?: number;
  }
  export interface IndexResult {
    code: number;
    data: Data;
    messages: string[];
  }
}
