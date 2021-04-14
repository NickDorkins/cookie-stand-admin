export default function TotalOn(props){
    if (props.on) {
        return(
            <th className="border-black">{tableTotals}</th>
        )
    } else {
        return ('')
    }
}