import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {
      animationData,
      // 👇 tweak these when you use the component
      maxWidth = 720, // desktop cap (px)
      maxHeight = 720, // desktop cap (px)
      mobileMax = 440, // mobile cap (px)
      center = true // keep centered by default
    } = this.props;

    // Mobile breakpoint
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    const capW = isMobile ? mobileMax : maxWidth;
    const capH = isMobile ? mobileMax : maxHeight;

    return (
      <Suspense fallback={<Loading />}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: center ? "center" : "flex-start",
            alignItems: "center"
          }}
        >
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{
              width: "100%", // fill the column
              height: "auto",
              maxWidth: capW, // hard cap (bigger than before)
              maxHeight: capH
            }}
          />
        </div>
      </Suspense>
    );
  }
}
