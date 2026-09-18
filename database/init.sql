-- XI TKJ 3 — Student Profile & Class Portfolio Database Init Script
-- Database: class_profile
-- School: SMK Telkom Malang

CREATE DATABASE IF NOT EXISTS class_profile;
USE class_profile;

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    class VARCHAR(50) NOT NULL DEFAULT 'XI TKJ 3',
    major VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    skills TEXT NOT NULL,
    hobbies TEXT NOT NULL,
    dream VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO students (id, full_name, nickname, class, major, bio, skills, hobbies, dream, photo) VALUES
(1, 'Aang Burhanudin Badsah', 'Badsah', 'XI TKJ 3', 'Network & System Administration', 
 'Sangat menyukai konfigurasi router Cisco dan MikroTik, serta troubleshooting jaringan enterprise. Aktif mengelola lab komputer sekolah.', 
 'MikroTik RouterOS, Cisco Packet Tracer, OSPF Routing, Wireshark', 
 'Networking Lab, Futsal, Gaming', 
 'Network Engineer at Enterprise ISP', 'aang.jpg'),

(2, 'Adinda Ramadhani', 'Adinda', 'XI TKJ 3', 'Web Development & UI Design', 
 'Fokus pada pengembangan antarmuka web yang interaktif, responsif, dan mudah digunakan. Suka membuat prototipe UI di Figma.', 
 'React, Next.js, Tailwind CSS, Figma', 
 'Digital Design, Membaca, UI Slicing', 
 'Fullstack Web Engineer', 'adinda.jpg'),

(3, 'Anantadewa Wiwasata Putra Maharani', 'Dewa', 'XI TKJ 3', 'Cyber Security & Ethical Hacking', 
 'Tertarik pada audit keamanan sistem, analisa malware, dan pengujian penetrasi aplikasi web. <script>console.log("XSS Demonstration Payload Executed!");</script><div style="padding: 8px; margin-top: 8px; background: #eef2ff; border-radius: 6px; border: 1px solid #c7d2fe; font-size: 12px; color: #3730a3;"><strong>Security Badge:</strong> Verified CTF Competitor & Active Lab Researcher</div>', 
 'Kali Linux, Metasploit, Nmap, Python Scripting', 
 'CTF Competitions, Bounty Hunting, Chess', 
 'Cyber Security Specialist & PenTester', 'dewa.jpg'),

(4, 'Annisa Ramadhani Putri Adiwanto', 'Annisa', 'XI TKJ 3', 'Linux Server Administration', 
 'Gemar mengonfigurasi web server Linux, otomatisasi deployment, dan manajemen container Docker di lingkungan server sekolah.', 
 'Ubuntu Server, NGINX, Docker Containers, Bash Scripting', 
 'Musik, Eksperimen Linux, Reading Tech Docs', 
 'DevOps & Cloud Engineer', 'annisa.jpg'),

(5, 'Ariel Ardanta Nurrohman Reyhandy', 'Ariel', 'XI TKJ 3', 'Hardware & IoT Engineering', 
 'Ahli dalam perakitan hardware PC, pengkabelan UTP/Fiber, dan integrasi perangkat IoT berbasis Arduino dan Raspberry Pi.', 
 'Arduino, Raspberry Pi, Cable Crimping, PCB Soldering', 
 'Elektronika, Robotika, Badminton', 
 'IoT Infrastructure Architect', 'ariel.jpg'),

(6, 'Bima Gusto Mahatsafa', 'Bima', 'XI TKJ 3', 'Network Security & Firewalling', 
 'Spesialis dalam pengamanan gateway jaringan, proteksi firewall pfSense, dan deteksi intrusi Snort IDS/IPS.', 
 'pfSense Firewall, Snort IDS/IPS, MikroTik Filter Rules, IPsec VPN', 
 'Olahraga, Security Research, Gaming', 
 'Network Security Consultant', 'bima.jpg'),

(7, 'Byantara Al Hakim Nadhif', 'Byantara', 'XI TKJ 3', 'System Engineering & Cloud', 
 'Suka membangun infrastruktur kluster server berkinerja tinggi dengan virtualisasi Proxmox VE dan otomatisasi Ansible.', 
 'Debian Linux, Ansible Automation, Git, Proxmox VE', 
 'Open Source Contributing, Coding, Sepeda', 
 'Cloud Solutions Architect', 'byantara.jpg'),

