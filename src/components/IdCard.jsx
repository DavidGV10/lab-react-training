export default function IdCard(props){
    console.log(props)
    const {lastName, firstName, gender, height, birth, picture} = props.data
    return (
        <div>
            <li>{lastName}</li>
            <li>{firstName}</li>
            <li>{gender}</li>
            <li>{height}</li>
            <li>{new Date(birth).toDateString()}</li>
            <li><img src={picture} alt={firstName}/></li>
        </div>
    )
}