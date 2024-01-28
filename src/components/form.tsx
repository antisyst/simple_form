import { useState } from 'react';
import styled from 'styled-components';
import { GrFormViewHide, GrFormView } from "react-icons/gr";



const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 50%;
  justify-content: center;
  padding: 10vh 0;
  background: #f1f7fe;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const FirstContent = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: bold;
  color: var(--var-color-black);
  font-size: calc(10px + 5vmin);
  margin: 3vh 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    width: 94%;
  }

  .control {
    width: 370px;
    height: 67px;
    font-size: 18px;
    padding: 14px 17px;
    border-radius: 7px;
    outline: none;
    border: 3px solid #f1f7fe;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    margin: 3px;

    @media only screen and (max-width: 800px) {
      width: 94%;
    }

    &::placeholder {
      color: #cacaca;
      user-select: none;
    }
    &:focus {
      border: 3px solid var(--var-color-advanced);
    }
  }
`;

const PasswordStrengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 364px;
  background: var(--var-color-advanced);
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  margin: 7px 5px;
  border: none;
  border-radius: 7px;
  outline: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--var-color-white);
  transition: all 0.3s ease-out;
  text-align: center;
  padding: 21px 28px;

  @media only screen and (max-width: 800px) {
    cursor: none;
    width: 94%;
  }
  &:hover {
    background: var(--var-color-prim);
  }
`;

const ShowHideButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--var-color-advanced);
  margin-top: 5px;

  svg {
    vertical-align: middle;
    font-size: 30px;
  }
`;

const ErrorText = styled.p `
  color: red;
  margin: 7px 0;
  text-align: left;
  width: 100%;
  padding-left: 8px;
`
const PasswordContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3px;
  background: var(--var-color-white);
  width: 367px;
  border-radius: 7px;
  height: 67px;
  font-size: 18px;
  padding: 14px 17px;

  input {
    border: none;
    outline: none;
    font-size: 18px;
    filter: drop-shadow(0px 1px 0px #efefef)
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    width: 75%;

    @media only screen and (max-width: 800px) {
        width: 94%;
      }
  
      &::placeholder {
        color: #cacaca;
        user-select: none;
      }
    }
  }
`





export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedFields, setFocusedFields] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleFocus = (field: string) => {
    setFocusedFields((prevFields) => [...prevFields, field]);
  };

  const handleBlur = (field: string) => {
    setFocusedFields((prevFields) => prevFields.filter((f) => f !== field));

    if (field === 'email' && email.trim() !== '' && !email.includes('@')) {
      setEmailError('Invalid email address');
    } else {
      setEmailError(null);
    }
  };

  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength === 0) {
      return { level: '', percentage: 0 };
    } else if (passwordLength <= 5) {
      return { level: 'Weak Password', percentage: (passwordLength / 5) * 30 };
    } else if (passwordLength <= 10) {
      return { level: 'Medium Password', percentage: 30 + (passwordLength - 5) * (30 / 5) };
    } else {
      return { level: 'Strong Password', percentage: 100 };
    }
  };

  const isNameEmpty = name.trim() === '';
  const isEmailEmpty = email.trim() === '';

  const passwordStrength = getPasswordStrength();
  
    return (
      <Section>
        <FirstContent>Welcome Back!</FirstContent>
        <Container>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            className='control'
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            style={{
              border:
                (focusedFields.includes('name') && isNameEmpty) ? '3px solid red' : '',
            }}
          />
          <input
            type="text"
            placeholder="Your Email"
            className='control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            style={{
              border:
                (focusedFields.includes('email') && (isEmailEmpty || emailError)) ? '3px solid red' : '',
            }}
          />
          {emailError && (
            <ErrorText>{emailError}</ErrorText>
          )}
         <PasswordContainer>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ShowHideButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <GrFormViewHide /> : <GrFormView />}
        </ShowHideButton>
      </PasswordContainer>
      <PasswordStrengthContainer>
        <div className={`password-strength-bar ${passwordStrength.level.toLowerCase()}`} style={{ width: `${passwordStrength.percentage}%` }} />
      </PasswordStrengthContainer>
          <Button disabled={isNameEmpty || isEmailEmpty || emailError !== null}>Sign in</Button>
        </Container>
        <div className="creator-content">
          Developed & designed by{' '}
          <a href="https://rmzn.netlify.app" target="_blank">
            Ramazan Azimli
          </a>
        </div>
      </Section>
    );
  }
  
