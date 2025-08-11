import LayananDisplay from "../components/LayananDisplay";
import BackButton from "../components/BackButton";

export default function Layanan() {
  return (
    <>
      <title>Layanan - PT. Century Bearindo International</title>
      <meta name="description" content="Jelajahi berbagai layanan unggulan kami, termasuk pemantauan kondisi, laser shaft alignment, penyeimbangan on-site, dan banyak lagi."/>
      <meta name="keywords" content="layanan bearing, pemantauan kondisi, laser shaft alignment, penyeimbangan on-site, sewa alat bearing, pelatihan bearing" />
      <BackButton target="/#layanan-section" />
      <div>
        <LayananDisplay />
      </div>
    </>
  );
}