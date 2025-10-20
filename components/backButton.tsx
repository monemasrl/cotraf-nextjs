"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
type Props = {};

function BackButton({}: Props) {
  const router = useRouter();

  return (
    <button className="backbtn" onClick={() => router.push("/certificazioni")}>
      <IoIosArrowBack /> <span>Back</span>
    </button>
  );
}

export default BackButton;
