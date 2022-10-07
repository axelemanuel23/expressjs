const boom = require("@hapi/boom");
const { products } = require("./models");
class ProductsService {
    //Create One
    async create(req, res, next){
        try{
            const exist = await products.find({name: req.body.name});
            const newProduct = new products(req.body);
            const match = exist.filter((item) => item.name.toLowerCase() == newProduct.name.toLowerCase());
            if(match!=""){
                throw boom.conflict("Already Exist", match);
            }else{
                newProduct.save();
                res.status(201)
                    .json({
                        message: "Created",
                        data: newProduct,
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
            const list = await products.find();
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
            const meal = await products.findById(req.params.id);
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
            const meal = await products.findByIdAndUpdate(req.params.id, req.body);
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
            const meal = await products.findOneAndDelete({_id: req.params.id});
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
            const list = await products.find(req.query);
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

module.exports = ProductsService;