import styled from 'styled-components';

const Section = styled.div `
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
`

const FirstContent = styled.h1 `
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: bold;
    color: var(--var-color-black);
    font-size: calc(10px + 5vmin);
    margin: 3vh 0;
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 800px) {
        width: 94%;
    }

    input {
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
`
const Button = styled.button `
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
`

export default function Form() {
    return(
        <Section>
            <FirstContent>Welcome Back!</FirstContent>
            <Container>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="password" placeholder='Your Password' />
                <Button>Sign in</Button>
            </Container>
            <div className='creator-content'>Developed & designed by  <a href="https://rmzn.netlify.app" target='_blank'> Ramazan Azimli</a></div>
        </Section>
    )
}


// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ratione enim fugit consequatur voluptatum nam deleniti illo quam officiis suscipit saepe itaque fuga maxime blanditiis rem quae ipsa quisquam totam consectetur ducimus quasi odio? Quia laboriosam labore architecto reprehenderit, repellendus ipsam aliquid quaerat neque dignissimos eveniet ducimus culpa sit animi dolorem. Modi maxime saepe exercitationem voluptatum assumenda aut eos incidunt, eveniet commodi aspernatur a cupiditate ea recusandae necessitatibus quis suscipit autem esse molestias dolore id iste soluta unde fugiat expedita! Iusto accusamus rerum voluptatem incidunt perferendis. Deserunt autem veritatis nihil, velit voluptate repellendus odit! Quis et excepturi vero amet consequatur quibusdam. Aspernatur corrupti consectetur cupiditate ab magni laborum suscipit maiores. Dolorem corporis iusto quos corrupti modi velit. Hic officia accusantium eius expedita molestiae, iusto quaerat corrupti veritatis perspiciatis odit delectus aliquid eos, necessitatibus illo, blanditiis placeat alias asperiores nemo omnis provident dignissimos ullam eligendi iure cupiditate! Consectetur incidunt, impedit libero placeat adipisci voluptatem error sapiente commodi quod autem numquam, inventore vero amet deleniti recusandae necessitatibus? Dolore error alias iusto, voluptates tempora, omnis dignissimos sunt commodi aut, aliquam cupiditate repellat dicta ea consectetur possimus. Sint dolorem ad dolores recusandae. Est quibusdam esse et quisquam consequuntur nobis, facere illo expedita dolor impedit maiores incidunt culpa magni tempora, ullam sunt eveniet rem minima fugit harum. Saepe ex, distinctio iusto aliquid velit explicabo similique quod incidunt nemo deleniti? Illum ducimus omnis numquam exercitationem voluptate odit alias, debitis perferendis beatae tenetur reiciendis accusantium consequatur magnam cupiditate sint vero adipisci reprehenderit ipsa necessitatibus vel fugit iste! Cumque officia assumenda facilis autem, quam tempora. Itaque facilis hic quod quos, modi quas tenetur reiciendis consequuntur porro provident velit quam incidunt voluptates veniam laboriosam repellendus sit inventore, delectus molestiae dolore eius reprehenderit dignissimos magni at! Nobis labore ducimus et dolor perspiciatis tempora ut reiciendis? Corporis velit cumque cupiditate, perferendis quia, a totam distinctio itaque reprehenderit consequatur placeat repellat ut dolorem voluptates, odio consectetur? Aperiam earum commodi, ratione nostrum ipsam eos, necessitatibus accusamus quis inventore nisi eum! Similique laudantium molestiae autem, maiores ex deserunt quam, totam dolorem magnam id cumque iste vero dignissimos sint nulla dicta ducimus reprehenderit voluptatum esse optio nostrum asperiores omnis! Nobis aperiam soluta quis distinctio tempora accusantium vero ut sit obcaecati itaque impedit assumenda nemo aliquid ab aspernatur, non dolorum corrupti. Consectetur voluptates laudantium sunt, soluta accusantium quae aliquid repellat earum officiis corporis reprehenderit consequatur, fugit magnam repellendus mollitia! Perferendis harum repudiandae magnam nam eaque nihil voluptates incidunt, sapiente qui quis obcaecati beatae delectus voluptatum error consequatur aspernatur omnis, fuga magni! Unde ex sunt reprehenderit debitis inventore. Earum quas dolore libero aperiam quasi quidem cum id nostrum maiores. Assumenda neque, mollitia dignissimos ratione tempora tempore temporibus officiis beatae, nesciunt ducimus quibusdam, numquam repudiandae? Corrupti consequuntur rerum a, sapiente exercitationem asperiores iusto aspernatur laboriosam sit magnam officiis eveniet odit dolorum quos optio quae ut, at cum quasi? Suscipit omnis minima quo temporibus sed quaerat corporis, blanditiis porro ipsa cumque. Adipisci illum assumenda reiciendis fugit optio? Quia vero asperiores iusto consequatur tempora assumenda iste dicta alias amet ducimus consequuntur mollitia, doloribus ab vel, ratione rem deleniti aliquid porro corporis perspiciatis natus. Expedita natus dignissimos incidunt molestiae, deleniti iure tempora recusandae perferendis repellat est commodi, modi quidem necessitatibus nihil alias assumenda molestias consequuntur. Error voluptatum impedit quis aperiam culpa nesciunt aspernatur quo aliquid, id similique repellendus illo exercitationem deleniti consectetur dicta excepturi numquam laboriosam, nam odit blanditiis necessitatibus corrupti consequuntur? Deleniti, delectus quisquam explicabo est ducimus aliquam pariatur cumque itaque perferendis laborum quibusdam neque rerum eos voluptate cupiditate possimus quaerat consectetur cum doloribus in molestiae. Esse officia porro minima, inventore delectus aut voluptate unde. Quae minus architecto voluptatem cumque, rerum sint at molestiae voluptate dignissimos, voluptatum, repellendus fuga repellat? Officiis nemo accusantium, dolorem rem in porro? Deleniti quod eveniet odit iste corporis inventore cumque rem, laborum nesciunt perspiciatis, officiis, ipsam voluptatum repellat possimus? Quas corrupti ut aspernatur qui? Laudantium corporis voluptatem qui eaque architecto, enim molestiae repudiandae, ea quis maxime laboriosam ut culpa possimus assumenda quos. Incidunt quo saepe, numquam itaque atque vitae molestiae at eius unde neque ullam, beatae reprehenderit cumque. Reiciendis, illum veniam. Earum natus, saepe nisi tenetur quod distinctio sapiente nulla fugiat quibusdam! Voluptatibus placeat soluta nam excepturi, deleniti porro! Rem optio minus, velit atque, quo voluptate unde delectus quasi dignissimos sit assumenda earum, nisi temporibus reiciendis quia quaerat blanditiis? Unde itaque dicta repellendus accusantium natus assumenda enim veritatis dolores provident asperiores nihil quam accusamus illo doloremque vel quod consequuntur voluptatum fugiat, explicabo deleniti quidem pariatur consequatur! Ipsam cupiditate perspiciatis vitae reprehenderit ratione, debitis laborum hic? Enim porro ipsa velit praesentium. Accusantium incidunt quasi esse voluptatibus suscipit quas, ea deserunt! Rerum tenetur incidunt unde corrupti officia, voluptates, nostrum nihil officiis in ipsum accusantium accusamus debitis ipsam deserunt vero quod esse! Nihil doloribus pariatur aperiam magnam, officiis fugit est architecto qui amet. Doloribus, nisi quos inventore perferendis ullam nihil officia repellat. Eius, a error! Officiis totam minima ipsam laborum, deleniti temporibus minus error libero pariatur sapiente aliquam aut ex. Nam reiciendis, nulla, totam voluptatum ea dolore alias soluta sint perspiciatis ipsum eum molestias quibusdam amet maiores quisquam a. Autem maxime harum nostrum voluptatum eum, odit dolore nam ratione expedita dicta nobis possimus quisquam porro impedit recusandae minus deleniti. Impedit exercitationem nam perspiciatis culpa numquam recusandae, laborum illo deserunt doloremque sed ipsa, quidem eius nesciunt provident placeat repudiandae dicta quae sit. Minima maxime nam ad ratione sint voluptas? Aliquid numquam sequi in officia consequuntur eius veniam eum eveniet molestias quae, neque, assumenda, nihil mollitia voluptate? Vero provident quo officia fugit eos impedit, tenetur fuga vitae placeat perferendis. Temporibus molestias, magnam, minus rerum qui odio odit libero quo accusamus exercitationem soluta? Placeat quo et quaerat maxime inventore, eaque deserunt quia ratione molestiae repudiandae. Vel magnam nemo architecto fuga! Quisquam nobis delectus modi laborum. Quis perspiciatis quaerat iste maxime ratione, at modi voluptates quo harum, sit nobis, repellendus architecto sequi est qui? Quaerat, facilis eaque optio tempore quas id distinctio, sed deserunt, ad et debitis at ea aliquam quia sequi sapiente ut ex ratione. Voluptas corrupti ducimus nemo necessitatibus deserunt!