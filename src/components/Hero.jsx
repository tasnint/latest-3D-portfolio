import { motion } from "framer-motion";

import { styles } from "../styles";




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}
    // style={{ 
    //   backgroundImage: "url('/background.png')",
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center'
    // }}
    
    >
      <div
        className={`absolute inset-0 top-[85px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >
            Hi, I'm <span className='text-[#915EFF]'>Tanisha</span> and this is my <span className='text-[#915EFF]'>portfolio website</span>!
          </h1>
          
        </div>
      </div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`} style={{ height: 'calc(100vh - 120px)', paddingTop: '50px' }}>
        {/* <RenderModel>
          <Auto />
        </RenderModel> */}
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW5jZDNnc3o3cXJvdXB6OGxwcDIyeTk1MnRkMXFtM2h2YWQxNGt4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EzlV3RSwM2d9TCvwPt/giphy.webp" alt="Animated GIF"  style={{maxWidth:'100%', height:'auto'}}/>
      </div> 

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>


    </section>
  );
};

export default Hero;
