import Product from "./component/Product";
import ClassComponent1 from"./component/ClassComponent1";
// const product={
//     pname:"abu",
//     pemail:"abu@gmail.com",
//     page:"27",
// }
function App(){
return(
   <div>
       {/* <Product NewProduct={product}></Product> */}
       <ClassComponent1 pcar="nano" model="2010"></ClassComponent1>
   </div> 
)
}
export default App;