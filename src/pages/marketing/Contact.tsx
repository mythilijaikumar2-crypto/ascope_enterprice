import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ContactForm } from '@/components/marketing/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import SEOHead from '@/app/SEOHead';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Contact Us" description="Reach out to the general support team of Ascope Tech for platforms or bootcamps queries." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Get in Touch</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Contact Ascope Tech
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Have questions about our IT consulting services, professional software academy courses, or talent matching portals? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start pt-6">
            {/* Contact Details Info Card */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    Office Contacts
                  </h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">General Email</span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="text-text-muted hover:text-primary transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                      <Phone className="h-5 w-5 text-primary shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Phone Helpline</span>
                        <a href={`tel:${siteConfig.contact.phone}`} className="text-text-muted hover:text-primary transition-colors">
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Silicon Valley Headquarters</span>
                        <p className="text-text-muted leading-relaxed">
                          {siteConfig.contact.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support SLA notice */}
              <div className="p-4 border border-info/20 bg-info-50/10 rounded-2xl flex gap-3 text-xs">
                <Globe className="h-5 w-5 text-info shrink-0" />
                <p className="text-text-muted leading-relaxed">
                  <strong>Support Response SLA:</strong> Our technical operations team responds to general inquiries within 24 business hours.
                </p>
              </div>
            </div>

            {/* Contact Form Wrapper */}
            <div className="md:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
                    Send inquiry message
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default ContactPage;
