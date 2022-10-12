
const MainCarousel = () => {

    const img={
        "images":[
            "main_images01.jpg",
            "main_images02.jpg",
            "main_images03.jpg",
        ]
    }
    return (
        <>
        <div id="container">
            <ul className="slider">
                {img.images.map(img => {
                    return <li className="slide-list">
                        <img src={`require("../../assets/img/${img}")`}alt="slide-list"/>
                    </li>
                })}
                
            </ul>

            <img src={require("../../assets/img")} alt="img"/>
            
        </div>
        </>
    )
}

export default MainCarousel