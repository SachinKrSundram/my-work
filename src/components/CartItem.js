
export const CartItem=(props)=>{
 const {item}=props
    return(
        <>
         <div className="cardItem">
                 <div className="cat-img product_img">
               <img src="https://t3.ftcdn.net/jpg/02/08/05/26/360_F_208052678_bF0Z6alIg9WZNRf3qMlysOhhGixAILJj.jpg" alt="item_logo" className="cat_logo"></img>
               </div>
                <h5>{item.category}</h5>    
                <p>productdetaind</p>
                 </div>
        </>
    )
}