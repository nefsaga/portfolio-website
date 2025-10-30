// Mock data for portfolio website

export const siteContent = {
  hero: {
    title: "Dijital Dönüşümün Öncü Ortağı",
    subtitle: "Web, mobil ve tasarım çözümleriyle markanızı geleceğe taşıyoruz",
    cta: "Projelerinizi Konuşalım",
    ctaSecondary: "Projelerimiz"
  },
  about: {
    title: "Vizyon ve Uzmanlık Bir Arada",
    description: "Yenilikçi teknolojiler ve yaratıcı çözümlerle işletmenizin dijital varlığını güçlendiriyoruz. Uzman ekibimiz, her projede mükemmeliyeti hedefleyerek markanızın dijital dünyada öne çıkmasını sağlıyor.",
    values: [
      {
        title: "İnovasyon",
        description: "En son teknolojilerle geleceği bugünden inşa ediyoruz"
      },
      {
        title: "Kalite",
        description: "Her satır kodda mükemmellik arayışındayız"
      },
      {
        title: "Güven",
        description: "Uzun vadeli iş ortaklıkları kuruyoruz"
      }
    ]
  },
  services: [
    {
      id: 1,
      title: "Web Geliştirme",
      description: "Modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz",
      icon: "Code"
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      description: "iOS ve Android için kullanıcı dostu mobil deneyimler tasarlıyoruz",
      icon: "Smartphone"
    },
    {
      id: 3,
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı, etkileyici ve fonksiyonel arayüzler oluşturuyoruz",
      icon: "Palette"
    }
  ],
  projects: [
    {
      id: 1,
      name: "E-Ticaret Platformu",
      description: "Gelişmiş filtreleme ve ödeme sistemleri ile modern bir e-ticaret çözümü",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      result: "Müşteri dönüşüm oranında %45 artış sağlandı",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7",
      category: "Web Development"
    },
    {
      id: 2,
      name: "Fitness Mobil Uygulaması",
      description: "Kişiselleştirilmiş antrenman programları ve ilerleme takibi sunan mobil uygulama",
      technologies: ["React Native", "Firebase", "Redux"],
      result: "50.000+ aktif kullanıcıya ulaşıldı",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e",
      category: "Mobile App"
    },
    {
      id: 3,
      name: "Kurumsal Dashboard Tasarımı",
      description: "Veri görselleştirme ve analitik özelliklere sahip yönetim paneli",
      technologies: ["Figma", "React", "Chart.js", "Tailwind"],
      result: "Kullanıcı verimliliğinde %60 iyileşme",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
      category: "UI/UX Design"
    }
  ],
  stats: [
    { value: "50+", label: "Tamamlanan Proje" },
    { value: "30+", label: "Mutlu Müşteri" },
    { value: "5+", label: "Yıllık Deneyim" },
    { value: "100%", label: "Müşteri Memnuniyeti" }
  ],
  contact: {
    title: "Projelerinizi Konuşalım",
    description: "Yeni bir proje mi planlıyorsunuz? Size nasıl yardımcı olabileceğimizi konuşmak için bize ulaşın.",
    email: "info@yourcompany.com",
    phone: "+90 555 123 4567",
    address: "İstanbul, Türkiye"
  }
};

export const mockContactSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock form submission:', formData);
      resolve({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
    }, 1000);
  });
};