let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;

// function getInventoryItem(trackingNumber: string): object {
//     return null;
// }

// function getInventoryItem(trackingNumber: string): void {
//     
// }

function getInventoryItem(trackingNumber: string): {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
} {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
let blablabla: any = 34;
blablabla = 'werwer';

let sniff = inventoryItem;
saveInventoryItem(inventoryItem);