INSERT INTO comments (author, body) VALUES($1, $2) RETURNING *;
