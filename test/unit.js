'use strict'

const expect = require('chai').expect

describe('string-to-template', () => {
  const stringToTemplate = require('../')

  describe('simple variable', () => {
    it('should interpolate it', () => {
      expect(stringToTemplate('hello ${name}', { name: 'John' })).to.equal('hello John') // eslint-disable-line
    })
  })

  describe('two variables', () => {
    it('should interpolate it', () => {
      expect(stringToTemplate('hello ${name} ${lastname}', { name: 'John', lastname: 'Doe' })).to.equal('hello John Doe') // eslint-disable-line
    })
  })

  describe('two variables with javascript', () => {
    it('should interpolate it', () => {
      const string = 'filename is "${filename.split(".")[0]}" and extension is "${filename.split(".")[1]}"' // eslint-disable-line
      const expected = 'filename is "my-file" and extension is "json"'
      expect(stringToTemplate(string, { filename: 'my-file.json' })).to.equal(expected)
    })
  })

  describe('invalid expression', () => {
    it('should throw error', () => {
      const string = 'hello ${blabla'
      expect(() => stringToTemplate(string)).to.throw('Unterminated template literal')
    })
  })
})
