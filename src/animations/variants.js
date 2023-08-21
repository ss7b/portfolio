export const TextcontainerVariant = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

export const itemFadeIn = {
    initial: index => ({
      opacity:0,
      y:-100,
      x: index % 2 === 0 ? -50 : 50,
    }),
    animate: index=>({
      opacity:1,
      y:0,
      x:0,
      transition:{
          delay: 0.09 * index
        }
    }),
    
}

export const fadeInToRight = {
    initial:{
        x: -50,
        opacity:0
    },
    animate: (index= 0)=>({
        x:0,
        opacity:1,
        transition:{
            duration:.09 * index
        }
    })
}
export const fadeIN = {
    hide:{
        x: '-100vw',
        opacity:0
    },
    show:{
        x:0,
        opacity:1,
        transition:{
            duration:.5
        }
    }
}

export const fadeInToTop = {
    initial: index => ({
      opacity:0,
      y:50,
      
    }),
    animate: index=>({
      opacity:1,
      y:0,
      transition:{
          duration: 0.4
        }
    }),
}