const ValidatorForm = {
  isEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value) || !value;
  },
  isName(value) {
    var re = /^[a-zA-Z0-9]{5,}$/
    return re.test(value) || !value;
  }
}

export default ValidatorForm;