import "../App.css";
import "./Article.module.css";
import ArticleContent from "./ArticleContent";
import TitleCard from "./TitleCard";
import card from "../assets/titlecard-1.png";
import { useState } from "react";

const Article = () => {
  const [scrollState, setScrollState] = useState(true);

  const scrollListener = (e) => {
    // check is in view, check scroll postiion
    console.log(e);
  };
  return (
    <div className="article__container">
      {!scrollState && <div className="card__box" />}
      <TitleCard state={scrollState} img={card} alt="titlecard-1" />
      <ArticleContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eget odio arcu. Sed ac neque tortor. Quisque semper vitae eros vitae
        gravida. Donec a risus interdum, elementum magna ac, vehicula purus.
        Nulla imperdiet elit quis nibh pellentesque blandit. Maecenas consequat
        convallis sem, id sodales leo ullamcorper eu. Fusce id efficitur ipsum.
        Sed fermentum finibus erat eu maximus. Fusce vitae vulputate erat. Nunc
        pellentesque mi metus, ut pellentesque velit fermentum molestie. Nulla
        vel rutrum ipsum, ornare venenatis leo. Suspendisse ultricies velit
        maximus, blandit dui eget, aliquam orci. Integer pellentesque vel orci
        at congue. Nunc lectus sem, vehicula in felis vitae, mollis rutrum
        ipsum. Suspendisse potenti. Quisque lorem dolor, dictum vitae justo
        quis, mollis gravida nunc. Cras vel porttitor nibh. Sed eleifend augue
        nec elit placerat pharetra. Suspendisse potenti. Pellentesque semper sem
        vel ante suscipit bibendum. Duis tincidunt dapibus orci, commodo posuere
        ipsum dignissim faucibus. Ut eu diam metus. Mauris orci sem, ornare id
        nibh ac, commodo pulvinar felis. Nam ut eros venenatis diam cursus
        accumsan. Phasellus porta est mi, sit amet tristique erat scelerisque
        sed. Fusce rutrum diam nulla, vel volutpat purus accumsan vel. Phasellus
        neque velit, mollis eu scelerisque at, vestibulum nec est. Nunc dolor
        odio, porta sed dapibus in, posuere id mauris. Donec accumsan ante leo,
        vitae tempor magna gravida nec. Integer ullamcorper nulla eu ante
        euismod, a suscipit ex ultricies. Nullam ut sodales mi. Maecenas blandit
        pulvinar nibh in iaculis. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Praesent congue placerat nunc in vehicula. In quis
        diam a mauris varius blandit non at augue. Nam vel nisl mauris.
        Vestibulum euismod fringilla elit a finibus. In placerat maximus lectus
        sed condimentum. Ut aliquet nisl non ipsum imperdiet iaculis. Vestibulum
        pellentesque varius elit nec luctus. Mauris quis ex bibendum, dignissim
        dolor sed, tempus metus. Praesent arcu libero, suscipit ut lacus
        posuere, consectetur efficitur arcu. Ut eget ipsum ut turpis posuere
        finibus. Donec varius urna quis odio porttitor pulvinar. In hac
        habitasse platea dictumst. Vestibulum sagittis, orci id consequat
        volutpat, dolor lorem semper risus, et tincidunt mauris nulla et ante.
        Donec placerat ullamcorper felis sit amet vestibulum. In a tellus arcu.
        Fusce blandit leo urna, in fringilla lectus interdum quis. Proin porta
        velit ligula, ut interdum justo interdum quis. Nulla quis leo nec nulla
        consectetur finibus quis eu ante. Suspendisse egestas nunc non arcu
        varius, eget vulputate tortor rutrum. Integer eget commodo tortor, eget
        lobortis ante. Quisque quis tellus vel nulla ornare blandit. Aliquam
        pretium tempus lorem, id iaculis enim blandit eu. Nullam efficitur
        ornare massa, ac tincidunt mi feugiat laoreet. Nullam rhoncus magna mi,
        quis luctus quam tristique vel. Aenean hendrerit lorem ac pretium
        ornare. Cras imperdiet quam at nibh condimentum elementum. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse eget odio arcu.
        Sed ac neque tortor. Quisque semper vitae eros vitae gravida. Donec a
        risus interdum, elementum magna ac, vehicula purus. Nulla imperdiet elit
        quis nibh pellentesque blandit. Maecenas consequat convallis sem, id
        sodales leo ullamcorper eu. Fusce id efficitur ipsum. Sed fermentum
        finibus erat eu maximus. Fusce vitae vulputate erat. Nunc pellentesque
        mi metus, ut pellentesque velit fermentum molestie. Nulla vel rutrum
        ipsum, ornare venenatis leo. Suspendisse ultricies velit maximus,
        blandit dui eget, aliquam orci. Integer pellentesque vel orci at congue.
        Nunc lectus sem, vehicula in felis vitae, mollis rutrum ipsum.
        Suspendisse potenti. Quisque lorem dolor, dictum vitae justo quis,
        mollis gravida nunc. Cras vel porttitor nibh. Sed eleifend augue nec
        elit placerat pharetra. Suspendisse potenti. Pellentesque semper sem vel
        ante suscipit bibendum. Duis tincidunt dapibus orci, commodo posuere
        ipsum dignissim faucibus. Ut eu diam metus. Mauris orci sem, ornare id
        nibh ac, commodo pulvinar felis. Nam ut eros venenatis diam cursus
        accumsan. Phasellus porta est mi, sit amet tristique erat scelerisque
        sed. Fusce rutrum diam nulla, vel volutpat purus accumsan vel. Phasellus
        neque velit, mollis eu scelerisque at, vestibulum nec est. Nunc dolor
        odio, porta sed dapibus in, posuere id mauris. Donec accumsan ante leo,
        vitae tempor magna gravida nec. Integer ullamcorper nulla eu ante
        euismod, a suscipit ex ultricies. Nullam ut sodales mi. Maecenas blandit
        pulvinar nibh in iaculis. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Praesent congue placerat nunc in vehicula. In quis
        diam a mauris varius blandit non at augue. Nam vel nisl mauris.
        Vestibulum euismod fringilla elit a finibus. In placerat maximus lectus
        sed condimentum. Ut aliquet nisl non ipsum imperdiet iaculis. Vestibulum
        pellentesque varius elit nec luctus. Mauris quis ex bibendum, dignissim
        dolor sed, tempus metus. Praesent arcu libero, suscipit ut lacus
        posuere, consectetur efficitur arcu. Ut eget ipsum ut turpis posuere
        finibus. Donec varius urna quis odio porttitor pulvinar. In hac
        habitasse platea dictumst. Vestibulum sagittis, orci id consequat
        volutpat, dolor lorem semper risus, et tincidunt mauris nulla et ante.
        Donec placerat ullamcorper felis sit amet vestibulum. In a tellus arcu.
        Fusce blandit leo urna, in fringilla lectus interdum quis. Proin porta
        velit ligula, ut interdum justo interdum quis. Nulla quis leo nec nulla
        consectetur finibus quis eu ante. Suspendisse egestas nunc non arcu
        varius, eget vulputate tortor rutrum. Integer eget commodo tortor, eget
        lobortis ante. Quisque quis tellus vel nulla ornare blandit. Aliquam
        pretium tempus lorem, id iaculis enim blandit eu. Nullam efficitur
        ornare massa, ac tincidunt mi feugiat laoreet. Nullam rhoncus magna mi,
        quis luctus quam tristique vel. Aenean hendrerit lorem ac pretium
        ornare. Cras imperdiet quam at nibh condimentum elementum.
      </ArticleContent>
    </div>
  );
};

export default Article;
