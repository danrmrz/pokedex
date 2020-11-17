const capitalize = string => {
  return(
    string.replace(
      /^\w/,
      (letter) => letter.toUpperCase()
    )
  )
}

export default capitalize