export const searchData = (arr, inputValue) => {
    const currentData = arr.filter(val => {
      // eslint-disable-next-line eqeqeq
      if (inputValue == "") {
        return val
      }
      else if (val.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return val
      }
      else if (val.body.toLowerCase().includes(inputValue.toLowerCase())) {
        return val
      }
      else if (String(val.id).includes(inputValue)) {
        return val
      }
      else if (String(val.userId).includes(inputValue)) {
        return val
      }
    })
    return currentData
  }