const boom = require("@hapi/boom");
const { drinks } = require("./models");
class DrinksService {
    create(req, res, next){
        try{
            const newDrink = new drinks(req.body);
            newDrink.save();
            res.status(201)
                .json({
                    message: "Created",
                    data: newDrink,
                });
        }catch(err){
            next(err)
        }
    }

    async find(req, res, next){
        try{
            const list = await drinks.find();
            if(list == null){
                boom.notFound("Not Found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                });
        }catch(err){
            next(err)
        }
    }

    async findOne(req, res, next){
        try{
            const drink= await drinks.findById(req.params.id);
            if(drink == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: drink,
                });
        }catch(err){
            next(err)
        }
    }

    
    async update(req, res, next){
        try{
            const drink = await drinks.findByIdAndUpdate(req.params.id, req.body);
            if(drink == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: drink,
                });     
        }catch(err){
            next(err)
        }
    }
    
    async delete(req, res, next){
        try{
            const drink = await drinks.findOneAndDelete({_id: req.params.id});
            if(drink == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Deleted",
                    data: drink
                });
        }catch(err){
            next(err)
        }
    }
    
    async filter(req, res, next){
        try{
            const list = await drinks.find(req.query);
            if(list == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                })
        }catch(err){
            next(err)
        }
    }
}

module.exports = DrinksService;