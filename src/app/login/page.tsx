"use client";
import Header from "@/src/components/Header";
import NavBar from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { user })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "로그인 성공.") {
          const { isLogin, _id } = res.data;
          localStorage.setItem("LoginUser", JSON.stringify({ isLogin, _id }));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <hr />
      <NavBar />
      <hr />
      <h1>login창입니다</h1>
      <form method="post" onChange={onChange} onSubmit={login}>
        <div>
          <input type="text" name="name" placeholder="name" required></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          ></input>
        </div>
        <button type="submit">login</button>
      </form>
      <Link href="/join">join</Link>
      <hr />
      <Footer />
    </div>
  );
}
