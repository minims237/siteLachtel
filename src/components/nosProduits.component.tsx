import idesc from"../assets/img/tempsnip.png"
import ProduitDetail from "./produitDetail.component"
import "./styles/nosProduits.css"

export const liste = [
    
    { 
      image:idesc ,
      titre:"Ecological and biodegradable packaging ",
      description: 'Made from natural materials, simple and durable, smooth and transparent surface.',
    },
    { 
        image:idesc ,
        titre:"Ecological and biodegradable packaging ",
        description: 'Made from natural materials, simple and durable, smooth and transparent surface.',
      },
      { 
        image:idesc ,
        titre:"Ecological and biodegradable packaging ",
        description: 'Made from natural materials, simple and durable, smooth and transparent surface.',
      },
      { 
        image:idesc ,
        titre:"Ecological and biodegradable packaging ",
        description: 'Made from natural materials, simple and durable, smooth and transparent surface.',
      },
   
    
  ];
const Produit=()=>{
    return(
        <div className="container2">
            
          <div className="container_smal1">
               <div className="container_item">
                 {liste.map(item => (
                  <ProduitDetail
                  image={item.image}
                   titre={item.titre}
                 description={item.description}
                   />
                  ))}
               </div>
             <div className="container_image2">
             <img className="image2" src={idesc} />
              </div>
            </div>
        </div>
    )
}
export default Produit