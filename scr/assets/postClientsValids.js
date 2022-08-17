
export default function postClientValid(name,address,phone){
  const nameNoSpaceAndBreakLine= name.replaceAll(" ","").replaceAll("\n","");
  const nameIsValid = (nameNoSpaceAndBreakLine && typeof(name)=='string');

  const addressNoSpaceAndBreakLine= address.replaceAll(" ","").replaceAll("\n","");
  const addressIsValid = (addressNoSpaceAndBreakLine && typeof(address)=='string');

  const re = (/^([0-9]{10,11})$/)
  const phoneIsValid = (re.test(phone) && typeof(phone)=='string');


  if(!nameIsValid || !addressIsValid || !phoneIsValid){
    return 400
  }

  
}