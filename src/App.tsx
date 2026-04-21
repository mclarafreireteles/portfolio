import styles from './App.module.css'
import Link from './components/link/Link'
import Section from './components/section/Section'


function App() {

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Maria Clara Freire</h3>
        <h3 className={styles.headerSubtitle}>Junior Front-end Developer</h3>
      </div>
      <div className={styles.aboutMe}>
        <img src="../src/assets/profile_pic.png" alt="Profile picture" />
        <h2>Hi! My name is Maria Clara. <br />I'm a Front-end developer</h2>
        <p>I am currently a Systems and Digital Media student at UFC and a front-end developer at the Systems and Database Laboratory.</p>
      </div>
      <Section title='Get in touch' contentClassname={styles.contactLinks}>
        <Link title='Curriculum' url='' />
        <Link title='Github' url='https://github.com/mclarafreireteles' />
        <Link title='Linkedin' url='https://www.linkedin.com/in/maria-clara-freire-teles-759381276/?locale=pt' />
      </Section>
      {/* <Section title='Projects'>
        
      </Section> */}
    </div>
  )
}

export default App
