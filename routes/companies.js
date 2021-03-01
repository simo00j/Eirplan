const express = require("express");
const router = express.Router();
let companies = require("../dummyDatabase");
router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: companies
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});
router.get("/list/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let company = companies.find(company => company._id === id);
    res.status(200).json({
      data: company
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});


router.get("/list/search/:_name", async (req, res) => {
  let { _name } = req.params;
  try {
    let company = companies.filter(company => company.keywords.includes(_name)); //remplacer includes par une fonction de recherche qui n'est pas sensible à la casse et qui supporte les écarts de nom
    res.status(200).json({
      data: company //version future : penser à mettre en surbrillance les stands trouvés
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}

function concats(array){
  var i, out = [];
  for (i in array) {
    out = out.concat(companies[i].keywords);
  }
  return out;
}
router.get("/keywords", async (req, res) => {
  try {
  let kwords = cleanArray(concats(companies));
    res.status(200).json({
      data: kwords
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});




module.exports = router;
