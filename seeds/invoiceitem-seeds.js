const {Invoiceitems} = require("../models")

const buildItems = () => {
    const invoices = 30
    const items = 90
    const itemData = []
    const nameArray = ["Dog Food", "Cat Food", "Bird Food", "Lizard Food"]
    for (let i = 0; i < items; i++) {
        const nameIndex = Math.floor(Math.random() * 4)
        const cost = parseInt(Math.floor(Math.random() * 5 + 1))
        const qty = parseInt(Math.floor(Math.random() * 3 + 1))
        const price = parseInt(cost * qty)
        const tempObj = {
            InvoiceId: parseInt(Math.floor(Math.random() * invoices + 1)),
            item_name: nameArray[nameIndex],
            item_cost: cost,
            item_qty: qty,
            item_price: price,
            item_id: nameIndex + 1
        }
        itemData.push(tempObj)
    }
    return itemData
}

const seedInvoiceItems = () => Invoiceitems.bulkCreate(buildItems())

module.exports = seedInvoiceItems