"use client";

import React, { FormEventHandler, useState } from "react";

import { useRouter } from "next/navigation";

const EditTopicForm = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const router = useRouter();

  const [newTitle, setNewTitle] = useState(title);

  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        className="bg-slate-800 px-8 py-2 text-white"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        className="bg-slate-800 px-8 py-2 text-white"
        placeholder="Topic description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit mx-auto rounded-md"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
