"use client"

import React from 'react';
import styles from './menulink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Menulink({item}) {
    const pathname=usePathname();
    console.log(pathname)
  return (
    <Link href={item.path} className={`${styles.container} ${pathname===item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default Menulink
