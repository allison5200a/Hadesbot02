const rules = (name, uptime, tanggal, jam, prefix) => {
return `

 BUDAYAKAN MEMBACA SUPAYA TIDAK BINGUNG.
╭───────────────────────
├➲ \`\`\`AKTIF\`\`\`: ${kyun(uptime)}
├➲ \`\`\`JAM\`\`\`: *${jam} WIB*
├➲ \`\`\`TANGGAL\`\`\`: *${tanggal}*
├➲ \`\`\`VERSION\`\`\`: 99999 TERMUX*
╰───────────────────────
 *「RULES ${name}」*
 
➲ ⚠️SPAM.⚠️      = *BANNED + BLOCK*
➲ ⚠️CALL / VC⚠️ = *BANNED + BLOCK*

 *「BUGS ${name}」*

➲ *1.CHATLIST*
➲ *2.CNEON*
➲ *3.CNEON2*
➲ *4.TRIGGER*
➲ *5.WASTED*
➲ *6.C3D*
➲ *7.SIMI*
➲ *8.GETSES*

 *「 NOTE ${name} 」*
 
➲ Bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari bot ini.

➲Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
 - Bot tidak menyimpan data anda di server kami.
 - Bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari bot ini.
 - Bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
     • seks / perdagangan manusia
     • perjudian
     • perilaku adiktif yang merugikan 
     • kejahatan
     • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
     • pembakaran hutan / penggundulan hutan
     • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

➲ Baileys Typescript/Javascript WhatsApp Web API: https://github.com/adiwajshing/baileys

➲  *KASIH BOT JEDA 5 DETIK BIAR GA ERROR!!!!*

➲ \`\`\`Bot ini belum selesai sepenuhnya\`\`\`
    \`\`\`Masih dalam proses pengerjaan\`\`\`
     \`\`\`Jadi masih jarang aktif, dan\`\`\`
 .    .\`\`\`Maaf Jika Ada Menu Yang Error\`\`\`
 
➲ \`\`\`Jika Lama Harap Ulangi Command\`\`\`

➲ *Gunakan Command Tanpa [ ]*

➲ \`\`\`Dan Jika Mengalami Error\`\`\`
    \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
➲  *${prefix}report* \`\`\`apa pesan errornya\`\`\`

➲ \`\`\`Mau Invit Bot?? Donasi Gan,\`\`\`
    \`\`\`Kalo Gamau Donasi Follow Ig\`\`\`
     \`\`\`@bryan_rafly09\`\`\`

➲  \`\`\`Kalian Bisa Mempublish Quotes Kalian\`\`\`
 \`\`\`Jika Minat Hubungi Aja Owner Buat\`\`\`
  \`\`\`Mempublish\`\`\`
   \`\`\`Quotes Kalian,\`\`\`
    \`\`\`Dan Makasih Buat Temen" Yg Mau Di Public\`\`\`
.    \`\`\`Quotesnya:)\`\`\`

➲ \`\`\`Kenapa Saya Tambahkan Fitur Premium\`\`\`
.. \`\`\`You Know Lah Karna Fitur Tersebut\`\`\`
   \`\`\`Membutuhkan Kuota Banyak Untuk Mendownload\`\`\`
    \`\`\`Dan Mengirimkan Audio/ Video Yang\`\`\`
     \`\`\`Anda Minta Mohon Pengertiannya🙂\`\`\`
`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}