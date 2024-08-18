let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

interface InventoryItem {
    displayName: string;
    inventoryType: string;
    // A property defined with the "readonly" keyword cannot have its value changed.
    readonly trackingNumber: string;
    createDate: Date;
    // ? = optional property.
    originalCost?: number;

    // Define methods and their types.
    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

// This is allowed because the structure of this object passed matches that of InventoryItem.
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
    originalCost: 1499
});

// These are the two ways to define interface method and are both equivalent.
interface MyInterface {
    getStuff: (note: string) => string;
    // or
    getOtherStuff(note: string): string;
}