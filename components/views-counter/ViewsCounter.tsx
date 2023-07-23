import { Suspense } from "react";
import ViewsFetcher from "./ViewsFetcher";
import { Loader2 } from "lucide-react";
interface ViewsCounterProps {
  slug: string;
}

const ViewsCounter = async ({ slug }: ViewsCounterProps) => {
  return (
    <Suspense
      fallback={
        <>
          <Loader2 />
        </>
      }
    >
      <ViewsFetcher slug={slug} />
    </Suspense>
  );
};

export default ViewsCounter;
