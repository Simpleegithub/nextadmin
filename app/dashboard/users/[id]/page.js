import styles from '@/app/ui/dashboard/users/singleUsers/singleUsers.module.css';
import Image from 'next/image';


import React from 'react'
import { fetchUser } from '../../../lib/data';
import { updateUser } from '../../../lib/actions';

async function SingleUserPage({params}) {
  console.log(params);
  const user=await fetchUser(params.id);
  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
           <Image src={user.img || "/noavatar.png"} alt="" fill/>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id} />
        <label >Username</label>
        <input type="text" placeholder={user? user.username:"John Doe"} name='username'/>

        <label >Email</label>
        <input type="email" placeholder={user? user.email:"jawad@gmail.com"} name='email'/>

        <label >Password</label>
        <input type="password"  name='password'/>

        <label >Phone</label>
        <input type="number" placeholder={user? user.phone:"1234567890"} name='phone'/>

        <label >Address</label>
        <textarea type="text" placeholder={user? user.address:"New York"} name='address'></textarea>

        <label htmlFor="">isAdmin?</label>
        <select name="isAdmin" id="isAdmin" >
            <option value={true} selected={user.isAdmin} >Yes</option>
            <option value={ false} selected={!user.isAdmin}  >No</option>
      
        </select>
        <label htmlFor="">isActive?</label>
        <select name="isActive" id="isActive" >
        <option value={true} selected={user.isActive} >Yes</option>
        <option value={ false} selected={!user.isActive}  >No</option>
      
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage;
