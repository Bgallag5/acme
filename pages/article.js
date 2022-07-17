import React from 'react';
import Header from '../components/Header';

export default function Article() {
  return (
    <div className='app__container h-auto'>
        <Header className={'blog__header'} />
        <div className='h-auto min-h-screen m-auto w-4/5'>
        <div className='flex flex-col gap-2 my-12 relative'>
            <h1 className='text-black text-3xl font-semibold mons'>Lorem Ipsum Head</h1>
            <h2 className='text-black text-xl font-light mons  mb-6'>Ipsum Ipsum Cummus sic hitero est suut</h2>
            <div className='article__img-container right-0 top-0'>Image</div>
            <p className='text-base '>{"   "} quo usque tandem abutere, Catilina, patientia nostra? quam diu etiam furor iste tuus nos eludet? quem ad finem sese effrenata iactabit audacia? nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus locus, nihil horum ora voltusque moverunt? patere tua consilia non sentis, constrictam iam horum omnium scientia teneri coniurationem tuam non vides? quid proxima, quid superiore nocte egeris, ubi fueris, quos convocaveris, quid consili ceperis quem nostrum ignorare arbitraris? O tempora, o mores! senatus haec intellegit, consul videt; hic tamen vivit. vivit? immo vero etiam in senatum venit, fit publici consili particeps, notat et designat oculis ad caedem unum quemque nostrum. nos autem fortes viri satis facere rei publicae videmur, si istius furorem ac tela vitamus . ad mortem te, Catilina, duci iussu consulis iam pridem oportebat, in te conferri pestem  quam tu in nos  omnis iam diu  machinaris.</p>
            <p>an vero vir amplissimus, P. Scipio, pontifex maximus, Ti. Gracchum mediocriter labefactantem statum rei publicae privatus interfecit: Catilinam  orbem terrae caede atque incendiis vastare cupientem nos consules perferemus ? nam illa nimis antiqua praetereo, quod  C. Servilius Ahala Sp. Maelium novis rebus studentem manu sua occidit. fuit, fuit ista quondam in hac re publica virtus ut viri fortes acrioribus suppliciis civem perniciosum quam acerbissimum hostem coercerent. habemus  senatus consultum in te, Catilina, vehemens et grave , non deest rei publicae consilium neque auctoritas huius ordinis: nos, nos, dico aperte, consules desumus.</p>
        </div>
        </div>
    </div>
  )
}
