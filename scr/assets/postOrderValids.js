import selectRepository from "../repository/selectRepository.js"
export default async function postOrderValid(clientId,cakeId,quantity,totalPrice){
  const {rows:cakeExist} = await selectRepository.getCakeById(cakeId)
  const {rows:clientExist} = await selectRepository.getClientById(clientId)
  if(!cakeExist.length|| ! clientExist.length){
    console.log("cake:" +cakeExist.length)
    console.log("client:" +clientExist.length)
    return 404
  }

  const quatityIsValid = (Number.isInteger(quantity)&& quantity<5  )

  if(!quatityIsValid){
    return 400
  }

  }