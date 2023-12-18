import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image"
import Link from "next/link";


export default function Home() {
  <main>
    <div className="hero_section flex">
        <section className="hero_text_section">
          <h1 className="hero_text">ENJOY TOGETHER!</h1>
          <h2 className="hero_convince">Here&apos;s for 30% off your next order – join our exclusive rewards club now!</h2>
          <Link className="hero_link" href="/" onClick={handleShowPopup}>GET 30% OFF</Link>
        </section>
        <section className="hero_image_section">
          <Image
            src="/images/hero1.webp"
            alt="Sharing Pizza"
            width={20000000}
            height={100}
            className="hero_image"
          />
        </section>
      </div>
      <div className="test_section">
        <div className="test_title_section">
          <h1 className="test_title">OUR REVIEWS</h1>
        </div>
        <div className="card_section">
          <div className="card1">

          </div>
          <div className="card2">

          </div>
          <div className="card1">

          </div>
        </div>
      </div>

  </main>
}
