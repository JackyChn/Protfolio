import { createGuest } from "@/app/services/apiSubmitInfo";
import { useMutation } from "@tanstack/react-query";
import { NewGuest } from "@/app/services/apiSubmitInfo";
import toast from "react-hot-toast";

function useSubmission() {
  const { isLoading: isSubmitting, mutate: createSubmission } = useMutation({
    mutationFn: (newGuest: NewGuest) => createGuest(newGuest),
    onSuccess: () => {
      toast.success("Success! I'll contact you soon, thanks!");
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Submission failed :(";
      toast.error(errorMessage);
    },
  });

  return { isSubmitting, createSubmission };
}

export default useSubmission;
