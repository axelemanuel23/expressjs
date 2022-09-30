const boom = require("@hapi/boom");
const { meals } = require("./models");
class MealsService {
    //Create One
    async create(req, res, next){
        try{
            const exist = await meals.find({name: req.body.name});
            const newMeal = new meals(req.body);
            const match = exist.filter((item) => item.name.toLowerCase() == newMeal.name.toLowerCase());
            if(match!=""){
                throw boom.conflict("Already Exist", match);
            }else{
                newMeal.save();
                res.status(201)
                    .json({
                        message: "Created",
                        data: newMeal,
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
            const list = await meals.find();
            res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                });
        }catch(err){
            err.serviceError = true,
            next(err)
        }
    }

    //Get One by Id
    async findOne(req, res, next){
        try{
            const meal = await meals.findById(req.params.id);
            if(meal == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: meal,
                });
        }catch(err){
            err.serviceError = true;
            next(err);
        }
    }


    //Update One
    async update(req, res, next){
        try{
            const meal = await meals.findByIdAndUpdate(req.params.id, req.body);
            if(meal == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: meal,
                });     
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Delete One

    async delete(req, res, next){
        try{
            const meal = await meals.findOneAndDelete({_id: req.params.id});
            if(meal == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Deleted",
                    data: meal
                });
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Filter

    async filter(req, res, next){
        try{
            const list = await meals.find(req.query);
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

module.exports = MealsService;