const {Inventory} = require("../models")

const inventoryData = [
    {
        id: 1,
        category_name: "Vaccines",
        ClinicId: 1
    },
    {
        id: 2,
        category_name: "Test Kits",
        ClinicId: 1
    },
    {
        id: 3,
        category_name: "Suture",
        ClinicId: 1
    },
    {
        id: 4,
        category_name: "Controlled Drugs",
        ClinicId: 1
    },
    {
        id: 5,
        category_name: "Anesthetics",
        ClinicId: 1
    },
    {
        id: 6,
        category_name: "Emergency Drugs",
        ClinicId: 1
    },
    {
        id: 7,
        category_name: "Pain Medication",
        ClinicId: 1
    },
    {
        id: 8,
        category_name: "Misc. Medication",
        ClinicId: 1
    },
    {
        id: 9,
        category_name: "Antibiotics",
        ClinicId: 1
    },
    {
        id: 10,
        category_name: "Gloves",
        ClinicId: 1
    },
    {
        id: 11,
        category_name: "Syringes/Needles/IV's",
        ClinicId: 1
    },
    {
        id: 12,
        category_name: "Pack Supplies",
        ClinicId: 1
    },
    {
        id: 13,
        category_name: "Prep Supplies",
        ClinicId: 1
    },
    {
        id: 14,
        category_name: "Surgeon Supplies",
        ClinicId: 1
    },
    {
        id: 15,
        category_name: "OTC Supplies",
        ClinicId: 1
    },
    {
        id: 16,
        category_name: "Laboratory",
        ClinicId: 1
    },
    {
        id: 17,
        category_name: "Oxygen",
        ClinicId: 1
    },
    {
        id: 18,
        category_name: "Equipment",
        ClinicId: 1
    }
]

const seedInventory = () => Inventory.bulkCreate(inventoryData)

module.exports = seedInventory