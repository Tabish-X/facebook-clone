import toast from "react-hot-toast";

export default function handleApiErrors(errors: any) {
  if (errors.response) {
    if (errors.response.data?.status === 500) {
      console.error(
        "Error code: 500. Internal Server Error, something went wrong",
        errors.response.data.error
      );
      throw new Error("Error code: 500. Internal Server Error");
    } else {
      if (errors.response.data.message) {
        toast.error(errors.response.data.message);
        return false;
      } else {
        console.log("Failed to catch error");
      }
    }
  } else {
    console.error(errors.message);
    throw new Error("Something went wrong");
  }
}