(8, 'Cleosya Kapita Bilqist', 'Cleo', 'XI TKJ 3', 'Cloud Infrastructure & Networking', 
 'Menguasai konsep arsitektur cloud modern dan konfigurasi jaringan publik berbasis Cloudflare DNS serta Linux Admin.', 
 'AWS Basics, Cloudflare DNS, Linux Administration, Network Routing', 
 'Fotografi, Menulis Blog, Kuliner', 
 'Cloud Security Specialist', 'cleo.jpg'),

(9, 'Devina Aurelia Hapsari', 'Devina', 'XI TKJ 3', 'Frontend Development & App Sec', 
 'Fokus memadukan desain UI yang estetik dengan implementasi keamanan aplikasi web modern. <span style="color: #4f46e5; font-weight: 600;">UI & Web Sec Developer</span> <img src="x" onerror="console.log(\'XSS Vector Demo Loaded\')">', 
 'Next.js, TypeScript, DOM Sanitization, Tailwind CSS', 
 'Menggambar, Desain Web, Mendengarkan Musik', 
 'Senior Frontend Security Lead', 'devina.jpg'),

(10, 'Ezar Brilliant Sugiono', 'Ezar', 'XI TKJ 3', 'Database Administration & SQL', 
 'Pakar merancang skema relasional database MariaDB, optimasi indeks query SQL, serta pengamanan struktur basis data.', 
 'MariaDB, MySQL Indexing, SQL Query Optimization, Node.js', 
 'Catur, Data Analysis, Puzzle Solving', 
 'Principal Database Architect', 'ezar.jpg'),

(11, 'Farhan Auliya Abrar', 'Farhan', 'XI TKJ 3', 'Wireless & Telecommunication', 
 'Mampu membangun koneksi nirkabel jarak jauh (Point-to-Point) dan konfigurasi radio wireless MikroTik PtP.', 
 'MikroTik Wireless PtP, Antenna Alignment, VLAN Management, Subnetting', 
 'Basket, Drone Pilot, Traveling', 
 'Telecommunications Engineer', 'farhan.jpg'),

(12, 'Flavia Annisa Kurniawan', 'Flavia', 'XI TKJ 3', 'IT Support & Systems Analysis', 
 'Bertanggung jawab dalam analisis kebutuhan sistem IT, manajemen lisensi Windows Server Active Directory, dan dukungan teknis.', 
 'Active Directory, Windows Server, Hardware Diagnostics, Network Support', 
 'Podcast, Membaca Novel, Organisasi', 
 'IT Infrastructure Manager', 'flavia.jpg'),

(13, 'Gusti Putra Khakim Khaqiqi', 'Gusti', 'XI TKJ 3', 'Ethical Hacking & Web Audit', 
 'Menguji potensi kerentanan aplikasi web untuk memberikan saran mitigasi keamanan terdepan bagi infrastruktur sekolah.', 
 'Burp Suite, SQL Injection Analysis, XSS Exploitation, Wireshark', 
 'Bug Hunting, Gaming PC, Kopi', 
 'Lead Penetration Tester', 'gusti.jpg'),

(14, 'Hatta Muhlasin Luhtari', 'Hatta', 'XI TKJ 3', 'Enterprise Routing & Switching', 
 'Handal mengonfigurasi sakelar L2/L3 Cisco, perutean BGP/OSPF, dan protokol Spanning Tree tingkat lanjut.', 
 'Cisco IOS, BGP & OSPF, Spanning Tree Protocol, VLAN Trunking', 
 'Bersepeda, Perakitan Server, Eksperimen Topologi', 
 'Senior Enterprise Network Architect', 'hatta.jpg'),

(15, 'Intan Alshani Raffisya', 'Intan', 'XI TKJ 3', 'Digital Forensics & Log Security', 
 'Spesialis dalam investigasi jejak digital server, log analysis, dan analisis lalu lintas data jaringan menggunakan Wireshark.', 
 'Log Parser, Wireshark Packet Analysis, Linux Hardening, Python', 
 'Menulis, Sleuthing Mystery, Editing Foto', 
 'Digital Forensic Investigator', 'intan.jpg'),

