import selectRepository from "../../repository/selectRepository.js";
import parseDateToStringForm from "../../assets/parseToDateForm.js";
export async function getOrder(req,res){
  const {date} = req.query? req.query : undefined;
  const re = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

  if(date && !re.test(date)){
    return res.sendStatus(400)
  }
  
  const endDayTimestamp = 86350 * 1000;
  const timestampDate = Date.parse(`${date} 00:00`);
  const endDay= timestampDate + endDayTimestamp;
  const limiteDate = parseDateToStringForm(new Date(endDay));
  
  try {
    
    const {rows: orders} = await selectRepository.getOrder(date,limiteDate)

    if(!orders.length){
     return  res.status(404).send(orders)
    }

    const ordersWithDate =orders.map((order,i)=>{
      const dateForm = parseDateToStringForm(order.createdAt)
      return {...orders[i], createdAt:dateForm}
    })

    res.status(200).send(ordersWithDate)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function getOrderById(req,res){
  try{
    const {id}=req.params
    const parseNumber = Number(id)
    if(!parseNumber){
      return res.sendStatus(400)
    }
    const {rows:order} = await selectRepository.getOrderbyId(id)
    if(!order.length){
      return res.sendStatus(404)
    }
    res.send(order)
  }
  catch(error){
    res.status(500).send(error)
  }
}

export async function getClientOrders(req,res){
  try{
    const {id}=req.params

    const parseNumber = Number(id)
    if(!parseNumber){
      return res.sendStatus(400)
    }

    const {rows: client}= await selectRepository.getClientById(id)
    if(!client.length){
      return res.sendStatus(404)
    }
    const {rows:orders} = await selectRepository.getClientOrders(id)
    
    res.send(orders)
  }
  catch(error){
    res.status(500).send(error)
  }
}