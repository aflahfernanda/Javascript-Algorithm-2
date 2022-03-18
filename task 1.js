const hariKerja=(day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay=['senin','selasa','rabu','kamis','jumat']
            let cek=dataDay.find((item)=>{
                return item===day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('hari ini bukan hari kerja'))
            }
        },3000)
    })
}

const cetakHasil = (cek) => {
    setTimeout(() => {
        console.log("hari " + cek + ' merupakan hari kerja')
    }, 1000);
}

//promise
hariKerja('minggu')
.then((cek)=>cetakHasil(cek))
.catch((Error)=>console.log(Error))


//then catch
//penggunaan then digunakan untuk mencetak hasil dari fungsi hari kerja apabila fungsi hari kerja tersebut terdapat dalam data
//penggunaan catch digunakan untuk menangkap error yang terjadi apabila hasil hari tidak ditemukan
//penggunaan then catch merupakan nilai promise



//async await
async function cek(){
    try{
        const day = 'senin'
        const cek = await hariKerja(day)
        await cetakHasil(cek)
    } catch(error) {
        console.log(error)
    }
}

cek()

//try catch
//penggunaan try digunakan untuk mencetak hasil dari fungsi hari kerja apabila fungsi hari kerja tersebut terdapat dalam data
//  dengan memasukan input hari kedalam await
//penggunaan catch digunakan untuk menangkap error yang terjadi apabila hasil hari tidak ditemukan
//penggunaan try catch merupakan nilai async await