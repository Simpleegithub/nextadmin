"use server"

import React from "react";
import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../../app/lib/actions";

import LoginForm from "../ui/login/loginForm/loginForm";

function LoginPage() {
  return (
    <div className={styles.container}>
     <LoginForm authenticate={authenticate}/>
    </div>
  );
}

export default LoginPage;
