import { Toaster } from "react-hot-toast";

export default function Notification() {
  return (
    <Toaster
          position="bottom-center"
          containerStyle={{
            borderRadius: "5rem",
            height: "2rem",
            fontSize: "12px",
          }}
          toastOptions={{
            style: {
              background: "#777777",
              color: "#000",
            },
          }}
        />
  )
}
