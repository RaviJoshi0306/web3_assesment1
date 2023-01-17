import "./index.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="section-1">
        <div className="section-1-header">
          <h4>Bomb Finance Summary</h4>
        </div>
        <hr />
        <div className="container-section-1">
          <div className="leftTable">
            <div className="row">
              <div className="col">
                {/* 1 of 2 */}
                <table className="table-dark" id="leftTableid">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Current Supply</th>
                      <th scope="col">Total Supply</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">$BOMB</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">$BSHARE</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">$BBOND</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rightTable">
               <div className="epoch">
                 <h4>Current Epoch <br/> 258</h4>
                 <h4>03:38:36 <br/>Next Epoch in</h4>
               </div>
               <div className="epoch">
                 <h4>Live TWAP: 1.17</h4><br/>TVL: $5,002,412<br/>Last Epoch TWAP: 1.22
               </div>
               
          </div>

        </div>
      </div>
      <div className="xyz">

        <div className="section-2-1">

          <div className="section-2-header">
            <h4>Read investment strategy</h4>
          </div>

          <div className="subdiv-1">

            <div className="sub-sub-div-1">
              <div className="investNow"><button className="investNow1"><b>Invest Now</b></button></div>
              <div className="chats">
                
                <div className="discord"> <button className="button">chat on discord</button ></div>
                <div className="docs"> <button className="button">Read docs</button ></div>
              </div>

            </div>

            <div className="larger">
              <div className="larger-subdiv">
                <div className="Boardroom">
                <div className="Boardroomsub">
                  <div className="Boardroomelement">
                  Boardroom
                  </div>
                  <div className="Boardroombutton">
                     <button className="button">Recommmended</button>
                  </div>
                   </div>
                   <div className="Bshare">
                     <div className="Bshare1">
                   Stake BSHARE and earn BOMB every epoch
                   </div>
                   <div className="Bshare1">
                         TVL: $1,008,430
                   </div>
                   </div>
                   <hr/>
                   
                   
                <div className="Boardroom-below">
                  <div className="Boardroom-below-disc">Total stacked: 7323</div>
                  <div className="TVL">
                  <div className="Boardlower1">
                    <div className="Boardlower">
                    
                      Daily returns <br/>2%
                    </div>
                    <div className="Boardlower">
                      Your stake<br/> 124.21 ≈ $1171.62
                    </div>
                    <div className="Boardlower">
                      Earned 6.4413 ≈ $298.88
                    </div>
                    <div className="parenboard">

                    <div className="motherBoard">
                    <div className="Boardlower">
                       <button className="button">Deposit</button>
                    </div>
                    <div className="Boardlower">
                       <button className="button">Withdraw</button>
                    </div>
                    </div>
                    <div className="claim">
                     <button className="button">Claim rewards</button>
                  </div>
                    </div>
                  </div>
                  </div>
                  
                   </div> 
                </div>
                
              </div>
              
            </div>


          </div>

        </div>


        <div className="section-2-2">
          <div className="LatestNews">
            <h4>Latest News</h4>
          </div>
        
        </div>
        
      </div>
      
      <div className="section-3">
        <div className="bombfarmshead">
          <h3>Bomb Farms</h3>
        </div>
        <div className="tokenshead">
          <div className="token1">
        Stake your LP tokens in our farms to start earning $BSHARE
          </div>
          <div className="token2">
            <button className="token3">Claim All</button>
          </div>
        </div>
        <div className="bombbtlower">
        <div className="bombbt1">
        <h2>BOMB BTCB</h2>
        </div>
        <div className="bombbt2">
        <h2><button className="bombbt4">Recommmended</button></h2>
        </div>
        <div className="TVL1">TVL: $1,008,430</div>

        </div>
       
          <hr/>
          <div className="s3_div2-content">
            <div className="s3-div2-content-table">
              <table className="table-dark" id="sec2table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Daily Returns:</th>
                    <th scope="col">Your stake</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>2%</td>
                    <td>6.0000 ≈ $1171.62</td>
                    <td> 1660.4413 ≈ $298.88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="s3part">
              <div className="sec3-deposit"><button className="bombbt4">Deposit</button></div>
              <div className="sec3-withdraw"><button className="bombbt4">Withdraw</button></div>
              <div className="sec3-rewards"><button className="bombbt4">Rewards</button></div>
            </div>
          </div>
          </div>
        <div className="section-3">
          <div className="s3_div2-header">
    
          
          </div>
          <hr />
          <div className="bombbtlower">
        <div className="bombbt1">
        <h2>BSHARE-BNB</h2>
        </div>
        <div className="bombbt2">
        <h2><button className="bombbt4">Recommmended</button></h2>
        </div>
        <div className="TVL1">TVL: $1,008,430</div>
       

        </div>
           <hr/>
          
       
          <div className="s3part">
            <div className="s3-div2-content-table">
              <table className="table-dark" id="sec2table">
                <thead>
                  <tr>
                    <th className="dataval" scope="col"></th>
                    <th className="dataval" scope="col">Daily Returns:</th>
                    <th className="dataval" scope="col">Your stake</th>
                    <th className="dataval" scope="col">Earned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td className="dataval"></td>
                    <td className="dataval">2%</td>
                    <td className="dataval">6.0000 ≈ $1171.62</td>
                    <td className="dataval"> 1660.4413 ≈ $298.88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div className="2">
              <div className="s3-right">
              <div className="sec3-deposit"><button className="bombbt4">Deposit</button></div>
              <div className="sec3-withdraw"><button className="bombbt4">Withdraw</button></div>
              <div className="sec3-rewards"><button className="bombbt4">Rewards</button></div>
            </div>
            </div>
      </div>
      <div className="section-3">
        <div className="Bonds">
          <h2>BONDS</h2>
        </div>
            <div className="Bonds-content">
               BOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
            </div>
            <div className="footer">
              <div className="foter-child">
              Current Price: (Bomb)^2<br/><br/><br/><br/>BBond = 6.2872 BTCB
              </div>
              <div className="foter-child">
              Available to redeem: <br/><br/><br/><br/> 456
              </div>
              <div className="footer-parent">
              <div className="foter-child">
              Purchase BBond
                </div>
                <div className="foter-child">
                Bomb is over peg
                </div>
                </div>
                <div className="footer-parent">
              <div className="foter-child">
              Purchase 
                </div>
                <hr/>
                <div className="foter-child">
                Redeem
                </div>
                </div>
            </div>
      </div>
    </div>

  );
}

export default App

