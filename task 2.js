const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("sorry data not found"), []);
    }
  }, 3000);
};

function showMonth(dataError, isMonth) {
  setTimeout(() => {
    if (dataError) {
      return console.log(new Error("sorry data not found"));
    } else {
      return isMonth.map((month) => console.log(month));
    }
  }, 1000);
}

getMonth(showMonth);
