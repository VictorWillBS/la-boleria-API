import joi from "joi";
const postCakeSchema  = joi.object({
  "name": joi.string().required(),
  "price": joi.number(),
  "image":joi.string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/).required(),
  "description": joi.string(),
})

export default postCakeSchema