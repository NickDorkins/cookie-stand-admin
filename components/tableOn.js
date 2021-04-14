

export default function TableOn(props){
    if (props.on) {
        return(
            <th className="border border-black">{tableTotals}</th>
        )
    } else{
        return("")
    }

}