import { candy } from './candy.js'
describe('分配糖果', () => {
  it('case 1', () => {
    // 在样例中,我们初始化糖果分配为 [1,1,1]
    // 第一次遍历更新后的结果为 [1,1,2],
    // 第二次遍历更新后的结果为 [2,1,2]。
    const input = [1, 0, 2]
    const out = candy(input)
    out.should.to.equal(5)
  })
})
