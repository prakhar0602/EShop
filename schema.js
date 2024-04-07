const joi=require('joi')
const productSchema=joi.object({
    name:joi.string().min(3).max(30).required().trim(),
    img:joi.string().trim().required(),
    price:joi.number().min(0).required(),
    discription:joi.string().trim()
})
const reviewSchema=joi.object({
    rating:joi.number().required().min(0).max(5),
    comment:joi.string().trim().required()
})

module.exports={productSchema,reviewSchema};