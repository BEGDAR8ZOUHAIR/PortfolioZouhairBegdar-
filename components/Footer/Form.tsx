"use client";

import axios from "axios";
import { motion, Transition, Variants } from "framer-motion";
import { useState } from "react";
import Loader from "../Loader";
import Toast from "../Toast";

const Form = () => {
  const [isNama, setIsNama] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPesan, setIsPesan] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [toastText, setToastText] = useState("");

  const transition: Transition = {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  };

  const overlay: Variants = {
    initial: { height: "300%", y: "100%", borderRadius: "50%" },
    visible: {
      height: "100%",
      y: 0,
      borderRadius: 0,
      transition: transition,
    },
    hidden: {
      height: "300%",
      y: "100%",
      borderRadius: "50%",
      transition: transition,
    },
  };

  const firstP: Variants = {
    initial: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
    hidden: { opacity: 1, y: 0, rotateX: 0, transition: transition },
    visible: {
      opacity: 0,
      y: "-100%",
      rotateX: "90deg",
      transition: transition,
    },
  };

  const secondP: Variants = {
    initial: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
    },
    hidden: {
      opacity: 0,
      y: "100%",
      rotateX: "-90deg",
      transition: transition,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: transition,
    },
  };

  const handleSubmit = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nama === "" || email === "" || pesan === "") {
      setToastText("The form is still empty");
      setShowToast(true);
      return;
    }
    if (email !== "" && regex.test(email) === false) {
      setToastText("Invalid Email");
      setShowToast(true);
      return;
    }
    setShowSpinner(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
        nama: nama,
        email: email,
        pesan: pesan,
      })
      .then(() => {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/send/penerima`, {
            nama: nama,
            email: email,
            pesan: pesan,
          })
          .then(() => {
            setShowSpinner(false);
            setToastText("Message Sent Successfully");
            setShowToast(true);
            setNama("");
            setEmail("");
            setPesan("");
          })
          .catch((err) => {
            if (err.code === "ERR_NETWORK") {
              setShowSpinner(false);
              setToastText("Server Error");
              setShowToast(true);
            }
          });
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          setShowSpinner(false);
          setToastText("Server Error");
          setShowToast(true);
        }
      });
  };

  return (
    <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden rounded-3xl bg-[color:var(--muted)] border border-[color:var(--border)]">
      <Toast
        toastText={toastText}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <h1 className="mt-4 text-center text-[36px] font-semibold leading-none lg:text-[48px]">
        Contact Me
      </h1>
      <form className="z-[4] w-full p-8">
        <motion.input
          className="mt-4 w-full rounded-[2rem] bg-transparent p-3 font-geist text-sm leading-none outline-[unset] placeholder:text-[color:var(--foreground)]/50 border border-[color:var(--border)]"
          type="text"
          name="name"
          placeholder="Name"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
          onFocus={() => {
            setIsNama(true);
          }}
          onBlur={() => {
            setIsNama(false);
          }}
          initial={{ border: "2px solid var(--border)" }}
          whileFocus={{ border: "2px solid var(--foreground)" }}
          whileHover={{
            border: isNama ? "2px solid var(--foreground)" : "2px solid var(--border)",
          }}
        />
        <motion.input
          className="mt-4 w-full rounded-[2rem] bg-transparent p-3 font-geist text-sm leading-none outline-[unset] placeholder:text-[color:var(--foreground)]/50 border border-[color:var(--border)]"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => {
            setIsEmail(true);
          }}
          onBlur={() => {
            setIsEmail(false);
          }}
          initial={{ border: "2px solid var(--border)" }}
          whileFocus={{ border: "2px solid var(--foreground)" }}
          whileHover={{
            border: isEmail ? "2px solid var(--foreground)" : "2px solid var(--border)",
          }}
        />
        <motion.textarea
          className="mt-4 w-full resize-none rounded-2xl bg-transparent p-3 font-geist text-sm leading-none outline-[unset] placeholder:text-[color:var(--foreground)]/50 border border-[color:var(--border)]"
          cols={30}
          rows={5}
          name="message"
          placeholder="Message"
          value={pesan}
          onChange={(e) => {
            setPesan(e.target.value);
          }}
          onFocus={() => {
            setIsPesan(true);
          }}
          onBlur={() => {
            setIsPesan(false);
          }}
          initial={{ border: "2px solid var(--border)" }}
          whileFocus={{ border: "2px solid var(--foreground)" }}
          whileHover={{
            border: isPesan ? "2px solid var(--foreground)" : "2px solid var(--border)",
          }}
        />
        <motion.button
          className="relative mt-4 flex w-full items-center justify-center overflow-hidden rounded-[2rem] bg-[color:var(--muted)] p-3 text-sm"
          initial="initial"
          animate="hidden"
          whileHover="visible"
          whileFocus="visible"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {showSpinner ? (
            <Loader />
          ) : (
            <>
              <motion.div
                className="absolute z-0 w-full bg-[color:var(--warna-putih)]"
                variants={overlay}
              />
              <div className="[transform-style: preserve-3d] flex h-full w-full flex-col items-center justify-center">
                <motion.p className="pointer-events-none" variants={firstP}>
                  Send Message
                </motion.p>
                <motion.p
                  className="pointer-events-none absolute text-black"
                  variants={secondP}
                >
                  Send Message
                </motion.p>
              </div>
            </>
          )}
        </motion.button>
        <h3 className="mt-4 text-center text-sm font-semibold">
          Or Email
        </h3>
        <motion.button
          className="relative mt-4 flex w-full items-center justify-center overflow-hidden rounded-[2rem] bg-[color:var(--muted)] p-3 text-sm"
          initial="initial"
          animate="hidden"
          whileHover="visible"
          whileFocus="visible"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:begdar8zouhair@gmail";
          }}
        >
          <motion.div
            className="absolute z-0 w-full bg-[color:var(--warna-putih)]"
            variants={overlay}
          />
          <div className="[transform-style: preserve-3d] flex h-full w-full flex-col items-center justify-center">
            <motion.p className="pointer-events-none" variants={firstP}>
              begdar8zouhair@gmail.com
            </motion.p>
            <motion.p
              className="pointer-events-none absolute text-black"
              variants={secondP}
            >
              begdar8zouhair@gmail.com
            </motion.p>
          </div>
        </motion.button>
      </form>
    </div>
  );
};

export default Form;
