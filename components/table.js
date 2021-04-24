import TableOn from "./tableOn" 
import TotalOn from "./totalOn"
import React, { useState } from 'react'


export default function Table(props){
    return(
        <table className="w-1/2 mx-auto my-5">
            <thead>
                <tr>
                    <TableOn on = { props.on }/>
                    {props.hours.map(hour =>(
                        <th className="border-black">{hour}</th>
                    ))}
                    <TotalOn on = { props.on }/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.stores.map(store =>(
                        
                            <td className="border-black">{store}</td>
                        ))}
                </tr>
                {/* {props.cookieData.map(cookie =>(
                    
                    <tr>
                        <td className="border-black">{cookie.newlocation}</td>
                        <td className="border-black">{cookie.min}</td>
                        <td className="border-black">{cookie.max}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
        )
}