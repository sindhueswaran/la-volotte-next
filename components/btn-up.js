import React from "react";
import { useRouter } from "next/router";

export default function BtnUp() {
    const router = useRouter();

  return (
    <>
      <button onClick={() => router.push('/products')} className="float-up">
        <i className="ti ti-arrow-up"> </i>
      </button>
    </>
  );
}
