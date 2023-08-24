const express=require('express');
const router=express.Router();
const userCtrl=require('../controllers/userCntrl');

router.get('/',userCtrl.userList);

module.exports=router;