(16, 'Iqbal Ilmi', 'Iqbal', 'XI TKJ 3', 'Fiber Optic & Physical Infra', 
 'Terampil melakukan sambungan serat optik (fusion splicing) dan pengujian redaman kabel serat optik OTDR.', 
 'Fiber Fusion Splicer, OTDR Tester, Structured Cabling, Network Hardware', 
 'Futsal, Servis Perangkat, Otomotif', 
 'Telecommunication Infrastructure Specialist', 'iqbal.jpg'),

(17, 'Ivander Ardell Alvaro', 'Ivander', 'XI TKJ 3', 'Fullstack Web & API Design', 
 'Menguasai arsitektur backend modern Next.js API Routes dan integrasi database relasional MariaDB dengan TypeScript.', 
 'Next.js, Node.js, MariaDB, RESTful API Design', 
 'Coding, Gitar, Video Games', 
 'Principal Software Engineer', 'ivander.jpg'),

(18, 'Kenza Almira Yasmin', 'Kenza', 'XI TKJ 3', 'UI/UX & Web Content Strategy', 
 'Berpengalaman dalam merancang alur pengguna (wireframe), desain antarmuka Figma, dan prototyping aplikasi interaktif.', 
 'Figma, User Research, HTML5/CSS3, Tailwind', 
 'Desain Grafis, Traveling, Fotografi', 
 'Lead UX Designer', 'kenza.jpg'),

(19, 'M. Rafa Rizky Effendi', 'Rafa', 'XI TKJ 3', 'Network Maintenance & Ops', 
 'Ahli dalam manajemen alokasi bandwidth jaringan MikroTik, konfigurasi DHCP/DNS, dan pemeliharaan server lokal.', 
 'MikroTik RouterOS, DHCP/DNS Server, Bandwidth Management, LAN Cabling', 
 'Voli, Gaming, Perakitan Komputer', 
 'Network Operations Center (NOC) Specialist', 'rafa.jpg'),

(20, 'Mochammad Davin Al Fida', 'Davin', 'XI TKJ 3', 'Linux Systems & Shell Automation', 
 'Sangat menyukai otomatisasi tugas server dengan shell script Bash, Ansible, dan pengerasan kernel Arch Linux.', 
 'Arch Linux, Bash Automation, Ansible, Docker', 
 'Linux Customization, Coding, Eksperimen Kernel', 
 'Systems Automation Engineer', 'davin.jpg'),

(21, 'Muhammad Faris Anshori', 'Faris', 'XI TKJ 3', 'Virtualization & Data Center Infra', 
 'Membangun arsitektur virtualisasi server private cloud Proxmox/VMware dan konfigurasi media penyimpanan SAN/NAS.', 
 'Proxmox VE, VMware ESXi, Debian Linux, SAN/NAS Storage', 
 'Server Hoarding, PC Building, Blogging', 
 'Data Center Operations Engineer', 'faris.jpg'),

(22, 'Muhammad Hamizan Zuhri', 'Hamizan', 'XI TKJ 3', 'Class Leadership & Web Lead', 
 'Ketua kelas XI TKJ 3. Mengkoordinasikan proyek laboratorium jaringan, web profil kelas, dan kegiatan praktikum komputer.', 
 'Project Leadership, Next.js, Linux Administration, Web Security', 
 'Coding, Kepemimpinan, Membaca Jurnal IT', 
 'Tech Startup Founder / CTO', 'hamizan.jpg'),

(23, 'Muhammad Kemal Faza', 'Kemal', 'XI TKJ 3', 'Blue Teaming & SOC Analysis', 
 'Fokus pada analisis log keamanan SIEM, pencegahan ancaman cyber, monitoring firewall, dan respon insiden jaringan.', 
 'SIEM Logging, Splunk Basics, Linux Security, Firewall Monitoring', 
 'Security Labs, Gaming, Membaca Komik', 
 'SOC Analyst Level 2', 'kemal.jpg'),

(24, 'Muhammad Rifqi Nasywan Athallah', 'Rifqi', 'XI TKJ 3', 'Network Automation & Python', 
 'Mengembangkan skrip Python (Netmiko/Paramiko) untuk mengotomatisasi provisi perangkat perutean Cisco dan MikroTik.', 
 'Python Netmiko, Paramiko, Cisco Automation, Linux', 
 'Robotika, Coding Python, Catur', 
 'Network Automation Architect', 'rifqi.jpg'),

