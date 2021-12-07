export default function Greetings(props){
    const {lang, langGreeting, children} = props

    return (
        <p>{langGreeting[lang]} {children}</p>
    )
}