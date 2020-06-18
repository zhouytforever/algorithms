import chai from 'chai'
import { multM2M, transpose, print } from './matrix.js'
const { expect } = chai

const cs1 = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
  [1, 0, 0]
]
const cs2 = [
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0]
]
const cs3 = [
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1]
]
describe('转置矩阵', () => {
  print('cs1', cs1)
  const r1 = transpose(cs1)
  print('r1', r1)
  it('返回数组', () => {
    expect(r1).to.have.property(0).with.lengthOf(4)
  })
  it('确定是转置了', () => {
    expect(r1[0][3]).to.be.equal(1)
    expect(r1[1][0]).to.be.equal(1)
    expect(r1).lengthOf(3)
    expect(r1[0]).lengthOf(4)
  })

  print('cs2', cs2)
  const r2 = transpose(cs2)
  print('r2', r2)
  it('返回数组', () => {
    expect(r2).to.have.property(0).with.lengthOf(4)
  })
  it('确定是转置了', () => {
    expect(r2[0][3]).to.be.equal(1)
    expect(r2[1][0]).to.be.equal(1)
  })

  print('cs3', cs3)
  const r3 = transpose(cs3)
  print('r3', r3)
  it('返回数组', () => {
    expect(r3).to.have.property(0).with.lengthOf(3)
  })
  it('确定是转置了', () => {
    expect(r3[0][2]).to.be.equal(0)
    expect(r3[1][0]).to.be.equal(0)
    expect(r3).lengthOf(4)
  })
})

const m1 = [
  [1, 1, 1],
  [2, 2, 2]
]
const m2 = [
  [1, 1, 1, 1],
  [2, 2, 2, 1],
  [3, 3, 3, 1]
]

describe('矩阵相乘', () => {
  const result = multM2M(m1, m2)
  print('相乘结果', result)
  it('长度为2', () => {
    expect(result).to.be.lengthOf(2)
  })
  it('0长度为4', () => {
    expect(result[0]).to.be.lengthOf(4)
  })
  it('第一个元素为6', () => {
    expect(result[0][0]).to.be.equal(6)
  })
  it('最后一个元素为12', () => {
    expect(result[1][3]).to.be.equal(12)
  })
})
