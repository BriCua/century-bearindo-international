import '../../src/partials/karir/karir.css';

const jobListings = [
  {
    title: "Sales Engineer",
    location: "Surabaya, Jawa Timur",
    type: "Full Time",
    salary: "IDR 7,000,000 - 10,000,000",
    description: "Mencari individu yang termotivasi untuk membangun hubungan dengan klien industri dan memberikan solusi teknis terkait produk bearing kami.",
  },
  {
    title: "Staff Administrasi Gudang",
    location: "Surabaya, Jawa Timur",
    type: "Full Time",
    salary: "IDR 5,000,000 - 6,500,000",
    description: "Bertanggung jawab atas pencatatan stok, administrasi pengiriman, dan memastikan akurasi data inventaris di gudang kami.",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Surabaya, Jawa Timur (Hybrid)",
    type: "Full Time",
    salary: "IDR 6,000,000 - 8,000,000",
    description: "Mengelola strategi pemasaran digital, termasuk media sosial, SEO/SEM, dan kampanye email untuk meningkatkan brand awareness.",
  },
  {
    title: "Mekanik & Tenaga Ahli",
    location: "Surabaya, Jawa Timur",
    type: "Full Time",
    salary: "IDR 6,500,000 - 9,000,000",
    description: "Memberikan layanan teknis, instalasi, dan pemeliharaan produk bearing di lokasi pelanggan. Pengalaman di bidang mekanik industri diutamakan.",
  },
  {
    title: "Internship Program - Technical Support",
    location: "Surabaya, Jawa Timur",
    type: "Internship",
    salary: "Allowance Provided",
    description: "Program magang bagi mahasiswa tingkat akhir untuk belajar dan membantu tim technical support dalam melayani kebutuhan pelanggan.",
  }
];

export default function Karir() {
  return (
    <>
      <title>Karir - PT. Century Bearindo International</title>
      <meta name="description" content="Bergabunglah dengan tim kami di PT. Century Bearindo International. Lihat lowongan kerja yang tersedia dan kirimkan aplikasi Anda."/>
      
      <div className="career-page">
        <header className="career-header">
          <h1>Bergabunglah dengan Tim Kami</h1>
          <p>
            Kami selalu mencari individu berbakat dan bersemangat untuk tumbuh bersama kami.
            Jelajahi peluang karir di PT. Century Bearindo International dan jadilah bagian dari kesuksesan kami.
          </p>
        </header>

        <main className="job-listings">
          {jobListings.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-meta">
                <span className="job-location">{job.location}</span>
                <span className="job-type">{job.type}</span>
                {job.salary && <span className="job-salary">{job.salary}</span>}
              </div>
              <p className="job-description">{job.description}</p>
              <a href="#" className="apply-button">Lamar Sekarang</a>
            </div>
          ))}
        </main>

        <footer className="career-footer">
            <p>Tidak menemukan posisi yang Anda cari?</p>
            <p>Kirimkan CV dan lamaran terbuka Anda ke <a href="mailto:cbi.sby@id.intbearing.com">hrd@centurybearindo.com</a>.</p>
        </footer>
      </div>
    </>
  );
}
