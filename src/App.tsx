import "./App.css";
import { Collapsible } from "./components/collapsible";

function App() {
  return (
    <>
      <Collapsible />
      <Collapsible>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit
        voluptates officiis ipsam incidunt minus explicabo quasi natus
        dignissimos eveniet?
      </Collapsible>
      <Collapsible width={200}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit
        voluptates officiis ipsam incidunt minus explicabo quasi natus
        dignissimos eveniet amet consectetur?
      </Collapsible>
      <Collapsible>
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sint,
        voluptatum perferendis harum laborum natus veniam vero error saepe a?
        Repellendus quasi iusto fuga eos voluptate iste itaque velit rerum
        possimus corrupti, molestias exercitationem praesentium labore ad
        deleniti nam nesciunt commodi perferendis. Tempore rerum blanditiis
        aspernatur incidunt? Cumque, autem! Animi aperiam ad exercitationem sint
        officiis veniam quo obcaecati perspiciatis debitis inventore error natus
        minima soluta molestiae laudantium voluptates eveniet atque, ipsum quas
        expedita ipsam laboriosam libero! Sunt assumenda quod suscipit veritatis
        iure aliquid est asperiores esse nemo nulla quas praesentium earum,
        error commodi neque distinctio ullam delectus, numquam recusandae ipsa
        facilis? Omnis nostrum, unde, odit aperiam vel voluptatibus officia
        optio harum recusandae alias incidunt illo numquam debitis velit, fugit
        tempora eos repellendus eveniet laboriosam perferendis ducimus illum
        magnam libero! Totam quis fugiat suscipit voluptatem exercitationem?
        Quasi odio nostrum laborum cumque perspiciatis modi earum ea consectetur
        excepturi facilis deleniti unde, perferendis voluptate maiores, alias,
        laboriosam iure eos cupiditate harum cum natus enim laudantium
        repellendus inventore. Perferendis iure reprehenderit cumque fugiat
        nulla deserunt est temporibus quos labore, fugit libero quaerat! Placeat
        provident animi tempore minima, necessitatibus pariatur, asperiores
        quasi debitis corrupti blanditiis impedit! Laboriosam maxime
        consequuntur tenetur placeat doloribus earum vel sunt?
      </Collapsible>
      <Collapsible>
        <div key={1}>Item 1</div>
      </Collapsible>
      <Collapsible>
        <button key={1}>Button 1</button>
        <button key={2}>Button 2</button>
        <button key={3}>Button 3</button>
      </Collapsible>
      <table style={{ width: "100%", marginTop: 20, tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "200px" }} />
          <col style={{ minWidth: "200px" }} />
        </colgroup>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top", padding: 6 }}>
              <Collapsible>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                impedit voluptates officiis ipsam incidunt minus explicabo quasi
                natus dignissimos eveniet?
              </Collapsible>
            </td>
            <td style={{ verticalAlign: "top", padding: 6 }}>
              <Collapsible>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                impedit voluptates officiis ipsam incidunt minus explicabo quasi
                natus dignissimos eveniet?
              </Collapsible>
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "top", padding: 6 }}>
              <Collapsible>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                impedit voluptates officiis ipsam incidunt minus explicabo quasi
                natus dignissimos eveniet?
              </Collapsible>
            </td>
            <td style={{ verticalAlign: "top", padding: 6 }}>
              <Collapsible>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                impedit voluptates officiis ipsam incidunt minus explicabo quasi
                natus dignissimos eveniet?
              </Collapsible>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
