import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
    return (
        <div>
            <div className="add">
                <form className='flex-col'>
                    <div className="add-img-upload flex-col">
                        <p>upload Image</p>
                        <label htmlFor="image">
                            <img src={assets.upload_area} alt="" />
                        </label>
                        <input type="file" id="image" hidden required />

                    </div>
                    <div className="add-product-name flex-col">
                        <p>product name</p>
                        <input type="text" name="name" placeholder='type here' />

                    </div>
                    <div className="add-product-description flexcol">
                        <p>product description</p>
                        <textarea name="description" row="g" placeholder='write content here'></textarea>
                    </div>
                    <div className="add-category-price flex-col">
                        <div className="add-category">
                            <p>product category</p>
                            <select name="category" id="">
                                <option value="Salad">Salad</option>
                                <option value="Rolls">Rolls</option>
                                <option value="Deserts">Deserts</option>
                                <option value="Sandwich">sandwich</option>
                                <option value="Cake">Cake</option>
                                <option value="Pure veg">Pure Veg</option>
                                <option value="Pasta">pasta</option>
                                <option value="Noodles">Noodles</option>
                            </select>
                        </div>
                        <div className="add-price flex-col">
                            <p>Product price</p>
                            <input type="Number" name='price' placeholder='$20' />
                        </div>
                    </div>
                    <button type='submit' className='add-btn'>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default Add

