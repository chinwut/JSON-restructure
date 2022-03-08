const transformObjectToArrayAndFlat = (objectInput) => {
  const objToArray = Object.values(objectInput)
  return objToArray.flat()
}

const getArrayParentLevel = (arrayInputs) => {
  const arrayParentLevel =  arrayInputs.filter(arrayInput => !arrayInput.parent_id)
  return arrayParentLevel
 }

 const recursivelyChildrenWithId = (currentArray, arrayAllResult) => {
  let ret = []
  const result = currentArray.filter(function (currentObject) {
    return arrayAllResult.filter(function (objectResult) {
      if (currentObject.id === objectResult.parent_id) {
        ret = [objectResult]
        recursivelyChildrenWithId(ret, arrayAllResult)
        currentObject.children.push(objectResult)
      }
      return currentObject
    });
  })
  return result
}

const moveObjectToCorrectChildrenLevel = (objectInput) => {

  const arrayAllResult = transformObjectToArrayAndFlat(objectInput)
  const parentLevelArray = getArrayParentLevel(arrayAllResult)
  const hasObjectInArray = (arrayAllResult.length !== 0 && Object.getPrototypeOf(arrayAllResult[0]) === Object.prototype)
  const result = hasObjectInArray ? recursivelyChildrenWithId(parentLevelArray, arrayAllResult) : arrayAllResult
  return result
}




module.exports = {
  transformObjectToArrayAndFlat,
  getArrayParentLevel,
  recursivelyChildrenWithId,
  moveObjectToCorrectChildrenLevel
}