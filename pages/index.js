import Head from 'next/head'
import React, { useState }  from 'react'
// import Hours from '../data'
// import Stores from "../components/hardStores"
import Header from '../components/header'
import Form from '../components/form'
import Footer from "../components/footer"
import FormHandler from '../components/formHandler'
import Table from "../components/table"

// import TableOn from "../components/tableOn" 
// import TotalOn from "../components/totalOn"
import ReactDOM from 'react-dom'


export default function Home() {

  const [location, setLocation] =useState('Location');
  const [minCust, setMinCust] =useState('Minimum Customers Per Hour');
  const [maxCust, setMaxCust] =useState('Maximum Customers Per Hour');
  const [cookieAvg, setCookieAvg] =useState('Average Cookies Per Sale');
  const [emptyTable, setEmptyTable] =useState('No Cookie Stands Available');
  const [on, setOn] =useState();
  const [tableLocation, setTableLocation] =useState();
  const [tableTotals, setTableTotals] =useState();
  const [hours, setHours] =useState([]);
  const [cookieData, setCookieData] =useState([]);
  const [hardCookieData, setHardCookieData] =useState([]);
  
  <FormHandler />

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title="Cookie Stand Admin"/>

      <main className="">
        <Form />
        <Table />
          
        
      </main>

      <Footer />
    </div>
  )


//  function Table(props){
//   return(
//       <table className="w-1/2 mx-auto my-5">
//           <thead>
//               <tr>
//                   <TableOn />
//                   {props.hours.map(hour =>(
//                       <th className="border-black">{hour}</th>
//                   ))}
//                   <TotalOn />
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   {props.stores.map(data =>(
//                       <td className="border-black">{data}</td>
//                   ))}
//               </tr>
//               {props.cookieData.map(data =>(
//                   <tr>
//                       <td className="border-black">{data.newlocation}</td>
//                       <td className="border-black">{data.min}</td>
//                       <td className="border-black">{data.max}</td>
//                   </tr>
//               ))}
//           </tbody>
//       </table>
//       )
// }
}