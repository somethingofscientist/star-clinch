// import PostReviewStarRating from "./components/star/Star";
// import ToggleDiv from "./components/toggle/toggle";

import Gallery from "./components/gallery/Gallery";
import Tags from "./components/tags/Tags";
import Slider_one from "./components/slider1/Slider_one";
import Price_button from "./components/price_button/Price_button";


function App() {
  return (
    <>
      <Gallery />
      <Price_button />
      <Slider_one />
      <Tags />
      {/* <ToggleDiv /> */}
      {/* <PostReviewStarRating rating={0} /> */}
    </>
  );
}

export default App;
