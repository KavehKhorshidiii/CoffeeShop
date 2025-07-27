import React from "react";

export default function shopCartHeader() {
  return (
    <>


      <div className=" flex justify-between w-full">
        <div>مشاهده سبد خرید</div>
        <div>
          <span>1</span>
          <span>مورد</span>
        </div>
      </div>










      <div className=" flex justify-between h-32 shadow-light  dark:shadow-dark rounded-2xl ">



        <div className=" flex w-2/3 flex-col  h-full justify-between">

            <div className="flex justify-end text-right h-1/2 overflow-hidden">
                قهوه اسپرسو مدل  پریکسا 
                
            </div>
            
            <div className="flex h-1/2 flex-col">
                <div className="flex justify-end gap-1.5"><span>تخفیف</span><span>۱۴،۵۰۰ </span></div>
                <div className="flex justify-end gap-1.5"><span>تومان</span><span>۳۵۰</span></div>
            </div>

        </div>



        <div className="flex w-1/3 items-center justify-center">
            <img className="" src="products/p1.png" alt="" />
        </div>



      </div>
      












      <div className="flex w-full justify-between border-t-2 pt-5">
        <button className=" cursor-pointer rounded-2xl border-2 py-3.5 px-6">
          ثبت سفارش
        </button>
        <div className=" flex flex-col">
          <span className=" text-xs">مبلغ قابل پرداخت</span>
          <span className="flex">
            <span>تومان</span>
            <span>500,000</span>
          </span>
        </div>
      </div>


    </>
  );
}
