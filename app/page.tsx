import Image from "next/image";

export default function Home() {
  const createStars = () => {
    const stars = Array.from({ length: 400},(_,i) => ({
      cx:`${Math.round(Math.random() * 10000) / 100}%`, 
      cy:`${Math.round(Math.random() * 10000) / 100}%`, 
      r:Math.round((Math.random() + 0.5) * 10) / 10
    }))
    return stars
  }
  return (
    <div>
      <main>
        <div className="stars-wrapper">
            <svg className='stars' height='100%' width='100%' preserveAspectRatio="none">
                {createStars().map((start,i)=>(
                  <circle className="star" key={`stars1_${i}`} {...start}/>
                ))}
            </svg>
            <svg className='stars' height='100%' width='100%' preserveAspectRatio="none">
                {createStars().map((start,i)=>(
                  <circle className="star" key={`stars2_${i}`} {...start}/>
                ))}
            </svg>
            <svg className='stars' height='100%' width='100%' preserveAspectRatio="none">
                {createStars().map((start,i)=>(
                  <circle className="star" key={`stars3_${i}`} {...start}/>
                ))}
            </svg>
        </div>
        <div className="card-wrapper">
          <div className="card-container">
            <div>
              <span className="card-funky-text blue">{`Mariana `}</span> <span className="card-funky-text">& Diana</span></div>
            <div>
              <span className="card-funky-text large blue">{`<`}</span><span className="card-funky-text large">{`30`}</span><span className="card-funky-text large blue">{`>`}</span>
              </div>
            <div>¡Te invitamos a festejar con nosotras!</div>
            <div className="card-funky-text blue"> Sabado 15 Feb</div>
            <div className="card-funky-text blue">4:00 pm </div>
            <div> Luis de la rosa #55 Presidentes Ejidales 2da Seccion</div>
            <iframe className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.841035890657!2d-99.13384783420312!3d19.327530710870445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01c2aa16d8c1%3A0x96fd67842305319d!2sLuis%20de%20La%20Rosa%2055%2C%20Coapa%2C%20Presidentes%20Ejidales%202da%20Secc%2C%20Coyoac%C3%A1n%2C%2004470%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1738729026178!5m2!1ses-419!2smx" width="300" height="350" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Image className="bottom-img" src='/bd-invite/mlp.png' width={500} height={350} alt="MLP"/>
          </div>
        </div>
      </main>
    </div>
  );
}
