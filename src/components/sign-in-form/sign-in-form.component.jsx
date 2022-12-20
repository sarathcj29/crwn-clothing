import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPES } from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // setCurrentUser(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('EmailID not found for valid login');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password for this email');
          break;
        default:
          console.log('Some error captured on login');
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="off"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPES.google} type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
