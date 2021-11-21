export default function HomeCards() {
  return <div>Card</div>;
}
import Image from "next/image";
import Style from "./vertical.module.scss";

export default function VerticalCard({}){
  return (
    <div>
      <div className={Style.verticalCard}>
        18
        <button>
          30.25
        </button>
        <div>
          <Image />
        </div>
        <div>
          <h4>Brand</h4>
          <h4>Product</h4>
        </div>
{/*         <div>
          <div>
            <span>
              $
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}