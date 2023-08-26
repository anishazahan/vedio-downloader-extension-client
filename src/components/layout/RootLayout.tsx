import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#5036E1" height={4} />
      <div className="">{children}</div>
    </>
  );
}
