import { create_send } from "@/app/services/userServices/apiUser";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useSubmission() {
  const { isLoading: isSubmitting, mutate: createSubmission } = useMutation({
    mutationFn: async (newGuest: User) => create_send(newGuest),
    onSuccess: () => {
      toast.success("Success! I'll contact you soon, thanks!");
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : "Submission failed :(";
      toast.error(errorMessage);
    },
  });

  return { isSubmitting, createSubmission };
}

export default useSubmission;
