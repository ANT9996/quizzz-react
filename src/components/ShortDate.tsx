import {FC} from "react";

const shortDate:FC<{date:string}> = ({date}) => {
  const parseDate = new Date(Date.parse(date))
  const newDate = parseDate.toLocaleDateString()
  const time = parseDate.toLocaleTimeString().substring(0, parseDate.toLocaleTimeString().length-3)
  return (
      <>
        <div>
          {newDate}
          <br/>
          {time}
        </div>
      </>
      )
}

export default shortDate