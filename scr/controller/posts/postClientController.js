import insertRepository from "../../repository/insertRepository.js";
import postClientValid from "../../assets/postClientsValids.js";
export async function postClients(req,res){
  const {name,address,phone} = req.body
  const codeErrorValid = postClientValid(name,address,phone)
  const errorToValid = res.locals.errorToValid

  if(codeErrorValid||errorToValid){
    const codeReturn = codeErrorValid?codeErrorValid:errorToValid.code;
    return res.sendStatus(codeReturn)
  }

  try {
    
    await insertRepository.postClient(name,address,phone)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error)
  }
}