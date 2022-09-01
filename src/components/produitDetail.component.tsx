import "./styles/produitDetail.css"
const ProduitDetail=(props:any)=>{
    return(
         <div className="container1">
             <div className="container_img">
             <img className="image" src={props.image}  />
   
             </div>
              <div className="container_text">  
              <h4>{props.titre}</h4>
              <h6>{props.description}</h6>   
             </div>
         </div>
    )
}
export default ProduitDetail