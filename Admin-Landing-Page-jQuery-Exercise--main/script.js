$(document).ready(function() {
    // Klik tombol menu untuk toggle sidebar
    $('.menu-icon').click(function() {
        const sidebar = $('.sidebar');
        const mainContent = $('.main-content');

        if (sidebar.css('left') === '0px') {
            sidebar.animate({ left: '-220px' }, 300); // Sembunyikan
            mainContent.animate({ marginLeft: '0' }, 300);
        } else {
            sidebar.animate({ left: '0px' }, 300); // Munculkan
            mainContent.animate({ marginLeft: '220px' }, 300);
        }

        $('body').toggleClass('sidebar-closed sidebar-open'); // Menambah dan menghapus kelas
        sidebar.toggleClass('active'); // Toggle sidebar active class
    });

    // Tambahkan efek hover pada grafik menggunakan jQuery
    $('canvas').hover(
        function() {
            $(this).css({
                filter: 'brightness(1.2)',
                transform: 'scale(1.1)',
                opacity: '1'
            });
        },
        function() {
            $(this).css({
                filter: 'brightness(1)',
                transform: 'scale(1)',
                opacity: '0.9' // Opsi tambahan untuk membuat grafik sedikit lebih transparan
            });
        }
    );

    // Menyembunyikan elemen card dan menempatkannya di bawah tampilan
    $('.card').css({
        position: 'relative',
        bottom: '-100px', // Mengatur posisi awal elemen di bawah layar
        opacity: 0 // Mulai dengan transparan
    }).animate({
        bottom: '0px', // Menggerakkan elemen ke posisi semula (atas)
        opacity: 1 // Mengembalikan opacity menjadi 1
    }, 2000); // Durasi animasi

    // Menyembunyikan grafik dan budget container di bawah tampilan
    $('.chart, .budget-container').css({
        position: 'relative',
        bottom: '-500px', // Mengatur posisi awal elemen di bawah layar
        opacity: 0 // Mulai dengan transparan
    }).animate({
        bottom: '0px', // Menggerakkan elemen ke posisi semula (atas)
        opacity: 1 // Mengembalikan opacity menjadi 1
    }, 3000); // Durasi animasi

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Efek animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px' // Animasi perubahan ukuran teks
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '25px' // Kembali ke ukuran asli
        }, 400);
    });

    // Efek Show/Hide pada profil
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500); // Gambar akan hilang/muncul saat diklik
    });

    // Inisialisasi grafik (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Inisialisasi pie chart pertama
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Inisialisasi pie chart kedua
    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
