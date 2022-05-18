export const ANIMATION_VARIANTS = {

    heading: {
        hidden: {
            opacity: 0,
        y: '40px'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: .7,
                staggerChildren: .5
            }
        }
    },

    about: {
        hidden: {
            opacity: 0,
        y: '40px'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: .7,
                staggerChildren: .2,
                delayChildren: .7
            }
        }
    },

    interests: {
        hidden: {
            opacity: 0,
        y: '40px'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: .7,
                staggerChildren: .2,
                delayChildren: 1
            }
        }
    },

    photowall: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: .5,
                staggerChildren: .2,
            }
        }
    },

    audioPlayerContainer: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: .8,
                staggerChildren: .3,
                delayChildren: .3
            }
        }
    },

    audioPlayerOne: {
        hidden: {
            opacity: 0,
            x: "-40px"
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: .8
            }
        }
    },

    audioPlayerTwo: {
        hidden: {
            opacity: 0,
            x: "40px"
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: .8
            }
        }
    },

    pressHeading: {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: .8
            }
        }
    },

    pressList: {
        hidden: {
            opacity: 0
        },
        show: {
            opacity:1,
            transition: {
                duration: .4,
                ease: 'easeInOut',
                when: 'beforeChildren',
                staggerChildren: .2,
            }
        }
    },

    pressLinks: {
        hidden: {
            opacity: 0,
            y: '20px'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        }
    },

    contactHeading: {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: .8
            }
        }
    },

    contactForm: {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: .8,
                ease: 'easeInOut',
                when: 'beforeChildren',
                staggerChildren: .2
            }
        }
    },

    contactFormElements: {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .3,
                ease: 'easeInOut',
            }
        }
    }
}