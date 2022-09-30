const boom = require("@hapi/boom");
const { orders } = require("./models");

class OrdersServices {
    create(req, res, next){
        try{
            const newOrder = new orders(req.body);
            newOrder.save();
            res.status(201).json({
                message: "Created",
                data: newOrder,
            })
        }catch(err){
            next(err)
        }
    }
    async find(req, res, next){
        try{
            const orders = await orders.find();
            res.status(200).json({
                mesage: "Succeed",
                data: orders,
            })
        }catch(err){
            next(err)
        }
    }
    async findOne(req, res, next){
        try{
            const order = await orders.findById(req.params.id);
            if(order==null){
                throw boom.notFound("Not found");
            }else{
                res.status(200).json({
                    message: "Succeed",
                    data: order,
                })
            }
        }catch(err){
            next(err)
        }
    }
    update(){

    }
    delete(){

    }
}

module.exports = { OrdersServices };