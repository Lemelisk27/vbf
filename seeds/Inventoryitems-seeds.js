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
    }
]

const seedInventoryItems = () => Inventoryitems.bulkCreate(inventoryItemsData)

module.exports = seedInventoryItems