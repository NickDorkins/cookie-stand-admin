export default function TotalOn(props){
    if (on) {
        return(
            <th className="border-black">{tableTotals}</th>
        )
    } else {
        return ('')
    }
}