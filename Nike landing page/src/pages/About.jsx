import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-slate-200 py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center space-y-10">
          <h2 className="text-2xl font-semibold text-slate-900 border-b-2 border-red-600">
            ABOUT
          </h2>

          <p className="font-normal text-base text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dignissimos reprehenderit incidunt facilis tempore, ea voluptatem
            dolorem impedit vel, similique praesentium saepe eligendi. Nostrum
            eligendi, debitis blanditiis maiores facilis dolorum! Soluta numquam
            corporis laborum, officiis voluptas architecto aperiam assumenda
            culpa itaque nisi, fuga doloremque voluptatibus quaerat molestiae
            quisquam dolores, eaque magnam rerum dicta recusandae cumque
            accusamus amet. Consequatur reiciendis architecto minus perspiciatis
            laudantium mollitia rerum totam quisquam eveniet, nobis quod,
            provident culpa impedit? Atque eum itaque natus quasi deserunt,
            nobis assumenda eius officiis vitae ad voluptatum iure ipsam
            cupiditate exercitationem inventore. Ex culpa deserunt minus enim!
            Eligendi obcaecati maxime provident.
          </p>

          <button className="py-2 px-4 bg-red-600 rounded-md shadow-sm text-sm text-slate-50 font-semibold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
