const UserInfoModel = require("./models/userInfo.js");
const userRouter = express.Router();

userRouter.get('/:id',async (req,res)=>{
    try{
    const user = await UserInfoModel.findOne({id:req.params.id})
    if(!user) throw "error"
    res.status(400).json(user)
    }
    catch(err){
        console.log(err)
    }
})
