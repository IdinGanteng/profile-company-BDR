import React from 'react'
import img1 from '../../assets/about-img1.png';
import img2 from '../../assets/about-img2.png';
import img3 from '../../assets/about-img3.png';
import kegiatan1 from '../../assets/kegiatan1.jpeg';
import kegiatan2 from '../../assets/kegiatan2.jpeg';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <h1>TENTANG KAMI</h1>
      <p>Kami telah bekerja dengan 200+ klien</p>
      <div className='about-sub1'>
        <div>
          <h1>PT. BINA DINAMITA RAMA</h1>
          <p>Perusahaan kami didirikan dengan tekad untuk melatih dan menghasilkan sumber daya manusia yang berkualitas. Hal ini bertujuan untuk memenuhi kebutuhan tenaga kerja di kancah internasional sesuai dengan kualifikasi yang ada. Selain menyalurkan tenaga kerja secara global, perusahaan kami juga fokus dalam membantu perbaikan kehidupan masyarakat melalui pelayanan pemberian tenaga kerja.
          Kami selalu berkomitmen untuk mempertahankan kualitas rekrutmen sumber daya manusia yang berdasarkan nilai profesionalisme. Dedikasi yang kami berikan melalui peningkatan dan pengembangan sumber daya adalah untuk memberikan sumber daya manusia yang terlatih dan kompeten. Diharapkan dengan semangat dan usaha yang baik, kami dapat memberikan pelayanan yang terbaik dan memuaskan untuk klien kami.</p>
        </div>
        <div>
          <img src={img1} alt='img1'/>
        </div>
      </div>
      <div className='about-sub2'>
        <img src={img2} alt='img2'/>
        <img src={img3} alt='img3'/>
      </div>
      <div className='about-sub3'>
        <div className='about-sub3-desc'>
          <h1>Kegiatan Kami</h1>
          <p>Kami memberikan pendidikan dan pelatihan dari segi bahasa dan kemampuan yang menunjang kualitas sumber daya manusia sesuai kebutuhan klien. Dengan adanya fasilitas penunjang berupa asrama dan sistem pembelajaran yang modern, kami menjamin kepuasan dari pengguna jasa perusahaan kami.</p>
          <button>Portofolio</button>
        </div>
        <div className='about-sub3-img'>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
        </div>
      </div>
    </div>
  )
}

export default About
