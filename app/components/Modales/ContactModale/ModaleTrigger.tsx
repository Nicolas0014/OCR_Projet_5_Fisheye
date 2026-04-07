"use client";

import { useState } from "react";

// Components
import ModaleInterface from "./ModaleInterface";

// Types
import { FormInput } from "@/app/types";

export default function ModaleTrigger({
  photographerName,
}: {
  photographerName: string;
}) {
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formInputs: FormInput[] = [
    {
      label: "Prénom",
      type: "text",
      id: "firstName",
      value: firstName,
      setFunction: setFirstName,
    },
    {
      label: "Nom",
      type: "text",
      id: "lastName",
      value: lastName,
      setFunction: setLastName,
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      value: email,
      setFunction: setEmail,
    },
    {
      label: "Message",
      type: "textarea",
      id: "message",
      value: message,
      setFunction: setMessage,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire envoyé !");
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => setIsModaleOpen(true)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsModaleOpen(true);
          }
        }}
      >
        Contactez-moi
      </button>

      {isModaleOpen && (
        <ModaleInterface
          photographerName={photographerName}
          formInputs={formInputs}
          onSubmit={handleSubmit}
          onClose={() => setIsModaleOpen(false)}
        />
      )}
    </div>
  );
}
