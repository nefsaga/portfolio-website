import React, { useState } from 'react';
import { siteContent, mockContactSubmit } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

const ContactSection = () => {
  const { contact } = siteContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await mockContactSubmit(formData);
      toast({
        title: "Başarılı!",
        description: result.message,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Hata!",
        description: "Mesaj gönderilirken bir hata oluştu.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0e27]">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-[#a0aec0] max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-[#141b3d] border-[#1e2749]">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="text-[#ff6b35]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">E-posta</h3>
                  <p className="text-[#a0aec0]">{contact.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#141b3d] border-[#1e2749]">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="text-[#ff6b35]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefon</h3>
                  <p className="text-[#a0aec0]">{contact.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#141b3d] border-[#1e2749]">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="text-[#ff6b35]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Adres</h3>
                  <p className="text-[#a0aec0]">{contact.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#141b3d] border-[#1e2749]">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Adınız</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#0a0e27] border-[#1e2749] text-white mt-2"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0a0e27] border-[#1e2749] text-white mt-2"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0a0e27] border-[#1e2749] text-white mt-2"
                    placeholder="Telefon numarası"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Mesajınız</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#0a0e27] border-[#1e2749] text-white mt-2"
                    placeholder="Projeniz hakkında bize bilgi verin..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;