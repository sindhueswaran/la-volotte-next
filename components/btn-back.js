import React from "react";
import { useRouter } from "next/router";

export default function BtnBack() {
    const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className="float-back">
        <i className="ti ti-arrow-left"> </i>
      </button>
    </>
  );
}
