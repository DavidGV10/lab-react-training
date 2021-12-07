export default function BoxColor(props){
   
    const {r, g, b} = props.color
    let rgb = [r,g,b]
    let result = '##'
    for(let el of rgb){
        const hex1 = Math.floor(el/16)
        const hex2 = ((el/16)-hex1)*16
        const hex = hex1.toString()+hex2.toString()
        result += hex
        console.log(result)
    }
    
    console.log(result)
    
    const divStyle = {
        "backgroundColor" : `rgb(${r},${g},${b})`,
        "height": "150px",
        "width": "400px"
      };
    return (
        <div className="Rectangle" style={divStyle}>
            <span>{`rgb(${r},${g},${b})`}</span><br></br>
            <span>{result}</span>
        </div>
    )
}