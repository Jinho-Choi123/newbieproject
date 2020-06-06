var express = require('express');
var router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.status(200);
    res.render('main')
});

router.post('/isValid', function(req, res, next){ // return valid or unvalid that the req data is in the
  const userName = req.body.name;
  const userId = req.body.studentId;
  fs.readFile('./data/Register.json', (err, data)=>{
    if(err){
      console.error(err);
    }
   const usersdata =  JSON.parse(data);
  console.log(`userName is ${userName}, userId is ${userId}`);
  console.log(usersdata);
  usersdata.forEach((userdata)=>{
    if(userdata.name === userName && userdata.studentId === userId){
      res.status(200);
      res.send('Valid');
    }
  })
  res.status(200);
  res.send('Unvalid');
})
})

router.post('/', function(req, res, next){
    console.log("Data received from the client")
    const username = req.body.name;
    const studentId = req.body.studentId;
    //req로 name과 studentId가 왔을 때, database의 자료와 비교하여 없는 자료면 다시하라고 하며, 있으면 username을 설정하여 메인페이지로 redirect
    const usersdata = fs.readFileSync('./data/Register.json', (err, data)=>{
      if(err){
        console.error(err);
      }
      return JSON.parse(data);
    })  
      let res_status = 404;
      usersdata.forEach((userdata) => {
        console.log(`${userdata.name ===username}, ${userdata.studentId===studentId}`);
        if (userdata.name === username && userdata.studentId === studentId){
          //register success
          res_status=200;
          res.status(res_status);
          // res.send(`Hello ${username}, welcome to KAISPORTS`)
          //  res.redirect(`/?name=${username}&studentId=${studentId}`);
        }
        else{
          console.error("cannot find any userdata, please check the name and studentId");
          alert("We can't find your register data. Please rewrite.")
          res.status(res_status)
          // res.send(`Who are You??`)
        }
      })
      if(res_status !==200){
        res.redirect('/register');
      }
      else{
        res.send(`Hello ${username}, welcome to KAISPORTS`)
      }

})

module.exports = router;
