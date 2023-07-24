import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <Loader2 size={58} className="animate-spin" />
    </div>
  );
}
