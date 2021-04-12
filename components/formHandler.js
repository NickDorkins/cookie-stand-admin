import Head from "next/head"
import Hours from "../data"
import Stores from "../components/hardStores"


export default function FormHandler(event){
    
        event.prevntDefault();
        const newLocation = event.target.value;
        const minCust = event.target.min_cust.value;
        const maxCust = event.target.max_cust.value;
        const cookieAvg = event.target.cookie_avg.value;

        setOn(True)
        setHours(<Hours />)
        setTableLocation('Location')
        setEmptyTable('')
        setTableTotals('Totals')
        setHardCookieData(Stores)
        
        
        const newCookieStand={

            newLocation: Location,
            min: minCust,
            max: maxCust,
            avg: cookieAvg,
            data: cookieData.length,
        }
        
        setCookieData([...cookieData.newCookieStand])
}