<?php

namespace Database\Seeders;

use App\Models\NewsSection;
use Illuminate\Database\Seeder;

class NewsSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $news_sections = [
            [
                'title' => 'Universitas Al-Khairiyah Gelar Training dan Sertifikasi Kompetisi Ahli K3 Umum',
                'description' => 'Pelatihan dan uji kompetensi ahli K3 Umum & K3 Konstruksi (BNSP) bekerjasama dengan petugas K3, diikuti 106 mahasiswa pada Sabtu (11/3/2023).',
                'date' => '2023-05-15',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/05/IMG-20230311-WA0014.jpeg',
                'created_at' => '2023-05-15 07:09:00',
                'updated_at' => '2023-05-15 07:09:00',
            ],
            [
                'title' => 'Tingkatkan Tri Dharma Perguruan Tinggi dan MBKM, LPPM UNIVAL Mengajak PT Dong Jin Untuk Berkolaborasi',
                'description' => 'Kerjasama UNIVAL dengan PT Dong Jin (industri kimia dasar) untuk program MBKM, PKL/magang, kurikulum industri, dan dosen praktisi.',
                'date' => '2023-05-29',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/05/kerjasama.jpeg',
                'created_at' => '2023-05-29 07:05:03',
                'updated_at' => '2023-05-29 07:05:03',
            ],
            [
                'title' => 'Rektor Universitas Al-Khairiyah Ajak Mahasiswa Giatkan Ruang Diskusi',
                'description' => 'Rektor UNIVAL Dr. Rafiudin membuka Seminar Nasional Ekonomi FEB UNIVAL dengan penceramah Faisal Basri, Riau Fahardhi, dan Mia Lastriana.',
                'date' => '2023-06-15',
                'image_url' => null,
                'created_at' => '2023-06-15 08:30:25',
                'updated_at' => '2023-06-15 08:30:25',
            ],
            [
                'title' => 'Bazar Expo Produk UMKM Mahasiswa Fakultas Ekonomi dan Bisnis Universitas Al-Khairiyah',
                'description' => 'Inkubator bisnis/bazar expo UMKM FEB UNIVAL diikuti 36 kelompok (252 mahasiswa) semester 2 mata kuliah Pengantar Bisnis & Kewirausahaan.',
                'date' => '2023-07-06',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/07/Gambar-WhatsApp-2023-07-06-pukul-12.51.15.jpg',
                'created_at' => '2023-07-06 15:13:49',
                'updated_at' => '2023-07-06 15:13:49',
            ],
            [
                'title' => 'Fakultas Ekonomi Bisnsi (FEB) Universitas Al-Khairiyah mengadakan Praktisi Mengajar',
                'description' => 'Kegiatan Praktisi Mengajar bertema "Meraih Masa Depan Setelah Wisuda" di Aula STIT Al-Khairiyah.',
                'date' => '2023-07-12',
                'image_url' => null,
                'created_at' => '2023-07-12 04:28:30',
                'updated_at' => '2023-07-12 04:28:30',
            ],
            [
                'title' => 'UNIVAL dan PT NS BlueScope Salurakan Booth Contianer ke Pasar Merak Kota Cilegon',
                'description' => 'Penyaluran Booth Container karya mahasiswa FT UNIVAL bekerjasama dengan PT NS BlueScope ke Pasar Merak Cilegon untuk pedagang UMKM.',
                'date' => '2023-07-24',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/07/Gambar-WhatsApp-2023-07-24-pukul-19.46.33.jpg',
                'created_at' => '2023-07-24 16:35:17',
                'updated_at' => '2023-07-24 16:35:17',
            ],
            [
                'title' => 'Fakultas Teknik Melakukan Perjanjian Kerjasama dengan Kelurahan Citangkil Kota Cilegon',
                'description' => 'Perjanjian kerjasama pengabdian masyarakat FT UNIVAL dengan Kelurahan Citangkil (binaan KWT/PKK hidroponik & workshop).',
                'date' => '2023-07-24',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/07/Gambar-WhatsApp-2023-07-24-pukul-23.38.05.jpg',
                'created_at' => '2023-07-24 16:53:40',
                'updated_at' => '2023-07-24 16:53:40',
            ],
            [
                'title' => 'PT Wings dan Unival Memberikan sabun cair di Lingkungan Unival',
                'description' => 'Bantuan sosial berupa pengabdian masyarakat dari PT Wings dan Humas UNIVAL dengan membagikan sabun mandi cair di lingkungan kampus.',
                'date' => '2023-07-26',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/07/IMG_20230724_101047.jpg',
                'created_at' => '2023-07-26 03:13:08',
                'updated_at' => '2023-07-26 03:13:08',
            ],
            [
                'title' => 'Mahasiswa Fakultas Teknik berkunjung ke PT Lotte Chemical Titan',
                'description' => 'Industrial visit 50 mahasiswa FT UNIVAL ke PT Lotte Chemical Titan Nusantara (LCTN) pada Kamis (27/7/2023).',
                'date' => '2023-07-27',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/07/Gambar-WhatsApp-2023-07-27-pukul-18.09.52.jpg',
                'created_at' => '2023-07-27 11:12:01',
                'updated_at' => '2023-07-27 11:12:01',
            ],
            [
                'title' => 'Hadir Universitas Al-Khairiyah dalam Acara Kemitraan IKM Logam Kota Cilegon',
                'description' => 'Dekan FT UNIVAL menghadiri acara Kemitraan IKM Logam Kota Cilegon bersama Wali Kota Helldy Agustian & Dirjen IKMA Kemenperin.',
                'date' => '2023-08-01',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Gambar-WhatsApp-2023-08-01-pukul-12.19.00.jpg',
                'created_at' => '2023-08-01 09:36:43',
                'updated_at' => '2023-08-01 09:36:43',
            ],
            [
                'title' => 'Universitas Al-Khairiyah di Undang Walikota Kota Cilegon dalam acara FGD Pembahasan Policy Brief',
                'description' => 'Dekan FEB UNIVAL hadir FGD Pembahasan Policy Brief di The Royale Krakatau, mengusulkan sinergi Pentahelix & regulasi UMKM.',
                'date' => '2023-08-01',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Gambar-WhatsApp-2023-08-01-pukul-15.19.03.jpg',
                'created_at' => '2023-08-01 17:35:37',
                'updated_at' => '2023-08-01 17:35:37',
            ],
            [
                'title' => 'Universitas Al-Khairiyah Ikut Serta Dalam Menurunkan Stunting Kota Cilegon',
                'description' => 'Humas UNIVAL menghadiri penandatanganan Pakta Integritas dalam acara Rembuk Stunting Kota Cilegon di Bappeda.',
                'date' => '2023-08-01',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Screenshot_20230715_160641_WhatsApp.jpg',
                'created_at' => '2023-08-01 17:59:28',
                'updated_at' => '2023-08-01 17:59:28',
            ],
            [
                'title' => 'UNIVAL MENGHADIRI UNDANGAN LLDIKTIIV TERKAIT PENYUSUNAN PROPOSAL PENELITIAN DOSEN PEMULA',
                'description' => 'Erlina Sari Pohan (Dosen FEB UNIVAL) mewakili kampus dalam Bimtek Penyusunan Proposal Penelitian Dosen Pemula LLDIKTI IV di Bandung.',
                'date' => '2023-08-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Gambar-WhatsApp-2023-08-03-pukul-12.56.13.jpg',
                'created_at' => '2023-08-04 03:44:19',
                'updated_at' => '2023-08-04 03:44:19',
            ],
            [
                'title' => 'MAHASISWA DAN DOSEN PENDAMPING LAPANGAN KAMPUS MENGAJAR BERKUNJUNG KE DINAS PENDIDIKAN KOTA CILEGON',
                'description' => '8 mahasiswa & 1 DPL Kampus Mengajar Angkatan 6 dari UNIVAL bersilaturahmi dan koordinasi ke Dindik Kota Cilegon.',
                'date' => '2023-08-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Gambar-WhatsApp-2023-08-03-pukul-13.0.jpg',
                'created_at' => '2023-08-04 04:13:58',
                'updated_at' => '2023-08-04 04:13:58',
            ],
            [
                'title' => '10 Mahasiswa UNIVAL Mengkuti KKN Tematik PTM2D Wilayah Jabar dan Banten',
                'description' => 'Pelepasan 10 mahasiswa UNIVAL KKN Tematik PTM2D LLDIKTI IV di Kabupaten Serang (Petir, Anyer, Pulo Panjang).',
                'date' => '2023-08-20',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/08/Gambar-WhatsApp-2023-08-19-pukul-19.18.23.jpg',
                'created_at' => '2023-08-20 01:05:27',
                'updated_at' => '2023-08-20 01:05:27',
            ],
            [
                'title' => 'DEKAN DAN PRODI FAKULTAS EKONOMI BISNIS DAN FAKULTAS ILMU KOMPUTER MENGUNJUNGI MAHASISWANYA YANG SEDANG MENGIKUTI KEGIATAN KKN TEMATIK LLDIKTI WILAYAH IV',
                'description' => 'Dekan FEB & FIK mengunjungi posko KKN Tematik LLDIKTI IV di Pulau Panjang dan Petir, Kabupaten Serang.',
                'date' => '2023-09-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/09/Gambar-WhatsApp-2023-09-04-pukul-09.42.25.jpg',
                'created_at' => '2023-09-04 02:44:49',
                'updated_at' => '2023-09-04 02:44:49',
            ],
            [
                'title' => 'RAPAT DOSEN BERASAMA PIMPINAN UNIVAL TERKAIT AJARAN BARU GANJIL TAHUN AKADEMIK 2023/2024',
                'description' => 'Rapat umum dosen semester ganjil TA 2023/2024 dipimpin Rektor & Warek I untuk penyamaan persepsi pembelajaran.',
                'date' => '2023-09-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/09/Gambar-WhatsApp-2023-09-02-pukul-10.20.58.jpg',
                'created_at' => '2023-09-04 02:57:05',
                'updated_at' => '2023-09-04 02:57:05',
            ],
            [
                'title' => 'Fakultas Ekonomi Bisnis (FEB) Universitas Al-Khairiyah Menandatangani Perjanjian Kerjasama Dengan PT Krakatau Sarana Properti (KSP)',
                'description' => 'Penandatanganan PKS antara FEB UNIVAL dan PT KSP untuk Tri Dharma, kurikulum industri, dan pengembangan SDM.',
                'date' => '2023-09-08',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/09/Gambar-WhatsApp-2023-09-08-pukul-17.01.00.jpg',
                'created_at' => '2023-09-08 14:18:41',
                'updated_at' => '2023-09-08 14:18:41',
            ],
            [
                'title' => 'Fakultas Ilmu Komputer (FIK), Fakultas Ekonomi Bisnis (FEB), Fakultas Teknik (FT), dan Fakultas Agama Islam (FAI) mengadakan sosialisasi Tentang Sistem Akademik (SIAK) kepada Mahasiswa Baru',
                'description' => 'Sosialisasi Sistem Informasi Akademik (SIAK) bagi mahasiswa baru tahun ajaran 2023/2024 oleh Biro SIAK UNIVAL.',
                'date' => '2023-09-08',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/09/Gambar-WhatsApp-2023-09-06-pukul-23.33.jpg',
                'created_at' => '2023-09-08 14:42:17',
                'updated_at' => '2023-09-08 14:42:17',
            ],
            [
                'title' => 'Kunjungan LPPM UNIVAL ke PT BlueScope',
                'description' => 'LPPM UNIVAL menyerahkan laporan pertanggungjawaban pendistribusian hibah Booth Container UMKM kepada jajaran direksi PT BlueScope.',
                'date' => '2023-09-08',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/09/Gambar-WhatsApp-2023-09-08-pukul-16.03.52.jpg',
                'created_at' => '2023-09-08 15:10:52',
                'updated_at' => '2023-09-08 15:10:52',
            ],
            [
                'title' => 'Wisuda Perguruan Tinggi Al-Khairiyah, Haji Mumu Pesankan Mahasiswa Berilmu Semakin Taat Dan Berbakti Kepada Orangtua',
                'description' => "Wisuda Sarjana & D3 Angkatan III UNIVAL dan XII STIT Al-Khairiyah di Aula Brigjen KH Syam'un, orasi ilmiah oleh Yandri Susanto (Wakil Ketua MPR RI).",
                'date' => '2023-12-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/IMG-20231127-WA0008-750x430-4.jpg',
                'created_at' => '2023-12-04 07:29:22',
                'updated_at' => '2023-12-04 07:29:22',
            ],
            [
                'title' => 'Melalui Tri Dharma Perguruan Tinggi, Universitas Al-Khairiyah Ikut Serta Dalam Kegiatan KKN Tematik PTM2D',
                'description' => 'UNIVAL memaparkan hasil Kegiatan KKN Tematik PTM2D Desa Pulau Panjang di kantor LLDIKTI IV.',
                'date' => '2023-12-04',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/1ceed51a-c50d-42e2-bccc-bf24c5bbec36.jpeg',
                'created_at' => '2023-12-04 10:21:15',
                'updated_at' => '2023-12-04 10:21:15',
            ],
            [
                'title' => 'Band UNIVAL Raih Juara ke-3 di Festival Band 10 Musik UPI Serang',
                'description' => 'UKM UNIVAL Band meraih juara 3 dalam Festival Band 10 Musik se-Banten di Universitas Pendidikan Indonesia (UPI) Serang.',
                'date' => '2023-12-07',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/IMG-20231205-WA0030-800x445-1.jpg',
                'created_at' => '2023-12-07 01:42:24',
                'updated_at' => '2023-12-07 01:42:24',
            ],
            [
                'title' => 'Jalin Kerjasama, Universitas Al-Khairiyah MoU Dengan PT. Raffa Helical Bronze',
                'description' => 'Penandatanganan MoU kerjasama pendidikan, pemagangan, dan beasiswa antara UNIVAL dan PT. Raffa Helical Bronze.',
                'date' => '2023-12-07',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/1170c418-6682-405a-a8dd-59004964adc2.jpeg',
                'created_at' => '2023-12-07 04:45:06',
                'updated_at' => '2023-12-07 04:45:06',
            ],
            [
                'title' => 'Fakultas Ekonomi Bisnis (FEB) Al-Khairiyah Menggelar Lomba Debat & Seminar Ekonomi',
                'description' => 'FEB UNIVAL menggelar Lomba Debat & Seminar Ekonomi dengan narasumber Lina Mardiyah (CEO PT Sinar Selira Interfood) dan Nita Mardiyana.',
                'date' => '2023-12-07',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/IMG-20231019-WA0019.webp',
                'created_at' => '2023-12-07 05:34:27',
                'updated_at' => '2023-12-07 05:34:27',
            ],
            [
                'title' => 'Mahasiswa Universitas Al-Khairiyah (UNIVAL) Ikut Gelaran BJTC 1 PWI',
                'description' => 'Mahasiswa UNIVAL ikutan Banten Journalist Training Camp (BJTC 1) PWI Banten di Taman Wisata MBS Serang.',
                'date' => '2023-12-08',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-10.35.49.jpeg',
                'created_at' => '2023-12-08 03:39:39',
                'updated_at' => '2023-12-08 03:39:39',
            ],
            [
                'title' => 'Juara 1 Nasional Lomba Konten Kreator, Mahasiswa Disabilitas dari UNIVAL Ini Diundang Brownis Trans TV',
                'description' => 'Fauzi, mahasiswa disabilitas Prodi Teknik Informatika UNIVAL juara 1 Lomba Konten Kreator Kominfo, diundang sebagai bintang tamu Brownis Trans TV.',
                'date' => '2023-12-09',
                'image_url' => 'https://unival-cilegon.ac.id/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-09-at-08.48.16.jpeg',
                'created_at' => '2023-12-09 02:14:22',
                'updated_at' => '2023-12-09 02:14:22',
            ],
        ];

        foreach ($news_sections as $key => $news_section) {
            NewsSection::create($news_section);
        }
    }
}
