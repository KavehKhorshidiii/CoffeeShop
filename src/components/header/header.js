import React from 'react'

export default function header() {
  return (
    <div className='flex justify-between border-2 border-amber-500 p-2 '>

      <div className='flex border-2 items-center'>
        <div className='flex gap-3.5 border-2'>
            <a href="">ثبت نام</a>
            <a href="">ورود</a>
        </div>
        <div>
            <h1>ماه</h1>
            <h1>سبد</h1>
        </div>
      </div>

      <div className='flex gap-3.5 border-2 items-center'>
        <a href="">صفحه اصلی</a>
        <a href="">فروشگاه</a>
        <a href="">دیکشنری</a>
        <a href="">بلاگ</a>
        <a href="">درباره ما</a>
        <a href="">تماس با ما</a>

        <a href="">
            <img src="logo/logo.png" alt="" />
        </a>
      </div>

    </div>
  )
}
