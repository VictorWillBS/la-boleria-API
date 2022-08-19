export default function parseDateToStringForm(date){
  const dateOfMonth= date.getDate();
  const month = date.getMonth()+1>9 ? date.getMonth()+1:`0${date.getMonth()+1}`  
  const year = date.getFullYear()
  const hour = date.getHours()>9 ? date.getHours():`0${date.getHours()}`
  const minutes = date.getMinutes()>9 ? date.getMinutes():`0${date.getMinutes()}`

  const dateString = `${year}-${month}-${dateOfMonth} ${hour}:${minutes}`
  return dateString
}