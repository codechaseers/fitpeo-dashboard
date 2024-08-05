import React from 'react'
import { tab, Avatar } from "@material-tailwind/react";

export default function Feedback() {
  return (
    <div
    className="feedback-scrol lg:w-[37%] h-[20em] w-full rounded-md p-3 overflow-scroll"
    style={{ background: "rgb(31, 32, 41)" }}
  >
    <style jsx>{`
      .feedback-scrol::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
      }
    `}</style>
    <p className=" font-bold">Custmor's Feedback</p>
    <div className="mt-2 border-b ">
      <div className="flex items-center gap-2">
        <Avatar
          src="https://th.bing.com/th/id/R.36fc3057651f0fe652612e376a3d5153?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0"
          alt="avatar"
        />{" "}
        <p>John Doe</p>
      </div>
      <div className=""> ⭐⭐⭐⭐⭐</div>
      <p className="pb-2 text-[0.8em]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt
        illo excepturi nihil quidem alias incidunt beatae labore delectus
        corporis debitis similique itaque, cupiditate explicabo! Placeat
        ipsum cum unde maiores.
      </p>
    </div>
    <div className="mt-2 border-b ">
      <div className="flex items-center gap-2">
        <Avatar
          src="https://www.bing.com/th?id=OIP.qEQ1Ba7S5XdXj3x-yYx7iwHaE8&w=190&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="avatar"
        />{" "}
        <p>John Doe</p>
      </div>
      <div className=""> ⭐⭐⭐⭐⭐</div>
      <p className="pb-2 text-[0.8em]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt
        illo excepturi nihil quidem alias
      </p>
    </div>
     <div className="mt-2 border-b ">
      <div className="flex items-center gap-2">
        <Avatar
          src="https://i.pinimg.com/originals/9b/c4/d3/9bc4d306c1ceab54607b3b20105d1c9d.jpg"
          alt="avatar"
        />{" "}
        <p>Tony Stark</p>
      </div>
      <div className=""> ⭐⭐⭐⭐⭐</div>
      <p className="pb-2 text-[0.8em]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sunt
        illo excepturi nihil quidem aliaslorem
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, doloribus explicabo. Architecto beatae nemo sapiente voluptatibus. Quidem, obcaecati numquam. Laborum ex dolorem accusamus iusto aliquid repudiandae quidem esse veritatis corrupti?
      </p>
    </div>
  </div>
  )
}
