import {Container, Wrapper, Form,Label, Input, Div,H3, Btn} from './verify.style';

const verifyPhones = () => {
  return (
    <Container>

        <Wrapper>
            <Form>
                <Div>
<H3>we need to  verify the your account to know who you are through your phone number t</H3>
                     <Label>Phone Number</Label>
                <Input  placeholder='phone number' type = "text"/>
                </Div>
               
                <Btn bg="#5816c2">Comfrm phone Number</Btn>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default verifyPhones