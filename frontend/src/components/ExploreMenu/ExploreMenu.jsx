import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Welcome to our menu! Browse through our delicious selection of dishes, carefully crafted to satisfy every craving. Whether you’re in the mood for classic favorites, chef’s specialties, vegetarian delights, or something sweet, you’ll find a tempting variety to choose from. Take your time to explore each category and select the perfect meal to enjoy. If you need any recommendations, just let us know—our team is here to help make your dining experience memorable!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=> prev ===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category === item.menu_name ? "active" : "" } src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />

    </div>
  )
}

export default ExploreMenu
