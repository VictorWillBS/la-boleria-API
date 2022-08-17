import selectRepository from "../repository/selectRepository.js"
export default async function postCakeValid(name,price,image,description){
  const nameNoSpaceAndBreakLine= name.replaceAll(" ","").replaceAll("\n","")
  const nameIsValid = (nameNoSpaceAndBreakLine.length >= 2 && typeof(name)=='string')
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