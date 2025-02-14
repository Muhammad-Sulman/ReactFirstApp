import pic from "./images/20240627.jpg"

function ImagesDemo() {
    return (
        <div>
            <img src={pic} height={400} width={450} />
            {/* <img src={require("./images/20241101.jpg")} height={400} width={450} alt="Second Demo" />  this 2 way works in old versions now not supported.  */} 
            <img src="images/20241227.jpg" height={400} width={450} ></img>
        </div>
    )
}

export default ImagesDemo