import React, {useState, useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiNoodles, GiFruitBowl, GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md';
import { FaGlassMartiniAlt } from "react-icons/fa";
import { fetchTabData } from '../service';



function Tabs(props) {
    const [active,setActive] = useState('Starter');
    const [tabData, setTabData] = useState('');
    const [tabLabel, setTabLabel] = useState([
        {
            name: 'Starter',
            icons: <CiPizza/>,
            id: '91eca0ee7e211ced889306d14889c656'
        },
        {
            name: 'Main Course',
            icons: <GiNoodles/>,
            id: '029fe21b455eb9368123c50cc44655eb'
        },
        {
            name: 'Desert',
            icons: <MdOutlineIcecream/>,
            id: 'fec62dbffeb69a3265ed009f14834936'
        },
        {
            name: 'Drinks',
            icons: <FaGlassMartiniAlt />,
            id: '29b31e9f81bc9919d7e09b6d88dcd94c'
        }
    ])

    const handleClick = (name,id) => {
        setActive(name)
        fetchTabData(id).then((response)=>{
            setTabData(response);
            props.setLoader(false)
        })
        
    }

    useEffect(()=>{
        fetchTabData(tabLabel[0].id).then((response)=>{
            setTabData(response);
            props.setLoader(false)
        })
    },[])

  return (
    <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
                {tabLabel.map((item,index)=>(
                    <div
                        onClick={() =>( handleClick(item.name, item.id),props.setLoader(true))}
                        key={index} className={`tablist ${active===item.name ? 'active':""}`}>
                        {item.icons}
                        <span>{item.name}</span>
                    </div>
                ))} 
        </div>

        <div className='recipe_banner'>
            {tabData !== '' && <>
            <div className="left-col">
                <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                <h1>{tabData.recipe.label}</h1>
                <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                <h3>Ingredients</h3>
                <div className='ingredients'>
                    <ul>
                        {tabData.recipe.ingredientLines.map((item,index)=>(
                            <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{item}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
            </div>
            </>}
                
        </div>
    </div>
  )
}

export default Tabs
