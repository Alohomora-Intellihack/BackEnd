const pool = require("../database");

//get exercises for a day
const getExerciseForDay = async (req, res) => {
  const day = req.params.day;
  const sqlQuery = `SELECT exercise_name,exercise_img FROM ${day}`

  pool.query(sqlQuery, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json([rows]);
    } else {
      console.log(err);
      res.status(400).send(err.message);
    }
  });
};

//get total calories burnt for a week
// const getTotalCalories = async (req, res) => {
//     const sqlQuery =
//     "SELECT * FROM request r INNER JOIN site s ON r.SiteId  = s.siteid JOIN subscription s2 ON s.idSubscription  = s2.id WHERE r.idRequest=?";
//     pool.query(sqlQuery,req.params.id, (err, rows, fields) => {
//       if (!err) {
//         console.log(rows);
//         res.status(200).json(rows);
//       } else {
//         console.log(err);
//         res.status(400).send(err.message);
//       }
//     });
//   };

//get total calories burnt for a week
// const getCaloriesPerDay = async (req, res) => {
//   const sqlQuery =
//   "SELECT * FROM request r INNER JOIN site s ON r.SiteId  = s.siteid JOIN subscription s2 ON s.idSubscription  = s2.id WHERE r.idRequest=?";
//   pool.query(sqlQuery,req.params.id, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).send(err.message);
//     }
//   });
// };

module.exports = { getExerciseForDay };
