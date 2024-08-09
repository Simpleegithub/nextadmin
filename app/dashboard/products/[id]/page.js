import styles from '@/app/ui/dashboard/products/singleProducts/singleProducts.module.css';
import Image from 'next/image';


import React from 'react'
import { fetchProduct, fetchProducts } from '../../../lib/data';
import { updateProduct } from '../../../lib/actions';

 async function SingleProductPage({params}) {

  const product=await fetchProduct(params.id);
  console.log(product)
  
  return (
    <div className={styles.container}>
   
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
           <Image src={product.img || "/noavatar.png"} alt="" fill/>
        </div>
       {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden"  name='id' value={product._id} />
        <label >Title</label>
        <input type="text"  name='title' placeholder={product.title || "john doe"}/>

        <label >Price</label>
        <input type="email" placeholder={product.email || "jawad@gmail.com"} name='email'/>

        <label >Stock</label>
        <input type="password"  name='stock' placeholder='23'/>

        <label >Color</label>
        <input type="text" placeholder={product.color || "red"} name='color'/>

        <label >Size</label>
        <textarea type="text" placeholder={product.size || "88"} name='address'></textarea>

        <label htmlFor="">Cat</label>
        <select name="cat" id="cat">
            <option value="kitchen" selected={product.cat == "kitchen" ? true : false}>kitchen</option>
            <option value="Computer" selected={product.cat == "computer" ? true : false}>Computer</option>
      
        </select>
        <label htmlFor="">Description</label>
        <textarea name="desc" id="desc"  rows={10}  placeholder="Description" ></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage;
