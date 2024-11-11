import React from 'react';
import list from '../../public/list.json';
import Card from './Card';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            facere alias est, magnam quaerat, delectus voluptatibus neque dolore
            ducimus quos quam ratione quisquam repellat eius aspernatur, quas
            aliquam? Laudantium dolorem natus distinctio et voluptate qui ab
            nisi, dolore enim velit porro sequi facere repellat dolores fugit
            harum eveniet assumenda facilis?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-clos-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;