import { useMutation } from "@tanstack/react-query";
import { NewGuest } from "@/app/services/apiSubmitInfo";
import toast from "react-hot-toast";
import { create_send } from "@/app/services/createGuest_sendEmail";

function useSubmission() {
  const { isLoading: isSubmitting, mutate: createSubmission } = useMutation({
    mutationFn: async (newGuest: NewGuest) => create_send(newGuest),
    onSuccess: () => {
      toast.success("Success! I'll contact you soon, thanks!");
    },
    onError: (error: any) => {
      const errorMessage =
        error instanceof Error ? error.message : "Submission failed :(";
      toast.error(errorMessage);
    },
  });

  return { isSubmitting, createSubmission };
}

export default useSubmission;
