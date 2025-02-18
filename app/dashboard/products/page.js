import React from 'react';
import styles from '@/app/ui/dashboard/products/product.module.css';
import Search from '../../ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../../ui/dashboard/pagination/Pagination';
import { fetchProducts } from '../../lib/data';
import { deleteProduct } from '../../lib/actions';

async function ProductsPage({searchParams}) {
  const query=searchParams?.q || "";
  const page=searchParams?.page || 1;

  const {products,count}= await fetchProducts(query,page);
  console.log(products,query)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a product..."} />
        <Link href={"/dashboard/products/add"}>
          {" "}
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
           
          </tr>
        </thead>
        <tbody>
        {products?.map((product)=>(
    <tr key={product._id}>
    <td>
      <div className={styles.product}>
        <Image
          src={product.img || "/noavatar.png"}
          alt=""
          width={40}
          height={40}
          className={styles.productImage}
        />
       {product.title}
      </div>
    </td>
    <td>{product.desc}</td>
    <td>{product.price}</td>
    <td>{product?.createdAt?.toDateString()}</td>
    <td>{product.stock}</td>
   
    <td>
      <div className={styles.buttons}>
      <Link href={`/dashboard/products/${product._id}`}>
        {" "}
        <button className={`${styles.button} ${styles.view}`}>
          View
        </button>{" "}

      </Link>
   
      <form action={deleteProduct}>
        <input type="hidden"  value={product._id} name='id' />
      <button  className={`${styles.button} ${styles.delete}`}>
          Delete
        </button>{" "}
        </form>
      
      </div>

    </td>
  </tr>
        ))}
      
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default ProductsPage
