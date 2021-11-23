const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'OUR_KIDS_DB'
});


///template:

const sqlQuery = `SELECT ...`;

pool.query(sqlQuery, [`%${cohortInput}%`])
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));


//get user

const getUserWithId = function(id) {
    return pool.query(`
    SELECT * FROM users
    WHERE id = $1
    `, [id])
    .then(res => {
      return res.rows[0];
    })
  
   
  };
  exports.getUserWithId = getUserWithId;

  //addUSER

  const addUser =  function(user) {
    return pool.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [user.name, user.email, user.password])
    .then(res => {
      return res.rows[0];
    })
   
    // const userId = Object.keys(users).length + 1;
    // user.id = userId;
    // users[userId] = user;
    // return Promise.resolve(user);
  }
  exports.addUser = addUser;