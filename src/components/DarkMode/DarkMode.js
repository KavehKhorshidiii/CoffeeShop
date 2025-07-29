"use client"
import { useEffect, useState } from "react"

export default function DarkMode() {

   //? dark mode

   const [darkMode, setDarkMode] = useState(false)

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark")
      } else {
         document.documentElement.classList.remove("dark")
      }
   }, [darkMode])

   useEffect(() => {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
   }, [])
}
