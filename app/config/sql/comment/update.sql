UPDATE comments SET author=$1, body=$2 WHERE id=$3 RETURNING *;
