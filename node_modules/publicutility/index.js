const Joi = require('joi');
function add(a,b){
    const schema = Joi.number().required();
    const { error } = schema.validate(a) || schema.validate(b);
    if (error) throw new Error("Inputs must be numbers!");
    console.log("Adding of 2 numbers");
    return a+b;
}
function subtract(a,b){
    const schema = Joi.number().required();
    const { error } = schema.validate(a) || schema.validate(b);
    if (error) throw new Error("Inputs must be numbers!");
    console.log("Subtracting of 2 numbers");
    return a-b;
}
module.exports={add,subtract};