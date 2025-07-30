"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const MobileHeader = dynamic(()=>import("@/components/header/mobileHeader/mobileHeader"),{
    ssr:false
})

export default function MobileHeaderWrapper() {
  return <MobileHeader/>
}
