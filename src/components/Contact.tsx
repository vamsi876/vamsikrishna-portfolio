import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);
  const submitMagnetic = useMagnetic(0.15);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      setIsEmailJSInitialized(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!isEmailJSInitialized) {
      toast.error('Email service is not ready. Please try again later.');
      return;
    }
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey || !formRef.current) throw new Error('Configuration error');
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Unexpected response');
      }
    } catch {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 },
  };

  const inputClasses = 'w-full px-4 py-3 rounded-lg bg-card border border-[hsl(var(--card-border))] text-foreground placeholder:text-[hsl(var(--text-muted))] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors text-sm';

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="contact">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-number">05 — CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'kolliparavamsikrishna80@gmail.com', href: 'mailto:kolliparavamsikrishna80@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+1 (812) 223-8818', href: 'tel:+18122238818' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              ].map((item) => (
                <div key={item.label} className="flex items-center">
                  <div className="w-11 h-11 flex items-center justify-center bg-card border border-[hsl(var(--card-border))] rounded-lg mr-4">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-foreground mb-3">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/vamsi876', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vamsikollipara/', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
            <div className="bg-card border border-[hsl(var(--card-border))] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-5">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputClasses} />
                <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputClasses} />
                <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} required className={inputClasses} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className={`${inputClasses} min-h-[120px] resize-none`} />
                <div
                  ref={submitMagnetic.ref as React.Ref<HTMLDivElement>}
                  {...submitMagnetic.handlers}
                  style={submitMagnetic.magneticStyle}
                >
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={14} />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
