import { Col, Container, Row } from "react-bootstrap";

function Utility() {
    return (
      <section className='main'>
          <Container>
        <div className="utility-sec">
            
                <div className="utility-head">
                    <h2>Utility & Minting Incentives</h2>
                </div>
                <div className="staking-main">
                    <h4>FUNGUY STAKING</h4>
                    <p>With Phase 1 of our Roadmap well underway, we are happy to officially 
                        announce that FunGuy holders will be able to stake their FunGuy NFTs 
                        starting in Q2 2022.  FunGuy holders will receive $FUNGI tokens in return 
                        for staking their NFTs.  This will be done by connecting their wallets to our 
                        official website (funguyscnft.com).  We will be creating a Whitepaper soon 
                        laying out all the details of staking rewards, utility, and more! </p>
                </div>
           
        </div>
        <div className="staking-notes-sec">
            <Row>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>CHARITY   </h6>
                        <p>10% of all proceeds will be donated to the Amazon Conservation Association!</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>MINT a 1 of 1</h6>
                        <p>Each of our 7 little mushrooms in the first series has a 1 of 1 unique to them. Each one a superhero. Look out for Spider-taro, BatMo, IronPaul, Captain Orlando, Sammy the Black Panther, Super Brad and Deadpooluigi! 
If you mint one you will be airdropped 100 ADA after minting finishes.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>$ADA RAFFLE </h6>
                        <p>At 25%, 50%, 75% and 100% of minting for Series 1, we will be holding raffles of 250ADA at each benchmark for FunGuy holders only. </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="staking-notes">
                        <h6>SERIES 1&2 HOLDERS</h6>
                        <p>NFT holders of either Series 1 and/or Series 2 (FunGuys and FunGirls) will have the chance to turn their NFT into a cool new one with our 'spore syringes' which will come after Series 2!</p>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
      </section >
    );
  }
  
  export default Utility;
  