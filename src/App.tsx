import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <section className="main">
      <Nav />
      <div className="logo__box">
        <h1 className="h1">Stop Designing for the Monoculture</h1>
        <h2 className="h2">
          A Design Manifesto by Caleb Theil, Mel, Beth, Gerardo
        </h2>
      </div>
      <div className="intro">
        <p className="paragraph">
          In the ever-evolving realm of web design, a crucial question has been
          persistently overlooked: Are we designing for our audience, or are we
          simply creating clones of prevailing trends and templates? The digital
          landscape, with its relentless pursuit of the 'next big thing,' has
          inadvertently trapped many web designers in the monotony of
          conformity. This manifesto aims to illuminate the path less traveled,
          urging web designers to abandon the shackles of the monoculture and
          aesthetic trends, and instead, embark on a journey to design for the
          brand's audience—a journey that promises authenticity, engagement, and
          a true connection with users.
        </p>
      </div>
      <div className="flex">
        <div className="title">
          <img
            src="https://cdn.dribbble.com/users/47000/screenshots/7431254/media/0c01efcc1ea5e6dca1edff9de965da6b.png?resize=1600x1200&vertical=center"
            alt="poster1"
            className="poster"
          />
        </div>
        <div className="body">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            viverra, sem in egestas vulputate, sapien turpis fermentum magna,
            non tempus risus dolor ut ante. Donec id ligula justo. Duis sapien
            orci, convallis eget lorem in, accumsan pharetra eros. Fusce
            lobortis sem enim, ut faucibus libero lobortis vel. Nam non volutpat
            libero, aliquet scelerisque enim. Aenean dignissim at mauris sit
            amet eleifend. Praesent condimentum dui elit, pellentesque bibendum
            quam tempus ac. Suspendisse et ligula nisi. Proin consectetur odio
            vitae ullamcorper mattis. Aliquam non lacus venenatis, tincidunt
            orci in, scelerisque justo. Nullam et quam rhoncus ante consequat
            aliquet. In sit amet enim at arcu lacinia convallis. Praesent sit
            amet semper risus. Nullam odio tortor, posuere sit amet felis vel,
            ultrices egestas ante. Sed vestibulum sapien id ornare placerat.
            Donec malesuada, lacus sit amet fringilla tempor, ex ipsum congue
            erat, eget tincidunt ipsum nunc sed ligula. Vestibulum mattis sem
            quis orci elementum commodo. Etiam tristique tellus at tellus
            sollicitudin, a venenatis elit rutrum. Mauris ac felis nec orci
            elementum mollis eu sit amet dolor. Vestibulum ac odio arcu.
            Praesent pretium fermentum auctor. Duis sit amet rutrum mauris, vel
            porta odio. Nulla facilisi. Nunc vehicula ante vitae turpis rhoncus,
            non mollis velit scelerisque. Vestibulum luctus ipsum vel feugiat
            accumsan. Maecenas auctor dolor in quam mollis, a rutrum purus
            rhoncus. Pellentesque nec massa nulla. Vestibulum congue id augue
            eget feugiat. Quisque laoreet at dolor non blandit. In sollicitudin
            lectus vel felis aliquet vestibulum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Cras in erat
            a orci interdum ultricies et eu ipsum. Aliquam vel metus eu risus
            fermentum tincidunt in sodales neque. Integer sapien enim,
            ullamcorper sed vulputate nec, egestas placerat dui. Proin maximus
            eros ac arcu aliquam, a molestie arcu posuere. Fusce eget eros in
            elit pulvinar vestibulum. Donec aliquet, felis at eleifend
            ullamcorper, nunc massa vehicula quam, vitae maximus lorem nulla
            aliquam ligula. Phasellus auctor blandit pretium. Nullam a ultricies
            tortor, nec eleifend mauris. Suspendisse rhoncus dignissim semper.
            Pellentesque a arcu ac massa vestibulum blandit. Vivamus elementum
            dui placerat magna tristique volutpat vel in tortor. Sed dignissim
            nisi et metus posuere viverra. Vivamus posuere sapien ullamcorper,
            varius orci a, tempus magna. Quisque nec lorem euismod risus
            scelerisque consequat sed quis nisl. Sed consectetur dui suscipit
            nisl dignissim fringilla. Donec commodo non ipsum a bibendum. Fusce
            augue leo, laoreet ac neque et, porttitor eleifend lectus. Duis
            tempor placerat tempor. Suspendisse potenti. Proin posuere vehicula
            ante placerat ullamcorper. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Maecenas sollicitudin
            ipsum eget eros interdum dignissim sit amet nec justo. Pellentesque
            convallis congue ipsum nec facilisis. Fusce volutpat orci eget quam
            faucibus pretium. Curabitur id blandit enim, quis malesuada mauris.
            Nullam maximus ligula sit amet tempor placerat. Curabitur euismod
            ante ut nisl sagittis laoreet. Sed porta sem tempor, feugiat nibh
            et, elementum nunc. Cras nec placerat urna. Curabitur leo neque,
            interdum in elementum in, tincidunt vitae sem. Phasellus nec est
            finibus, maximus elit eget, dapibus enim. Nullam et nibh tincidunt,
            iaculis elit in, molestie justo. Fusce metus est, volutpat sed
            tempor sit amet, iaculis sed est. Suspendisse accumsan justo metus,
            in ultricies felis placerat id. Proin non mi risus. Vestibulum
            pulvinar felis vitae sagittis vestibulum. Pellentesque in imperdiet
            nulla.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </section>
  );
}

export default App;
