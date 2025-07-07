import Image from "next/image";
import React from "react";

// Sample company data - replace with actual data
const companies = [
  {
    id: 1,
    name: "FedEx",
    role: "Full Stack Developer III",
    period: "Sept 2023 - Present",
    description:
      "As Part of FedEx's Enterprise Rating team, we work on various Micro-services and tools to support Faster Rating to give FedEx ability to charge accurate amount to its Customer. The Rating Engine allows FedEx to charge various customers in various countries with applicable duties and fees. Also allows FedEx to have custom shipping rates with large customers.",
    logo: "", // Replace with actual logo path
  },
  {
    id: 2,
    name: "EPAM Systems",
    role: "Senior Software Developer",
    period: "Dec 2021 - Sept 2023",
    description:
      "Worked with Goldman Sachs on PWM which helps high net worth individuals to manage their wealth",
    logo: "", // Replace with actual logo path
  },
  {
    id: 3,
    name: "Abjayon Inc",
    role: "Software Engineer",
    period: "Mar 2019 - Dec2021",
    description:
      "Worked with Otalio Shipment Property Management System and Avance Care Carin with integration with EHR systems",
    logo: "", // Replace with actual logo path
  },
  {
    id: 4,
    name: "Infrasoft Technologies",
    role: "Associate Consultant",
    period: "Jun 2018 - Mar 2019",
    description:
      "Worked with CRISIL on their Credit Risk Evaluator which helps them to evaluate the credit risk for their customers",
    logo: "", // Replace with actual logo path
  },
  {
    id: 5,
    name: "Technoflame Software",
    role: "Java Developer",
    period: "Apr 2016 - May 2018",
    description:
      "Worked with Exam system for client to conduct examinations for their schools and monitor them remotely and evalvuate results",
    logo: "", // Replace with actual logo path
  },
];

function CompanyCard({ company }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-secondary-100 dark:bg-secondary-800 shadow-md">
      <div className="shrink-0 flex items-center justify-center">
        <div className="w-24 h-24 relative">
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={96}
            height={96}
            className="rounded-md object-contain"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
          {company.name}
        </h3>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {company.role}
        </p>
        <p className="text-sm text-secondary-500 dark:text-secondary-400">
          {company.period}
        </p>
        <p className="mt-2 text-secondary-600 dark:text-secondary-300">
          {company.description}
        </p>
      </div>
    </div>
  );
}

export function CompanyList() {
  return (
    <div className="space-y-8">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
