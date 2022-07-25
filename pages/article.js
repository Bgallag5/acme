import React, {useContext} from "react";
import Header from "../components/Header";
import Image from "next/image";
import BlogArticle from "../components/Blog/BlogArticle";
import Footer from "../components/Footer";
import { AppContext } from "./_app";

export default function Article() {

const {selectedArticle, setSelectedArticle } = useContext(AppContext);

console.log(selectedArticle);

  return (
    <div className="app__container h-auto ">
       <div className="bg-white dark:bg-slate-900  h-auto relative">
      <Header className={"blog__header"} />
      <div className="h-auto min-h-screen m-auto w-4/5 ">
        <div className="flex flex-col my-12 mb-36 w-full relative">
          <h1 className="text-black dark:text-white text-3xl mb-3 font-semibold">
            Lorem Ipsum Head
          </h1>
          <h2 className="text-black dark:text-white text-xl font-light  mb-6">
            Ipsum Ipsum Cummus sic hitero est suut
          </h2>

          <div className="flex flex-row items-center">
            <p className="w-full text-regular">
              Quo usque tandem abutere, Catilina, patientia nostra? quam diu
              etiam furor iste tuus nos eludet? quem ad finem sese effrenata
              iactabit audacia? nihilne te nocturnum praesidium Palati, nihil
              urbis vigiliae, nihil timor populi, nihil concursus bonorum
              omnium, nihil hic munitissimus habendi senatus locus, nihil horum
              ora voltusque moverunt? patere tua consilia non sentis,
              constrictam iam horum omnium scientia teneri coniurationem tuam
              non vides? quid proxima, quid superiore nocte egeris, ubi fueris,
              quos convocaveris, quid consili ceperis quem nostrum ignorare
              arbitraris? O tempora, o mores! senatus haec intellegit, consul
              videt; hic tamen vivit. vivit? immo vero etiam in senatum venit,
              fit publici consili particeps, notat et designat oculis ad caedem
              unum quemque nostrum. nos autem fortes viri satis facere rei
              publicae videmur, si istius furorem ac tela vitamus . ad mortem
              te, Catilina, duci iussu consulis iam pridem oportebat, in te
              conferri pestem quam tu in nos omnis iam diu machinaris.
            </p>
            <div className="article__img">
              <Image
                className=""
                layout="fill"
                src={require("../assets/images/blog-1.jpg")}
                alt="Image"
              ></Image>
            </div>
          </div>

          <p className="w-full text-regular my-3 ">
            An vero vir amplissimus, P. Scipio, pontifex maximus, Ti. Gracchum
            mediocriter labefactantem statum rei publicae privatus interfecit:
            Catilinam orbem terrae caede atque incendiis vastare cupientem nos
            consules perferemus ? nam illa nimis antiqua praetereo, quod C.
            Servilius Ahala Sp. Maelium novis rebus studentem manu sua occidit.
            fuit, fuit ista quondam in hac re publica virtus ut viri fortes
            acrioribus suppliciis civem perniciosum quam acerbissimum hostem
            coercerent. habemus senatus consultum in te, Catilina, vehemens et
            grave , non deest rei publicae consilium neque auctoritas huius
            ordinis: nos, nos, dico aperte, consules desumus.
          </p>
          <p className="w-full text-regular my-3 ">
            In tellus integer feugiat scelerisque varius. Urna id volutpat lacus
            laoreet non curabitur gravida arcu. Est lorem ipsum dolor sit amet
            consectetur adipiscing. Mi proin sed libero enim sed. Orci sagittis
            eu volutpat odio. Felis eget velit aliquet sagittis id consectetur
            purus. Eget nunc lobortis mattis aliquam faucibus purus in massa.
            Lacinia at quis risus sed vulputate odio. Lacus sed turpis tincidunt
            id aliquet risus feugiat. Tempus quam pellentesque nec nam aliquam
            sem et tortor. Tortor pretium viverra suspendisse potenti nullam. Eu
            mi bibendum neque egestas congue quisque egestas diam. Aliquam nulla
            facilisi cras fermentum odio eu feugiat. Cursus metus aliquam
            eleifend mi in. Eros in cursus turpis massa tincidunt. Urna cursus
            eget nunc scelerisque viverra mauris in aliquam sem. Commodo quis
            imperdiet massa tincidunt nunc. Venenatis cras sed felis eget velit
            aliquet sagittis. Maecenas sed enim ut sem. Tempus urna et pharetra
            pharetra.
          </p>
          <p className="w-full text-regular my-3">
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nam
            at lectus urna duis convallis convallis tellus. Consectetur lorem
            donec massa sapien faucibus et molestie ac feugiat. Molestie at
            elementum eu facilisis sed odio morbi quis commodo. Massa enim nec
            dui nunc. Dictum at tempor commodo ullamcorper a lacus. Lectus urna
            duis convallis convallis. Consectetur purus ut faucibus pulvinar
            elementum integer. Mi in nulla posuere sollicitudin. Nulla facilisi
            etiam dignissim diam quis enim lobortis. Donec ac odio tempor orci.
            Sit amet venenatis urna cursus eget.
          </p>
        </div>
        <div className="related">
          <h1 className="text-header">Related</h1>
          <div className="related__articles">
            <BlogArticle title={"App"} img={"blog-2.jpg"} />
            <BlogArticle title={"Design"} img={"blog-5.jpg"} />
            <BlogArticle title={"Web"} img={"blog-3.jpg"} />
          </div>
        </div>
      <Footer />
      </div>
      </div>
    </div>
  );
}
