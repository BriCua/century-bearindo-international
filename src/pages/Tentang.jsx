import AnimatedContent from "../components/animations/AnimatedContent";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

export default function Tentang() {
  return (
    <>
      <title>Tentang Kami - PT. Century Bearindo International</title>
      <meta
        name="description"
        content="Profil PT. Century Bearindo International, distributor resmi dan terpercaya untuk berbagai merek bearing ternama seperti NACHI, LUK_FAG_INA, FYH, dan lainnya."
      />
      <BackButton target="/#tentang-section" />
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
              delay={0.25}
            >
              <img
                src={`${import.meta.env.BASE_URL}identity/about.webp`}
                className="boxed-left-image"
                alt="About Century Bearindo International - company profile and history"
                loading="lazy"
                decoding="async"
              />
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
              delay={0.25}
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
                Sejak awal berdiri, PT Century Bearindo International telah
                berkomitmen menjadi penyedia bearing dan komponen transmisi daya
                berkualitas tinggi bagi berbagai sektor industri di Indonesia.
                Berbasis di Surabaya, kami melayani kebutuhan pelanggan dari
                skala bengkel hingga industri besar di seluruh Jawa Timur dan
                wilayah Indonesia Timur.
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
                Kami menghadirkan produk dari merek-merek terkemuka dunia yang
                telah terbukti kehandalannya, mulai dari bearing untuk aplikasi
                industri, otomotif, hingga pertanian, serta berbagai komponen
                pendukung seperti power transmission dan sistem pelumasan
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
            delay={0.5}
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
            delay={0.5}
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
        <div className="values-grouper">
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
            delay={0.25}
          >
            <h3 className="title text-center">Nilai-Nilai Inti Kami</h3>
          </AnimatedContent>
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
              delay={0}
            >
              <div className="values-item">
                <Icon icon="mdi:star-circle-outline" className="values-icon" />
                <h4 className="text-2xl font-bold">Model Keunggulan</h4>
                <p className="text-center">
                  Menerapkan praktik terbaik untuk standar unggul dalam proses
                  kerja dan metode, mencapai kualitas tertinggi.
                </p>
              </div>
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
              delay={0.2}
            >
              <div className="values-item">
                <Icon icon="mdi:shield-check-outline" className="values-icon" />
                <h4 className="text-2xl font-bold">Integritas</h4>
                <p className="text-center">
                  Berpegang teguh pada prinsip moral tinggi dan standar profesi,
                  menciptakan kepercayaan dan kredibilitas.
                </p>
              </div>
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
              delay={0.4}
            >
              <div className="values-item">
                <Icon icon="mdi:account-group-outline" className="values-icon" />
                <h4 className="text-2xl font-bold">Pembinaan</h4>
                <p className="text-center">
                  Mendidik dan mengembangkan sumber daya manusia untuk
                  pertumbuhan berkelanjutan, dengan perhatian penuh pada
                  kesejahteraan.
                </p>
              </div>
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
              delay={0.6}
            >
              <div className="values-item">
                <Icon icon="mdi:magnify" className="values-icon" />
                <h4 className="text-2xl font-bold">Kecermatan</h4>
                <p className="text-center">
                  Menunjukkan upaya gigih dan kerja keras dalam setiap detail,
                  memastikan ketelitian dan hasil optimal.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
    </>
  );
}