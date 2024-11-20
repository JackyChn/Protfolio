import { useMutation } from "@tanstack/react-query";
import { NewGuest } from "@/app/services/apiSubmitInfo";
import toast from "react-hot-toast";

function useSubmission() {
  const { isLoading: isSubmitting, mutate: createSubmission } = useMutation({
    mutationFn: async (newGuest: NewGuest) => {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGuest),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit the form");
      }

      return response.json();
    },
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
