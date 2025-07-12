import AnimatedContent from "../components/animations/AnimatedContent";
import { useMemo } from "react";

export default function Tentang() {
  const floatDelays = useMemo(
    () => [
      Math.random() * 2,
      Math.random() * 2,
      Math.random() * 2,
      Math.random() * 2,
    ],
    []
  );
  return (
    <>
      <title>Tentang Kami - PT. Century Bearindo International</title>
      <meta
        name="description"
        content="Profil PT. Century Bearindo International, distributor resmi dan terpercaya untuk berbagai merek bearing ternama seperti NACHI, LUK_FAG_INA, FYH, dan lainnya."
      />
      <meta
        name="keywords"
        content="profil perusahaan, tentang kami, sejarah perusahaan, distributor bearing resmi, century bearindo international"
      />
      <section className="about overflow-hidden">
        <div className="profile">
          <div className="grouper-image">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5}
            >
              <img
                src={`${import.meta.env.BASE_URL}identity/about.webp`}
                className="boxed-left-image"
              ></img>
            </AnimatedContent>
          </div>
          <div className="grouper">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5}
            >
              <h3 className=" title">Profil Kami</h3>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.6}
            >
              <p className="boxed-right-white text-justify">
                Didirikan pada tahun 2003, PT. Century Bearindo International
                memulai bisnisnya di sebuah toko yang terletak di Jalan Raden
                Saleh, Surabaya. Sebagai bagian dari kelompok perusahaan bearing
                internasional di Singapura, kami dianggap sebagai pemain kunci
                dalam bisnis bearing dan produk terkaitnya; memegang Distributor
                Tunggal dan Berizin untuk merek-merek terkenal dunia seperti
                NACHI, LUK_FAG_INA, FYH, NMB, JNS, IJK, SAMICK, DOGDE, ILJIN,
                TIMKEN, FBJ, DETMK, BANDO, ABB, dan lainnya.
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.7}
            >
              <p className="boxed-left-white text-justify">
                Produk kami dipilih berdasarkan keunggulan kompetitif mereka,
                kualitas produk yang tinggi, dan potensi di pasar global.
                Sebagai pemasok bearing, kami berkembang melalui perbaikan dan
                terus mencari perubahan untuk menjaga nol cacat di semua area.
                Yang lebih penting, kami melihat perlunya membawa keamanan dan
                pengembalian di atas rata-rata bagi karyawan dan pemegang saham
                kami untuk memastikan hubungan yang stabil dan percaya diri.
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.8}
            >
              <p className="boxed-right-white text-justify">
                Dengan kepemimpinan yang kuat dan tenaga kerja yang sangat
                produktif serta dengan kekayaan pengalaman dan kemampuan yang
                ditingkatkan yang terakumulasi selama lebih dari 45 tahun dan
                meliputi dua generasi, International Bearings Group of Companies
                telah mendirikan lebih dari 25 cabang di Indonesia, Malaysia,
                Thailand, Vietnam, dan China masing-masing.
              </p>
            </AnimatedContent>
          </div>
        </div>
        <div className="vision-mission">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.75}
          >
            <div className=" boxed-left-red">
              <h4 className="text-[#f9f9f9] text-left ">Visi</h4>

              <p className="text-justify">
                Menjadi perusahaan terkemuka yang menyediakan solusi bearing
                terbaik dan kualitas pelayanan yang unggul.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.75}
          >
            <div className=" boxed-right-red">
              <h4 className="text-[#f9f9f9] text-left ">Misi</h4>
              <ul className="misi">
                <li>
                  Menjadi organisasi terkemuka yang menyediakan solusi bearing
                  yang disesuaikan dan layanan berkualitas unggul.
                </li>
                <li>
                  Membangun hubungan yang saling menguntungkan bagi Prinsipal
                  dan Pelanggan.
                </li>
                <li>Membangun tenaga kerja yang proaktif dan bersatu.</li>
                <li>
                  Mengembangkan organisasi melalui kepemimpinan yang dinamis dan
                  pengakuan merek yang kuat.
                </li>
              </ul>
            </div>
          </AnimatedContent>
        </div>
        <div className="values">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
            <div
              className="float values-item"
              style={{ animationDelay: `${floatDelays[0]}s` }}
            ></div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.75}
          >
            <div
              className="float values-item"
              style={{ animationDelay: `${floatDelays[1]}s` }}
            ></div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1}
          >
            <div
              className="float values-item"
              style={{ animationDelay: `${floatDelays[2]}s` }}
            ></div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1.25}
          >
            <div
              className="float values-item"
              style={{ animationDelay: `${floatDelays[3]}s` }}
            ></div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
