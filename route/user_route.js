//install package bcrypt for encryption

const router = require('express').Router();
const bcrypt = require ('bcrypt');
const userSchema = require('../model/user_schema');
const joiSchema = require('../middleware/validation');

router.post('/register',async (req,res)=>{
    console.log("post req");
    try{
        let username = req.body .username;
        let email = req.body.email;
        let phoneNumber = req.body.phoneNumber;
        let password = req.body.password;
        let address = req.body.address;
        let pincode = req.body.pincode;
//if(username && email && phoneNumber
    if(username){
        let nameData = await userSchema.findOne({username:username}).exec();
        if(nameData){
            return res.json({'status':'failed', 'message':'username already exists'})
        }
    }else{
        return res.json({'status':'success','message':'please enter your name'})
    }

    if(email){
        let  emailData = await userSchema.findOne({email:email}).exec();
       if(emailData){
            return res.json({'status':'failed', 'message':'email already exists'})
        }
    }
        else{
            return res.json({'status':'success', 'message':'please enter your mailid'})
        }
    

    if(phoneNumber){
        let  numberData = await userSchema.findOne({phoneNumber:phoneNumber}).exec();
        if(numberData){
            return res.json({'status':'failed', 'message':'phone number already exists'})
        }
    }
        else{
            return res.json({'status':'success', 'message':'please enter your phone number'})
        }
    
        

    if(password){
        let  passwordData = await userSchema.findOne({password:password}).exec();
        if(passwordData){
            return res.json({'status':'failed', 'message':'email already exists'})
        }
    }
        else{
            return res.json({'status':'success', 'message':'please enter your password'})
        }
    

    if(address){
        let  addressData = await userSchema.findOne({address:address}).exec();
        if(addressData){
            return res.json({'status':'failed', 'message':'address already exists'})
        }
    }
        else{
            return res.json({'status':'success', 'message':'please enter your address'})
        }
    

    if(pincode){
        let  pincodeData = await userSchema.findOne({pincode:pincode}).exec();
        if(pincodeData){
            return res.json({'status':'failed', 'message':'pincode already exists'})
        }
    }
        else{
            return res.json({'status':'success', 'message':'please enter your pincode'})
        }
     let joi = await joiSchema.validateAsync(req.body)
     let detail=new userSchema(req.body);
     if(password){
        const salt = await bcrypt.genSalt(10);
        detail.password = bcrypt.hashSync(password, salt)

     }
     const result = await detail.save();
     return res.json({'status':'success', 'message':'successfully registered', 'result':result})

     }  catch(error){
        return res.json({'status':'error found','message': error.message})

    }  
})

module.exports = router;
