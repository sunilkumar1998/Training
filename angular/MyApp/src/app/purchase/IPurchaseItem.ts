import { IProduct } from "../product/Iproduct";

export interface IPurchaseitem{
    PurchaseId: number;
    PurchaseName:string;
    Purchasedate:string;
    VendorName:string;
    Items:IProduct[];
}