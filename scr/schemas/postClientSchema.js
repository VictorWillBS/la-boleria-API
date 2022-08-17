import joi from "joi";
const postCakeSchema  = joi.object({
  "name": joi.string().required(),
  "address": joi.string().required(),
  "phone": joi.string().required()
})

export default postCakeSchema