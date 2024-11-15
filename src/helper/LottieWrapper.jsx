import Lottie from "react-lottie"


const LottieWrapper = ({style, json, isLoop = true}) => {

    if(!json) return <></>

    const options = {
        loop: isLoop,
        autoplay: isLoop,
        animationData: json
    }
    return (
        <Lottie
           options={options}
           style={style}
        />
    )
}

export default LottieWrapper