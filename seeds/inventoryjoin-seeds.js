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
    }
]

const seedInventoryJoin = () => Inventoryjoin.bulkCreate(inventoryJoinData)

module.exports = seedInventoryJoin