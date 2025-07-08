// SpinCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedContent from "./AnimatedContent";

const data = [
  {
    title: "Pemantauan Kondisi",
    description:
      "Pemantauan kondisi merupakan proses yang melibatkan pengamatan terhadap parameter kondisi mesin (seperti getaran, suhu, dll.), dengan maksud untuk mengidentifikasi perubahan yang signifikan yang mengindikasikan adanya gangguan yang sedang berkembang. Hal ini merupakan komponen integral dari perawatan prediktif. Penggunaan pemantauan kondisi memungkinkan penjadwalan perawatan atau tindakan lainnya untuk mencegah kerusakan berkelanjutan dan menghindari konsekuensinya. Pemantauan kondisi juga memberikan manfaat unik dimana kondisi yang dapat mengurangi masa pakai normal dapat diatasi sebelum menjadi kegagalan utama.",
    link: "/layanan",
  },
  {
    title: "Laser Shaft Alignment",
    description:
      "Penyelarasan poros dengan laser (Laser Shaft Alignment) muncul sebagai metode utama untuk menyelaraskan poros mesin, yang menawarkan efisiensi dan akurasi yang tak tertandingi. Dengan menerapkan sistem penyelarasan adaptif sebagai pengganti alat konvensional, tercapai penghematan waktu dan biaya yang signifikan, bersamaan dengan sejumlah manfaat tambahan. Pendekatan canggih ini tidak hanya meningkatkan ketersediaan mesin, tetapi juga memperpanjang masa pakai dan interval pemeliharaan, dengan demikian mengurangi biaya operasional secara keseluruhan. Lebih lanjut, presisi yang diperoleh melalui penyelarasan poros dengan laser berkontribusi pada penurunan konsumsi energi, yang selaras dengan praktik berkelanjutan sambil memastikan kinerja dan keandalan optimal mesin industri.",
    link: "/layanan",
  },
  {
    title: "Penyeimbangan On-Site",
    description:
      "Penyeimbangan bertujuan untuk mengurangi tingkat getaran yang terjadi pada frekuensi rotasi mesin saat beroperasi, dengan memahami bahwa getaran mesin merupakan hasil yang tak terhindarkan dari fungsinya. Melalui rangkaian layanan kami yang komprehensif, yang meliputi pengukuran yang akurat, analisis mendalam, dan penerapan teknik pengurangan getaran yang terarah, kami berusaha untuk secara proaktif mengidentifikasi dan menangani potensi kegagalan, dengan demikian mencegah kerusakan dan memperpanjang masa pakai operasional mesin.",
    link: "/layanan",
  },
  {
    title: "Alat - Bearing Ukuran Besar",
    description:
      "Dalam situasi di mana pemanas induksi tradisional tidak dapat mengatasi penanganan komponen bearing besar dan berat atau bagian mesin yang berukuran serupa, kami menyediakan layanan sewa alat khusus yang dirancang untuk memfasilitasi proses instalasi atau pengangkatan. Solusi sewa kami disesuaikan secara khusus dengan kebutuhan unik yang ditimbulkan oleh komponen substansial ini, sehingga memastikan penanganan yang efisien dan aman selama operasi. Baik Anda membutuhkan bantuan dalam menginstal bearing besar atau menghapus komponen berat, alat khusus kami dan layanan ahli kami ditujukan untuk menyederhanakan proses tersebut, dengan tujuan mengurangi waktu henti dan meningkatkan efisiensi operasional. Untuk informasi lebih lanjut dan untuk mendiskusikan kebutuhan spesifik Anda, jangan ragu untuk menghubungi tim kami, yang siap memberikan wawasan dan bantuan terperinci sesuai kebutuhan Anda. Jangan ragu untuk menghubungi kami untuk konsultasi menyeluruh tentang bagaimana solusi sewa alat dan layanan kami dapat mengatasi kebutuhan spesifik Anda dalam menangani bearing besar atau komponen mesin berat, sehingga memastikan proses instalasi atau pengangkatan yang efisien dan sesuai dengan kebutuhan Anda.",
    link: "/layanan",
  },
  {
    title: "Pelatihan",
    description:"Kami menyajikan program pelatihan, seminar, lokakarya, dan beragam kesempatan pendidikan lainnya secara menyeluruh, bekerja sama dengan merek mitra kami, guna memberikan pemahaman yang mendalam kepada pelanggan kami mengenai produk dan layanan yang kami tawarkan. Sesi-sesi ini meliputi berbagai aspek, termasuk fitur produk, aplikasi, teknik instalasi, praktik terbaik dalam pemeliharaan, serta metode pemecahan masalah, yang mana semuanya bertujuan agar pelanggan kami mampu membuat keputusan yang terinformasi, mengoptimalkan kinerja produk, dan mencapai tujuan operasional mereka dengan efisien.",
    link: "/layanan",
  }
];

export default function SpinCard() {
  const [index, setIndex] = useState(0);
  const [rotating, setRotating] = useState(false);

  const handleClick = () => {
    setRotating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % data.length);
      setRotating(false);
    }, 300); // matches the spin duration
  };

  const { title, description, link } = data[index];

  return (
    <div
      className="flipcard relative group w-80 cursor-pointer perspective overflow-visible float"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-300 transform-style-3d ${
          rotating ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#f9f9f9] flex flex-col overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}layanan/layanan-${index + 1}.webp`}
            alt={title}
            className="h-60 w-full object-cover"
          />
          <div className="p-4 h-1/2">
            <div className="dash-grey">
              <div className="dash-red"></div>
            </div>
            <h3 className="nunito-sans flipcard-title font-bold text-lg">
              {title}
            </h3>
          
            <p className="flipcard-desc text-sm text-gray-600">{description}</p>
          <div className="flex justify-between">
            <Link to={link} className="cta">
              Baca Selengkapnya
            </Link>
            <span className="hint delay-1000 place-self-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-gray-500 text-sm font-medium hint">Klik Kartu &gt;</span>
          </div>
          </div>
        </div>

        {/* Back Face (invisible but required for proper flip) */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#f9f9f9] rotate-y-180 flex items-center justify-center">
          <img
            className="w-40 h-40 justify-self-center align-middle"
            src={`${
              import.meta.env.BASE_URL
            }identity/favicon-century-bearindo-international.webp`}
          />
        </div>
      </div>

      {/* Hint */}
      
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 text-gray-500 text-sm font-medium ">
      
      </div>
      
    </div>
  );
}
