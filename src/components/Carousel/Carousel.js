import React,{useState, useEffect} from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



function Carousel() {
    const banner = [
        'discount',
        'catalogue',
        'freedelivery',
        'mobile'
    ]
    const [selected,setSelected] = useState(0)
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            console.log(selected)
            if(selected>2){
            setSelected(0)
            }else{
            setSelected(prev=>prev+1)
            }
            
        },2000)
        return  () => clearTimeout(timeOut)
    },[selected])

    function moveLeft(){
        if(selected>0){
            setSelected(prev=>prev-1)
        }else{
            setSelected(banner.length-1)
            }
    }
    function moveRight(){
        if(selected>banner.length-2){
            setSelected(0)
            }else{
            setSelected(prev=>prev+1)
            }
    }


    return (
        <div className="carousel">
            {/* arrow left */}
            <div className="arrow left" onClick={moveLeft}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/> 
            </div>
            {/* slidding screen */}
            <div className="screen">      
                    <div className="banner">
                     <img key={banner[selected]} src={`/img/${banner[selected]}.webp`} alt={banner[selected]}/>
                     <div className="lineOfCircle">
                        <div className={selected===0?'circle selected':'circle'}></div>
                        <div className={selected===1?'circle selected':'circle'}></div>
                        <div className={selected===2?'circle selected':'circle'}></div>
                        <div className={selected===3?'circle selected':'circle'}></div>  
                     </div>
                     </div>         
                 </div>
                 {/* arrow right */}
            <div className=" arrow right" onClick={moveRight}>
                <FontAwesomeIcon icon={faArrowAltCircleRight}  size="lg"/> 
            </div>
        </div>
    )
}

export default Carousel
