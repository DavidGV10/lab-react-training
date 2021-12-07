export default function CreditCard(props){
    
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props.creditcard
    const styleComponent = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        height: "200px",
        width: "450px"
    }
    return (
        <div style={styleComponent}>
            <div>{type}</div>
            <div>**************{number.split("").splice(-4).join("")}</div>
            <div>
                <span>Expires {expirationMonth}/{expirationYear}</span><span>{bank}</span><br></br>
                <span>{owner}</span>
            </div>
        </div>
    )
}