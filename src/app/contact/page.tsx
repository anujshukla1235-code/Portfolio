import ContactForm from "@/components/ui/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vrittant",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Interested in working together or have a question? Feel free to reach out using the form below.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
