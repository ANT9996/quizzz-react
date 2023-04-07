import {FC} from "react";

const shortDate:FC<{date:string}> = ({date}) => {
  const refactored = date.replace('T', ' ').substring(0, date.length - 5)
  const newDate = refactored.split(' ')
  return (
      <>
        <div>{newDate[0]}</div>
        <div>{newDate[1]}</div>
      </>
      )
}

export default shortDate