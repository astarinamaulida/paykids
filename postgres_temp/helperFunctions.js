// GET DATA

const getChildAccountByID = function(id) {
  const queryParams = [id];
  const queryString =  `SELECT * FROM childAccount;`;

  return db
    .query(queryString, queryParams)
    .then(data => {
      const accountData = data.rows;
      res.json({ accountData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
}
exports.getChildAccountByID = getChildAccountByID;


///////////////////////////////////////////////

// INSERT DATA

const addRequestMoney = function(childID, requestNote, requestAmount) {

  const queryParams = [childID, requestNote, requestAmount];
  const queryString =  `
    INSERT INTO requestMoney (
    child_id,
    request_note,
    request_amount,
    request_date,
      );
    VALUES ($1, $2, $3, '2018-02-12T08:00:00.000Z') 
    RETURNING *;`;

  return db.query(queryString, queryParams)
    .then(data => {
      const accountData = data.rows;   
      res.json({ accountData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
}

exports.addRequestMoney = addRequestMoney;

///////////////////////////////////////////////

// UPDATE DATA
// check my insert function (TONY)
const updateChildDataByID = function(id) {
  const queryParams = [id.child_id, id.request_note, id.request_amount];
  const queryString = `
  UPDATE approveRequestMoney 
  SET equest_note = $1,
  request_amount = $2, 
  WHERE child_id =$3, 
  );`;

  return db.query(queryString, queryParams)
    .then(data => {
      const requestMoneyListData = data.rows;
      res.json({ requestMoneyListData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
}

exports.updateChildDataByID = updateChildDataByID;



///////////////////////////////////////////////

// DELETE DATA

const deleteChildByID = function(id) {
  const queryParams = [id];
  const queryString =  `DELETE FROM sendMoney
  WHERE child_id= $1 
  ;`;

return db.query(queryString, queryParams)
    .then(data => {
      const accountData = data.rows;
      res.json({ accountData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
}

exports.deleteChildByID = deleteChildByID;

