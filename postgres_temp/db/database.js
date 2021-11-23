////////// GET USER //////////

const getUserByEmail = function (email, db) {
  return db.query(`SELECT * FROM users
  WHERE users.email = $1;`, [email])
    .then(res => res.rows)
    .catch(err => console.error(err));
}
exports.getUserByEmail = getUserByEmail;


////////// GET MENU //////////

const getAllMenu = function (menu) {
  return pool.query(`SELECT * FROM menu_items;
 `, [menu])
    .then(res => res.rows);
}

 const getAllMenu = function(menu) {
   return pool
    .query(`SELECT * FROM menu_items;`, [menu])
    .then((res) => res.rows)
    .catch((err) => err.message)
 };
exports.getAllMenu = getAllMenu;