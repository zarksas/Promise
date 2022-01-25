
const promiseSquare = (number) => {
    return new Promise((resolve, reject) => {
      square(number, (err, data) => {
          if (err) {
            reject (err)
          } else 
            resolve (data)
      })
    })
  }
  
  /* эту функцию изменять нельзя! */
  function square(number, callback) {
    setTimeout(() => {
      if(number === 0) {
        callback("Ошибка: число должно быть больше нуля", null);
      } else {
        const result = number * number;
        callback(null, result);
      }
    }, 1000);
  }
  
  promiseSquare(0).then((data) => {
    console.log(data)
  }).catch((err) => {
      console.log(err)
  })
  
  module.exports = promiseSquare;