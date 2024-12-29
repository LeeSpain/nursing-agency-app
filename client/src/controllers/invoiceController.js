module.exports = {
    getInvoices: (req, res) => {
      res.status(200).json({
        success: true,
        message: "Fetched invoices successfully.",
        data: [], // Example data
      });
    },
    createInvoice: (req, res) => {
      res.status(201).json({
        success: true,
        message: "Invoice created successfully.",
      });
    },
  };
  