
const square = (number) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
      if(number === 0) {
        console.log("Ошибка: число должно быть больше нуля");
      } else {
        resolve (number **2);
    
      }
    }, 1000);
  })
  }
  
  square(4).then((data) => {
    console.log(data)
  })
  
  /*
   * После исправлений следующий код должен стать валидным
   * (а также успешно должны проходиться тесты)
  */
  
  // square(4).then((data) => {
  //   console.log(data);
  // }).catch((e) => {
  //   console.log(e);
  // })
  
  module.exports = square;