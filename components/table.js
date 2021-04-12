import TableOn from "./tableOn" 
import TotalOn from "./totalOn"
import Stores from "./hardStores"
import Hours from "../data"
import React from 'react'
import ReactDOM from 'react-dom'

let hours = Hours
let stores = Stores

export default function Table(props){
    return(
        <table className="w-1/2 mx-auto my-5">
            <thead>
                <tr>
                    <TableOn />
                    {props.hours.map(hour =>(
                        <th className="border-black">{hour}</th>
                    ))}
                    <TotalOn />
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.stores.map(data =>(
                        <td className="border-black">{data}</td>
                    ))}
                </tr>
                {props.cookieData.map(data =>(
                    <tr>
                        <td className="border-black">{data.newlocation}</td>
                        <td className="border-black">{data.min}</td>
                        <td className="border-black">{data.max}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        )
}