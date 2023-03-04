import "./Button.css"
export default function Button ( props: { name: string } ){
    const name = props.name
    return(
        <button>{ name }</button>
    )
}