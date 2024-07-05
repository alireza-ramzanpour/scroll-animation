import { useState } from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiMenu } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiLayoutColumn2 } from "react-icons/tfi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";



function ScrollAnimation(props) {

    const [mainStyle, setMainStyle] = useState(null)
    AOS.init();


    const handleCardStyle = () => {
        setMainStyle(
            <div className="cardWrapper">
                {props.data.map((item) => (
                    <div className="card" style={{ width: '40vw' }}
                        data-aos="fade-up"
                        data-aos-offset="180"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div className="imgBox">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <h2>{item.name}</h2>
                        <h3>{`${item.price}$`}</h3>
                    </div>
                ))}
            </div>
        )
    }

    const handleListStyle = () => {
        setMainStyle(
            <div className="cardWrapper">
                {props.data.map((item) => (
                    <div className="list" style={{ width: '24vw' }}
                        data-aos="fade-up"
                        data-aos-offset="140"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <img src={item.image} alt={item.name} />
                        <div className="row">
                            <h2>{item.name}</h2>
                            <h3>{`${item.price}$`}</h3>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    const handleWindowStyle = () => {
        setMainStyle(
            <div className="cardWrapper">
                {props.data.map((item) => (
                    <div className="window" style={{ width: '24vw' }}
                        data-aos="fade-up"
                        data-aos-offset="140"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <img src={item.image} alt={item.name} />
                        <div className="col">
                            <h2>{item.name}</h2>
                            <h3>{`${item.price}$`}</h3>
                        </div>
                    </div>
                ))}
            </ div>
        )
    }

    const arrangeTwoColumnType = () => {
        const totalCols = 2;
        const arrangedData = Array.from(props.data.map((d, index) => {
            return props.data.slice(index * totalCols, index * totalCols + totalCols)
        }));
        setMainStyle(
            arrangedData.map((items) => (
                <div className="rowCard" >
                    {items.map(item => (
                        <div className="card" style={{ width: `calc(100% / ${totalCols})`, height: '100%' }}
                            data-aos="fade-up"
                            data-aos-offset="140"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="imgBox">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h2>{item.name}</h2>
                            <h3>{`${item.price}$`}</h3>
                        </div>
                    ))}
                </div>
            ))
        );
    }

    const arrangeThreeColumnType = () => {
        const totalCols = 3;
        const arrangedData = Array.from(props.data.map((d, index) => {
            return props.data.slice(index * totalCols, index * totalCols + totalCols)
        }));
        setMainStyle(
            arrangedData.map((items) => (
                <div className="rowCard">
                    {items.map(item => (
                        <div className="card" style={{ width: `calc(100% / ${totalCols})`, height: '100%' }}
                            data-aos="fade-up"
                            data-aos-offset="140"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="imgBox">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h2>{item.name}</h2>
                            <h3>{`${item.price}$`}</h3>
                        </div>
                    ))}
                </div>
            ))
        );
    }

    const arrangeFiveColumnType = () => {
        const totalCols = 5;
        const arrangedData = Array.from(props.data.map((d, index) => {
            return props.data.slice(index * totalCols, index * totalCols + totalCols)
        }));
        setMainStyle(
            arrangedData.map((items) => (
                <div className="rowCard">
                    {items.map(item => (
                        <div className="card" style={{ width: `calc(100% / ${totalCols})`, height: '100%' }}
                            data-aos="fade-up"
                            data-aos-offset="140"
                            data-aos-delay="50"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="imgBox">
                                <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                            </div>
                            <h2>{item.name}</h2>
                            <h3>{`${item.price}$`}</h3>
                        </div>
                    ))}
                </div>
            ))
        );
    }


    return (
        <>
            <div className='nav'>
                <div className='container'>
                    <div className="nav-wrapper">
                        <div className="iconMenus">
                            <TfiLayoutGrid2Alt className="nav-icon" onClick={handleCardStyle} />
                            <TfiMenu className="nav-icon" onClick={handleListStyle} />
                            <TfiMenuAlt className="nav-icon" onClick={handleWindowStyle} />
                        </div>
                        <div className="iconMenus">
                            <TfiLayoutColumn2 className="nav-icon" onClick={arrangeTwoColumnType} />
                            <TfiLayoutColumn3 className="nav-icon" onClick={arrangeThreeColumnType} />
                            <TfiLayoutColumn4 className="nav-icon" onClick={arrangeFiveColumnType} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='main'>

                    {mainStyle}

                </div>

            </div>
        </>
    )
}

export default ScrollAnimation
