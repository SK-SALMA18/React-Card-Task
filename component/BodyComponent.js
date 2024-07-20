import React from "react";
import CardImages from "./CardImages";

function BodyComponent(){
    return(
        <div className="card">
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70" imagename="Formals" price={1000}/>
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kurta/m/j/8/s-wk-250-jikonet-original-imaggkpfp8ern9ha.jpeg?q=70" imagename="Tops" price={777} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/g/r/p/s-tsrt-catalog-03-makemode-original-imagjugggfzyvg8b.jpeg?q=70" imagename="T-shirt" price={1500} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/sari/h/h/k/free-hardik-lavender-wine-bhuva-brothers-unstitched-original-imagtzps6xzqwtgd.jpeg?q=70" imagename="Designer Saree" price={700} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/jacket/u/j/5/l-1-no-multicolor-part-3-azmani-original-imaguubsvarhyb4n.jpeg?q=70" imagename="Jacket" price={400} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kurta/r/d/g/-original-imaguegya8kfgzh3.jpeg?q=70" imagename="Kurti Set" price={1500} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/u/g/s/-original-imagg7rgt4zg85nq.jpeg?q=70" imagename="Casual Wear" price={700} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kids-t-shirt/4/s/x/8-9-years-provogue103-h1216-provogue-original-imagga5tkveamxz9.jpeg?q=70" imagename="Kids T-shirt" price={500} />
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kids-t-shirt/c/e/k/8-9-years-kids-h403-hadar-original-imagthfrcrzncbhz.jpeg?q=70" imagename="Kids T-shirt" price={500} /> 
           <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kids-dress/b/4/q/8-9-years-pink-sifon-dress-32-kgn-garments-original-imagm6ve4xapf9et.jpeg?q=70" imagename="Kids Midi" price={700} />
        </div>
    )
}
export default BodyComponent;
