"use client";
import Header from "@/src/components/Header";
import NavBar from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
function Join() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function join(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/join", { user })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message == "회원가입 성공.") {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Header />
      <hr />
      <NavBar />
      <hr />
      <h1>join창입니다</h1>
      <hr />
      <form method="post" onChange={onChange} onSubmit={join}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="username"
            required
          ></input>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="@naver.com"
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password2"
            placeholder="password-check"
            required
          ></input>
        </div>
        <button type="submit">join</button>
      </form>
      <Link href="/login">login</Link>
      <hr />
      <Footer />
    </div>
  );
}

export default Join;
