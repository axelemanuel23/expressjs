const mongoose = require('mongoose');
const { meals } = require("./models");

mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@clusteraxel.u9b2e.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "cook"});
console.log("Database Connected!");


class MealsService {
    create(data, res){
        const newMeal = new meals(data);
        try{
            newMeal.save();
            res.status(201)
            .json({
                message: "Succeed",
                data: newMeal,
            });
        }catch{
            res.status(500)
            .json({
                message: "Error"
            });
        }
    }

    async find(res){
        try{
            const list = await meals.find();
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
            const meal = await meals.findById(id);
            if(meal != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: meal,
                });
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: meal,
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
            const meal = await meals.findByIdAndUpdate(id, changes);
            if(meal != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: meal,
                })
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: meal,
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
            const meal = await meals.findOneAndDelete({_id: id});
            if(meal != null){
                res.status(200)
                .json({
                    message: "Succeed",
                    data: meal
                });
            }else{
                res.status(404)
                .json({
                    message: "Not found",
                    data: meal,
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
            const list = await meals.find(filter);
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
                    data: meal,
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

module.exports = MealsService;