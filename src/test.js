/**
   * Find ID of new books, from newCurrentlyReading, newWantToRead, newRead after search in currentBooks.
   * @param {*} newCurrentlyReading 
   * @param {*} newWantToRead 
   * @param {*} newRead 
   * @param {*} currentBooks 
   */
  findNewBookFunction(newCurrentlyReading, newWantToRead, newRead, currentBooks)
  {
    var newBookIDs = [...newCurrentlyReading, ...newWantToRead, ...newRead]
    return newBookIDs.filter(ID => (!this.doesAnyBookHaveIDFunction(ID, currentBooks)))
  }

  doesAnyBookHaveIDFunction(ID, books)
  {
    books.forEach(book => {
      if (book['id'] === ID)
        return true;
    })
    return false;
  }

  