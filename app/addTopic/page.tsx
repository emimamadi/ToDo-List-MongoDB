"use client";

import React, { EventHandler, useState } from "react";

import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const router=useRouter()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required !");

      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ title, description }),
      });

      if(res.ok){
        router.push("/")
        router.refresh()
      }else{
        throw new Error("Failed to create topic")
      }
    } catch (error) {

      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
      <input
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
        type="text"
        className="bg-slate-800 px-8 py-2 text-white"
        placeholder="Topic title"
      />
      <input
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
        type="text"
        className="bg-slate-800 px-8 py-2 text-white"
        placeholder="Topic description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit mx-auto rounded-md"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
