import { rotatedArray } from './rotated-array.js'
describe('rotated-array [2, 5, 6, 0, 0, 1, 2]', () => {
  it('case 0', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 11', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 11
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 6', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 6
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 5', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 5
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 2', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    const target = 2
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [1, 0, 1, 1, 1]', () => {
  it('case 3', () => {
    const nums = [1, 0, 1, 1, 1]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case -1', () => {
    const nums = [1, 0, 1, 1, 1]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [1, 0, 1, 1, 1]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 0', () => {
    const nums = [1, 0, 1, 1, 1]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [1, 1, 1, 0, 1]', () => {
  it('case 3', () => {
    const nums = [1, 1, 1, 0, 1]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case -1', () => {
    const nums = [1, 1, 1, 0, 1]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [1, 1, 1, 0, 1]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 0', () => {
    const nums = [1, 1, 1, 0, 1]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [2, 3, 4, 5, 6, 7, 1]', () => {
  it('case 3', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 0', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 7', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = 7
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 11', () => {
    const nums = [2, 3, 4, 5, 6, 7, 1]
    const target = 11
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
})
describe('rotated-array [6, 7, 1, 2, 3, 4, 5]', () => {
  it('case 3', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 0', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 7', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = 7
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 2', () => {
    const nums = [6, 7, 1, 2, 3, 4, 5]
    const target = 2
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [6, 7, 7, 7, 7, 2, 3, 4, 5]', () => {
  it('case 3', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 0', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 7', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 7
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 11', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 11
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 2', () => {
    const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
    const target = 2
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [6, 7, 7, 7, 2, 3, 4, 5]', () => {
  it('case 3', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 0', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 7', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 7
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 11', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 11
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 2', () => {
    const nums = [6, 7, 7, 7, 2, 3, 4, 5]
    const target = 2
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
describe('rotated-array [6, 7, 7, 2, 3, 4, 5]', () => {
  it('case 3', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 3
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case -1', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = -1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 1', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 1
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 0', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 0
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 7', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 7
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
  it('case 11', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 11
    const result = rotatedArray(nums, target)
    expect(result).to.equal(false)
  })
  it('case 2', () => {
    const nums = [6, 7, 7, 2, 3, 4, 5]
    const target = 2
    const result = rotatedArray(nums, target)
    expect(result).to.equal(true)
  })
})
