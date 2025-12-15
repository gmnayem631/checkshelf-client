import React from "react";
import { FileText, Shield, AlertCircle } from "lucide-react";

const TermsOfUse = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: 1,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using CheckShelf ('the Platform'), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time. Your continued use of the Platform following any changes indicates your acceptance of the new terms.",
      ],
    },
    {
      id: 2,
      title: "2. User Accounts",
      content: [
        "To access certain features of the Platform, you must create an account. You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
        "You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.",
      ],
    },
    {
      id: 3,
      title: "3. Course and Book Access",
      content: [
        "Upon purchase, you will be granted a non-exclusive, non-transferable license to access the purchased courses and books for personal use only.",
        "All courses and books are for individual use. Sharing account credentials or purchased content with others is strictly prohibited.",
        "We reserve the right to revoke access if we detect unauthorized sharing or violation of these terms.",
      ],
    },
    {
      id: 4,
      title: "4. Payment and Refunds",
      content: [
        "All prices are listed in USD and are subject to change without notice. Payment must be made through our approved payment methods.",
        "Refund requests must be submitted within 30 days of purchase. Refunds are granted at our discretion and subject to our refund policy.",
        "Digital products (courses and e-books) may have different refund terms than physical books.",
      ],
    },
    {
      id: 5,
      title: "5. Intellectual Property Rights",
      content: [
        "All content on the Platform, including but not limited to text, graphics, logos, videos, and software, is the property of CheckShelf or its content suppliers and is protected by copyright and intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our express written permission.",
        "User-generated content remains the property of the user, but by posting, you grant CheckShelf a worldwide, non-exclusive license to use, reproduce, and display such content.",
      ],
    },
    {
      id: 6,
      title: "6. User Conduct",
      content: [
        "You agree not to use the Platform for any unlawful purpose or in any way that could damage, disable, or impair the Platform.",
        "Prohibited activities include: harassment of other users, posting offensive content, attempting to gain unauthorized access, distributing viruses or malicious code.",
        "We reserve the right to terminate accounts that violate these conduct standards.",
      ],
    },
    {
      id: 7,
      title: "7. Privacy and Data Protection",
      content: [
        "Your use of the Platform is also governed by our Privacy Policy. Please review our Privacy Policy to understand our data collection and use practices.",
        "We implement appropriate security measures to protect your personal information, but cannot guarantee absolute security of data transmitted over the internet.",
      ],
    },
    {
      id: 8,
      title: "8. Limitation of Liability",
      content: [
        "CheckShelf and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Platform.",
        "Our total liability for any claim arising out of or relating to these terms shall not exceed the amount paid by you for the specific product or service in question.",
        "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.",
      ],
    },
    {
      id: 9,
      title: "9. Third-Party Links and Services",
      content: [
        "The Platform may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these external sites.",
        "Your interactions with third-party services are solely between you and the third party. We encourage you to review their terms and privacy policies.",
      ],
    },
    {
      id: 10,
      title: "10. Termination",
      content: [
        "We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including breach of these terms.",
        "Upon termination, your right to use the Platform will immediately cease. Provisions that by their nature should survive termination shall survive.",
      ],
    },
    {
      id: 11,
      title: "11. Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].",
      ],
    },
    {
      id: 12,
      title: "12. Contact Information",
      content: [
        "If you have any questions about these Terms of Use, please contact us at:",
        "Email: legal@checkshelf.com",
        "Address: 123 Chess Avenue, Strategic City, SC 12345",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-accent" />
            <p className="text-accent font-semibold tracking-widest uppercase">
              Legal Information
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            Please read these terms carefully before using CheckShelf. By using
            our platform, you agree to be bound by these terms and conditions.
          </p>
          <p className="text-sm text-gray-400 text-center mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 shrink mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                These terms constitute a legally binding agreement between you
                and CheckShelf. If you do not agree with any part of these
                terms, you must not use our services. We recommend printing or
                saving a copy of these terms for your records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.id} className="scroll-mt-20">
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

      {/* Summary/Footer Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-accent shrink" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Your Rights and Responsibilities
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  By using CheckShelf, you agree to use our platform responsibly
                  and respect the intellectual property rights of content
                  creators. We are committed to providing a safe, secure, and
                  valuable learning experience for all our users.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or concerns about these terms,
                  please don't hesitate to contact our legal team at{" "}
                  <a
                    href="mailto:legal@checkshelf.com"
                    className="text-accent hover:text-black font-medium"
                  >
                    legal@checkshelf.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
