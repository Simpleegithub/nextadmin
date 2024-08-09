import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Menulink from "./menulink/Menulink";
import Image from "next/image";
import { auth, signOut } from "../../../auth";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

async function sidebar() {
  const {user}=await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
      <Image className={styles.userImage} src={user?.img} alt="" width={50} height={50}/>
      
      <div className={styles.UserDetail}>
      <span className={styles.username}>{user?.username}</span>
      <span className={styles.title}>Administrator </span>
      </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <Menulink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <form action={async ()=>{
        "use server";
        await signOut();
      }}>
      <button className={styles.logout}>
        <MdLogout /> 
        logout
        </button>
      </form>
   
    </div>
  );
}

export default sidebar;
