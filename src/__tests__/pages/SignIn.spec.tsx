import React from 'react'
import {render} from 'react-native-testing-library'

import SighIn from '../../pages/SignIn'

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn()
  }
})

describe('SighIn page', () => {
  it('should contain email/password inputs', () => {
    const {getByPlaceholder} = render(<SighIn />)

    expect(getByPlaceholder('E-mail')).toBeTruthy()
    expect(getByPlaceholder('Senha')).toBeTruthy()
  })
})
