
import FormHandler from './formHandler'


export default function Form(props){
    return(
      <form onSubmit={FormHandler} className="grid grid-cols-8 gap-1 mb-4 bg-green-400 ">
        
        <legend className="col-span-2 col-start-4 m-2 text-2xl">Create Cookie Stand</legend>

        <label className="col-span-1 col-start-1 row-start-2 ml-8" for="location">Location</label>
        <input className="col-span-7 col-start-2 row-start-2 mr-4" name="location" placeholder="Location"></input>

        <label className="col-span-2 col-start-1 row-start-3 text-center" for="min_cust">Minimum Customers Per Hour</label>
        <input className="col-span-2 col-start-1 row-start-4 mb-4 ml-4 mr-4" name="min_cust" placeholder="Min. Cust./HR"></input>

        <label className="col-span-2 col-start-3 row-start-3 text-center" for="max_cust">Maximum Customers Per Hour</label>
        <input className="col-span-2 col-start-3 row-start-4 mb-4 ml-4 mr-4" placeholder="Max Cust./HR"></input>
        
        <label className="col-span-2 col-start-5 row-start-3 test-center" for="avg_cookies">Average Cookies Per Sale</label>
        <input className="col-span-2 col-start-5 row-start-4 mb-4 ml-4 mr-4" name="avg_cookies" placeholder="Avg. Cookies/Sale"></input>

        <button className="col-span-2 col-start-7 row-span-2 row-start-3 mt-4 mb-4 ml-4 mr-4 bg-green-600">Create</button>
        
      </form>
    )
  }