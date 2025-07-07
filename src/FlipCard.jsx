// SpinCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Pemantauan Kondisi",
    description: "Pemantauan kondisi merupakan proses yang melibatkan pengamatan terhadap parameter kondisi mesin (seperti getaran, suhu, dll.), dengan maksud untuk mengidentifikasi perubahan yang signifikan yang mengindikasikan adanya gangguan yang sedang berkembang. Hal ini merupakan komponen integral dari perawatan prediktif. Penggunaan pemantauan kondisi memungkinkan penjadwalan perawatan atau tindakan lainnya untuk mencegah kerusakan berkelanjutan dan menghindari konsekuensinya. Pemantauan kondisi juga memberikan manfaat unik dimana kondisi yang dapat mengurangi masa pakai normal dapat diatasi sebelum menjadi kegagalan utama.",
    link: "/layanan",
  },
  {
    title: "Laser Shaft Alignment",
    description: "Penyelarasan poros dengan laser (Laser Shaft Alignment) muncul sebagai metode utama untuk menyelaraskan poros mesin, yang menawarkan efisiensi dan akurasi yang tak tertandingi. Dengan menerapkan sistem penyelarasan adaptif sebagai pengganti alat konvensional, tercapai penghematan waktu dan biaya yang signifikan, bersamaan dengan sejumlah manfaat tambahan. Pendekatan canggih ini tidak hanya meningkatkan ketersediaan mesin, tetapi juga memperpanjang masa pakai dan interval pemeliharaan, dengan demikian mengurangi biaya operasional secara keseluruhan. Lebih lanjut, presisi yang diperoleh melalui penyelarasan poros dengan laser berkontribusi pada penurunan konsumsi energi, yang selaras dengan praktik berkelanjutan sambil memastikan kinerja dan keandalan optimal mesin industri.",
    link: "/layanan",
  },
  {
    title: "Penyeimbangan On-Site",
    description: "Penyeimbangan bertujuan untuk mengurangi tingkat getaran yang terjadi pada frekuensi rotasi mesin saat beroperasi, dengan memahami bahwa getaran mesin merupakan hasil yang tak terhindarkan dari fungsinya. Melalui rangkaian layanan kami yang komprehensif, yang meliputi pengukuran yang akurat, analisis mendalam, dan penerapan teknik pengurangan getaran yang terarah, kami berusaha untuk secara proaktif mengidentifikasi dan menangani potensi kegagalan, dengan demikian mencegah kerusakan dan memperpanjang masa pakai operasional mesin.",
    link: "/layanan",
  },
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
      className="flipcard relative group w-80 cursor-pointer perspective overflow-visible"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-300 [transform-style:preserve-3d] ${
          rotating ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#f9f9f9] flex flex-col overflow-hidden">
          <img src={`${
              import.meta.env.BASE_URL
            }layanan/layanan-${index+1}.png`} alt={title} className="h-60 w-full object-cover" />
          <div className="p-4 h-1/2">
            <div className="dash-grey">
              <div className="dash-red"></div>
            </div>
            <h3 className="nunito-sans flipcard-title font-bold text-lg">{title}</h3>
            <p className="flipcard-desc text-sm text-gray-600">{description}</p>
            <Link to={link} className="cta">
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </div>

      {/* Hover "Next >" prompt */}
      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 text-sm font-medium hint">
        Klik Kartu &gt; 
      </div>
    </div>
  );
}
