const pool = require("../db");

const Shift = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM shifts");
        return result.rows;
    },

    create: async (nurse_id, client_id, date, start_time, end_time, status) => {
        const result = await pool.query(
            "INSERT INTO shifts (nurse_id, client_id, date, start_time, end_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [nurse_id, client_id, date, start_time, end_time, status || "Pending"]
        );
        return result.rows[0];
    },

    getByNurseId: async (nurse_id) => {
        const result = await pool.query("SELECT * FROM shifts WHERE nurse_id = $1", [nurse_id]);
        return result.rows;
    },

    updateStatus: async (id, status) => {
        const result = await pool.query(
            "UPDATE shifts SET status = $1 WHERE id = $2 RETURNING *",
            [status, id]
        );
        return result.rows[0];
    },
};

module.exports = Shift;
