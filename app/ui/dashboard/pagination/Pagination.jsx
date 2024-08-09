"use client"

import React from 'react';
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


function Pagination({count}) {
  const searchParams=useSearchParams();
  const {replace}=useRouter();
  const pathname=usePathname();
  
  const params=new URLSearchParams(searchParams);

  const page=searchParams.get("page") || 1;

  const ITEM_PER_PAGE=2;

  const hasPrev=ITEM_PER_PAGE*(parseInt(page)-1)>0;
  const hasNext= ITEM_PER_PAGE*(parseInt(page)-1)+ITEM_PER_PAGE < count;

  const handlechangePage=(type)=>{

    if(type==="prev"){
      params.set("page",parseInt(page)-1);
      replace(`${pathname}?${params}`);
    }else{
      params.set("page",parseInt(page)+1);
      replace(`${pathname}?${params}`);
    }
  }
  
  return (
    <div className={styles.container}>
    <button className={styles.button} disabled={!hasPrev} onClick={()=>handlechangePage("prev")}>Previous</button>
    <button className={styles.button} disabled={!hasNext}  onClick={()=>handlechangePage("next")}>Next</button>
    </div>
  )
}

export default Pagination
