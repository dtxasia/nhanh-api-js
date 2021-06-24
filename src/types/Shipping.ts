export namespace Shipping {
  export type LocationInput =
    | {
        type: "CITY";
      }
    | {
        type: "DISTRICT" | "WARD";
        parentId: number;
      };
  interface LocationData {
    id: number;
    name: string;
  }
  export interface CityLocationData extends LocationData {}
  export interface DistrictLocationData extends LocationData {
    cityId: number;
    cityLocationId: number;
  }
  export interface WardLocationData extends LocationData {
    districtId: number;
    districtLocationId: number;
  }
  export interface LocationResult {
    code: number;
    messages: string[];
    data?: unknown;
  }
}
