import React from "react";
import { Shield, Lock, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: 1,
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly to us, including name, email address, payment information, and any other information you choose to provide when creating an account or making a purchase.",
        "We automatically collect certain information about your device when you use our Platform, including IP address, browser type, operating system, and usage data.",
        "We may collect information about your interactions with our courses and books, including progress, completion rates, and quiz scores to improve your learning experience.",
      ],
    },
    {
      id: 2,
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect to provide, maintain, and improve our services, process transactions, and send you technical notices and support messages.",
        "We may use your information to communicate with you about products, services, offers, and events, and provide news and information we think will interest you.",
        "We use analytics and usage data to understand how users interact with our Platform and to improve content and user experience.",
        "Your information helps us personalize your learning experience and recommend relevant courses and books.",
      ],
    },
    {
      id: 3,
      title: "3. Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as payment processing and email delivery.",
        "We may disclose your information if required by law or in response to valid requests by public authorities.",
        "In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change in ownership.",
      ],
    },
    {
      id: 4,
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use encryption protocols to secure data transmission and store sensitive information in encrypted format.",
        "While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
      ],
    },
    {
      id: 5,
      title: "5. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to track activity on our Platform and hold certain information. Cookies are files with small amounts of data sent to your browser.",
        "You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform.",
        "We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until deleted).",
      ],
    },
    {
      id: 6,
      title: "6. Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information at any time through your account settings.",
        "You can opt out of receiving promotional emails by following the unsubscribe instructions in those emails. We will still send you transactional and service-related communications.",
        "You have the right to request a copy of the personal information we hold about you and to request correction of any inaccurate information.",
        "Depending on your location, you may have additional rights under applicable data protection laws, including the right to data portability and the right to object to certain processing.",
      ],
    },
    {
      id: 7,
      title: "7. Children's Privacy",
      content: [
        "Our Platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
        "If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.",
        "If we learn we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.",
      ],
    },
    {
      id: 8,
      title: "8. Third-Party Links",
      content: [
        "Our Platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.",
        "We encourage you to read the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by CheckShelf.",
      ],
    },
    {
      id: 9,
      title: "9. Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
        "When you delete your account, we will delete or anonymize your personal information. Some information may be retained in backup systems for a limited period.",
      ],
    },
    {
      id: 10,
      title: "10. International Data Transfers",
      content: [
        "Your information may be transferred to and maintained on servers located outside of your country where data protection laws may differ.",
        "We take appropriate measures to ensure your information receives adequate protection in accordance with this Privacy Policy.",
      ],
    },
    {
      id: 11,
      title: "11. Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        "We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the Platform after changes are posted constitutes acceptance of those changes.",
      ],
    },
    {
      id: 12,
      title: "12. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
        "Email: privacy@checkshelf.com",
        "Address: 123 Chess Avenue, Strategic City, SC 12345",
      ],
    },
  ];

  const dataTypes = [
    {
      icon: <Eye size={32} />,
      title: "What We Collect",
      desc: "Name, email, payment info, usage data",
    },
    {
      icon: <Database size={32} />,
      title: "How We Use It",
      desc: "Improve services, personalize experience",
    },
    {
      icon: <Lock size={32} />,
      title: "How We Protect It",
      desc: "Encryption, secure servers, access controls",
    },
    {
      icon: <Shield size={32} />,
      title: "Your Rights",
      desc: "Access, update, delete your data anytime",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-accent" />
            <p className="text-accent font-semibold tracking-widest uppercase">
              Your Privacy Matters
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            We are committed to protecting your privacy and ensuring the
            security of your personal information.
          </p>
          <p className="text-sm text-gray-400 text-center mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Privacy at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-opacity-10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center text-sm font-bold shrink">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
                <div className="ml-11 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-700 mb-6">
            We're here to help. Contact our privacy team if you have any
            concerns or questions.
          </p>
          <a
            href="mailto:privacy@checkshelf.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-black hover:text-accent transition-all duration-300"
          >
            <Shield className="w-5 h-5" />
            Contact Privacy Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
