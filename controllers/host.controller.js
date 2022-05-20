const db = require("../DataSchema/index");
const Host = db.host;

exports.createHost = (req, res) => {
    const host = new Host({
        Host_Name: req.body.Host_Name,
        Host_Address: req.body.Host_Address,
        Host_Distance: req.body.Host_Distance,
        Host_Availability: req.body.Host_Availability,
        Restrictions: req.body.Restrictions,
        ProvidingRide: req.body.ProvidingRide
    });

    host.save((err, host) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        else{
            res.send({ message: "Host Created"});
        }
    })
}