"use client";

import { createContext, useContext, useState } from "react";

const LikesContext = createContext<{
  totalLikes: number;
  setInitialLikes: (likes: number) => void;
  incrementLikes: () => void;
  decrementLikes: () => void;
}>({
  totalLikes: 0,
  setInitialLikes: () => {},
  incrementLikes: () => {},
  decrementLikes: () => {},
});
export const LikesProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalLikes, setTotalLikes] = useState(0);

  const setInitialLikes = (likes: number) => {
    setTotalLikes(likes);
  };

  const incrementLikes = () => {
    setTotalLikes((prev) => prev + 1);
  };

  const decrementLikes = () => {
    setTotalLikes((prev) => prev - 1);
  };

  return (
    <LikesContext.Provider
      value={{ totalLikes, setInitialLikes, incrementLikes, decrementLikes }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);
