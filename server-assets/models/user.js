let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT = 10

const RANKS = [
  'Ensign',
  'Lieutenant',
  'Captain',
  'Admiral',
]

const SENIOROFFICERS = [
  'CAPTAIN',
  'ADMIRAL'
]

let schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  rank: {
    type: String, required: true, enum: RANKS,
    default: 'Ensign'
  },
  shipId: { type: ObjectId, ref: 'Ship' }
})

schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.hash)
}

schema.methods.changeRole = function (reqRole) {
  var currentRole = this.rank
  if (RANKS.indexOf(reqRole) > RANKS.indexOf(currentRole)) {
    return currentRole
  }
  return reqRole
}

schema.methods.setRoleForOther = function (other, rank) {
  var isAdmin = SENIOROFFICERS.includes(this.rank)
  var canChangeRole = isAdmin && RANKS.indexOf(this.rank) > RANKS.indexOf(other.rank)
  if (canChangeRole) {
    other.rank = this.changeRole(rank)
    return true
  }
}

module.exports = mongoose.model('User', schema)