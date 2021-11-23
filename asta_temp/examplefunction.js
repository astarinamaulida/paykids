const updateCar = function (id) {
  const queryParams = [id];
  const queryString = `
  UPDATE cars
  SET delete_date = CURRENT_DATE
  WHERE id = $1
  ;`;
  return db
    .query(queryString, queryParams)
}
const updated = updateCar(req.body.id);
updated.then(() => res.redirect("/new"));


db.query(`SELECT * FROM users;`)
.then(data => {
  const users = data.rows;
  res.json({ users });
})
.catch(err => {
  res
    .status(500)
    .json({ error: err.message });
});

const updateCar = function (id) {
  const queryParams = [id];
  const queryString = `
  UPDATE cars
  SET delete_date = CURRENT_DATE
  WHERE id = $1
  ;`;
  return db.query(queryString, queryParams)
    .then(data => {
      const cars = data.rows;
      res.json({ cars });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });


}
const updated = updateCar(req.body.id);
updated.then(() => res.redirect("/new"));



const getAllCar = function (id) {
  const queryParams = [id];
  const queryString =  `SELECT * FROM cars;`;


  return db.query(queryString, queryParams)
    .then(data => {
      const cars = data.rows;
      res.json({ cars });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

}
const updated = updateCar(req.body.id);
updated.then(() => res.redirect("/new"));



