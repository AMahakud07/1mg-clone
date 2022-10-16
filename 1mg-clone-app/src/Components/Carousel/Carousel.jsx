import React from "react";
import Flickity from "react-flickity-component";
import { Sec1Img } from "../GetData/Sec1Img";

import "./flickity.css";

function Carousel() {
  return <Flickity>{<Sec1Img />}</Flickity>;
}

export default Carousel;

export const getTodos = () => {
  return fetch(`http://localhost:3000/sec1`).then((res) => res.json());
};

// const flickityOptions = {
//     initialIndex: 2
// }

// function Carousel() {
//   return (
//     <Flickity
//       className={'carousel'} // default ''
//       elementType={'div'} // default 'div'
//       options={flickityOptions} // takes flickity options {}
//       disableImagesLoaded={false} // default false
//       reloadOnUpdate // default false
//       static={true} // default false
//     >
//         <img src="https://onemg.gumlet.io/de43ae64-d8d7-485b-ab91-0af519ed941d_1663831589.png?w=899&h=200&format=auto" />
//         <img src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png" />
//         <img src="https://onemg.gumlet.io/19a4fe54-3a77-411b-9e53-9adbacfbd9e9_1664865792.jpg?w=899&h=200&format=auto" />
//     </Flickity>
//   )
// }

// <img src="https://onemg.gumlet.io/de43ae64-d8d7-485b-ab91-0af519ed941d_1663831589.png?w=899&h=200&format=auto" />
// <img src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png" />
// <img src="https://onemg.gumlet.io/19a4fe54-3a77-411b-9e53-9adbacfbd9e9_1664865792.jpg?w=899&h=200&format=auto" />
