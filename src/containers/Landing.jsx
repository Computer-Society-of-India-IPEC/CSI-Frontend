// Components
// Components
import HomeCard from "../components/HomeCard";
import about from '../images/home-card-1.png'
import question from '../images/home-card-2.png'
import award from '../images/home-card-3.png'

const Landing = () => {
  return (
    <div className="mt-44 px-8  flex flex-row items-center justify-center bg-slate-50">
        <HomeCard
            Icon={about}
            Heading="About Us"
            Content="The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts
                        who were a computer user group and felt the need to organize their activities."
        />
        <HomeCard
            Icon={question}
            Heading="What We Do"
            Content="Having 488 student branches and rooted firmly at 73 different locations, CSI has plans of opening more chapters & 
            activity centers in smaller towns of the country. The idea is to spread the knowledge, and provide opportunities to as many 
            interested as possible"
        />
        <HomeCard
            Icon={award}
            Heading="CSI Awards"
            Content="We Recognize Innovations And Indigenous Developments In The Field Of Information Technology In India. CSI Awards 
            Are Instituted To Acknowledge And Motivate Individuals And Organizations Working In The ICT Field."
        />
    </div>
    );
}

export default Landing;
