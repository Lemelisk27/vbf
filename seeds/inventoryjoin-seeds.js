const {Inventoryjoin} = require("../models")

const inventoryJoinData = [
    {
        id: 1,
        InventoryId: 1,
        InventoryitemsId: 1
    },
    {
        id: 2,
        InventoryId: 1,
        InventoryitemsId: 2
    },
    {
        id: 3,
        InventoryId: 1,
        InventoryitemsId: 3
    },
    {
        id: 4,
        InventoryId: 1,
        InventoryitemsId: 4
    },
    {
        id: 5,
        InventoryId: 1,
        InventoryitemsId: 5
    },
    {
        id: 6,
        InventoryId: 2,
        InventoryitemsId: 6
    },
    {
        id: 7,
        InventoryId: 2,
        InventoryitemsId: 7
    },
    {
        id: 8,
        InventoryId: 4,
        InventoryitemsId: 8
    },
    {
        id: 9,
        InventoryId: 4,
        InventoryitemsId: 9
    },
    {
        id: 10,
        InventoryId: 4,
        InventoryitemsId: 10
    },
    {
        id: 11,
        InventoryId: 4,
        InventoryitemsId: 11
    },
    {
        id: 12,
        InventoryId: 4,
        InventoryitemsId: 12
    },
    {
        id: 13,
        InventoryId: 5,
        InventoryitemsId: 13
    },
    {
        id: 14,
        InventoryId: 5,
        InventoryitemsId: 14
    },
    {
        id: 15,
        InventoryId: 5,
        InventoryitemsId: 15
    },
    {
        id: 16,
        InventoryId: 6,
        InventoryitemsId: 16
    },
    {
        id: 17,
        InventoryId: 6,
        InventoryitemsId: 17
    }
]

const seedInventoryJoin = () => Inventoryjoin.bulkCreate(inventoryJoinData)

module.exports = seedInventoryJoin