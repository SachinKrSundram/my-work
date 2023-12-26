import { MdOutlineFilterList } from "react-icons/md";
import { dataForCatagory } from "../data";
import { DescriptionItem } from "./DescriptionItem";
import { CartItem } from "./CartItem";
export const RightSideContainer = () => {
    console.log(dataForCatagory);
    return (
        <>
            <div className="rightSide">
                <div className="btn_style spaceAroun">
                    <button>
                        <MdOutlineFilterList /> Filter{" "}
                    </button>
                    <button> + Add Product </button>
                </div>
                <div className="marginLeft ">
                    <h3>CATEGORY</h3>
                    <div className="center">
                        {dataForCatagory.map((item) => (
                            <DescriptionItem item={item} />
                        ))}
                    </div>
                </div>

                <div className="productList marginLeft">
                    <h2>Products </h2>
                    <div className="productcart_container">
                        {dataForCatagory.map((item) => (
                            <CartItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
