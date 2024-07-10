import User from "../Model/userschema.js";

export const Register = async (req,resp)=>{
    try{
        let user = new User({
            name: req.body.name,
            email: req.body.username,
            password: req.body.password
          });
          let result = await user.save();
          result = result.toObject() //it is function which change data into object
          delete result.password;

        return resp.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return resp.status(500).json({ msg: 'Error while signing up user' });
    }
}