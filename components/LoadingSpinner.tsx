export default function LoadingSpinner({
  height,
  width,
  borderSize,
}: {
  height: string;
  width: string;
  borderSize: string;
}) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-middle motion-reduce:animate-[spin_1.5s_linear_infinite] relative`}
      role="status" // h-[${height}] w-[${width}]
      style={{ height, width, borderWidth: borderSize }}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] ">
        Loading...
      </span>
    </div>
  );
}
