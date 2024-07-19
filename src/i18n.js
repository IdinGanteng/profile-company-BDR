import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About Us": "About Us",
          "sign up now": "Sign Up Now",
          "BINA": "BINA",
          "DINAMITA": "DINAMITA",
          "RAMA Ltd.": "RAMA Ltd.",
          "Indonesian Migrant Workers": "Indonesian Migrant Workers",
          "Placement": "Placement",
          "Agencies": "Agencies",
          "We have worked with 200+ clientsenglish": "We have worked with 200+ clients",
          "Ever since its first establishment, our company has always focused on training and delivering the best human resource in order to fulfill the demand of labor from overseas. Aside from making our movement in other countries, our company also focuses on improving the living standard of our people through providing employment.":"Ever since its first establishment, our company has always focused on training and delivering the best human resource in order to fulfill the demand of labor from overseas. Aside from making our movement in other countries, our company also focuses on improving the living standard of our people through providing employment.",
          "We commit to maintain our recruitment system based on professionalism. Through dedication to advancement and development of the resources, our company strives to deliver trained and capable human resources based on the requirement and needs of our clients.":"We commit to maintain our recruitment system based on professionalism. Through dedication to advancement and development of the resources, our company strives to deliver trained and capable human resources based on the requirement and needs of our clients.",
          "Our activities":" Our activities",
          "Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.":"Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners’ satisfaction over the provided human resources."
        }
      },
      id: {
        translation: {
          "Home": "Beranda",
          "About Us": "Tentang Kami",
          "sign up now": "Daftar Sekarang",
          "BINA": "PT BINA",
          "DINAMITA": "DINAMITA",
          "RAMA Ltd.": "RAMA",
          "Indonesian Migrant Workers": "Perusahaan Penempatan Pekerja",
          "Placement": "Migran",
          "Agencies": "Indonesia",
          "We have worked with 200+ clients": "Kami telah bekerja dengan 200+ klien",
          "Ever since its first establishment, our company has always focused on training and delivering the best human resource in order to fulfill the demand of labor from overseas. Aside from making our movement in other countries, our company also focuses on improving the living standard of our people through providing employment.":"Perusahaan kami didirikan dengan tekad untuk melatih dan menghasilkan sumber daya manusia yang berkualitas. Hal ini bertujuan untuk memenuhi kebutuhan tenaga kerja di kancah internasional sesuai dengan kualifikasi yang ada. Selain menyalurkan tenaga kerja secara global, perusahaan kami juga fokus dalam membantu perbaikan kehidupan masyarakat melalui pelayanan pemberian tenaga kerja.",
          "We commit to maintain our recruitment system based on professionalism. Through dedication to advancement and development of the resources, our company strives to deliver trained and capable human resources based on the requirement and needs of our clients.":"Kami selalu berkomitmen untuk mempertahankan kualitas rekrutmen sumber daya manusia yang berdasarkan nilai profesionalisme. Dedikasi yang kami berikan melalui peningkatan dan pengembangan sumber daya adalah untuk memberikan sumber daya manusia yang terlatih dan kompeten. Diharapkan dengan semangat dan usaha yang baik, kami dapat memberikan pelayanan yang terbaik dan memuaskan untuk klien kami.",
          "Our activities":"Kegiatan kami",
          "Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.":"Kami memberikan pendidikan dan pelatihan dari segi bahasa dan kemampuan yang menunjang kualitas sumber daya manusia sesuai kebutuhan klien. Dengan adanya fasilitas penunjang berupa asrama dan sistem pembelajaran yang modern, kami menjamin kepuasan dari pengguna jasa perusahaan kami."
        }
      }
    }
  });

export default i18n;
