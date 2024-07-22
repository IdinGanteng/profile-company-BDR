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
          "Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.":"Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.",
          "We are ready for partnerships in numerous fields":"We are ready for partnerships in numerous fields",
          "Our companies always strive to deliver the best service possible through the formed partnership with local training centers across the country. With our countrys rich resources, most of our workers have the chances and capability to learn and specialize in a lot of fields. These two factors contribute drastically in a means to fulfill the demands of specialized workers on a global scale.":"Our companies always strive to deliver the best service possible through the formed partnership with local training centers across the country. With our countrys rich resources, most of our workers have the chances and capability to learn and specialize in a lot of fields. These two factors contribute drastically in a means to fulfill the demands of specialized workers on a global scale.",
          "Construction":"Construction",
          "Manufacturing":"Manufacturing",
          "Forestry and agriculture":"Forestry and agriculture",
          "Fishery":"Fishery",
          "Food and beverages":"Food and beverages",
          "Hospitality service":"Hospitality service",
          "Caretakers and nurses":"Caretakers and nurses",
          "Engineering":"Engineering",
          "Etc.":"Etc.",
          "Companies who utilize our services":"Companies who utilize our services",
          "Bina Dinamita Rama steadfastly fulfills the clients human resource needs through a guaranteed workers quality. The company is also capable of covering numerous fields since we have an ongoing partnership with numerous training centers across the country.":"Bina Dinamita Rama steadfastly fulfills the clients human resource needs through a guaranteed workers quality. The company is also capable of covering numerous fields since we have an ongoing partnership with numerous training centers across the country.",
          "20 Years +":"20 Years +",
          "Experience":"Experience",
          "User Active":"User Active",
          "Happy Customers":"Happy Customers"
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
          "Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.":"Kami memberikan pendidikan dan pelatihan dari segi bahasa dan kemampuan yang menunjang kualitas sumber daya manusia sesuai kebutuhan klien. Dengan adanya fasilitas penunjang berupa asrama dan sistem pembelajaran yang modern, kami menjamin kepuasan dari pengguna jasa perusahaan kami.",
          "We are ready for partnerships in numerous fields":"Kami membuka kesempatan untuk berkolaborasi dengan berbagai bidang",
          "Our companies always strive to deliver the best service possible through the formed partnership with local training centers across the country. With our countrys rich resources, most of our workers have the chances and capability to learn and specialize in a lot of fields. These two factors contribute drastically in a means to fulfill the demands of specialized workers on a global scale.":"Perusahaan kami selalu berusaha untuk memberikan pelayanan terbaik melalui adanya kerjasama berkelanjutan dengan lembaga pelatihan yang tersebar di seluruh Indonesia. Disamping itu, Indonesia memiliki sumber daya yang sangat beragam sehingga pekerja kami memiliki kesempatan dan kemampuan untuk mempelajari dan mendalami berbagai bidang. Kedua hal ini berkontribusi secara signifikan untuk memenuhi permintaan atas kebutuhan tenaga kerja di level internasional.",
          "Construction":"Konstruksi",
          "Manufacturing":"Industri manufaktur",
          "Forestry and agriculture":"Industri perhutanan dan perkebunan",
          "Fishery":"Industri perikanan",
          "Food and beverages":"Industri konsumsi",
          "Hospitality service":"Pelayanan",
          "Caretakers and nurses":"Perawat",
          "Engineering":"Teknik",
          "Etc.":"Dsb.",
          "Companies who utilize our services":"Perusahaan yang menggunakan jasa kami",
          "Bina Dinamita Rama steadfastly fulfills the clients human resource needs through a guaranteed workers quality. The company is also capable of covering numerous fields since we have an ongoing partnership with numerous training centers across the country.":"PT Bina Dinamita Rama bertekad untuk memenuhi kebutuhan sumber daya manusia dibarengi kualitas yang terjamin. Perusahaan kami mampu untuk memenuhi kebutuhan dari berbagai bidang dengan berjalannya kerjasama yang berkelanjutan dengan berbagai lembaga pelatihan yang tersebar di seluruh Indonesia.",
          "20 Years +":"20 Tahun +",
          "Experience":"Pengalaman",
          "User Active":"Pengguna Aktif",
          "Happy Customers":"Pelanggan Yang Bahagia"
        }
      }
    }
  });

export default i18n;
