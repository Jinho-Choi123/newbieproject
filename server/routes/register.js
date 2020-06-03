var express = require('express');
var router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.render('main');
});

router.post('/', function(req, res, next){
  console.log("entered post router")
    const username = req.body.name;
    const studentId = req.body.studentId;
    console.log("request name, studentId is ", username, studentId)
    //req로 name과 studentId가 왔을 때, database의 자료와 비교하여 없는 자료면 다시하라고 하며, 있으면 username을 설정하여 메인페이지로 redirect
     fs.readFile('./data/Register.json', async (err, data)=>{
      if(err){
        console.error(err);
        return;
      }
      let usersdata = JSON.parse(data);
      console.log("parsed data is ", usersdata);
      usersdata.forEach(async (userdata) => {
        //console.log(`${userdata.name ===username}, ${userdata.studentId===studentId}`);
         if (userdata.name === username && userdata.studentId === studentId){
           //register success
           console.log(`Register Success!! Hello ${username}(${studentId}), welcome to KAISPORTS!`);
           res.redirect(`/?name=${username}&studentId=${studentId}`);
         }
         else{
           console.error("cannot find any userdata, please check the name and studentId");
         }
      })
      res.redirect('/register');
    });
})

module.exports = router;
