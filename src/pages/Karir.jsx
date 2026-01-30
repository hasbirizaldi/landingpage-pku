import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import { formatTanggal } from "../lib/helper";

const API = "https://brewokode.site/api/public-job-vacancies";

const Karir = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [form, setForm] = useState({
    nama_lengkap: "",
    nik: "",
    email: "",
    no_hp: "",
    tanggal_lahir: "",
    alamat: "",
    tinggi_badan: "",
    berat_badan: "",
    pendidikan: "",
    asal_universitas: "",
    jurusan: "",
    pas_foto: null,
    berkas_lamaran: null,
  });

  const checkNikUnique = async (nik) => {
    try {
      const res = await axios.get(`https://brewokode.site/api/check-nik?nik=${nik}`);
      return res.data.exists === false; // true jika unik
    } catch (error) {
      console.error("Gagal cek NIK:", error);
      return true; // anggap unik kalau error agar user tetap bisa submit
    }
  };


  const validateForm = async() => {
  // wajib diisi
  for (const key in form) {
    if (
      form[key] === "" ||
      form[key] === null
    ) {
      Swal.fire({
        icon: "warning",
        title: "Form belum lengkap",
        text: "Mohon lengkapi semua data",
        confirmButtonColor: "#b45309",
      });
      return false;
    }
  }

  // NIK
  if (!/^\d{16}$/.test(form.nik)) {
    Swal.fire({
      icon: "warning",
      title: "NIK tidak valid",
      text: "NIK harus 16 digit angka",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

  // No HP
  if (!/^\d{10,15}$/.test(form.no_hp)) {
    Swal.fire({
      icon: "warning",
      title: "No HP tidak valid",
      text: "No HP hanya angka (10–15 digit)",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

  // Tinggi & berat badan
  if (isNaN(form.tinggi_badan) || isNaN(form.berat_badan)) {
    Swal.fire({
      icon: "warning",
      title: "Data fisik tidak valid",
      text: "Tinggi dan berat badan harus angka",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

  // Pas foto (gambar max 500KB)
if (form.pas_foto) {
  const foto = form.pas_foto;

  if (!foto.type.startsWith("image/")) {
    Swal.fire({
      icon: "warning",
      title: "Pas foto tidak valid",
      text: "Pas foto harus berupa gambar",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

  if (foto.size > 500 * 1024) { // 500 KB
    Swal.fire({
      icon: "warning",
      title: "Ukuran pas foto terlalu besar",
      text: "Maksimal ukuran pas foto adalah 500 KB",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

   if (!/^\d{16}$/.test(form.nik)) {
    Swal.fire({
      icon: "warning",
      title: "NIK tidak valid",
      text: "NIK harus 16 digit angka",
      confirmButtonColor: "#b45309",
    });
    return false;
  }

  // cek NIK unik
  const nikIsUnique = await checkNikUnique(form.nik);
  if (!nikIsUnique) {
    Swal.fire({
      icon: "warning",
      title: "NIK sudah terdaftar",
      text: "NIK yang Anda masukkan sudah pernah digunakan",
      confirmButtonColor: "#b45309",
    });
    return false;
  }
}

// Berkas lamaran PDF max 2MB
  if (form.berkas_lamaran) {
    const file = form.berkas_lamaran;

    if (file.type !== "application/pdf") {
      Swal.fire({
        icon: "warning",
        title: "Berkas tidak valid",
        text: "Berkas lamaran harus berformat PDF",
        confirmButtonColor: "#b45309",
      });
      return false;
    }

    if (file.size > 2 * 1024 * 1024) { // 2 MB
      Swal.fire({
        icon: "warning",
        title: "Ukuran berkas terlalu besar",
        text: "Maksimal ukuran berkas lamaran adalah 2 MB",
        confirmButtonColor: "#b45309",
      });
      return false;
    }
  }


    return true;
  };


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!(await validateForm())) return;

  // ❗ VALIDASI DULU
  if (!validateForm()) return;

  try {
    const formData = new FormData();
    formData.append("job_id", selectedJob.id);

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    await axios.post(
      "https://brewokode.site/api/lamaran",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Lamaran berhasil dikirim",
      confirmButtonColor: "#047857",
    });

    setForm({
      nama_lengkap: "",
      nik: "",
      email: "",
      no_hp: "",
      tanggal_lahir: "",
      alamat: "",
      tinggi_badan: "",
      berat_badan: "",
      pendidikan: "",
      asal_universitas: "",
      jurusan: "",
      pas_foto: null,
      berkas_lamaran: null,
    });

    setShowModal(false);

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Gagal!",
      text: "Gagal mengirim lamaran, silakan coba lagi",
      confirmButtonColor: "#991b1b",
    });
  }
};


  const fetchJobs = async () => {
    try {
      const res = await axios.get(API);
      setJobs(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "RS PKU Sruweng | Karir";
    fetchJobs();
  }, []);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/10 min-h-screen pb-5">
        <div className="pt-4">

          {/* HEADER */}
          <div data-aos="fade-up" className="lg:w-[80%] lg:mx-auto mx-2 text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-10 p-8 lg:h-36 h-30 rounded-lg shadow-ku mb-6">
            <h1 className="lg:text-2xl text-xl font-bold mb-1">Karir</h1>
            <div className="flex lg:text-base text-sm items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Karir</span>
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="lg:w-[80%] mx-2 lg:mx-auto grid grid-cols-1 gap-4">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="h-56 bg-white/70 animate-pulse rounded-lg"
                />
              ))}
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && jobs.length === 0 && (
            <div data-aos="fade-up" className="lg:w-[80%] lg:mx-auto mx-2 bg-white/80 rounded-lg py-6 text-center shadow-ku">
              <h2 className="lg:text-xl text-lg font-semibold text-red-800 mb-2">
                Belum Ada Lowongan
              </h2>
              <p className="text-slate-600 lg:text-base text-sm">
                Silakan kunjungi halaman ini secara berkala.
              </p>
            </div>
          )}

          {/* LIST JOB */}
          {!loading && jobs.length > 0 && (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:w-[80%] mx-2 lg:mx-auto">
              {jobs.map((item) => (
                <div
                  key={item.id} data-aos="fade-up"
                  className="bg-white/90 rounded-lg relative p-6 sm:p-8 shadow-ku"
                >
                  <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white py-1 rounded mb-3 text-center">
                    {item.title}
                  </h2>

                  <div className="text-slate-800 text-sm sm:text-base">
                    <p className="text-red-700 font-semibold mb-1">
                      Dibutuhkan Segera!
                    </p>
                    <p>
                      <span className="font-semibold">{item.title} {item.posisi}</span> dengan persyaratan sebagai berikut:
                    </p>

                    {/* PERSYARATAN */}
                    <ol className="list-disc list-inside mt-2">
                      {item.requirements?.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>

                    {/* BERKAS */}
                    <p className="text-red-700 font-semibold mt-3">
                      Melampirkan
                    </p>
                    <ol className="list-disc list-inside">
                      {item.documents?.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ol>

                    {/* FOOTER */}
                    <div className="flex justify-between items-end mt-14 font-semibold">
                     <button
                        onClick={() => {
                          setSelectedJob(item);
                          setShowModal(true);
                        }}
                        className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600
                                  text-white cursor-pointer px-8 py-1.5 rounded hover:text-yellow-300 hover:scale-[1.02]"
                      >
                        Lamar
                      </button>


                      <div className="text-center">
                        <p className="text-red-700">Batas Pendaftaran:</p>
                        <p className="text-red-700">
                          {formatTanggal(item.deadline)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
  
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full lg:mx-auto mx-2 max-w-5xl sm:p-6 p-2 relative max-h-[90vh] overflow-y-auto">

            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <h2 className="sm:text-2xl text-lg font-bold text-center text-emerald-700 sm:mb-6 mb-2">
              Form Lamaran Pekerjaan
            </h2>

            <p className="text-center text-slate-600 sm:mb-6 mb-3">
              Posisi: <span className="font-semibold">{selectedJob.description}</span>
            </p>

            <form onSubmit={handleSubmit}>

              {/* ================= DATA PRIBADI ================= */}
              <div className="section">
                <h3 className="section-title">Data Pribadi</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Nama Lengkap</label>
                    <input name="nama_lengkap" value={form.nama_lengkap} onChange={handleChange} className="input" required />
                  </div>

                  <div>
                    <label className="label">NIK</label>
                    <input name="nik" value={form.nik} onChange={handleChange} onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} className="input" required />
                  </div>

                  <div>
                    <label className="label">Email</label>
                    <input type="email" value={form.email} name="email" onChange={handleChange} className="input" required />
                  </div>

                  <div>
                    <label className="label">No. HP</label>
                    <input name="no_hp" value={form.no_hp} onChange={handleChange} className="input" required />
                  </div>

                  <div>
                    <label className="label">Tanggal Lahir</label>
                    <input type="date" value={form.tanggal_lahir} name="tanggal_lahir" onChange={handleChange} className="input" required/>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Tinggi Badan (cm)</label>
                      <input name="tinggi_badan" value={form.tinggi_badan} onChange={handleChange} className="input" required />
                    </div>

                    <div>
                      <label className="label">Berat Badan (kg)</label>
                      <input name="berat_badan" value={form.berat_badan} onChange={handleChange} className="input" required/>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="label">Alamat Lengkap</label>
                    <textarea
                      name="alamat"
                      rows="3"
                      onChange={handleChange}
                      className="input"
                      value={form.alamat}
                    />
                  </div>
                </div>
              </div>

              {/* ================= PENDIDIKAN ================= */}
              <div className="section">
                <h3 className="section-title">Riwayat Pendidikan</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Pendidikan Terakhir</label>
                    <select
                      name="pendidikan"
                      onChange={handleChange}
                      className="input bg-white"
                      value={form.pendidikan}
                      required
                    >
                      <option value="">-- Pilih Pendidikan --</option>
                      <option value="SMA/SMK">SMA / SMK</option>
                      <option value="D3">D3</option>
                      <option value="D4">D4</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">Asal Universitas / Sekolah</label>
                    <input name="asal_universitas" value={form.asal_universitas} onChange={handleChange} className="input" required />
                  </div>

                  <div className="md:col-span-2">
                    <label className="label">Jurusan</label>
                    <input name="jurusan" value={form.jurusan} onChange={handleChange} className="input" required/>
                  </div>
                </div>
              </div>

              {/* ================= BERKAS ================= */}
              <div className="section">
                <h3 className="section-title">Upload Berkas</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Pas Foto</label>
                    <input
                      type="file"
                      name="pas_foto"
                      accept="image/*"
                      onChange={handleChange}
                      className="input cursor-pointer"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Berkas Lamaran (PDF)</label>
                    <input
                      type="file"
                      name="berkas_lamaran"
                      accept=".pdf"
                      onChange={handleChange}
                      className="input cursor-pointer"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600
                          text-white py-3 rounded-lg cursor-pointer font-semibold hover:opacity-90 mb-14"
              >
                Kirim Lamaran
              </button>

            </form>
          </div>
        </div>
      )}




    </div>
  );
};

export default Karir;
