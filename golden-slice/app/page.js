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
            <Image 
            src="/images/test1.webp"
            alt="Review Image"
            width={128}
            height={136}
            className="test_image"
            />
            <h2 className="card_title">Mike Mayir</h2>
            <p className="card_text">“Golden Slice offers amazing value with their Tuesday 2-for-1 deal, combining delicious, authentic flavors with unbeatable prices!”</p>
          </div>

          <div className="card2">
            <Image 
              src="/images/test2.webp"
              alt="Review Image"
              width={128}
              height={136}
              className="test_image"
              />
            <h2 className="card_title">Samantha Collins</h2>
            <p className="card_text">“Golden Slice serves up a delightful experience with its crispy, flavorful crust and fresh toppings. A must-visit for pizza enthusiasts!”</p>
          </div>
          <div className="card3">
            <h2 className="card_title">Jake Phillips</h2>
            <p className="card_text">“Sign up for Golden Slice’s newsletter and score a fantastic 30% off your first order - great pizzas at an even greater price!”</p>
          </div>
        </div>
      </div>

  </main>
}
