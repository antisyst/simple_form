import styled from 'styled-components';
import Form from './components/form';

const Layout = styled.main `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: center;

  div {
    display: flex;

  }
`
function App() {

  return (
    <>
    <Layout>
      <div className='background-content'></div>
        <Form/>
    </Layout>
    </>
  )
}

export default App
