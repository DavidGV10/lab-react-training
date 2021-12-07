export default function Random(props){
    const {min, max} = props
    return (
        <div>Random Number between 1-10 -> {Math.round(Math.random() * (max - min) + min)}</div>
    )
}