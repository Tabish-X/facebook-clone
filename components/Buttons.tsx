import LoadingSpinner from "./LoadingSpinner";

export function PrimaryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`w-full h-12 bg-_theme_primary_blue px-8 text-xl text-white font-semibold rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export function SignupButton({ loading }: { loading: boolean }) {
  return (
    <div className="w-full text-center py-3">
      <button className="h-9 w-48 px-8 py-0 bg-_green_dark rounded-md text-white text-lg font-bold tracking-widest hover:opacity-80 transition-opacity">
        {
          loading ? (
            <LoadingSpinner height="20px" width="20px" borderSize="2px"/>
          ): (
            <span>Sign Up</span>
          )
        }
      </button>
    </div>
  );
}

export function SecondaryButton({
  className,
  children,
}: {
  className: String;
  children: React.ReactNode;
}) {
  return (
    <button className={`${className} text-center py-1 px-3`}>{children}</button>
  );
}

export const FormButton = ({
  disability,
  loading,
  children,
}: {
  disability?: boolean;
  loading: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      disabled={disability}
      type="submit"
      className="bg-_theme_primary_blue text-sm_sm text-white rounded-md h-9 px-10 font-500 transition-colors hover:bg-_theme_secondary_blue disabled:bg-gray-40 disabled:text-gray-50" //flex items-center justify-center
    >
      {loading ? (
        <LoadingSpinner height="20px" width="20px" borderSize="2px"/>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};
