import { LinkList } from './link-list.js'
import { Node } from './link-node.js'
import { print } from '../utils.js'

describe('LinkList', () => {
  it('constructor', () => {
    const input = 'a'
    const result = new LinkList(input)
    print(result)
    result.should.to.be.an.instanceof(LinkList)
    result.should.to.have.deep.property('head', { val: 'a', next: null })
  })
  it('append', () => {
    const result = new LinkList('a')
    result.append('b')
    print(result)
    result.should.to.be.an.instanceof(LinkList)
    result.should.to.have.deep.property('head',
      { val: 'a', next: { val: 'b', next: null } }
    )
  })
  it('remove', () => {
    const result = new LinkList('a')
    const removed = result.remove()
    print(result, removed)
    result.should.to.be.an.instanceof(LinkList)
    result.should.to.have.deep.property('head', null)
    removed.should.to.equal('a')
  })
  it('fromArray', () => {
    const result = new LinkList()
    result.fromArray(['a', 'b'])
    print(result)
    result.should.to.be.an.instanceof(LinkList)
    result.should.to.have.deep.property('head',
      { val: 'a', next: { val: 'b', next: null } }
    )
  })
  it('toArray', () => {
    const result = new LinkList()
    result.fromArray(['a', 'b'])
    const arr = result.toArray()
    print(result, arr)
    result.should.to.be.an.instanceof(LinkList)
    result.should.to.have.deep.property('head',
      { val: 'a', next: { val: 'b', next: null } }
    )
    arr.should.to.be.an('array').that.deep.equal(['a', 'b'])
  })
})