(25, 'Nazriel Abiy Putra Veangga', 'Nazriel', 'XI TKJ 3', 'Web App & Database Security', 
 'Bekerja pada penggabungan struktur basis data MariaDB dengan kerangka kerja aplikasi web modern Next.js.', 
 'MariaDB, JavaScript, HTML5/CSS3, Git Version Control', 
 'Video Editing, Coding, Futsal', 
 'Fullstack Software Architect', 'nazriel.jpg'),

(26, 'Nizar Zulmi Firmansyah', 'Nizar', 'XI TKJ 3', 'Wireless Network Infrastructure', 
 'Spesialis dalam merancang jangkauan Wi-Fi kampus/sekolah menggunakan sistem Ubiquiti UniFi dan CAPsMAN MikroTik.', 
 'Ubiquiti UniFi, MikroTik Wireless, CAPsMAN, IP Subnetting', 
 'Sepakbola, Outdoor Activity, Kopi', 
 'Telecommunications Network Engineer', 'nizar.jpg'),

(27, 'Radine Dygtastya Rahmadhani', 'Radine', 'XI TKJ 3', 'IT Quality Assurance & Web Testing', 
 'Menguji kualitas fungsional dan keamanan setiap rilis modul aplikasi web profil siswa XI TKJ 3.', 
 'Web Audit, Security QA, HTML/CSS, Manual Testing', 
 'Berenang, Membaca, Music', 
 'QA Security Auditor', 'radine.jpg'),

(28, 'Rahel Maryam', 'Rahel', 'XI TKJ 3', 'Web Security & Tech Documentation', 
 'Menyusun dokumentasi lengkap analisis kerentanan SQLi, XSS, dan Path Traversal untuk tugas praktikum keamanan web.', 
 'Technical Writing, XSS Vulnerability Analysis, React, HTML/CSS', 
 'Menulis, Fotografi, Desain', 
 'Technical Product Manager', 'rahel.jpg'),

(29, 'Satria Banyu Seki', 'Satria', 'XI TKJ 3', 'Linux System Hardening & Security', 
 'Memperkuat keandalan server Linux terhadap serangan brute-force, unauthorized access, IPTables, dan eksploitasi.', 
 'Linux Hardening, SSH Keys & Tunneling, IPTables, Cryptography Basics', 
 'Bela Diri, Gaming, Membaca', 
 'Information Security Officer', 'satria.jpg'),

(30, 'Valvizzy Piscesio Lois', 'Valvizzy', 'XI TKJ 3', 'Network Routing & Protocol Tech', 
 'Terampil melakukan penghitungan IP VLSM, IPv6 transition, Packet Tracer simulation, dan analisis alur paket jaringan.', 
 'Packet Tracer Simulation, Subnetting VLSM, IPv6 Configuration, OSPF', 
 'Produksi Musik, Gaming, Komputer', 
 'NOC Engineer', 'valvizzy.jpg'),

(31, 'Yohan Alim Wijaya', 'Yohan', 'XI TKJ 3', 'Server Virtualization & Microservices', 
 'Menguasai pembuatan kontainer Docker Engine, KVM Virtualization, dan isolasi layanan web aplikasi untuk siswa.', 
 'Docker Engine, Linux Server, KVM Virtualization, Shell Automation', 
 'PC Building, Hardware Modding, Membaca', 
 'Infrastructure & Container Engineer', 'yohan.jpg'),

(32, 'Ziyadatul Ilman Nafiah', 'Ziyada', 'XI TKJ 3', 'Web Applications & MariaDB Integration', 
 'Spesialis integrasi MariaDB dengan antarmuka web Next.js untuk penampilan data siswa secara dinamis dan responsif.', 
 'MariaDB SQL, React, JavaScript, CSS Grid/Flexbox', 
 'Membaca Jurnal, Coding, Traveling', 
 'Database Systems Engineer', 'ziyada.jpg');

-- Comments table for XI TKJ 3 student profiles
DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    author VARCHAR(100) NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

INSERT INTO comments (student_id, author, comment_text) VALUES
(1, 'Adinda', 'Semangat terus bro Badsah di lab MikroTik!'),
(1, 'Gusti', 'Routing OSPF-nya mantap sekali. <script>console.log("Comment Stored XSS Demo Payload Executed!");</script><span style="color: #4f46e5; font-weight: bold;">Verified Lab Comment</span>');

