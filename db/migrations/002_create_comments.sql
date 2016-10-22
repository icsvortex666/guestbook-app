CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255),
  body TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
