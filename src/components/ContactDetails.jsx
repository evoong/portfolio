import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { socials } from '../constants';

const contactDetails = [
  { type: 'Email', value: 'ericxvoong@gmail.com' },
  { type: 'Phone', value: '+1-647-687-2386' },
  { type: 'Address', value: 'Toronto, Ontario, Canada' },
];

const SocialCard = ({ index, title, icon, link}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <a href = {link}>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
        </a>
      </div>
    </motion.div>
  );
};

const ContactDetails = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Get in touch</p>
        <h2 className={styles.sectionHeadTextLight}>Contact Information.</h2>
      </motion.div>

      <div className="flex flex-col items-center gap-4 mt-14">
        {contactDetails.map((detail) => (
          <div className="text-center" key={detail.type}>
            <h3 className={styles.sectionSubTextLight}>{detail.type}</h3>
            <p className={styles.sectionHeadTextLight}>{detail.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {socials.map((social, index) => (
          <SocialCard key={social.title} index={index} {...social} link = {social.link}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ContactDetails, 'ContactDetails');
// import { motion } from 'framer-motion';
// import { BallCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
// import { technologies } from '../constants';
// import { styles } from '../styles';
// import { textVariant } from '../utils/motion';

// const Tech = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubTextLight}>My skills</p>
//         <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
//       </motion.div>

//       <div className="flex flex-wrap justify-center gap-10 mt-14">
//         {technologies.map((technology) => (
//           <div className="w-28 h-28" key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Tech, '');
