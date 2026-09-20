import React from "react";
import { Sparkles } from "lucide-react";
export default function AfterChatUI() {
  const messages = [
    {
      id: 1,
      name: "user",
      message: "Explain the file to me",
    },
    {
      id: 2,
      name: "system",
      message:
        "Database normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity. It works by splitting large tables into smaller, related ones and connecting them with foreign keys.",
    },
    {
      id: 3,
      name: "user",
      message: "What is database normalization?",
    },
    {
      id: 4,
      name: "system",
      message:
        "Database normalization is a technique used to organize data in a relational database. Its main goal is to reduce duplicate data and prevent problems when inserting, updating, or deleting records.",
    },
    {
      id: 5,
      name: "user",
      message: "What are the different normal forms?",
    },
    {
      id: 6,
      name: "system",
      message:
        "The most commonly used normal forms are First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF). Each form applies additional rules to reduce redundancy and improve the structure of the database.",
    },
    {
      id: 7,
      name: "user",
      message: "What is the difference between 1NF and 2NF?",
    },
    {
      id: 8,
      name: "system",
      message:
        "1NF requires each column to contain atomic values and eliminates repeating groups. 2NF builds on 1NF by ensuring that every non-key attribute depends on the entire primary key rather than only part of it.",
    },
    {
      id: 9,
      name: "user",
      message: "Why is normalization important?",
    },
    {
      id: 10,
      name: "system",
      message:
        "Normalization helps reduce data duplication, maintain data consistency, and prevent update, insertion, and deletion anomalies. It also makes databases easier to maintain and understand.",
    },
    {
      id: 11,
      name: "user",
      message: "Can you give me a simple example?",
    },
    {
      id: 12,
      name: "system",
      message:
        "For example, instead of storing a customer's name and address repeatedly in every order record, you can create a separate Customers table and reference it from the Orders table using a customer ID. This reduces duplicate information.",
    },
    {
      id: 13,
      name: "user",
      message: "What are foreign keys used for?",
    },
    {
      id: 14,
      name: "system",
      message:
        "A foreign key connects records between two related tables. It usually references the primary key of another table and helps maintain referential integrity between the tables.",
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-10 px-52">
      {messages.map((item) => (
        <div
          key={item.id}
          className={`flex ${
            item.name === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex gap-3 ${
              item.name === "user"
                ? "max-w-xl items-end"
                : "max-w-xl items-start"
            }`}
          >
            {item.name === "system" && (
              <Sparkles
                size={17}
                strokeWidth={1.7}
                className="mt-1 shrink-0 opacity-60"
              />
            )}

            <div
              className={`p-3 ${
                item.name === "user"
                  ? "bg-(--accent) rounded-2xl rounded-br-md text-white"
                  : "border border-(--border) rounded-2xl bg-white"
              }`}
            >
              {item.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
