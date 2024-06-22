import image1 from '../images/image1.jpeg'
import home2 from '../images/home2.png'
import img2carousel from '../images/img2carousel.jpg'
import img3carousel from '../images/img3carousel.jpg'
import './Home.css';

function Home(){
    return(
        <div id='homebackground' >
            <div className='container-fluid'>
                
        <h1 className="text-center  shadow border"> <img src={image1} alt="" height="80px" weight="80px"/>  ELECTION COMMISSION OF INDIA <img src={image1} alt="" height="80px" weight="80px"/></h1>
        {/* <div className="img-containser">
        <img className='mb-5 img-containser-1' src={home2} alt="loading" width="100%" height="100%" />
        </div> */}

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={home2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2carousel} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3carousel} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        


        <div className="container">
        <p className=''>Voting is when a group of people decide something by saying what they want. It can be for electing a leader or representative, passing a law, and other things. When people are done voting, the votes are counted  and the winner is determined</p>
        <br></br>
        <p className=''>Voting can be done in small groups (friends deciding what to do over weekend), societies (building committee deciding on whether to paint a building), nations (voting for president or - in some cases - voting for independence) and global (United Nations deciding how to limit nuclear weapon development).

Usually the side that gets most votes will win. This is called majority rule. The right to vote is called suffrage.

In some cases, a certain percentage may be needed to win a vote. This is often the case when voting to change the constitution of a country, or when electing a government official. When choosing a government official, there may be several rounds. In the first round, votes can be cast for all candidates. In the second round, only the two or three candidates with the most votes can be chosen. Voting is done in democratic government.

There may also be different systens: In some cases, each person has one vote. Other systems may be like ranking, such as picking the three options the person sees most suitable, for example out of five.</p>

       <p className=''>Elections are held in a variety of political, organizational, and corporate settings. Many countries hold elections to select people to serve in their governments, but other types of organizations hold elections as well. For example, many corporations hold elections among shareholders to select a board of directors, and these elections may be mandated by corporate law.[15] In many places, an election to the government is usually a competition among people who have already won a primary election within a political party.[16] Elections within corporations and other organizations often use procedures and rules that are similar to those of governmental elections.</p>
       <p className=''>Electoral systems are the detailed constitutional arrangements and voting systems that convert the vote into a political decision.

The first step is for voters to cast the ballots, which may be simple single-choice ballots, but other types, such as multiple choice or ranked ballots may also be used. Then the votes are tallied, for which various vote counting systems may be used. and the voting system then determines the result on the basis of the tally. Most systems can be categorized as either proportional, majoritarian or mixed. Among the proportional systems, the most commonly used are party-list proportional representation (list PR) systems, among majoritarian are first-past-the-post electoral system (single winner plurality voting) and different methods of majority voting (such as the widely used two-round system). Mixed systems combine elements of both proportional and majoritarian methods, with some typically producing results closer to the former (mixed-member proportional) or the other (e.g. parallel voting).

Many countries have growing electoral reform movements, which advocate systems such as approval voting, single transferable vote, instant runoff voting or a Condorcet method; these methods are also gaining popularity for lesser elections in some countries where more important elections still use more traditional counting methods.

While openness and accountability are usually considered cornerstones of a democratic system, the act of casting a vote and the content of a voter's ballot are usually an important exception. The secret ballot is a relatively modern development, but it is now considered crucial in most free and fair elections, as it limits the effectiveness of intimidation.</p>
        </div>


        
               
            
        



        </div>
        </div>
    )
}
export default Home;