const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);

  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  comments: {
    all: sql('./sql/comment/all.sql'),
    find: sql('./sql/comment/find.sql'),
    create: sql('./sql/comment/create.sql'),
    update: sql('./sql/comment/update.sql'),
    delete: sql('./sql/comment/delete.sql'),
  },
};

module.exports = sqlProvider;
