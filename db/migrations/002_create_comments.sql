CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255),
  body TEXT,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);
