"use client";
import React from 'react';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { MdNotifications,MdOutlineChat,MdPublic,MdSearch } from 'react-icons/md';

function Navbar() {
  const pathname=usePathname();
  console.log(pathname);
  console.log();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
      <div className={styles.search}>
       <MdSearch/>
       <input type="text" placeholder="Search..." className={styles.input}/>
      </div>
      <div className={styles.icons}>
        <MdNotifications size={20}/>
        <MdOutlineChat size={20}/>
        <MdPublic size={20}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
