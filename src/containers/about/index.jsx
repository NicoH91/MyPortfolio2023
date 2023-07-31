import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { FaReact, FaSass } from 'react-icons/fa'


const personalDetails = [
  {
    label: "Name",
    value: "Nicolas Haddad"
  },
  {
    label: "Age",
    value: "31"
  },
  {
    label: "Adress",
    value: "Argentina"
  },
  {
    label: "Email",
    value: "nicolasmartinhaddad@gmail.com"
  },
  {
    label: "Contact",
    value: "+5491140689964"
  },
];

const jobSummary = "After 6 years of experience working on the Disney Cruise Line as a Lifeguard Coordinator, it was a great opportunity to grow professionally in an environment surrounded by different nationalities and constant challenges. I'm now looking to make a change in my professional life. Right now, my priority is to secure my first job as a Trainee/Junior Developer. I am currently studying two careers: Frontend Developer React at CoderHouse and Fullstack Developer at the UTN. I describe myself as an energetic person who has developed a mature and responsible approach to any task that I undertake or any situation that I’m presented with. I consider myself a proactive professional and an excellent team player. While I continue looking for my next career opportunity, I am determined to pursue my passion for coding and software development. "






const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='about__content'>
        <div className='about__content__personalWrapper'> <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-900px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3>Front End Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'> Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate></div>
        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <div className='about__content__servicesWrapper__innerContent'>
              <div>
                <FaReact size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <FaSass size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiCss3 size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiJavascript1 size={60} color='var(--yellow-theme-main-color)' />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About
