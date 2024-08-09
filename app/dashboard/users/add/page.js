import React from 'react';
import styles from  '@/app/ui/dashboard/users/addUsers/AddUsers.module.css';
import { addUser } from '../../../lib/actions';

function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder='username' name='username' required />
        <input type="email" placeholder='email' name='email' required />
        <input type="password" placeholder='password' name='password' required />
        <input type="number" placeholder='phone' name='phone'  />
        <select name="isAdmin" id="isAdmin">
          <option value={false} defaultValue={false}>is Admin</option>
          <option value={true} defaultValue={true}>Yes</option>
          <option value={false} defaultValue={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} defaultValue={true} >is Active?</option>
          <option value={true} defaultValue={true}>Yes</option>
          <option value={false} defaultValue={false}>No</option>
        </select>
        
        <textarea name="address" id="address"  rows={16}  placeholder="Address" ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage;
