import insertRepository from "../../repository/insertRepository.js"
import postOrderValid from "../../assets/postOrderValids.js"

export async function postOrder(req,res){
  const {clientId,cakeId,quantity,totalPrice} = req.body

  const codeErrorValid = await postOrderValid(clientId,cakeId,quantity,totalPrice)

  const errorToValid = res.locals.errorToValid
  if(codeErrorValid||errorToValid){
    const codeReturn = codeErrorValid?codeErrorValid:errorToValid.code;
    return res.sendStatus(codeReturn)
  }

  try {
    const timestamp = new Date().getTime();
    const queryTimestamp = `to_timestamp(${timestamp})/1000.0 `
    console.log(timestamp)
    await insertRepository.postOrder(clientId,cakeId,quantity,totalPrice,timestamp)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error)
  }
}