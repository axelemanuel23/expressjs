const boom = require("@hapi/boom");
const { menu } = require("./models");
class MenuService {
    //Create One
    async create(req, res, next){
        try{
            const data = await menu.find({name: req.body.name});
            const newMenu = new menu(req.body);
            const match = data.filter((item) => item.name.toLowerCase() == newMenu.name.toLowerCase());
            if(match!=""){
                throw boom.conflict("Already Exist", match);
            }else{
                newMenu.save();
                res.status(201)
                    .json({
                        message: "Created",
                        data: newMenu,
                    });
            }
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    //Get All
    async find(req, res, next){
        try{
            const list = await menu.find();
            res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                });
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }

    //Get One by Id
    async findOne(req, res, next){
        try{
            const data = await menu.findById(req.params.id);
            if(data == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: data,
                });
        }catch(err){
            err.serviceError = true;
            next(err);
        }
    }


    //Update One
    async update(req, res, next){
        try{
            const data = await menu.findByIdAndUpdate(req.params.id, req.body);
            if(data == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: data,
                });     
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Delete One

    async delete(req, res, next){
        try{
            const data = await menu.findOneAndDelete({_id: req.params.id});
            if(data == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Deleted",
                    data: data
                });
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Filter

    async filter(req, res, next){
        try{
            const list = await menu.find(req.query);
            if(list == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                })
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
}

module.exports = MenuService;