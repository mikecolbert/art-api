const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const perPage = config.listPerPage;
  const sql = `SELECT * FROM art LIMIT ${offset}, ${perPage}`;

  const rows = await db.query(sql, [offset, perPage]);

  // const rows = await db.query(`SELECT * FROM art LIMIT 0,10;`);

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getMultiple,
};
