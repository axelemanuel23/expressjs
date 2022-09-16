const mongoose = require('mongoose');
const { drinks } = require("./models");

mongoose.Promise = global.Promise;
const uri = "mongodb+srv://public:public@clusteraxel.u9b2e.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "cook"});
console.log("Database Connected!");


class DrinksService {
    create(data, res){
        const newDrink = new drinks(data);
        try{
            newDrink.save();
            res.status(201)
            .json({
                message: "Succeed",
                data: newDrink,
            });
        }catch{
            res.status(401)
            .json({
                message: "Error"
            });
        }
    }

    async find(res){
        try{
            const list = await drinks.find();
            res.status(200)
            .json({
                message: "Succeed",
                data: list,
            });
        }catch{
            res.status(401)
            .json({
                message: "Error"
            });
        }
    }

    async findOne(id, res){
        try{
            const drink = await drinks.findById(id);
            if(drink != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: drink,
                });
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: drink,
                });
            }
        }catch{
            res.status(401)
            .json({
                message: "Error"
            });
        }
    }

    
    async update(id, changes, res){
        try{
            const drink = await drinks.findByIdAndUpdate(id, changes);
            if(drink != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: drink,
                })
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: drink,
                });
            }            
        }catch{
            res.status(401)
            .json({
                message: "Error"
            })
        }
    }
    
    async delete(id, res){
        try{
            const drink = await drinks.findOneAndDelete({_id: id});
            if(drink != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: drink
                });
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: drink,
                });
            }
        }catch{
            res.status(401)
            .json({
                message: "Error"
            });
        }
    }
    
    async filter(filter, res){
        try{
            const list = await drinks.find(filter);
            if(list != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: list,
                });
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: list,
                });
            }
        }catch{
            res.status(401)
            .json({
                message: "Error"
            });
        }
    }
}

module.exports = DrinksService;