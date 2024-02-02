export default function ErrorMessage({ message }: { message: any }) {
  return <p className="text-xs text-_error_color mt-1 px-1">{message}</p>;
}
