

export const DescriptionItem=(props)=>{
     const {item}=props
    return(
        <>
         <div className="category ">
                <div className="cat-img">
                <img src="https://img.freepik.com/free-vector/tree_1308-36471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=sph" alt="item_logo" className="cat_logo"></img>
                </div>
                   <div className="spaceAroun">
                  <p className="para_mid">{item.category} </p> 
                   </div>
              </div>
        </>
    )
}