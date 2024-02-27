// src/app/Voice/page.jsx

"use client"; // Mark this file as a client component

import React, { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

const Page = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {pressed ? (
        <MicIcon
          style={{ fontSize: 72, color: "blue" }}
          onClick={() => setPressed(!pressed)}
        />
      ) : (
        <MicOffIcon
          style={{ fontSize: 72, color: "white" }}
          onClick={() => setPressed(!pressed)}
        />
      )}
    </div>
  );
};

export default Page;
