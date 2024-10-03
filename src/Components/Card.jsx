import React, { useEffect, useState } from "react";

export default function Card({ url, alt, photographer }) {
  const [values, setValues] = useState({});
  const randomValue = () => {
    setValues({
      likes: Math.floor(Math.random() * 1000 + 1),
      download: Math.floor(Math.random() * 100000 + 1),
      views: Math.floor(Math.random() * 100000 + 1),
    });
  };
  useEffect(randomValue, []);

  return (
    <>
      <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
        <a href="#">
          <img className="rounded-t-lg" src={url} alt={alt} />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {photographer}
          </h5>
          <h1 className="font-bold">
            Views: <span className="font-normal">{values.views}</span>
          </h1>
          <h1 className="font-bold">
            Downloded:<span className="font-normal">{values.download}</span>
          </h1>
          <h1 className="font-bold">
            Likes:<span className="font-normal">{values.likes}</span>
          </h1>
        </div>
      </div>
    </>
  );
}
