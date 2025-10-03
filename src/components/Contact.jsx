import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = ({ onOpenQuoteModal }) => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github,
      href: `https://github.com/${personalInfo.github}`
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://www.linkedin.com/in/${personalInfo.linkedin.toLowerCase().replace(/\s/g, '-')}`
    }
  ];

  return (
    <section id="contact" className="h-full py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Mail className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Contact</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-300 dark:text-gray-300 text-lg mb-12">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.icon === Github || method.icon === Linkedin ? '_blank' : undefined}
                rel={method.icon === Github || method.icon === Linkedin ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-4 bg-gray-800 dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <method.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 font-medium">{method.label}</p>
                  <p className="text-white dark:text-white font-semibold">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
