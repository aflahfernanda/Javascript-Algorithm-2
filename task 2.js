//dengan callback null
// const getMonth=(callback)=>{
//     setTimeout(()=>{
//         let error=false
//         let month=['januari','februari','maret','april','mei','juni','juli',
//                     'agustus','september','oktober','november','desember']
//         if(!error){
//             callback(null,month)
//         }else{
//             callback(new Error('sorry data not found'),[])
//         }
//     },3000)
// }
// const showMonth=(month,isError)=>{
//     let monthMap
//     setTimeout(()=>{
//         if(isError){
//             new Error('sorry data not found')
//         }else  {
//             monthMap=month.map(function(e){
//                 return e
//             })
//             monthMapJoin=monthMap.join('\n')
//             console.log(monthMapJoin)}
//     },1000)
// }

// getMonth((isError,hasilMonth) => {
//     showMonth(hasilMonth)
// })

//-------------------------------------------------------------------------------------------------------------------------------
//tanpa callback(null)




const getMonth=(callback)=>{
    setTimeout(()=>{
        let error=false
        let month=['januari','februari','maret','april','mei','juni','juli',
                    'agustus','september','oktober','november','desember']
        if(!error){
            callback(month)
        }else{
            callback(new Error('sorry data not found'),[])
        }
    },3000)
}
const showMonth=(month,isError)=>{
    let monthMap
    setTimeout(()=>{
        if(isError===Error){
            new Error('sorry data not found')
        }else  {
            monthMap=month.map(function(e){
                return e
            })
            monthMapJoin=monthMap.join('\n')
            console.log(monthMapJoin)}
    },1000)
}

getMonth(showMonth)

