// fetch('http://www.omdbapi.com/?apikey=e2d656d2&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))

// PROMISE
//Object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event dari asyncronous di masa yang akan datang
//Janji (Terpenuhi / ingkar)
//states (fullfilled / rejected / pending)
//callback (resolve / reject / finally)
//Aksi (then / catch)

let ditepati = true
//contoh 1
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati')
//     } else {
//         reject('janji diingkari')
//     }
// });

// janji1
//     .then(response => console.log('Oke! : ' + response))
//     .catch(response => console.log('Sorry! : ' + response))

//contoh2
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('janji ditepati')
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('janji diingkari')
//         }, 2000)
//     }
// });

// console.log('Mulai');
// // console.log(janji2.then(() => { console.log(janji2); }));
// janji2
//     .finally(() => console.log('Selesai Menunggu!')
//     )
//     .then(response => console.log('Oke! : ' + response))
//     .catch(response => console.log('Sorry! : ' + response))
// console.log('Selesai');

// promise.all()

const film = new Promise((resolve, reject) => {
    setTimeout(() => resolve([{
        judul: 'Avengers',
        actors: 'John'
    }]), 2000)
})

const cuaca = new Promise((resolve, reject) => {
    setTimeout(() => resolve([{
        kota: 'Tasikmalaya',
        suhu: 26,
        kondisi: 'Berawan'
    }]), 500)
})


// film.then((response) => (console.log(response)))
// cuaca.then((response) => (console.log(response)))

Promise.all([film, cuaca])
    // .then(response => (console.log(response)))
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })

