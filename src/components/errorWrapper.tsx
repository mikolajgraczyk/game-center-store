function ErrorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[25%] text-center">
      <span className="text-[32px] font-[700] text-texts-anErrorOccurred">{children}</span>
    </div>
  );
}

export default ErrorWrapper;
