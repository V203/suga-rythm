
export interface IName  {
  name:string;
}


export type TDoughnut = {
    price: number
      name:string
      qty:number
      grand_total():number
      doughnut_url:string
      description:string
      
    };


    export const products:Array<TDoughnut> = [{
        price:12.50,
        name:"Plain",
        qty: 0,
        grand_total: function() {return this.price * this.qty},
        doughnut_url:"./plain_doughnut.glb",
        description:"Enjoy a classic treat with our plain doughnut, featuring a fluffy texture and a simple, irresistible taste."
    },
    {
      price:16.50,
      name:"Choclate",
      qty: 0,
      grand_total: function() {return this.price * this.qty},
      doughnut_url:"./choclate_doughnut.glb",
      description:"An irresistible delight with a fluffy texture, deep cocoa flavor, and a luscious chocolate glaze. Pure indulgence!"
  }, {
    price:16.50,
    name:"Caramel",
    qty: 0,
    grand_total: function() {return this.price * this.qty},
    doughnut_url:"./strawberrySprinkle.glb",
    description:"An irresistible delight with a fluffy texture, deep cocoa flavor, and a luscious chocolate glaze. Pure indulgence!."
},
{
    price:14.50,
    name:"Classic Icing",
    qty: 0,
    grand_total: function() {return this.price * this.qty},
    doughnut_url:"./doughnutRoll.glb",
    description:"A classic pastry delight featuring a soft, pillowy texture, golden crust, and simple yet satisfying taste.."
},{
  price:9.50,
  name:"Coffee",
  qty: 0,
  grand_total: function() {return this.price * this.qty},
  doughnut_url:"./coffee.glb",
  description:"A beloved beverage brewed from roasted coffee beans, known for its rich aroma, bold flavor, and energizing effects."
},{
  price:17.50,
  name:"Strawberry",
  qty: 0,
  grand_total: function() {return this.price * this.qty},
  doughnut_url:"./strawberryMII.glb",
  description:"Strawberry Icing Donut: Fluffy, golden donut with a luscious strawberry glaze—sweet, tangy, and visually enticing. A treat for all!"
}
    ];


    
    

    