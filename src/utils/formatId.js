const formatId = (num) => {
  if(num < 10) {
    num = '00' + num
  } else if(num < 100) {
    num = '0' + num
  } else {
    num = num.toString()
  }
  return num
}

export default formatId