import { useEffect, useState } from "react";
import Stats from '/public/stats.svg';


const Statistics = () => {
    const [dateTime, setDateTime] = useState<string>();

    useEffect(() => {
      const date = new Date();
      setDateTime(`${date.getDate()}.${(date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`)
    }, []);
  return (
    <div>
        <time className="time"><img src={Stats} alt="IconRepairCosts" style={{height: "30px"}}/> &nbsp;{dateTime}</time>
        <div className="infoOilСhange">   
        </div>
    </div>
  )
}

export default Statistics