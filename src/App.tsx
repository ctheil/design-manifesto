import "./App.css";
import Nav from "./Nav";
import Article from "./components/Article";
import CalebImg from "./assets/authors/theil_toinstaprofilephoto_001 2.png";

function App() {
  return (
    <section className="main">
      <Nav />
      <Article
        key={1}
        title="UX as a Playground of Challenges"
        author={{
          name: "Caleb Theil",
          img: CalebImg,
          est: "5 minute read",
          url: "https://www.calebtheil.com",
          position: "Full stack developer",
          links: [
            { type: "linkedin", url: "https://www.linkedin.com/in/ctheil/" },
            { type: "external", url: "https://www.calebtheil.com" },
          ],
        }}
        content={[
          "In the realm of User Experience (UX) design, there's a palpable trend towards homogeneity. Software interfaces increasingly look and feel identical, as if carved from the same digital block. This seems efficient, but at what cost? This essay poses a <strong className='content__p--strong'>central question</strong>: What if the objective of UX design isn't to solve problems but to <em className='content__p--em'>create</em> them?",

          "<span className='content__p--subhead'>The Double-Edged Sword of Predictability in UX</span>",

          "Uniformity in UX is a double-edged sword. On one surface, it's a mark of user-centric design, streamlining interfaces for ease and accessibility. However, this perceived benefit comes with risks. Consider the nature of monocultures in agriculture. Fields full of a single crop may yield high output in the short term, but they're vulnerable to a single disease or change in condition that could render the entire field useless. Similarly, a standardized UX approach faces the potential risk that a single technological change could render it <em className='content__p--em'>obsolete</em>, causing a domino effect of failures across the digital ecosystem.",

          "<blockquote className='content__p--quote'>This brings us to Dadaism, an early 20th-century art movement that reveled in the absurd and the irrational. Dadaism urged us to embrace chaos, unpredictability, and rebellion.</blockquote> Imagine applying these Dadaist principles to UX design. The merit of unpredictability in design isn't just artistic; it can also lead to innovative results by challenging conventions and breaking the monotony. An unpredictable UX may demand deeper engagement from the user, triggering a sense of exploration akin to the 'uncomfortable' architectural designs proposed by Arakawa and Gins.",

          "<span className='conten__p--subhead'>The Case of Digital Authentication</span>",

          "Now, let's delve into a real-world example that represents a microcosm of the larger issue: digital authentication. Passwords, fingerprint scans, and facial recognition have become the default methods for proving our identity online. However, our reliance on these tried-and-tested solutions <strong className='content__p--strong'>blinds us</strong> to their flaws, from security vulnerabilities to the stifling of innovation. Isn't it time to think <em className='content__p--em'>outside the login box</em>?",

          "Designing with a sense of individuality, fostering exploration, and injecting a sense of play can be groundbreaking approaches in UX design. Tailoring experiences for unique user bases rather than a generic 'average user' can lead to enriched user experiences. For instance, the preference for pattern-dragging pins among Android users and FaceID among iPhone users isn't just a matter of availability but also a reflection of <strong className='content__p--strong'>different user philosophies and comfort levels</strong>.",

          "Problems aren't just obstacles; they can be catalysts for creativity. A problem in design is an invitation for innovative solutions. For instance, a non-linear storytelling website may initially confuse users, but it also provides an engaging experience that encourages exploration and discovery. The 'problems' we design can become puzzles that <em className='content__p--em'>captivate</em> the user’s attention and enrich their digital journey.",

          "In conclusion, as we move forward into an increasingly digital age, it's crucial for designers to step bravely into the realm of unpredictability. We must design not just for ease and efficiency but also for engagement, curiosity, and individuality. Instead of mindlessly contributing to the UX monoculture, let's break away and embrace a Dadaist spirit of rebellion, chaos, and unpredictability. After all, a diverse UX landscape is not just more resilient; it's also <em className='content__p--em'>infinitely more interesting</em>.",
        ]}
      />
      <Article
        key={2}
        title="Lorem Ipsum"
        author="Some Latin Author"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et risus scelerisque, viverra lectus et, gravida nulla. Nam lobortis libero tellus, at efficitur orci lobortis vitae. Donec dignissim augue augue, vitae commodo mi interdum quis. Nullam elit orci, iaculis nec mi at, laoreet posuere mi. Sed maximus mi massa, ut volutpat dolor aliquam eu. Praesent accumsan dignissim erat, sit amet consectetur mauris laoreet a. Nulla facilisi.",
          "Sed ac finibus justo, et condimentum turpis. Nam et urna vel risus consectetur aliquam. Donec leo lorem, convallis quis dui non, varius interdum risus. Etiam faucibus maximus vulputate. In eget malesuada nisi. Duis semper, diam vitae molestie feugiat, lorem nulla mollis felis, sed pretium leo libero nec ipsum. Aenean nulla ex, venenatis a faucibus at, bibendum vitae lorem. Integer aliquam sollicitudin leo, non luctus lacus posuere eu. Nullam nec facilisis tortor. Quisque et purus leo. Curabitur iaculis blandit iaculis. Duis ut mauris sodales, porta nunc et, ullamcorper velit. In tincidunt et nisl et ultricies. Quisque nec purus sagittis, egestas mauris et, elementum diam.",
          "Suspendisse et velit mauris. Etiam tempor, diam porta lacinia hendrerit, nisl diam venenatis ante, et pharetra augue lorem in massa. Maecenas mollis ullamcorper diam id vulputate. Pellentesque interdum vestibulum vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis dui velit. Sed vel lectus feugiat enim ultrices feugiat a eu erat. Phasellus sit amet metus molestie, cursus turpis nec, accumsan risus.",
          "Phasellus in mauris blandit, cursus sem vel, porttitor nulla. In mi odio, commodo in sollicitudin rutrum, tristique eu lectus. Nulla ante metus, ultrices eget pharetra nec, lobortis eget lorem. Donec congue neque ipsum, sed semper nibh auctor sed. Proin vulputate faucibus velit, ac convallis justo faucibus nec. Aenean ac risus a leo scelerisque vestibulum non quis magna. Vestibulum dignissim facilisis auctor. Nam nec nisi ut diam vulputate sagittis et in ante. Quisque sit amet dignissim libero. Nullam molestie, felis eu sodales luctus, elit sapien consequat nibh, at lacinia arcu leo a neque. Suspendisse vehicula est ac turpis malesuada scelerisque.",
          "Donec porta semper mi, eget feugiat purus hendrerit imperdiet. Morbi maximus finibus enim, ut tristique elit congue eu. Nam rhoncus neque sit amet nunc cursus, non condimentum quam egestas. Nulla ultricies, dolor et egestas aliquam, lectus lacus varius purus, et molestie magna nisl vitae lorem. Pellentesque sed purus risus. In neque est, malesuada vitae venenatis ut, accumsan quis tortor. Maecenas ut risus at odio facilisis suscipit nec ac elit. Nullam ut maximus orci, nec elementum nisi. Nulla sollicitudin sed nisi a maximus. Donec non scelerisque dolor. Sed quis pretium neque, et vehicula ipsum. Morbi eget ex eu diam euismod vulputate at rhoncus orci. Aliquam vitae nulla sed nibh tristique convallis a in mi. Praesent non odio purus.",
          "Donec porta semper mi, eget feugiat purus hendrerit imperdiet. Morbi maximus finibus enim, ut tristique elit congue eu. Nam rhoncus neque sit amet nunc cursus, non condimentum quam egestas. Nulla ultricies, dolor et egestas aliquam, lectus lacus varius purus, et molestie magna nisl vitae lorem. Pellentesque sed purus risus. In neque est, malesuada vitae venenatis ut, accumsan quis tortor. Maecenas ut risus at odio facilisis suscipit nec ac elit. Nullam ut maximus orci, nec elementum nisi. Nulla sollicitudin sed nisi a maximus. Donec non scelerisque dolor. Sed quis pretium neque, et vehicula ipsum. Morbi eget ex eu diam euismod vulputate at rhoncus orci. Aliquam vitae nulla sed nibh tristique convallis a in mi. Praesent non odio purus.",
        ]}
      />
      <div className="intro"></div>
      <div className="flex">
        <div className="title"></div>
        <div className="body"></div>
      </div>
    </section>
  );
}
/*
 *
      <Nav />
      <div className="logo__box">
        <h1 className="h1">Stop Designing for the Monoculture</h1>
        <h2 className="h2">
          A Design Manifesto by Caleb Theil, Mel, Beth, Gerardo
        </h2>
      </div>
 */

export default App;
