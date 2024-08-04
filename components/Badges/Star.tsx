import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"

export default function Star() {
  return (
    <Badge
      className="bg-[#14B8A5] text-white border-2 p-3 hover:none rounded-full"
    >
      <StarIcon className="h-6 w-6" />
    </Badge>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
