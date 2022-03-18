// //rumus menghitung volume dan luas permukaan limas segitiga menggunakan promise
const menentukanT = (t) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof t !== "number") {
            reject(new Error("input tinggi wajib angka!"))
        } else {
            console.log('diketahui tinggi = '+t)
            resolve(t)
        }
    }, 1000);
})

const hitungLuasPermukaan = (as, ts) => new Promise((resolve, reject) => {
    let luasPermukaan
    setTimeout(() => {
        if(typeof as !=='number' || typeof ts !=='number'){
            reject(new Error("input unsur luas permukaan wajib angka!"))
        }else{
        luasPermukaan = 1/2 * as * ts
        console.log('diketahui luas permukaan = '+luasPermukaan)
        resolve(luasPermukaan)
        }
    }, 1000);
})

const hitungVolume = (t,luasPermukaan) => {
    let volume
    setTimeout(() => {
        volume= 1/3*luasPermukaan*t
        console.log('volume limas segitiga = '+volume)
    }, 1000);
}


const t = 7
const as= 6
const ts= 13

menentukanT(t)
.then(() => hitungLuasPermukaan(as,ts))
.then((luasPermukaan) => hitungVolume(t,luasPermukaan))
.catch((error) => console.log(error))

//---------------------------------------------------------------------------------------------------
//mencari data didalam array
// const dataArr=(arr)=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(typeof arr =='string'){
//             reject(new Error('masukan data number'))
//         }else{
//             console.log('array yang diinput = '+arr)
//             resolve(arr)
//         }

//     },1000)
// })

// const filterData=(a,b,arr)=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let hasilSeleksi
//         if(typeof a !=='number'){
//             reject(new Error('masukan data number')) 
//         }else{
//             hasilSeleksi=arr.filter(function(e){
//                 return e>a && e<b;
//                 }
//             )}console.log('hasil array yang diseleksi adalah = '+hasilSeleksi)
//     },1000)
// })


// let arr= [1,2,3,4,5]
// let a=1
// let b=5

// dataArr(arr)
// .then(()=>filterData(a,b,arr))
// .catch((error) => console.log(error))

        