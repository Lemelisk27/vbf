const {Inventoryitems} = require("../models")

const inventoryItemsData = [
    {
        id: 1,
        item_name: "Bordetella",
        cost: 6.40,
        qty: 25,
        UnitId: 1
    },
    {
        id: 2,
        item_name: "DALPP-CVK",
        cost: 2.27,
        qty: 50,
        UnitId: 1
    },
    {
        id: 3,
        item_name: "FeLV",
        cost: 4.54,
        qty: 50,
        UnitId: 1
    },
    {
        id: 4,
        item_name: "FVRCP",
        cost: 1.99,
        qty: 100,
        UnitId: 1
    },
    {
        id: 5,
        item_name: "Rabies",
        cost: 4.20,
        qty: 100,
        UnitId: 2
    },
    {
        id: 6,
        item_name: "FeLv/FIV Test",
        cost: 21.00,
        qty: 10,
        UnitId: 3
    },
    {
        id: 7,
        item_name: "Heartworm Test Kit",
        cost: 21.00,
        qty: 10,
        UnitId: 3
    },
    {
        id: 8,
        item_name: "Euthosol",
        cost: 0.6,
        qty: 50,
        UnitId: 2
    },
    {
        id: 9,
        item_name: "Ketamine",
        cost: 1.8,
        qty: 5,
        UnitId: 2
    },
    {
        id: 10,
        item_name: "Morphine",
        cost: 9,
        qty: 20,
        UnitId: 1
    },
    {
        id: 11,
        item_name: "Telazol",
        cost: 4.85,
        qty: 100,
        UnitId: 2
    },
    {
        id: 12,
        item_name: "Torbugesic",
        cost: 18.16,
        qty: 10,
        UnitId: 2
    },
    {
        id: 13,
        item_name: "Acepromazine",
        cost: 0.41,
        qty: 50,
        UnitId: 2
    },
    {
        id: 14,
        item_name: "Dexamethasone",
        cost: 0.13,
        qty: 50,
        UnitId: 2
    },
    {
        id: 15,
        item_name: "Isoflurane",
        cost: 11.45,
        qty: 10,
        UnitId: 1
    },
    {
        id: 16,
        item_name: "Atropine",
        cost: 0.21,
        qty: 50,
        UnitId: 2
    },
    {
        id: 17,
        item_name: "Epinephrine",
        cost: 2.77,
        qty: 1,
        UnitId: 3
    },
    {
        id: 18,
        item_name: "Solu Delta Cortef",
        cost: 9.25,
        qty: 5,
        UnitId: 3
    }
]

const seedInventoryItems = () => Inventoryitems.bulkCreate(inventoryItemsData)

module.exports = seedInventoryItems