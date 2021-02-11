import styled from "styled-components"

const Section = styled.section`
width: 720px;
box-sizing: border-box;
height: auto;
margin: 20px;
padding: 10px;
box-shadow: 0px 3px 6px #3F3F3F;
border-radius: 8px;
`

const Title = styled.h3`
    font-size: 24px;
    color: #29B394;
    text-align: center;
`

export default function CityInfo({ selectedCity, postalCode }) {
  return (
    <Section>
      <Title>{`${selectedCity} (${postalCode})`}</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam
        risus, ultricies nec scelerisque ut, dictum ut nisl. Suspendisse gravida
        commodo viverra. Sed laoreet lorem et erat rutrum, vitae sollicitudin
        orci sollicitudin. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Praesent dapibus metus id
        dolor varius egestas. Mauris finibus molestie orci, id imperdiet nisi
        gravida eu. Donec dignissim maximus neque, ac auctor est porttitor
        commodo. Suspendisse eget efficitur justo, id varius sem. Quisque auctor
        urna justo, quis aliquam felis iaculis eu. Quisque finibus, tortor eget
        fringilla luctus, erat leo facilisis lacus, vel mattis purus magna a
        mauris. Quisque a sapien nunc. Morbi tristique metus nibh, ac venenatis
        urna egestas vel. Vivamus rutrum dui dignissim, laoreet nunc mollis,
        faucibus odio. Pellentesque at sem auctor neque elementum placerat.
        Morbi cursus dictum leo eu tempus. Vestibulum nulla odio, hendrerit quis
        urna et, efficitur dignissim orci. Ut vel dapibus diam. In gravida lacus
        pulvinar elit hendrerit pulvinar. Nunc ut lacus nisi. Quisque id tellus
        nunc. Duis ut velit vitae sem placerat laoreet. Nulla facilisi. Integer
        id ultricies mi, vel dictum nisl.
      </p>
    </Section>
  );
}
