import request from 'superagent'

const webUtils = {
  saveField: (value) => {
    request.post('/field')
           .type('json')
           .send({ msg: value })
           .end((err, res) => {})
  }
}

export default webUtils
