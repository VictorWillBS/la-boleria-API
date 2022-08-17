import insertRepository from "../repository/insertRepository.js"
import postCakeValid from "../assets/postCakesValids.js"

export async function postCake(req,res){
  const {name,price,image,description} = req.body
  const codeErrorValid = await postCakeValid(name,price,image,description)
  const errorToValid = res.locals.errorToValid
  if(codeErrorValid||errorToValid){
    const codeReturn = codeErrorValid?codeErrorValid:errorToValid.code;
    return res.sendStatus(codeReturn)
  }
  try {
    
    await insertRepository.postCake(name,price,image,description)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error)
  }
}