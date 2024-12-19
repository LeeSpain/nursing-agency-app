const pool = require("../db");

const Invoice = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM invoices");
        return result.rows;
    },

    create: async (shift_id, amount, status) => {
        const result = await pool.query(
            "INSERT INTO invoices (shift_id, amount, status) VALUES ($1, $2, $3) RETURNING *",
            [shift_id, amount, status || "Unpaid"]
        );
        return result.rows[0];
    },

    getByShiftId: async (shift_id) => {
        const result = await pool.query("SELECT * FROM invoices WHERE shift_id = $1", [shift_id]);
        return result.rows[0];
    },
};

module.exports = Invoice;
