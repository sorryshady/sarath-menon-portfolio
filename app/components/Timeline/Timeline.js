"use client";
import React, { useState } from 'react'

import styles from './Timeline.module.css'
import Heading from '@/app/utils/Heading/Heading'
const Timeline = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <Heading text={'About'} id='about' />
      <div className='container'>
        <div className={styles.description}>
          <p>
            <span>Sarath Menon</span>, a professional filmmaker, screenwriter,
            visual artist and poet, is an alumnus of The London Film School and
            BITS Pilani. Sarath started his artistic journey writing and acting
            in plays in early childhood. A passion that grew with him, developed
            into a profession as his relationship with visual storytelling
            evolved in his days at BITS Pilani Goa campus where he completed his
            dual degrees in Chemical Engineering and a masters in Chemistry.
          </p>
          <br />
          <>
            <p>
              During the final year of his education in 2015, Sarath made his
              debut film as a Writer-Director with the collaborative blessings
              of legendary filmmakers MJ Radhakrishnan, B Lenin, T Krishnanunni,
              and the film was recognised in the 2016 Kerala State Chalachitra
              Academy Awards for Best Sound Design. The film also gifted him a
              place for his higher education in MA Filmmaking at The London Film
              School, regarded as one of the best centres for film education in
              the world. He was recognised as the Best Cinematographer at 2018
              Pilas en Corto International Film Festival in Spain for his debut
              Cinematography short, The Death of Don Quixote. Sarath would
              regard his takeaway from the film school education as his
              evolution as a screenwriter and director, along with his growth as
              a cinematographer.
            </p>
            <br />
            <p>
              Beyond film school, Sarath returned to India and started off
              working in Bollywood with Rensil D&apos;Silva on his Cop-Thriller
              film Dial 100 starring Manoj Bajpayee, Neena Gupta and Sakshi
              Tanwar, after which he joined Rajiv Menon Productions to
              collaborate and develop several stories with filmmaker Rajiv
              Menon, based in Chennai.
            </p>
            <br />
            <p>
              An Internationally acclaimed artist and visual storyteller,
              Sarath&apos;s creations hold meaning beyond the blink of an eye.
              Brimming with poetic afterthought, Sarath tells stories through
              visuals and words. His aesthetic compositions and unique lighting
              makes his visual creations deep and insightful. He captures
              emotions and conveys them profoundly, leaving you with a tear drop
              or a smile on your face when he signs off.
            </p>
            <br />
            <p>
              Sarath considers Steve McCurry, G Aravindan, Abbas Kiarostami,
              Gulzar, Rabindranath Tagore, Pablo Neruda, Bharathan, MT Vasudevan
              Nair, Majid Majidi, Steven Spielberg, Kim Ki-Duk, Christopher
              Nolan, Robert Frost, Khaled Hosseini, JK Rowling, as some of his
              creative influences in the world of art.
            </p>
          </>
        </div>
        <div className={styles.smallScreen}>
          <p>
            <span>Sarath Menon</span>, a professional filmmaker, screenwriter,
            visual artist and poet, is an alumnus of The London Film School and
            BITS Pilani. Sarath started his artistic journey writing and acting
            in plays in early childhood. A passion that grew with him, developed
            into a profession as his relationship with visual storytelling
            evolved in his days at BITS Pilani Goa campus where he completed his
            dual degrees in Chemical Engineering and a masters in Chemistry.{' '}
            {!readMore && (
              <button
                className={styles.readMore}
                onClick={() => setReadMore(!readMore)}
              >
                Read more...
              </button>
            )}
          </p>

          {readMore && (
            <div>
              <br />
              <p>
                During the final year of his education in 2015, Sarath made his
                debut film as a Writer-Director with the collaborative blessings
                of legendary filmmakers MJ Radhakrishnan, B Lenin, T
                Krishnanunni, and the film was recognised in the 2016 Kerala
                State Chalachitra Academy Awards for Best Sound Design. The film
                also gifted him a place for his higher education in MA
                Filmmaking at The London Film School, regarded as one of the
                best centres for film education in the world. He was recognised
                as the Best Cinematographer at 2018 Pilas en Corto International
                Film Festival in Spain for his debut Cinematography short, The
                Death of Don Quixote. Sarath would regard his takeaway from the
                film school education as his evolution as a screenwriter and
                director, along with his growth as a cinematographer.
              </p>
              <br />
              <p>
                Beyond film school, Sarath returned to India and started off
                working in Bollywood with Rensil D&apos;Silva on his
                Cop-Thriller film Dial 100 starring Manoj Bajpayee, Neena Gupta
                and Sakshi Tanwar, after which he joined Rajiv Menon Productions
                to collaborate and develop several stories with filmmaker Rajiv
                Menon, based in Chennai.
              </p>
              <br />
              <p>
                An Internationally acclaimed artist and visual storyteller,
                Sarath&apos;s creations hold meaning beyond the blink of an eye.
                Brimming with poetic afterthought, Sarath tells stories through
                visuals and words. His aesthetic compositions and unique
                lighting makes his visual creations deep and insightful. He
                captures emotions and conveys them profoundly, leaving you with
                a tear drop or a smile on your face when he signs off.
              </p>
              <br />
              <p>
                Sarath considers Steve McCurry, G Aravindan, Abbas Kiarostami,
                Gulzar, Rabindranath Tagore, Pablo Neruda, Bharathan, MT
                Vasudevan Nair, Majid Majidi, Steven Spielberg, Kim Ki-Duk,
                Christopher Nolan, Robert Frost, Khaled Hosseini, JK Rowling, as
                some of his creative influences in the world of art.
              </p>
              {readMore && (
                <button
                  className={styles.readMore}
                  onClick={() => setReadMore(!readMore)}
                >
                  Read Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Timeline