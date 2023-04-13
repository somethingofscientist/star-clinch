// import PostReviewStarRating from "./components/star/Star";
import ToggleDiv from "./components/toggle/toggle";

import Gallery from "./components/gallery/Gallery";
import Tags from "./components/tags/Tags";
import Slider_one from "./components/slider1/Slider_one";
import Price_button from "./components/price_button/Price_button";
import MaxContainer from "./components/max-container/MaxContainer";
import Slider_two from "./components/Slider_two/Slider_two";
import Profile from "./components/profile/Profile";


function App() {
  return (
    <>

      <MaxContainer>
        <Profile />
      </MaxContainer>

      <Gallery />

      <MaxContainer >
        <Price_button />
      </MaxContainer>

      <MaxContainer >
        <ToggleDiv />
      </MaxContainer>

      <Slider_two />
      <Slider_one />
      <Tags />

    </>
  );
}

export default App;
