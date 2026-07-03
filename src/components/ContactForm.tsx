import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceNeeded: string;
  emergencyStatus: string;
  contactMethod: string;
  message: string;
  consent: boolean;
}

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  propertyAddress: "",
  serviceNeeded: "",
  emergencyStatus: "",
  contactMethod: "phone",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [fields, setFields] = useState<FormState>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof FormState) => (value: string | boolean) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!fields.emergencyStatus) {
      setError("Please indicate whether this is an emergency.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const payload = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      fullName: `${fields.firstName} ${fields.lastName}`.trim(),
      phone: fields.phone,
      email: fields.email,
      address: fields.propertyAddress,
      service: fields.serviceNeeded,
      emergencyStatus: fields.emergencyStatus,
      contactMethod: fields.contactMethod,
      message: fields.message,
      consent: fields.consent,
      submittedAt: new Date().toISOString(),
      source: "SummitShield Roofing Website — Free Inspection Form",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          (body as { error?: string }).error ??
            "Something went wrong. Please try again or call us directly."
        );
      }

      setIsSubmitted(true);
      setFields(EMPTY_FORM);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-soft-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Schedule Your Free Roof Inspection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            Tell us what is happening with your roof and our team will contact you quickly to help you take the next step.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-warm-white p-6 md:p-10 rounded-xl shadow-md"
            id="inspection-form"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-12">
                <CheckCircle className="w-16 h-16 text-forest mb-6" />
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Request Received</h3>
                <p className="text-lg text-slate">
                  Thank you! We've received your request. A roofing specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-navy font-semibold">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={fields.firstName}
                      onChange={(e) => set("firstName")(e.target.value)}
                      className="bg-cream border-soft-gray focus-visible:ring-clay"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-navy font-semibold">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={fields.lastName}
                      onChange={(e) => set("lastName")(e.target.value)}
                      className="bg-cream border-soft-gray focus-visible:ring-clay"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-navy font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={fields.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      className="bg-cream border-soft-gray focus-visible:ring-clay"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={fields.email}
                      onChange={(e) => set("email")(e.target.value)}
                      className="bg-cream border-soft-gray focus-visible:ring-clay"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyAddress" className="text-navy font-semibold">Property Address *</Label>
                  <Input
                    id="propertyAddress"
                    required
                    value={fields.propertyAddress}
                    onChange={(e) => set("propertyAddress")(e.target.value)}
                    className="bg-cream border-soft-gray focus-visible:ring-clay"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceNeeded" className="text-navy font-semibold">Service Needed</Label>
                  <Select
                    value={fields.serviceNeeded}
                    onValueChange={set("serviceNeeded")}
                  >
                    <SelectTrigger id="serviceNeeded" className="bg-cream border-soft-gray focus:ring-clay">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Roof Repair">Roof Repair</SelectItem>
                      <SelectItem value="Roof Replacement">Roof Replacement</SelectItem>
                      <SelectItem value="Storm Damage">Storm Damage</SelectItem>
                      <SelectItem value="Emergency Leak">Emergency Leak</SelectItem>
                      <SelectItem value="Roof Inspection">Roof Inspection</SelectItem>
                      <SelectItem value="Gutter Service">Gutter Service</SelectItem>
                      <SelectItem value="Commercial Roofing">Commercial Roofing</SelectItem>
                      <SelectItem value="Not Sure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyStatus" className="text-navy font-semibold">
                    Is this an emergency? *
                  </Label>
                  <Select
                    value={fields.emergencyStatus}
                    onValueChange={set("emergencyStatus")}
                    required
                  >
                    <SelectTrigger id="emergencyStatus" className="bg-cream border-soft-gray focus:ring-clay">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes, I need help immediately">Yes, I need help immediately</SelectItem>
                      <SelectItem value="No, this is a regular request">No, this is a regular request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3 pt-2">
                  <Label className="text-navy font-semibold">Preferred Contact Method</Label>
                  <RadioGroup
                    value={fields.contactMethod}
                    onValueChange={set("contactMethod")}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone" className="cursor-pointer">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="cursor-pointer">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="text" id="contact-text" />
                      <Label htmlFor="contact-text" className="cursor-pointer">Text Message</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-navy font-semibold">Message / Roof Issue</Label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe what's going on with your roof..."
                    value={fields.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="min-h-[120px] bg-cream border-soft-gray focus-visible:ring-clay"
                  />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="consent"
                    required
                    checked={fields.consent}
                    onCheckedChange={(checked) => set("consent")(checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-slate leading-snug cursor-pointer">
                    I agree to be contacted about my roofing request.
                  </Label>
                </div>

                {error && (
                  <p className="text-sm text-red-600 font-medium pt-1" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-clay hover:bg-clay/90 text-warm-white text-lg font-bold rounded-none shadow-md mt-6 disabled:opacity-70"
                  data-testid="button-submit-inspection"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Request Free Roof Inspection"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center bg-navy p-8 md:p-10 rounded-xl text-warm-white shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>

            <div className="space-y-8 flex-1">
              <div>
                <p className="text-soft-gray font-medium mb-1">Phone</p>
                <a href="tel:+10000000000" className="text-xl font-bold hover:text-copper transition-colors">
                  (800) 555-0199
                </a>
              </div>

              <div>
                <p className="text-soft-gray font-medium mb-1">Email</p>
                <a href="mailto:info@summitshieldroofing.com" className="text-lg hover:text-copper transition-colors">
                  info@summitshieldroofing.com
                </a>
              </div>

              <div>
                <p className="text-soft-gray font-medium mb-2">Hours of Operation</p>
                <ul className="space-y-1 text-warm-white">
                  <li>Mon&ndash;Fri: 7:00 AM &ndash; 6:00 PM</li>
                  <li>Sat: 8:00 AM &ndash; 2:00 PM</li>
                  <li className="text-clay font-bold mt-2 pt-2 border-t border-white/20">Emergency: 24/7</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <a
                href="tel:+10000000000"
                className="w-full inline-flex items-center justify-center bg-clay hover:bg-clay/90 text-warm-white font-bold h-14 px-8 text-lg min-h-[48px] rounded-none transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
