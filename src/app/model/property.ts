export interface Property {
  id: string;
  // property details
  possessionDateMonth: string;
  possessionDateYear: number;
  projectName: string;
  subTypeOfProperty: string;
  totalFloors: number;
  totalNoOfTowers: number;
  totalNoOfUnits: number;
  totalProjectArea: number;
  towerNumber: number;

  // location
  propertyLocation: string;
  lat: number;
  lng: number;
  societyName: string;

  //unit configuration
  unitConfigurations: UnitConfiguration[];


  // property details
  noOfBedrooms: number;
  noOfBalconies: number;
  noOfBathrooms: number;
  floorNo: string;
  noOfCoveredParking: number;
  noOfOpenParking: number;

  // rent details
  monthlyRent: number;
  securityAmount: number;
  maintenanceCharges: number;

  // more property details
  carpetArea: number;
  preferredTenantType: string;
  furnishingStatus: string;
  furnishingDetails: string[];
  amenities: string[];
  // TODO : available from

  // TODO : property photos
}

export interface UnitConfiguration{
  carpetArea1: number;
  carpetArea2: number;
  floorPlan: string;
  price1: number;
  price2: number;
  unitType: string;
}
