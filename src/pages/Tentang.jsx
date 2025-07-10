import AnimatedContent from "../AnimatedContent";

export default function Tentang() {
  return (
    <>
      <section className="about">
        <div className="grouper">
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
            <img src="./identity/about.webp" className="boxed-left-image"></img>
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
            delay={0.75}
          >
            <p className="boxed-right text-justify">
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
            delay={1}
          >
            <p className="boxed-left text-justify">
              Produk kami dipilih berdasarkan keunggulan kompetitif mereka,
              kualitas produk yang tinggi, dan potensi di pasar global. Sebagai
              pemasok bearing, kami berkembang melalui perbaikan dan terus
              mencari perubahan untuk menjaga nol cacat di semua area. Yang
              lebih penting, kami melihat perlunya membawa keamanan dan
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
            delay={1.25}
          >
            <p className="boxed-right text-justify">
              Dengan kepemimpinan yang kuat dan tenaga kerja yang sangat
              produktif serta dengan kekayaan pengalaman dan kemampuan yang
              ditingkatkan yang terakumulasi selama lebih dari 45 tahun dan
              meliputi dua generasi, International Bearings Group of Companies
              telah mendirikan lebih dari 25 cabang di Indonesia, Malaysia,
              Thailand, Vietnam, dan China masing-masing.
            </p>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
