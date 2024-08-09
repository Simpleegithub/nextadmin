"use server"
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import {  fetchUsers } from "../../lib/data";
import { deleteUser } from "../../lib/actions";




async function Users({searchParams}) {



  const query=searchParams?.q || "";  
  const page=searchParams?.page || 1;
  // console.log(query,'from line 11')
  const {users,count} = await fetchUsers(query,page);
  // console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user..."} />
        <Link href={"/dashboard/users/add"}>
          {" "}
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => {
    return (
      <tr key={user._id}> {/* Add a unique key for each row */}
        <td>
          <div className={styles.user}>
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={40}
              height={40}
              className={styles.userImage}
            />
            {user.username}
          </div>
        </td>
        <td>{user.email}</td>
        <td>{user.createdAt?.toDateString()}</td>
        <td>{user.isAdmin ? "Admin" : "User"}</td>
        <td>{user.isActive ? "Active" : "passive"}</td>
        <td>
          <div className={styles.buttons}>
            <Link href={`/dashboard/users/${user._id}`}>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user._id} />
          <button className={`${styles.button} ${styles.delete}`} >
              Delete
            </button>
          </form>
          </div>
        </td>
      </tr>
    );
  })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default Users;
