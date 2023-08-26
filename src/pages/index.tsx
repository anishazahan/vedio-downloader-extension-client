import Download from "@/components/home/Download";
import RootLayout from "@/components/layout/RootLayout";

const HomePage = () => {
  return (
    <>
      <Download></Download>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
