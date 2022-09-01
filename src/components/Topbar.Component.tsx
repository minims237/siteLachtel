import * as Icon from 'react-bootstrap-icons'
import './styles/TopBar.styles.css'

const TopBar=(props: any)=>{
    return(
        <div className="container_TopBar">
            <div className="pageItem_title">
                <h4>{props.title}</h4>
            </div>
            <div className="avatar">
                <Icon.PersonCircle size={45}/>
                <h4>{props.Username}</h4>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default TopBar;