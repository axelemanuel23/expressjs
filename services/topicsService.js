const boom = require("@hapi/boom");
const { topics } = require("./models");
class TopicsService {
    //Create One
    async create(req, res, next){
        try{
            const data = await topics.find({name: req.body.name});
            const newTopic = new topics(req.body);
            const match = data.filter((item) => item.name.toLowerCase() == newTopic.name.toLowerCase());
            if(match!=""){
                throw boom.conflict("Already Exist", match);
            }else{
                newTopic.save();
                res.status(201)
                    .json({
                        message: "Created",
                        data: newTopic,
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
            const list = await topics.find();
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
            const topic = await topics.findById(req.params.id);
            if(topic == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: topic,
                });
        }catch(err){
            err.serviceError = true;
            next(err);
        }
    }


    //Update One
    async update(req, res, next){
        try{
            const topic = await topics.findByIdAndUpdate(req.params.id, req.body);
            if(topic == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Succeed",
                    data: topic,
                });     
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Delete One

    async delete(req, res, next){
        try{
            const topic = await topics.findOneAndDelete({_id: req.params.id});
            if(topic == null){
                throw boom.notFound("Not found");
            }
            res.status(200)
                .json({
                    message: "Deleted",
                    data: topic
                });
        }catch(err){
            err.serviceError = true;
            next(err)
        }
    }
    
    //Filter

    async filter(req, res, next){
        try{
            const list = await topics.find(req.query);
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

module.exports = TopicsService;