import solodance from "../assets/eventdetails/solodance.png";
import groupdance from "../assets/eventdetails/groupdance.png";
import battleofbands from "../assets/eventdetails/battleofbands.png";
import mime from "../assets/eventdetails/mime.png";
import adapttune from "../assets/eventdetails/adapttune.png";
import rampwalk from "../assets/eventdetails/rampwalk.png";
import channelsurfing from "../assets/eventdetails/channelsurfing.png";
import musclemafia from "../assets/eventdetails/musclemafia.png";
import webdesign from "../assets/eventdetails/webdesign.png";
import justaminute from "../assets/eventdetails/justamin.png";
import technicalquiz from "../assets/eventdetails/technicalquiz.png";
import paperpresentation from "../assets/eventdetails/paperpresentation.png";
import debate from "../assets/eventdetails/debate.png";
import iplauctionhouse from "../assets/eventdetails/iplauctionhouse.png";
import firelesscooking from "../assets/eventdetails/firelesscooking.png";
import esports from "../assets/eventdetails/esports.png";
import shortfilm from "../assets/eventdetails/shortfilm.png";
import connection from "../assets/eventdetails/connection.png";
import boxcricket from "../assets/eventdetails/boxcricket.png";
import cinequiz from "../assets/eventdetails/cinequiz.png";
import reels from "../assets/eventdetails/reels.png";
import startmusic from "../assets/eventdetails/startmusic.png";
import mehandi from "../assets/eventdetails/mehandi.png";
import duelsinging from "../assets/eventdetails/duelsinging.png";
import beatboxing from "../assets/eventdetails/beatboxing.png";
import dancebattle from "../assets/eventdetails/dancebattle.png";
import treasurehunt from "../assets/eventdetails/treasurehunt.png";
import brandwar from "../assets/eventdetails/brandwar.png";
import logodesign from "../assets/eventdetails/logodesign.png";
import cosplay from "../assets/eventdetails/cosplay.png";
// Adding category property to help with logic in Eventdetail component
export const viewEventDetails = {
  solodance: {
    category: "intra",
    title: "Solo Dance",
    title_font: "font-orbitron",
    title_size: "text-3xl",
    description: "Express yourself through rhythm and movement!",
    brief:
      "Participants will showcase their dance skills in a solo performance, judged based on creativity, musicality, and overall stage presence.",
    poster: solodance,
    url: "solodance",
    eventDetails: {
      time: "12.30 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",

      fees: "₹100",
    },
    rules: [
      "Judging will be done based on creativity, innovation, and design.",
      "Participants will perform for 4-5 minutes.",
      "Participants must submit their music tracks in advance to the event organizers.",
      "Props are allowed but must be approved beforehand.",
      "Costumes should be appropriate and not contain offensive imagery.",
      "Decisions of the judges will be final.",
    ],
  },
  groupdance: {
    category: "intra",
    title: "Group Dance",
    title_font: "font-saira",
    title_size: "text-4xl",
    description:
      "Showcase your teamwork and synchronization in a stunning group dance performance.",
    brief:
      "A platform for teams to display their dance skills with creative choreography, rhythm, and energy.",
    poster: groupdance,
    url: "groupdance",
    eventDetails: {
      time: "3.00 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each team may have 5-12 members.",
      "Time limit is 5-6 minutes.",
      "Props allowed, but fire props are not permitted.",
      "Choice of songs is open to the participants.",
      "Submit the audio track to coordinator of the event. Before the event start.",
      "Dance performance should not convey any indecent gestures.",
    ],
  },
  battleofbands: {
    category: "inter",
    title: "Battle of Bands",
    title_font: "font-rocksalt",
    title_size: "text-4xl",
    description:
      "Compete to be the ultimate band with an electrifying performance.",
    brief:
      "Bands will battle it out in an intense musical showdown to impress the audience and judges.",
    poster: battleofbands,
    url: "battleofbands",
    eventDetails: {
      time: "11.30 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each band should have 3-8 members.",
      "Time limit for performance is 10 minutes including sound check.",
      "Backing tracks are not allowed.",
      "Obscene language or offensive content will lead to disqualification.",
      "The order of performances will be decided and the time slots will be allotted to each band on that day.",
      "The band is required to bring their gear and other necessary instruments along with all necessary cables.",
      "Teams are free to choose the theme for their performance.",
    ],
  },
  mime: {
    category: "intra",
    title: "Mime",
    title_font: "font-roboto",
    title_size: "text-3xl",
    description: "Convey a powerful message without words.",
    brief:
      "A performance art that communicates stories or emotions through silent expressions and gestures.",
    poster: mime,
    url: "mime",
    eventDetails: {
      time: "1.30 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Team event with a maximum of 6 members.",
      "Performance duration is 10 minutes.",
      "No dialogues, lip sync, or props allowed.",
      "No act, shall contain any offensive, obscene, disrespectful actions or gestures.",
      "Background music is allowed.",
      "No mythology and religion violence.",
    ],
  },
  adaptune: {
    category: "intra",
    title: " adaptune",
    title_font: "font-dance",
    title_size: "text-3xl",
    description: "Show your adaptability by dancing to unexpected tunes!",
    brief:
      "Participants must quickly adapt and dance to randomly played songs, showcasing creativity and spontaneity.",
    poster: adapttune,
    url: "adaptune",
    eventDetails: {
      time: "9.30 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Maximum 3 members can participate at a time.",
      "Time Duration - 2 minutes.",
      "Songs will be played continuously in random order from any language.",
      "Participants must adapt their dance moves according to the song played.",
    ],
  },
  cosplay: {
    category: "inter",
    title: "Cosplay",
    title_font: "font-fashion",
    title_size: "text-3xl",
    description: "Showcase your style, confidence, and creativity on the ramp!",
    brief:
      "A fashion and cosplay event where participants display their outfits with elegance and attitude.",
    poster: cosplay,
    url: "cosplay",
    eventDetails: {
      time: "4.30 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "Cosplay Team of 5 to 10 members.",
      "No solo performance is allowed.",
      "Maximum 10 mins Duration For one performance.",
      "Participants must wear decent and appropriate attire.",
      "Revealing, offensive, or inappropriate outfits are strictly prohibited.",
      "No indecent gestures or offensive expressions allowed.",
      "Each participant must complete their walk within the given time frame.",
      "Props must be manageable and should not obstruct others.",
      "No risky stunts or unsafe movements allowed.",
    ],
  },
  rampwalk: {
    category: "inter",
    title: "Ramp Walk",
    title_font: "font-fashion",
    title_size: "text-3xl",
    description: "Showcase your style, confidence, and creativity on the ramp!",
    brief:
      "A fashion and cosplay event where participants display their outfits with elegance and attitude.",
    poster: rampwalk,
    url: "rampwalk",
    eventDetails: {
      time: "4.00 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "participants may be solo or group but winner will be only one.",
      "Maximum 10 mins Duration For one performance.",
      "Participants must wear decent and appropriate attire.",
      "Revealing, offensive, or inappropriate outfits are strictly prohibited.",
      "No indecent gestures or offensive expressions allowed.",
      "Each participant must complete their walk within the given time frame.",
      "Props must be manageable and should not obstruct others.",
      "No risky stunts or unsafe movements allowed.",
    ],
  },
  channelsurfing: {
    category: "intra",
    title: "Channel Surfing",
    title_font: "font-comedy",
    title_size: "text-3xl",
    description: "Act and switch scenes like a TV channel!",
    brief:
      "Teams will act out various scenes as if changing TV channels based on cues from the judges.",
    poster: channelsurfing,
    url: "channel_surfing",
    eventDetails: {
      time: "11.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each team must have 5-8 members.",
      "Performance timing is 5-7 minutes.",
      "Cue will be given by the judge to change the channel on the spot.",
      "Performance has to be changed immediately after that.",
      "All the participants in the group should act accordingly.",
    ],
  },
  musclemafia: {
    category: "inter",
    title: "Muscle Mafia",
    title_font: "font-fitness",
    title_size: "text-3xl",
    description:
      "Showcase your strength and fitness in a bodybuilding competition!",
    brief:
      "Participants will be judged on muscle definition, symmetry, and posing techniques.",
    poster: musclemafia,
    url: "muscle_mafia",
    eventDetails: {
      time: "5.30 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹ 100",
    },
    rules: [
      "Open to all students meeting the participation criteria. Participants must be physically fit and medically cleared.",
      "Proper posing trunks or gym shorts are mandatory.",
      "No excessive oil, glitter, or body paint allowed.",
      "Participants must perform standard bodybuilding poses.",
      "Use of performance-enhancing substances is strictly prohibited.",
    ],
  },
  startmusic: {
    category: "intra",
    title: "Start Music",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Test your musical knowledge and speed in this exciting game!",
    brief:
      "Teams will compete in multiple rounds to identify songs, fill in lyrics, and answer music-related questions.",
    poster: startmusic,
    url: "startmusic",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Teams of 3 will compete in three rounds featuring Tamil movie songs.",
      "Round 1: Identify songs from pictures.",
      "Round 2: Buzzer round - Identify songs from BGM",
      "Round 3: Fill in the missing lyrics.",
      "Incorrect answers in Rounds 1 & 2 do not award points to the opponent, but Round 3 does.",
    ],
  },
  reels: {
    category: "intra",
    title: "Reels",
    title_font: "font-video",
    title_size: "text-3xl",
    description: "Create short, engaging, and creative video content!",
    brief:
      "Participants will create and submit short-form videos that showcase creativity and originality.",
    poster: reels,
    url: "reels",
    eventDetails: {
      time: "11.30 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "The video should be original and creative.",
      "The video should not exceed more than 30 seconds.",
      "Content should not contain violence or defamatory material.",
      "Participants must submit their reel at least three hours before the event.",
      "The content of the reel should be within the college campus.",
    ],
  },
  cinequiz: {
    category: "inter",
    title: "Cine Quiz",
    title_font: "font-cinequiz",
    title_size: "text-3xl",
    description: "Test your knowledge of anime and manga!",
    brief:
      "A quiz event covering various anime and manga series, featuring multiple rounds with different question formats.",
    poster: cinequiz,
    url: "cinequiz",
    eventDetails: {
      time: "12.00 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Participants can compete in teams (maximum of 4 members 'no individual').",
      "The quiz will consist of multiple rounds, including MCQs, picture identification, and rapid-fire questions.",
      "No external help (internet, books, or audience assistance) is allowed.",
      "Points will be awarded for each correct answer.",
    ],
  },
  boxcricket: {
    category: "inter",
    title: "Box Cricket",
    title_font: "font-sports",
    title_size: "text-3xl",
    description: "A fast-paced indoor cricket match with a twist!",
    brief:
      "A fun version of cricket played in a confined space with unique rules to challenge players.",
    poster: boxcricket,
    url: "boxcricket",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each team must have 6 players.",
      "Matches will be played in a limited-overs format.",
      "No running between wickets; scoring is based on boundaries.",
      "Fielders must not obstruct batters intentionally.",
      "Decisions of the umpires will be final.",
    ],
  },
  connection: {
    category: "intra",
    title: "Connection",
    title_font: "font-logic",
    title_size: "text-3xl",
    description: "A puzzle-solving event where participants connect the dots!",
    brief:
      "Teams will need to identify the correct song or image by making logical connections between given clues.",
    poster: connection,
    url: "connection",
    eventDetails: {
      time: "11.30 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Participants can compete in teams (Groups of 3 or 4 members).",
      "The event will consist of multiple rounds.",
      "No external help (internet, books, or audience assistance) is allowed.",
      "Points will be awarded for each correct answer.",
      "​The Objective: Connect a series of images to identify a single word, name, or phrase.",
    ],
  },
  shortfilm: {
    category: "inter",
    title: "Short Film",
    title_font: "font-film",
    title_size: "text-3xl",
    description:
      "Showcase your filmmaking skills in this creative competition!",
    brief:
      "Participants will create a short film that showcases storytelling, cinematography, and originality.",
    poster: shortfilm,
    url: "shortfilm",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "The short film must be between 5 to 10 minutes, including credits.",
      "Content should be original, appropriate, and free from offensive material.",
      "Films must be in MP4 or MOV format with HD quality.",
      "No plagiarism or copyrighted material without permission.",
      "The film must be provided on a USB drive on The Event Day.",
    ],
  },
  esports: {
    category: "inter",
    title: "E-Sports",
    title_font: "font-gaming",
    title_size: "text-3xl",
    description: "Compete in the ultimate digital battle!",
    brief:
      "An intense gaming competition featuring popular multiplayer titles.",
    poster: esports,
    url: "esports",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "BGMI, Free Fire",
      "Teams of 4 players each.",
      "Participants must use their own gaming setup unless provided by the organizers.",
      "Fair play and sportsmanship must be maintained at all times.",
      "Cheating, hacking, or any form of exploitation will lead to disqualification.",
      "Match format and rules will be shared before the tournament starts.",
    ],
  },
  firelesscooking: {
    category: "intra",
    title: "Fireless Cooking",
    title_font: "font-cooking",
    title_size: "text-3xl",
    description: "Showcase your culinary creativity without fire!",
    brief:
      "A cooking competition where participants prepare dishes without using fire or gas.",
    poster: firelesscooking,
    url: "firelesscooking",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "One team may contain a maximum of 2 members.",
      "Participants must bring their own ingredients and utensils.",
      "Total preparation time is 30 minutes.",
      "No pre-cooked or store-bought food items are allowed.",
      "Milk and milk products can be used.",
      "Ready-made decorative are not allowed.",
    ],
  },
  iplauctionhouse: {
    category: "inter",
    title: "IPL Auction House",
    title_font: "font-sports",
    title_size: "text-3xl",
    description: "Strategize and bid to build the best cricket team!",
    brief:
      "Participants will engage in a simulated IPL-style auction, making strategic bids for players.",
    poster: iplauctionhouse,
    url: "iplauctionhouse",
    eventDetails: {
      time: "12.00 PM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each team will be given a virtual budget to bid for players.",
      "Team should consist of 4 members.",
      "Strategic planning and budget management are key.",
      "Decisions of the auctioneers will be final.",
    ],
  },
  debate: {
    category: "inter",
    title: "Debate",
    title_font: "font-debate",
    title_size: "text-3xl",
    description: "Engage in intellectual combat with words!",
    brief:
      "A formal debate competition where teams argue for or against a given topic.",
    poster: debate,
    url: "debate",
    eventDetails: {
      time: "11.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Teams consist of two speakers each.",
      "Each team presents constructive speeches and rebuttals.",
      "Preparation time is given for 2 min. Maximum performance is 8 to 10 min.",
      "The affirmative gives the first constructive speech and the final rebuttal.",
      "Rebuttals alternate: negative, affirmative, negative, affirmative.",
      "The affirmative may define terms; if challenged, the judge decides based on reasonableness.",
      "Assertions require proof with logic and evidence.",
      "Questioners may ask relevant, fair questions but cannot make statements.",
      "Each speaker is questioned after their constructive speech without consulting teammates.",
      "No new arguments may be introduced in rebuttals.",
      "The affirmative should address key negative points before the final rebuttal.",
      "The judge rules only on presented material.",
      "Any gains outside the procedure are disallowed.",
    ],
  },
  paperpresentation: {
    category: "inter",
    title: "Paper Presentation",
    title_font: "font-academic",
    title_size: "text-3xl",
    description: "Showcase your research and innovative ideas!",
    brief:
      "Participants will present their research papers in a structured format and engage in discussions.",
    poster: paperpresentation,
    url: "paperpresentation",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Participants can present individually or in teams of three.",
      "Presentations must follow a standard format: Title, Abstract, Introduction, Methodology, Results, Conclusion, and References.",
      "Plagiarism is strictly prohibited.",
      "Each team/participant will get 8-10 minutes to present, followed by a Q&A session.",
      "Presentations must be in PowerPoint (PPT) or PDF format.",
    ],
  },
  technicalquiz: {
    category: "inter",
    title: "Technical Quiz",
    title_font: "font-tech",
    title_size: "text-3xl",
    description: "Test your technical knowledge in this challenging quiz!",
    brief:
      "A quiz competition covering various technical subjects, testing participants' knowledge and problem-solving skills.",
    poster: technicalquiz,
    url: "technicalquiz",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Teams can have up to 2-3 members.",
      "The quiz will have two rounds: Basic questions and Departmental questions.",
      "No external help (internet, books, or audience assistance) is allowed.",
    ],
  },
  justaminute: {
    category: "intra",
    title: "Just A Minute",
    title_font: "font-public_speaking",
    title_size: "text-3xl",
    description: "Think fast, speak fluently, and engage the audience!",
    brief:
      "Participants will be given a topic on the spot and must speak for one minute without hesitation or repetition.",
    poster: justaminute,
    url: "justaminute",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "Solo event.",
      "Participants get 1 minute to prepare and 2 minutes to speak.",
      "No hesitation, deviation, or repetition is allowed.",
      "Both Tamil and English.",
      "Topics will be randomly assigned.",
    ],
  },
  webdesign: {
    category: "inter",
    title: "Web Design (UI/UX)",
    title_font: "font-tech",
    title_size: "text-3xl",
    description: "Create visually stunning and user-friendly websites!",
    brief:
      "Participants will design a functional and aesthetically pleasing web interface based on the given theme.",
    poster: webdesign,
    url: "webdesign",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Participants can compete individually or in teams.",
      "The design must align with the given theme.",
      "Websites should focus on smooth navigation, clear typography, and good color contrast.",
      "Each team/participant will get 8-10 minutes to present their design.  ",
    ],
  },
  duelsinging: {
    category: "intra",
    title: "Duo Singing",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your vocal potential and mesmerize the audience!",
    brief:
      "A duo singing competition where participants showcase their vocal range, pitch, and stage presence.",
    poster: duelsinging,
    url: "duelsinging",
    eventDetails: {
      time: "10.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each participant has a total time of 5 mins",
      "Participants are not allowed to perform more than the time limit If done the participant will be disqualified",
      "Strictly karaoke track allowed",
      "Song has to be sung without lyric paper.",
      "Round 1- Melody song.",
      "Round 2- Fast beat song.",
      "Round 3- Song of your choice.",
    ],
  },
  mehandi: {
    category: "intra",
    title: "Mehandi",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your artistry and turn hands into living canvases!",
    brief:
      "A vibrant Mehandi competition where participants showcase creativity, precision, and artistic flair.",
    poster: mehandi,
    url: "mehandi",
    eventDetails: {
      time: "11.30 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "number of members can be participants  1.",
      "Participants will be given 1 hour to complete their Mehendi design (theme - WOMEN'S DAY).",
      "Each participant must bring their own Mehendi materials.",
      "The design must cover one full hand.",
      "Participants may apply Mehendi on their own hand or a model’s hand (bringing a model is recommended).",
      "Individual participation only and no extra time will be provided.",
    ],
  },
  treasurehunt: {
    category: "intra",
    title: "Treasure Hunt",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your curiosity, crack the clues, and race to claim the treasure!",
    brief:
      "An exciting treasure hunt where participants showcase problem-solving skills, teamwork, and sharp observation",
    poster: treasurehunt,
    url: "treasurehunt",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Each team must have 2–4 members.",
      "Clues will be given round-wise and must be followed in sequence.",
      "Use of mobile phones or external help is strictly prohibited.",
      "Any damage to college property will lead to disqualification.",
      "The first team to complete all clues wins.",
    ],
  },
  dancebattle: {
    category: "intra",
    title: "Dance Battle",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your moves, own the stage, and captivate the crowd!",
    brief:
      "A high-energy dance battle where participants showcase rhythm, style, and stage presence.",
    poster: dancebattle,
    url: "dancebattle",
    eventDetails: {
      time: "11.00 AM",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "Solo or team (maximum 4 members).",
      "Time limit: 3–5 minutes per round.",
      "Music must be submitted prior to the event or will be provided onspot.",
      "Vulgar or offensive gestures are strictly prohibited.",
      "Judging based on energy, creativity, coordination, and stage presence.",
    ],
  },
  corporatewalk: {
    category: "intra",
    title: "Corporate Walk",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "“Unleash your confidence, own the runway, and command the spotlight!",
    brief:
      "A professional runway event where participants showcase confidence, style, and corporate presence.",
    poster: rampwalk,
    url: "corporatewalk",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "Solo or team (maximum 4 members).",
      "Formal/corporate attire is mandatory.",
      "Time limit: 3–5 minutes.",
      "Participants may introduce their company/brand concept.",
      "Judging based on confidence, attire, communication, and overall presentation.",
    ],
  },
  logodesign: {
    category: "intra",
    title: "Logo Design",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Turn ideas into icons and let your design leave a lasting mark!",
    brief:
      "An artistic challenge highlighting creativity, concept development, and logo presentation.",
    poster: logodesign,
    url: "logodesign",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹100",
    },
    rules: [
      "Solo event. ",
      "Time limit: 1–2 hours. ",
      "Participants may use laptop or drawing materials as instructed. ",
      "Logo must be original and related to the given theme. ",
      "Judging based on creativity, relevance, clarity, and uniqueness.",
    ],
  },
  brandwar: {
    category: "intra",
    title: "Brand War",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your strategy, defend your brand, and dominate the battlefield!",
    brief:
      "“A strategic brand battle where participants showcase marketing skills, creativity, and business insight.",
    poster: brandwar,
    url: "brandwar",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Team event (maximum 4 members).",
      "Brand/topic will be given on spot.",
      "Preparation time: 5–10 minutes.",
      "Presentation time: 3–5 minutes.",
      "Judging based on creativity, marketing strategy, teamwork, and communication.",
    ],
  },
  businessquiz: {
    category: "intra",
    title: "Business Quiz",
    title_font: "font-music",
    title_size: "text-3xl",
    description: "Unleash your business acumen and outsmart the competition!",
    brief:
      "An engaging business quiz where participants showcase their knowledge, analytical thinking, and decision-making skills.",
    poster: paperpresentation,
    url: "businessquiz",
    eventDetails: {
      time: "-",
      date1: "12 Mar 2026",
      date2: "13 Mar 2026",
      fees: "₹50 per person",
    },
    rules: [
      "Participants can compete individually or in teams and 3(team) participant allowed.",
      "The quiz will consist of multiple rounds, including MCQs, pictureidentification, and rapid-fire questions.",
      "No external help (internet, books, or audience assistance) is allowed.",
      "Points will be awarded for each correct answer.",
    ],
  },
};
