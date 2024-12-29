module.exports = {
    getShifts: (req, res) => {
      res.status(200).json({
        success: true,
        message: "Fetched shifts successfully.",
        data: [], // Example data
      });
    },
    createShift: (req, res) => {
      res.status(201).json({
        success: true,
        message: "Shift created successfully.",
      });
    },
  };
  