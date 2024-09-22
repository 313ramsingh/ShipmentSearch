export interface ShipmentData {
    [key: string]: any;
    AssignedToUserId: string;
    DeliveryMethod: string;
    ExpectedShipmentDate: string;
    OrderNo: string;
    ScacAndService: string;
    ShipNode: string;
    ShipmentKey: string;
    ShipmentNo: string;
    Status: string;
    BillToAddress: {
      [key: string]: any;
      DayPhone: string;
      EMailID: string;
      FirstName: string;
      LastName: string;
      PersonInfoKey: string;
    };
    ShipmentLines: {
      TotalNumberOfRecords: string;
    };
  }