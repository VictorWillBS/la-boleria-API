import selectRepository from "../repository/selectRepository.js"
export default async function postCakeValid(name,price,image,description){
  const nameIsValid = (name.length >=2)
  const priceIsNumber = (!(typeof(price)=='string')&& parseInt(price))
  const priceIsValid = (price && price>=0 && priceIsNumber)
  const descriptionIsValid = description? (typeof(description)=='string'): true;


  if(!nameIsValid || !priceIsValid || !descriptionIsValid){
    return 400
  }

  const {rows:nameExist} = await selectRepository.getCakeByName(name)
  if(nameExist.length){
    return 409
  }

}