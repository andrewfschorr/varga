import axois from 'axios';

window.axios = axois;

// this should be included in every context and is the bootstrapping-app logic
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

if (DATA_BS.user && !DATA_BS.user.avi) {
    DATA_BS.user.avi = '/images/avi.jpg';
}