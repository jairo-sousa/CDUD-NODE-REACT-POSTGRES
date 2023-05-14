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
	const query =
		"INSERT INTO users VALUES ('id','name','email','phone','birthdate') VALUES(?)";

	const values = [
		"DEFAULT",
		req.body.name,
		req.body.email,
		req.body.phone,
		req.body.birthdate,
	];

	db.query(query, [values], (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User created successfully");
	});
};

export const updateUser = (req, res) => {
	const query =
		"UPDATE users SET name = ?, email = ?, phone = ?, birthdate = ?WHERE id = ?";

	const values = [
		req.body.name,
		req.body.email,
		req.body.phone,
		req.body.birthdate,
	];

	db.query(query, [...values, req.params.id], (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User updated successfully");
	});
};

export const deleteUser = (req, res) => {
	const query = "DELETE FROM users WHERE id = ?";

	db.query(query, [req.params.id], (err) => {
		if (err) return res.json(err);

		return res.status(200).json("User deleted successfully");
	});
};
