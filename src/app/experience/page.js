import { Header, CompanyList } from "components/AboutPage";

export const metadata = {
  title: "About | Amit Kurud",
};

function AboutPage() {
  return (
    <div className="min-h-full">
      <header className="py-24">
        <div className="flex items-center flex-col gap-y-16 justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </header>
      <main className="px-8 max-w-4xl mx-auto pb-20">
        <CompanyList />
      </main>
    </div>
  );
}

export default AboutPage;
