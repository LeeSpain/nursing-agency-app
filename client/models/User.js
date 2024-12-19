const pool = require("../db");

const User = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    },

    create: async (name, email, role, password) => {
        const result = await pool.query(
            "INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, role, password]
        );
        return result.rows[0];
    },

    getById: async (id) => {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows[0];
    },
};

module.exports = User;
