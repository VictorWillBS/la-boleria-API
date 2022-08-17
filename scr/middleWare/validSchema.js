export function validSchema(schema){
  const value = (req,res,next)=>{
    const toValid = req.body? req.body : req.params? req.params: query.params;
    const {error}= schema.validate(toValid)
    
    if (error){
      const errorToValid={code:422,details:error.details}
      res.locals.errorToValid=errorToValid;
    }

    next()
  }
  return value
}