import "./styles/input.css"
const Input = (props:any) => {
    return (
        <div className="in_container">
                <div className="inpt_container">
                  {props.name}
                    <input className="C_input" placeholder={props.placeholder} />
                </div>
            <div className="">
            </div>
        </div>
    )
}
export default Input