import { Component } from "react";
import React, { useState,useEffect } from "react";
import Hero from "../components/Hero";
import {useSelector, useDispatch} from "react-redux"
import { fetchAbout } from "../store/aboutSlice";


export default function About() {

  const dispatch = useDispatch();

  const statusabout = useSelector((state)=> state.about.status);
  const basliklar = useSelector((state)=> state.about.headings);
  const aciklamalar = useSelector((state)=> state.about.content);
  const about = useSelector((state)=> state.about.about);



 useEffect (()=>{
  if (statusabout === "idle") {
    dispatch(fetchAbout());
    
  }
 },[statusabout,dispatch]);


  return (
    <>
    <Hero title="About Us" subtitle="About Us" />

    <div className="page-content-wrapper">
      <div className="about-page-top-wrapper section-space">
        <div className="about-us-brief-wrapper section-space--small">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5">
                <h2 className="about-us-brief-title">
                {basliklar?.[4]?.mainTitle}
                </h2>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="about-us-brief-desc">
                  <p>
                  {basliklar?.[4]?.mainDescription}

                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-slider-wrapper section-space--small">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="about-us-slider theme-slick-slider"
                  data-slick-setting='{
                      "slidesToShow": 1,
                      "slidesToScroll": 1,
                      "arrows": false,
                      "dots": true,
                      "autoplay": false,
                      "autoplaySpeed": 5000,
                      "speed": 500,
                      "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                      "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
                  }'
                  data-slick-responsive='[
                      {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                      {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                      {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                      {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                      {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                      {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                  ]'
                >
                  <div className="single-image">
                    <img
                      src={"/img/about/about_us_slide_01.jpg"}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-process-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-process">
                  <h3 className="title">
                    <span>01.</span> {basliklar?.[0]?.title}

                  </h3>
                  <p className="description">
                   {aciklamalar?.[0]?.text}

                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-process">
                  <h3 className="title">
                  <span>02.</span> {basliklar?.[1]?.title}
                  </h3>
                  <p className="description">
                  {aciklamalar?.[1]?.text}

                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-process">
                  <h3 className="title">
                  <span>03.</span> {basliklar?.[2]?.title}
                  </h3>
                  <p className="description">
                  {aciklamalar?.[2]?.text}

                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-process">
                  <h3 className="title">
                  <span>04.</span> {basliklar?.[3]?.title}
                  </h3>
                  <p className="description">
                  {aciklamalar?.[3]?.text}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-member-area section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h2 className="section-title">MEET OUR TEAM</h2>
                <p className="section-subtitle">
                  Your Satisfaction defines our Success
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-member-wrapper">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member">
                      <div className="single-team-member__image">
                        <img
                          src={"/img/about/team-member-1.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="single-team-member__content">
                        <h3 className="name">Tiny Boer</h3>
                        <h4 className="designation">CEO</h4>
                        <p className="short-desc">
                          Tiny's focus is clear: Deliver the best possible
                          customer experience for each of their clients. She
                          works with all team members to ensure that goal is
                          met - each and every day.
                        </p>
                        <ul className="social-profiles">
                          <li>
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member">
                      <div className="single-team-member__image">
                        <img
                          src={"/img/about/team-member-2.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="single-team-member__content">
                        <h3 className="name">John Wilson</h3>
                        <h4 className="designation">Manager</h4>
                        <p className="short-desc">
                          John has always focused on exceptional customer
                          service, attention to detail and offering a
                          friendly, professional and detail-oriented
                          approach for every customer shopping with his
                          team.
                        </p>
                        <ul className="social-profiles">
                          <li>
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member">
                      <div className="single-team-member__image">
                        <img
                          src={"/img/about/team-member-3.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="single-team-member__content">
                        <h3 className="name">Charlotte Hill</h3>
                        <h4 className="designation">Design</h4>
                        <p className="short-desc">
                          "I create environments that compliment your daily
                          life, from a sanctuary for a good night's sleep to
                          a welcoming home to share with family and friends.
                          Color is a key element to any design project".
                        </p>
                        <ul className="social-profiles">
                          <li>
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member">
                      <div className="single-team-member__image">
                        <img
                          src={"/img/about/team-member-4.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="single-team-member__content">
                        <h3 className="name">Jim Shafer</h3>
                        <h4 className="designation">Marketing</h4>
                        <p className="short-desc">
                          Jim has over 25 years' experience in the Marketing
                          and Advertising world. He held several senior
                          marketing roles in the automotive business working
                          for Volvo Cars of North America, LLC.
                        </p>
                        <ul className="social-profiles">
                          <li>
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-area section-space--inner--contact-form bg--dark-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h2 className="section-title">
                  DO YOU HAVE ANY QUESTION ?
                </h2>
                <p className="section-subtitle">
                  Your Satisfaction defines our Success
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-form-wrapper">
                <form
                  id="contact-form"
                  action="https://htmldemo.net/robin/robin/assets/php/mail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <input
                        type="text"
                        placeholder="First Name *"
                        name="customerName"
                        id="customername"
                        required
                      />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <input
                        type="text"
                        placeholder="Email *"
                        name="customerEmail"
                        id="customerEmail"
                        required
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="contactSubject"
                        id="contactSubject"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Message *"
                        name="contactMessage"
                        id="contactMessage"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        id="submit"
                        className="theme-button"
                      >
                        {" "}
                        SEND A MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
