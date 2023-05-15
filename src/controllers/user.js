import { db } from "../db.js";

db.connect();

export const getUsers = (_, res) => {
	const query = "SELECT * FROM users";

	db.query(query, (err, data) => {
		if (err) return res.json(err);

		return res.status(200).json(data.rows);
	});
};

export const addUser = (req, res) => {
	const query = `INSERT INTO users VALUES 
		(DEFAULT,'${req.body.name}',
		'${req.body.email}',
		'${req.body.phone}',
		'${req.body.birthdate}')`;

	db.query(query, (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User created successfully");
	});
};

export const updateUser = (req, res) => {
	const query = `UPDATE users 
		SET name = '${req.body.name}',
		email = '${req.body.email}',
		phone = '${req.body.phone}',
		birthdate = '${req.body.birthdate}'
		WHERE id = ${req.params.id}`;

	db.query(query, (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User updated successfully");
	});
};

export const deleteUser = (req, res) => {
	const query = `DELETE FROM users WHERE id = ${req.params.id}`;

	db.query(query, (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User deleted successfully");
	});
};
