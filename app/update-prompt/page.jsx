import { Suspense } from "react";
import UpdatePrompt from "./UpdatePrompt";

export default function Page() {
  return (
    <Suspense fallback={<span className="loading loading-spinner"></span>}>
      <UpdatePrompt />
    </Suspense>
  );
}
