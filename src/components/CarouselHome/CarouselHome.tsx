import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
        <>
            <Carousel style={{
                margin: '20px',
            }}>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                    src="https://github.com/dolojadur/TP-React/blob/main/src/assets/Images/taylor_swift_2020_folklore4_uhd_by_devilfish89_de20m6i-fullview.jpg?raw=true" alt="" />
                    <Carousel.Caption>
                        <h3>Folklore</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                        src="https://github.com/dolojadur/TP-React/blob/main/src/assets/Images/taylor_swift_2020_evermore_wallpaper_by_devilfish89_dea7f17-fullview.jpg?raw=true" alt="" />
                    <Carousel.Caption>
                        <h3>Evermore</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    style={{maxHeight: "500px", objectFit: 'cover', height: '100%', objectPosition: 'top'}}
                    src="https://github.com/dolojadur/TP-React/blob/main/src/assets/Images/Feed%20the%20Taylor%20Swift%20hype%20machine%20for%20a%20better%20chance%20at.jpg?raw=true" alt="" />
                    <Carousel.Caption>
                        <h3>Reputation</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselHome;