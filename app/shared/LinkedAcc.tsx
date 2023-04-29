import Link from "next/link"
import { FC } from "react"

interface LinkedAccI {
    url:string;
    children:React.ReactNode
}

const LinkedAcc:FC<LinkedAccI> = ({url, children}) => {
  return (
    <div className="rounded-full shadow-lg shadow-pink-200 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-500">
        <Link href={url}>{children}</Link>

    </div>
  )
}

export default LinkedAcc