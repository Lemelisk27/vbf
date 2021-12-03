const {Invoice} = require("../models")

const buildInvoice = () => {
    const month = 10
    const days = 30
    const year = 2021
    const invoiceNbr = 30
    const clients = 11
    const invoiceData = []

    for (let i = 0; i < invoiceNbr; i++) {
        const clientId = Math.floor(Math.random() * clients + 1)
        const day = Math.floor(Math.random() * days)
        const subtotal = parseFloat(Math.floor(Math.random() * 20))
        const temptax = parseFloat(subtotal * .065)
        const tax = parseFloat(temptax.toFixed(2))
        const total = parseFloat(subtotal + tax)
        const tempObj = {
            ClientId: clientId,
            date: new Date(year, month, day, 0, 0),
            subtotal: subtotal,
            tax: tax,
            total: total,
            paid: total,
            due: 0,
            full_paid: true
        }
        invoiceData.push(tempObj)
    }
    return invoiceData
}

const seedInvoices = () => Invoice.bulkCreate(buildInvoice())

module.exports = seedInvoices