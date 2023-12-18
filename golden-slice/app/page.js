"use client";
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/react";
import React, { useState, useEffect } from 'react';
import Popup from '@/components/Popup';


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true); // Manually show the popup via button
  };

  return (
    <main>
      {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
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
              <div className="rate_margin">
                <Image 
                src="/images/rate4.webp"
                alt="Rating"
                width={200}
                height={32}
                className="rate_image"
                />
              </div>
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
              <div className="rate_margin">
                <Image 
                  src="/images/rate.webp"
                  alt="Rating"
                  width={200}
                  height={32}
                  className="rate_image"
                  />
              </div>
            </div>

            <div className="card3">
              <Image 
                src="/images/test3.webp"
                alt="Review Image"
                width={128}
                height={136}
                className="test_image"
              />
              <h2 className="card_title">Jake Phillips</h2>
              <p className="card_text">“Sign up for Golden Slice’s newsletter and score a fantastic 30% off your first order - great pizzas at an even greater price!”</p>
              <div className="rate_margin">
                <Image 
                src="/images/rate.webp"
                alt="Rating"
                width={200}
                height={32}
                className="rate_image2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="menu_section">
          <section className="menu_text_section">
            <h1 className="menu_header">Explore Our Menu</h1>
            <p className="menu_p">Embark on a journey through our extensive menu of handcrafted pizzas, each slice a masterpiece of taste.</p>
            <p className="menu_p">Check out our various options that we have to offer.</p>
            <div className="menu_button">
            <Link  href="/menu">
              <Button className="menu_link" size="lg" radius="full">
                MENU
              </Button>
            </Link>
            </div>
          </section>
          <section className="menu_image_section">
            <Image
                src="/images/menu.webp"
                alt="Sharing Pizza"
                width={438}
                height={418}
                className="menu_image"
              />
          </section>
        </div>
        <div id="join" className="account_section">
          <section className="account_image_section">
            <i className="fa-regular fa-user" style={{color: "#000000",}}></i>
          </section>
          <section className="account_text_section">
            <h1 className="account_header">Join our Loyalty Program</h1>
            <p className="account_p">Sign up for our Loyalty Program and turn every bite into rewards – because the best pizzas should always come with extra perks!</p>
            <Button className="account_link" size="lg" radius="full" onClick={handleShowPopup}>
            Join Now
              </Button>
          </section>
        </div>
    </main>
  )
}
