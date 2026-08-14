import Header from "@/components/Header";

export default function CommunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isHome={false} />
      {children}
    </>
  );
}
