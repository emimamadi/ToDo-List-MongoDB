import React from "react";
import Remove from "./Remove";
import Link from "next/link";

import { HiPencilAlt } from "react-icons/hi";

type Target = {
  title: string;
  description: string;
  _id: string;
};

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

export default async function Topic() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic: Target) => (
        <div
          key={topic._id}
          className=" flex justify-between gap-5 items-center p-4 my-3 border-slate-300 bg-sky-200 mx-5 rounded-lg"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div className="">{topic.description}</div>
          </div>

          <div className="flex gap-2">
            <Remove id={topic._id} />
            <Link href={`editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

// export default Topic;
