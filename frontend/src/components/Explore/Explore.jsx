import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = ({category,setCategory}) => {
  return (
    <div className='Explore' id='Explore'>
        <h1>Explore our menu</h1>
        <p className='Explore-text'>choose froma diverese menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.our missin is to satisfy your craving and elevate your dining experiendce one delecious meal at a time</p>
        <div className='Explore-menu-list'>
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} className='Explore-menu-list-item' key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
      
    </div>
  )
}

export default Explore
