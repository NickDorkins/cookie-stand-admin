import TableOn from "./tableOn" 
import TotalOn from "./totalOn"
import Stores from "./hardStores"
import Hours from "../data"
export default function Table(props){
    return(
        <table className="w-1/2 mx-auto my-5">
            <thead>
                <tr>
                    <TableOn />
                    {props.Hours.map(hour =>(
                        <th className="border-black">{hour}</th>
                    ))}
                    <TotalOn />
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.Stores.map(data =>(
                        <td className="border-black">{data}</td>
                    ))}
                </tr>
                {props.cookieData.map(data =>(
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
        )
}