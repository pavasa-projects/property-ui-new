import {
  faElevator, faFolderTree,
  faHouse,
  faLifeRing,
  faPersonWalking, faPizzaSlice, faPlayCircle, faRestroom,
  faSwimmingPool, faTree, faTreeCity,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";

export const PS_CONSTANTS = {
  propertyTypeList: ['Residential', 'Commercial'],
  dropdownList: [
    {item_id: 1, item_text: '1 BHK'},
    {item_id: 2, item_text: '2 BHK'},
    {item_id: 3, item_text: '3 BHK'},
    {item_id: 4, item_text: '4 BHK'},
    {item_id: 5, item_text: '4+ BHK'}
  ],
  unitTypes: [
    '1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'
  ],
  carpetAreas: [...Array(100)].map((_, i) => (i + 1) * 100),
  dropdownSettings: {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: false,
    showSelectedItemsAtTop: true
  },
  residentialPropertyTypeList: ['Apartment', 'Studio Apartment', 'Independent House', 'Penthouse', 'Villa'],
  commercialPropertyTypeList: [
    {item_id: 'Office space', item_text: 'Office space'},
    {item_id: 'Co-working', item_text: 'Co-working'},
    {item_id: 'Restaurant/Cafe', item_text: 'Restaurant/Cafe'},
    {item_id: 'Shop/Showroom', item_text: 'Shop/Showroom'},
    {item_id: 'Industrial building', item_text: 'Industrial building'},
    {item_id: 'Industrial Shed', item_text: 'Industrial Shed'},
    {item_id: 'Godown/Warehouse', item_text: 'Godown/Warehouse'}
  ],

  bedrooms: ['1', '2', '3', '4', '5', '6+'],
  balconies: ['0', '1', '2', '3', '4', '5+'],
  bathrooms: ['1', '2', '3', '4', '5+'],
  floorNumbers: [...Array(150)].map((_, i) => i),
  furnishingStatuses: ['Furnished', 'Semi-Furnished', 'UnFurnished'],
  budgets: [...Array(150)].map((_, i) => (i + 1) * 5000),

  amenities: [
    {icon: faTree, icon_text: "Park"},
    {icon: faRestroom, icon_text: "Rest room"},
    {icon: faHouse, icon_text: "Club"},
    {icon: faElevator, icon_text: "Lift"},
    {icon: faUserShield, icon_text: "Security"},
    {icon: faPersonWalking, icon_text: "Jogging Track"},
    {icon: faSwimmingPool, icon_text: "Swimming Pool"}
  ],

  furnishings: [
    'Air conditioner',
    'Gas pipeline',
    'Power Backup',
    'Fridge',
    'Washing Machine',
    'Sofa',
    'Beds',
    'TV',
    'Microwave',
    'Dinning Table',
  ],

  tenantTypes: ['Family', 'Bachelors', 'Both']
};
