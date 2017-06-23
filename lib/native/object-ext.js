class BlankObj extends Object {}
Object.prototype.$try$ = function (path) {
  let that = this
  let keyArr = path.split('.')
  keyArr.forEach((key) => {
    that = that[key] || new BlankObj
  })
  return !(that instanceof BlankObj)
}
