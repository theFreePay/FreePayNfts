const { createClient } = supabase
const _supabase = createClient('https://nomuylulsjtwjoinrxmr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXV5bHVsc2p0d2pvaW5yeG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzgwOTgsImV4cCI6MjA2MTI1NDA5OH0.9Vgp9y1EQkbH2GooJgUmXjW4NEA-WY8keL4P5S1tiIc')

const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

if (!user) {
  window.location.href = "https://t.me/TheFreePayBot?start=true";
}
const CoinSound = new Audio('./sound/699520__valenspire__coin_drop_25.wav');
const IntroSount = new Audio('./sound/IntroSound.wav');

const a = user.id;


async function telebot() {

  // const { data2, error2 } = await _supabase
  //   .from('telusersinfo')
  //   .upsert({
  //     id: user.id,
  //     name: user.first_name,
  //     username: user.username,
  //     premium: user.is_premium,

  //   },
  //     { onConflict: ['id'] }
  //   )
  //   .select()
  
  
  
  let { data: telusersinfo, error } = await _supabase
  .from('telusersinfo')
  .select('*')
  .eq('id', a)
  .single();
  if (telusersinfo) {
    document.getElementById('OkBtn').addEventListener('click',()=>{
      IntroSount.play();
      document.getElementById('OkBtn').style.opacity = '0';
      document.getElementById('shopsec').className = 'secc2';
      document.getElementById('shopsec').style.display = "flex";
      document.getElementById('FPNFTs').style.display = 'none';
      setTimeout(()=>{
      document.getElementById('FPNFTs').style.display = 'flex';

      document.getElementById('FPNFTs').innerText = 'The FreePay NFTs🌸';
      document.getElementById("bubbleContainer").style.backgroundColor = '#000022';
  
      },4000)
    })
    setTimeout(() => {
      document.getElementById('welcomspan').style.display = "flex";
    }, 2000)
    setTimeout(() => {
      document.getElementById('ToSpan').style.display = "flex";
  
    }, 3000)
    setTimeout(() => {
      document.getElementById('FreePaySpan').style.display = "flex";
  
    }, 4000)
    setTimeout(() => {
      document.getElementById('NFTsSpan').style.display = "flex";
  
    }, 5000)
    
  }

  document.getElementById("UserIdNewProf").innerText = `${a}`;
  document.getElementById('ProfPic').src = `${telusersinfo.ProfLink}`;
  setInterval(() => {

    document.getElementById('NewProfVale').innerText = `${telusersinfo.point.toFixed(1)}`;
  }, 1000)


  // console.log(telusersinfo.reffrall);
  const reffrall = telusersinfo.reffrall;
  let points1 = telusersinfo.point;
  let fixedPoint = points1.toFixed(1);

  let UserFind = telusersinfo;
  if (UserFind.id) {
    document.getElementById('loadingPage').style.display = 'none';
  };




} telebot();



async function MedalViewer() {

  let { data: MedalsOwner, error } = await _supabase
    .from('MedalsOwner')
    .select('*')
    .eq('Owner', `${a}`)

  const MedalsHave = MedalsOwner;
  let DivCounerMedal = MedalsOwner.length;
  let MedalPriceCounter = 0;
  if (DivCounerMedal > 0) {
    document.getElementById('NoNftFindP').style.display = 'none';
    document.getElementById('MedalsMountCounter').innerText = `${DivCounerMedal}`;



  }
  for (let YY = 0; YY < DivCounerMedal; YY++) {

    // console.log(MedalsHave[YY].Selling);


    if (YY < DivCounerMedal && MedalsHave[YY].Selling == false) {
      // console.log(YY);
      var newdiv = document.createElement('div');
      newdiv.className = 'NFTsCardDiv';
      let MedalsName = MedalsHave[YY].MedalName;

      let { data: MedalsNamesOwner, error2 } = await _supabase
        .from('MedalsInfo')
        .select('*')
        .eq('MedalName', `${MedalsName}`)



      newdiv.innerHTML = `
      <div id="${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}Hider" style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem #EE00ff inset;background: linear-gradient(to right, rgb(0, 0, 0),red);border-color: #fff;border-width: 0.1rem;border-style: solid;">
        <div style="width: 75%;display: flex;flex-direction: row;">
          <div>
            <img src="${MedalsNamesOwner[0].imgsrc}"
              alt=""
              style="display: flex;margin: 0.2rem; width: 4rem;height: 4rem;background-color: black;border-radius: 0.5rem; border-color: #EE00ff;border-width: 0.2rem;border-style: solid;margin-right: 0.5rem;">
          </div>
          <div
          style="width: 80%;height: 5rem;display: flex;flex-direction: column;margin-top: -0.5rem;">
          <p id="MedalName" style="font-size: 1.15rem;height: 1.5rem; display: flex;color: #FFF;">${MedalsHave[YY].MedalName.slice(0, 11)}... <span
                style="color: #EE00ff;"> #${MedalsHave[YY].ThisMedal}</span></p>
            <div style="width: 80%;height: 2.5rem;margin-top: -1.5rem;">
            <div
                style="display: flex;flex-direction: row;align-items: center;justify-content: start;gap: 0.3rem;">
                <p style="color: #FFF;display: flex;margin-left: 0.2rem;font-size: 1.2rem;">${MedalsNamesOwner[0].Price.toFixed(1)}</p>
                <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                    fill="currentColor" class="bi bii bi-coin" viewBox="0 0 16 16">
                    <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>
    
                <div style="display: flex;margin-left: 1rem;width: 2.3rem;height: 1.2rem;border-radius: 0.3rem;align-items: center;justify-content: center;border-color: green;border-style: solid;box-shadow: 0 0 1rem rgba(172, 255, 47, 0.448) inset;">
                  <p style="display: flex;font: size 0.01rem;color: green;" id="Sood${MedalsNamesOwner[0].Sood.toFixed(1)}">${MedalsNamesOwner[0].Sood.toFixed(1)}%</p>
                </div>
                <div>
    
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div style="display: flex;flex-direction: column; width: 20%;margin-right: 0.2rem;gap: 0.2rem;">
          <button style="background: linear-gradient(to bottom, red,orange); color: #fff;width: 100%;height: 2rem;border-radius: 0.5rem;" id="${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}MedalSell">Sell</button>
          <button style="background: linear-gradient(to bottom, purple,#EE00ff); color: #fff;width: 100%;height: 2rem; border-radius: 0.5rem;" id="${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}MyMedal">info</button>
        </div>
      </div>
    `;


      let CoinToValue = MedalsNamesOwner[0].Price / 1000;
      let NftPrice = MedalsNamesOwner[0].Price;
      let NftPriceDowne = MedalsNamesOwner[0].Price / 95;
      let NftPriceOk = NftPrice -= NftPriceDowne;

      document.getElementById('NFTsviewerbottomsec').appendChild(newdiv);

      document.getElementById(`${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}MedalSell`).addEventListener('click', () => {
        // console.log(NftPriceOk);
        let questionForSel = window.confirm('Do you want to sell your nft?');
        if (questionForSel) {
          // console.log("Ok hes");
          async function NFTSellChangeInfo() {
            CoinSound.play();


            let { data: SellerFinder, error } = await _supabase
              .from('telusersinfo')
              .select('*')
              .eq('id', a)
            // console.log(SellerFinder[0]);
            let SellerPoint = SellerFinder[0].point;
            let PointOkToSell = SellerPoint += NftPriceOk;
            let RealyquestionForSel = window.confirm(`You will get ${NftPriceOk.toFixed(2)} coins`);
            if (RealyquestionForSel) {
              async function SellerePointGiveFunc() {
                const { data, error } = await _supabase
                  .from('telusersinfo')
                  .update({ point: `${PointOkToSell}` })
                  .eq('id', `${a}`)
                  .select()

                console.log(`${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}Hider`);
                document.getElementById(`${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}Hider`).style.pointerEvents = 'none';
                document.getElementById(`${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}Hider`).style.filter = 'blur(2px)';

                const { data235, error235 } = await _supabase
                  .from('MedalsInfo')
                  .update({ Price: `${NftPriceOk}`, Sood: `${MedalsNamesOwner[0].Sood -= 0.5}` })
                  .eq('MedalName', `${MedalsHave[YY].MedalName}`)
                  .select()




                const { data236, error236 } = await _supabase
                  .from('MedalsOwner')
                  .update({ Owner: '6413998670', LastOwner: `${a}`, Selling: true })
                  .eq('id', `${MedalsHave[YY].id}`)
                  .select()



              } SellerePointGiveFunc();
              alert(`Your nft was sold at ${NftPriceOk.toFixed(2)} coins`)
            }

          } NFTSellChangeInfo()
        }
      })
      document.getElementById(`${MedalsHave[YY].MedalName}${MedalsHave[YY].ThisMedal}MyMedal`).addEventListener('click', () => {
        // console.log('My iNfo Click');
        // console.log();
        const lastOwnerFinder = MedalsHave[YY].LastOwner;

        async function LastOwnerNftFinderFunc() {
          let { data: LastOwnerFinderGet, error } = await _supabase
            .from('telusersinfo')
            .select('*')
            .eq('id', `${lastOwnerFinder}`)
          let LastOwnerProfilLink = LastOwnerFinderGet[0].ProfLink;
          let LastOwnerid = LastOwnerFinderGet[0].id;



          document.getElementById('MyViewer').innerHTML = `<div style="background: linear-gradient(to bottom , rgba(0, 0, 0, 0.372),#EE00ff) ;width: 100%;height: 50%;display: flex;flex-direction: column;align-items: center;justify-content: end;">
        <img src="${MedalsNamesOwner[0].imgsrc}" class="NFTAnimation" style="width: 6rem;height: 6rem;border-radius: 5rem;" alt="">
        <p style="color: #fff;font-size: 1.2rem;"> ${MedalsHave[YY].MedalName.slice(0, 11)}... <span># ${MedalsHave[YY].ThisMedal}</span></p>
      </div>
      <div
        style="background-color: #EE00ff;width: 100%;height: 50%;border-color: #EE00ff; display: flex;flex-direction: column;align-items: center;justify-content: space-between;">
        <div
          style="width: 90%;height: 65%;background-color: rgba(0, 0, 255, 0.374);border-radius: 0.5rem;padding: 0.5rem;">
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 40%;height: 100%;color: #fff;">Last Owner :</p>
            <div
              style="display: flex;width: 60%;height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: start;margin-top: -0.5rem;gap: 0.2rem;">
              <img src="${LastOwnerProfilLink}" style="width: 1.5rem;height: 1.5rem;border-radius: 2rem;" alt="">
              <p style="color: #fff;">${LastOwnerid}</p>
            </div>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 25%;height: 100%; color: #fff;">Number :</p>
            <p style="display: flex;width: 75%;height: 100%;color: #fff;"><span style="color: pink;">#${MedalsHave[YY].ThisMedal}</span></p>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 25%;height: 100%;color: white;">Value :</p>
            <p style="display: flex;width: 75%;height: 100%; color: pink;"> $ ${CoinToValue.toFixed(2)}</p>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="color: #fff;">Created at <span style="color: pink;"> ${MedalsHave[YY].created_at.substring(0, 10)}</span></p>

          </div>

        </div >
        <div style="background-color: blue;display: flex;flex-direction: row;width: 100%;height: 20%;">
          <button id="HidenBtnNftViewer22" style=" background: linear-gradient(to right, rgba(252, 0, 214, 0.782), #EE00ff);width: 50%;height: 100%; border: none;color: #FFF;font-size: 1.2rem;font-weight: bolder;" >Ok</button>
        <button style="background: linear-gradient(to left, rgba(252, 0, 214, 0.782), #EE00ff);border: none; width: 50%;height: 100%; border: none;color: #FFF;font-size: 1.2rem;font-weight: bolder;" id='${MedalsHave[YY].MedalName}Set'>Set To Profile</button> 
        </div>
      </div>`

          document.getElementById('MyViewer').classList.add('NftViewrAnimation');
          document.getElementById('MyViewer').style.display = 'flex';
          document.getElementById('HidenBtnNftViewer22').addEventListener('click', () => {
            document.getElementById('MyViewer').style.display = 'none';
          })
          document.getElementById(`${MedalsHave[YY].MedalName}Set`).addEventListener('click', () => {
            // console.log(`${MedalsNamesOwner[0].imgsrc}`);

            async function ProfChanger() {
              const { ProfImgLinkChanger, error } = await _supabase
                .from('telusersinfo')
                .update({ ProfLink: `${MedalsNamesOwner[0].imgsrc}` })
                .eq('id', `${a}`)
                .select()
            } ProfChanger().then(() => {
              document.getElementById('ProfPic').src = `${MedalsNamesOwner[0].imgsrc}`;
            })


          })
        } LastOwnerNftFinderFunc();
      })
    }


  }













  //   document.getElementById('NFTsviewerbottomsec').innerHTML = `<div
  //   style="display: flex;flex-direction: row;margin-top: 2.5rem; background-color: #fff;width: 90%;height: 5rem;border-radius: 0.5rem;">
  //   <div style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem #EE00ff inset;background-color: #000022;border-color: #fff;border-width: 0.1rem;border-style: solid;">
  //     <div style="width: 75%;display: flex;flex-direction: row;">
  //       <div>
  //         <img src="https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/public/Gifts/HalowMedal.png"
  //           alt=""
  //           style="display: flex;margin: 0.2rem; width: 4rem;height: 4rem;background-color: black;border-radius: 0.5rem; border-color: #EE00ff;border-width: 0.2rem;border-style: solid;margin-right: 0.5rem;">
  //       </div>


} MedalViewer();
document.getElementById('MedalsPrice').innerText = `Loading...`;

// NFTS
document.getElementById('NFTsP').onclick = (() => {
  document.getElementById('NFTsP').className = "BtnClickedNewProf";
  document.getElementById('FriendsP').className = "BtnClickedNewProfOff";
  document.getElementById('HistoryP').className = "BtnClickedNewProfOff";
  document.getElementById('MarketP').className = "BtnClickedNewProfOff";
  document.getElementById('NFTsSec').style.display = "flex";
  document.getElementById('FriendsViewerSec').style.display = 'none';


});

// market
document.getElementById('MarketP').onclick = (() => {
  document.getElementById('NFTsP').className = "BtnClickedNewProfOff";
  document.getElementById('MarketP').className = "BtnClickedNewProf";
  document.getElementById('FriendsP').className = "BtnClickedNewProfOff";
  document.getElementById('HistoryP').className = "BtnClickedNewProfOff";
  document.getElementById('NFTsSec').style.display = "none";
  document.getElementById('MarketSec').style.display = "flex";
  document.getElementById('FriendsViewerSec').style.display = 'none';


});
// Friends
document.getElementById('FriendsP').onclick = (() => {
  document.getElementById('NFTsP').className = "BtnClickedNewProfOff";
  document.getElementById('MarketP').className = "BtnClickedNewProfOff";
  document.getElementById('FriendsP').className = "BtnClickedNewProf";
  document.getElementById('HistoryP').className = "BtnClickedNewProfOff";
  document.getElementById('NFTsSec').style.display = "none";
  document.getElementById('MarketSec').style.display = "none";
  document.getElementById('FriendsViewerSec').style.display = 'flex';
});
// History
// document.getElementById('HistoryP').onclick = (() => {
//   document.getElementById('NFTsP').className = "BtnClickedNewProfOff";
//   document.getElementById('MarketP').className = "BtnClickedNewProfOff";
//   document.getElementById('FriendsP').className = "BtnClickedNewProfOff";
//   document.getElementById('HistoryP').className = "BtnClickedNewProf";
// });
setInterval(() => {
  async function UpdaitingMedalsInfo() {
    let { data: MedalsOwner, error } = await _supabase
      .from('MedalsOwner')
      .select('*')
      .eq('Owner', `${a}`)

    const MedalsHave = MedalsOwner;




    let DivCounerMedal = MedalsOwner.length;

    if (DivCounerMedal == 0) {
      document.getElementById('MedalsPrice').innerText = `0 $`;
      document.getElementById('MedalsMountCounter').innerText = `0`;
      document.getElementById('MarketP').classList.add('BuyNftNow');
      document.getElementById('NoNftFindP').style.display = 'flex';
    } else if (DivCounerMedal > 0) {
      let TotalPricePluser = 0;

      for (let YY = 0; YY < DivCounerMedal; YY++) {
        let MedalsName = MedalsHave[YY].MedalName;



        if (YY < DivCounerMedal) {

          let { data: MedalsNamesOwner, error2 } = await _supabase
            .from('MedalsInfo')
            .select('*')
            .eq('MedalName', `${MedalsName}`)


          TotalPricePluser += MedalsNamesOwner[0].Price / 1000;

          PluserFixed = TotalPricePluser.toFixed(2);

        }
      }

      document.getElementById('NoNftFindP').style.display = 'none';

      document.getElementById('MedalsPrice').innerText = `${PluserFixed} $`;
      document.getElementById('MedalsMountCounter').innerText = `${DivCounerMedal}`;
    };





  } UpdaitingMedalsInfo();
}, 2000)




// Ok
async function SellingMedalsFinder() {

  let { data: MedalsOwnersSellingFinder, error } = await _supabase
    .from('MedalsOwner')
    .select('*')
    .eq('Selling', 'TRUE')
  let SelCounter = MedalsOwnersSellingFinder.length;

  for (let SEllingCounter = 0; SEllingCounter < SelCounter; SEllingCounter++) {

    if (SEllingCounter < SelCounter) {

      let { data: SellingNamesinfo, error2 } = await _supabase
        .from('MedalsInfo')
        .select('*')
        .eq('MedalName', `${MedalsOwnersSellingFinder[SEllingCounter].MedalName}`)
      let sellinginfo = SellingNamesinfo[0];
      // console.log(sellinginfo);

      var newdiv = document.createElement('div');
      newdiv.className = 'MarketCardViewer';

      newdiv.innerHTML = `<div  style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem #EE00ff inset; background: linear-gradient(to right, rgb(0, 0, 0),rgb(0, 81, 43)); border-color: #fff;border-width: 0.1rem;border-style: solid;">
      <div style="width: 75%;display: flex;flex-direction: row;">
        <div>
          <img src="${sellinginfo.imgsrc}"
            alt=""
            style="display: flex;margin: 0.2rem; width: 4rem;height: 4rem;background-color: black;border-radius: 0.5rem; border-color: #EE00ff;border-width: 0.2rem;border-style: solid;margin-right: 0.5rem;">
        </div>
        <div
        style="width: 80%;height: 5rem;display: flex;flex-direction: column;margin-top: -0.5rem;">
        <p id="MedalName" style="font-size: 1.15rem;height: 1.5rem; display: flex;color: #FFF;">${MedalsOwnersSellingFinder[SEllingCounter].MedalName.slice(0, 11)}...<span
              style="color: #EE00ff;"> #${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}</span></p>
          <div style="width: 80%;height: 2.5rem;margin-top: -1.5rem;">
          <div
              style="display: flex;flex-direction: row;align-items: center;justify-content: start;gap: 0.3rem;">
              <p style="color: #FFF;display: flex;margin-left: 0.2rem;font-size: 1.2rem;">${sellinginfo.Price.toFixed(1)}</p>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                  fill="currentColor" class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                  d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg></i>
  
              <div style="display: flex;margin-left: 1rem;width: 2.3rem;height: 1.2rem;border-radius: 0.3rem;align-items: center;justify-content: center;border-color: green;border-style: solid;box-shadow: 0 0 1rem rgba(172, 255, 47, 0.448) inset;">
                <p style="display: flex;font: size 0.01rem;color:rgb(0, 255, 183);">${sellinginfo.Sood.toFixed(1)}%</p>
              </div>
              <div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div style="display: flex;flex-direction: column; width: 20%;margin-right: 0.2rem;gap: 0.2rem;">
        <button style="background: linear-gradient(to bottom, rgb(38, 255, 0),rgb(0, 255, 251)); color: black;width: 100%;height: 2rem;border-radius: 0.5rem;" id="Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}">Buy</button>
        <button style="background: linear-gradient(to bottom, purple,#EE00ff); color: #fff;width: 100%;height: 2rem; border-radius: 0.5rem;" id="Info${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}">info</button>
      </div>
    </div>`;

      

      document.getElementById('Marketsviewerbottomsec').appendChild(newdiv);
      document.getElementById(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).addEventListener("click", () => {
        CoinSound.play();

        // console.log(`${MedalsOwnersSellingFinder[SEllingCounter].id}`);
        document.getElementById(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).style.pointerEvents = 'none';
        console.log(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`);

        async function MedalsBuyFunc() {

          let { data: telusersinfoForBuingMedal, error } = await _supabase
            .from('telusersinfo')
            .select('*')
            .eq('id', a)
          const usersInfoC = telusersinfoForBuingMedal[0];
          const NowProdValue = usersInfoC.point;
          const MedalPriceToBuy = sellinginfo.Price;
          const ProfValueMinuser = NowProdValue - MedalPriceToBuy;

          const OkBuyCheker = window.confirm(`Are you want to buy ${MedalsOwnersSellingFinder[SEllingCounter].MedalName}?`);

          if (OkBuyCheker && NowProdValue >= MedalPriceToBuy) {
            document.getElementById(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).style.pointerEvents = 'none';


            let { data: MedalsSellingCheker, error } = await _supabase
              .from('MedalsOwner')
              .select('*')
              .eq('id', `${MedalsOwnersSellingFinder[SEllingCounter].id}`)

            console.log(MedalsSellingCheker[0].Owner);


            // console.log(MedalsSellingCheker[0].Selling);
            if (MedalsSellingCheker[0].Selling == true && MedalsSellingCheker[0].Owner != a) {
              // console.log('You Can Buy');

              async function MedalBuyFun() {

                const { data, error } = await _supabase
                  .from('telusersinfo')
                  .update({ point: ProfValueMinuser })
                  .eq('id', a)
                  .select()

                if (data) {
                  // console.log(MedalOwnerChanger[0].Owner);

                  const { data2, error222 } = await _supabase
                    .from('MedalsOwner')
                    .update({ LastOwner: `${MedalsOwnersSellingFinder[SEllingCounter].Owner}`, Owner: a, Selling: false })
                    .eq('id', `${MedalsOwnersSellingFinder[SEllingCounter].id}`)
                    .select()




                }
              } MedalBuyFun().then(() => {

                let MedalPrice = sellinginfo.Price;
                // console.log(MedalPrice/100);
                // window.location.reload();
                let MedalSoodUper = MedalPrice / 100;
                let NftPriceUp = SellingNamesinfo[0].Price += MedalSoodUper;

                async function MedalInfoUpdater() {
                  const { data, error } = await _supabase
                    .from('MedalsInfo')
                    .update({ Price: `${NftPriceUp}`, Sood: `${MedalSoodUper}` })
                    .eq('MedalName', `${MedalsOwnersSellingFinder[SEllingCounter].MedalName}`)
                    .select()
                } MedalInfoUpdater();



                let rereshOk = window.confirm('Refresh the page to display your nft');
                if ((rereshOk)) {
                  window.location.reload();

                }





              })

            } else {
              alert('NFT has been sold')
            }



          } else if (OkBuyCheker && NowProdValue <= MedalPriceToBuy) {
            let ProfValueMinuserNegetive = Math.abs(parseInt(ProfValueMinuser));
            document.getElementById(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).style.pointerEvents = 'all';

            // console.log();
            alert(`you need ${ProfValueMinuserNegetive += 1} more coin`)

          } else {
            document.getElementById(`Buy${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).style.pointerEvents = 'all';

          }





        } MedalsBuyFunc();
      })

      let PointToValue = sellinginfo.Price.toFixed(1) / 1000;
      document.getElementById(`Info${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`).addEventListener("click", () => {
        // console.log(`Info${MedalsOwnersSellingFinder[SEllingCounter].MedalName}${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}`);

        async function LastOwnerInfoFinder() {
          let { data: LastOwnerFinder, error } = await _supabase
            .from('telusersinfo')
            .select('*')
            .eq('id', `${MedalsOwnersSellingFinder[SEllingCounter].LastOwner}`);
          // console.log(LastOwnerFinder[0].ProfLink);

          document.getElementById('NFTViewer').innerHTML = `<div style="background: linear-gradient(to bottom , rgba(0, 0, 0, 0.372),#EE00ff) ;width: 100%;height: 50%;display: flex; flex-direction: column;align-items: center;justify-content: end;">
        <img src="${sellinginfo.imgsrc}" class="NFTAnimation" style="width: 6rem;height: 6rem;border-radius: 5rem;" alt="">
        <p style="color: #fff;font-size: 1.2rem;"> ${MedalsOwnersSellingFinder[SEllingCounter].MedalName} <span style="color:pink;">#${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}</span></p>
      </div>
      <div
        style="background-color: #EE00ff;width: 100%;height: 50%;border-color: #EE00ff; display: flex;flex-direction: column;align-items: center;justify-content: space-between;">
        <div
          style="width: 90%;height: 65%;background-color: rgba(0, 0, 255, 0.374);border-radius: 0.5rem;padding: 0.5rem;">
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 25%;height: 100%;color: #fff;">Owner :</p>
            <div
              style="display: flex;width: 75%;height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: start;margin-top: -0.5rem;gap: 0.2rem;">
              <img src="${LastOwnerFinder[0].ProfLink}" style="width: 1.5rem;height: 1.5rem;border-radius: 2rem;" alt="">
              <p style="color: #fff;">${MedalsOwnersSellingFinder[SEllingCounter].LastOwner}</p>
            </div>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 25%;height: 100%; color: #fff;">Number :</p>
            <p style="display: flex;width: 75%;height: 100%;color: #fff;"><span style="color: pink;">#${MedalsOwnersSellingFinder[SEllingCounter].ThisMedal}</span></p>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="display: flex;width: 25%;height: 100%;color: white;">Value :</p>
            <p style="display: flex;width: 75%;height: 100%; color: pink;"> $ ${PointToValue.toFixed(2)}</p>

          </div>
          <div
            style=" width: 100%;height: 25%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
            <p style="color: #fff;">Created at <span style="color: pink;">${MedalsOwnersSellingFinder[SEllingCounter].created_at.substring(0, 10)}</span></p>

          </div>

        </div>
        <button id="HidenBtnNftViewer" style=" background-color: #fff;width: 100%;height: 20%; border: none;color: #EE00ff;font-size: 1.8rem;font-weight: bolder;">Ok</button>
        
      </div>`;
          document.getElementById('NFTViewer').classList.add('NftViewrAnimation');
          document.getElementById('NFTViewer').style.display = 'flex';



          document.getElementById('HidenBtnNftViewer').addEventListener('click', () => {


            document.getElementById('NFTViewer').style.display = 'none';

          });
        } LastOwnerInfoFinder();
      })

    }
  }
} SellingMedalsFinder()


document.getElementById('idCopyBtn').addEventListener('click', () => {

  navigator.clipboard.writeText(a).then(() => {
    alert('Your ID has been copied !')
  })
})

async function marquevalue() {
  // document.getElementById('Marquupid').innerText = 'kkkk';

  let { data: marquuValueApi, error } = await _supabase
    .from('MedalsInfo')
    .select('*')
    .order('Sood', { ascending: false })
    .limit(3)
  // console.log(marquuValueApi.length);
  // console.log(marquuValueApi[0].MedalName);
  // console.log(marquuValueApi[0].Sood.toFixed(2));
  // console.log(newspan);


  for (let counterm = 0; counterm < marquuValueApi.length; counterm++) {
    var newspan = document.createElement('span');
    newspan.innerHTML = `<span style="color: white;display: flex;flex-direction: row; margin-left: 8rem;">${marquuValueApi[counterm].MedalName}  <span style="color: greenyellow;"> %${marquuValueApi[counterm].Sood.toFixed(2)}</span></span>`;
    document.getElementById('Marquupid').appendChild(newspan);
  }

} marquevalue();




// Friend Page
async function FriendFinder() {
  let { data: telusersinfo2, error } = await _supabase
    .from('telusersinfo')
    .select('*')
    .eq('reffrall', a)

  console.log(telusersinfo2);
  let FriendCounter = telusersinfo2.length;

  if (FriendCounter > 0) {
    for (let FCounter = 0; FCounter < FriendCounter; FCounter++) {
      // console.log(telusersinfo2[FCounter]);
      // console.log(telusersinfo2[FCounter].rank);
      let myFriendName = telusersinfo2[FCounter].name;
      if (myFriendName.length > 6) {
        myFriendName = `${myFriendName.slice(0, 7)}...`;
      }
      let myFriendPoint = telusersinfo2[FCounter].point;
      let myFriendRank = telusersinfo2[FCounter].rank;
      let MyFriendProf = telusersinfo2[FCounter].ProfLink;
      if (myFriendRank == "Silver") {

        let DivAddFriend = document.createElement('div');
        DivAddFriend.className = 'FriendCardViewer';
        DivAddFriend.innerHTML = `<div
            style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem silver inset; background: linear-gradient(to right, rgb(0, 0, 0),rgba(76, 0, 104, 0.69)); border-color: silver;border-width: 0.1rem;border-style: solid;">
            <div style="width: 100%;display: flex;flex-direction: row;">
              <div>
                <img src="${MyFriendProf}" alt="" class="Friendprofilimg">
              </div>
        
              <div
                style=" width: 100%;height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: space-around;margin-top: 0.3rem;">
                <p id="MedalName"
                  style="font-size: 1.15rem;height: 1.5rem; display: flex;color: silver;width: 45%;font-weight: 900;">${myFriendName}</p>
        
                <div
                  style="display: flex;flex-direction: row;align-items: center;justify-content: end; width: 45%;height: 100%;">
                  <div
                    style="display: flex;flex-direction: row;align-items: center;justify-content: center;gap: 0.3rem;">
                    <p style="color: #FFF;display: flex;font-size: 1.2rem; font-weight: 900;">${myFriendPoint.toFixed(1)}</p>
                    <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bii bi-coin" viewBox="0 0 16 16">
                        <path
                          d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                      </svg></i>
        
        
                    <div>
        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>`;


        document.getElementById('Friendsviewerbottomsec').appendChild(DivAddFriend);

      } else if (myFriendRank == "Golden") {


        let DivAddFriend = document.createElement('div');
        DivAddFriend.className = 'FriendCardViewer';
        DivAddFriend.innerHTML = `<div
        style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem gold inset; background: linear-gradient(to right, rgb(0, 0, 0),gold); border-color: gold;border-width: 0.1rem;border-style: solid;">
        <div style="width: 100%;display: flex;flex-direction: row;">
          <div>
            <img src="${MyFriendProf}" alt="" class="FriendprofilimgGolden">
          </div>
  
          <div
            style=" width: 100%;height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: space-around;margin-top: 0.3rem;">
            <p id="MedalName"
              style="font-size: 1.15rem;height: 1.5rem; display: flex;color: #fbff03;width: 45%;font-weight: 900;">${myFriendName}</p>
  
            <div
              style="display: flex;flex-direction: row;align-items: center;justify-content: end; width: 45%;height: 100%;">
              <div
                style="display: flex;flex-direction: row;align-items: center;justify-content: center;gap: 0.3rem;">
                <p style="color: #FFF;display: flex;font-size: 1.2rem; font-weight: 900;">${myFriendPoint.toFixed(1)}</p>
                <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bii bi-coin" viewBox="0 0 16 16">
                    <path
                      d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg></i>
  
  
                <div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>`;


        document.getElementById('Friendsviewerbottomsec').appendChild(DivAddFriend);

      }
      else if (myFriendRank == "Diamond") {


        let DivAddFriend = document.createElement('div');
        DivAddFriend.className = 'FriendCardViewer';
        DivAddFriend.innerHTML = `
        <div
          style="width: 100%;height: 100%;border-radius: 0.5rem;display: flex;flex-direction: row;align-items: center; justify-content: space-between; box-shadow: 0 0 1rem darkturquoise inset; background: linear-gradient(to right, rgb(0, 0, 0),darkturquoise); border-color: darkturquoise;border-width: 0.1rem;border-style: solid;">
          <div style="width: 100%;display: flex;flex-direction: row;">
            <div>
              <img src="${MyFriendProf}" alt="" class="FriendprofilimgDiamond">
            </div>
  
            <div
              style=" width: 100%;height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: space-around;margin-top: 0.3rem;">
              <p id="MedalName"
                style="font-size: 1.15rem;height: 1.5rem; display: flex;color: darkturquoise;width: 45%;font-weight: 900;">${myFriendName}</p>
  
              <div
                style="display: flex;flex-direction: row;align-items: center;justify-content: end; width: 45%;height: 100%;">
                <div
                  style="display: flex;flex-direction: row;align-items: center;justify-content: center;gap: 0.3rem;">
                  <p style="color: #FFF;display: flex;font-size: 1.2rem; font-weight: 900;">${myFriendPoint.toFixed(2)}</p>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      fill="currentColor" class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>
  
  
                  <div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>`;


        document.getElementById('Friendsviewerbottomsec').appendChild(DivAddFriend);

      }
    }
  }
} FriendFinder().then(() => {
  async function FriendLenghFinder() {
    let { data: telusersinfo3, error3 } = await _supabase
      .from('telusersinfo')
      .select('*')
      .eq('reffrall', a)

    let FriendCounter3 = telusersinfo3.length;
    console.log("Ok");
    let InviteFriendButton = document.createElement('div');
    InviteFriendButton.className = 'InviteAnim';
    InviteFriendButton.id = 'InviteMyFriendsBtnId';
    InviteFriendButton.innerHTML = `<i style=" width: 50%;height: 50%;display: flex;flex-direction: row;align-items: center;justify-content: center;">
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" style="color: rgb(255, 1, 238);" class="bi bi-person-fill-add" viewBox="0 0 16 16">
    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  </svg>
</i>
<div style="display: flex;flex-direction: row;align-items: center;justify-content: center;width: 80%;height: 3.5rem; margin-left: 0.5rem;">
  
  <p style="color: rgb(255, 1, 238);font-size: large;">invite your friend and collect 50 <span><i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
    class="bi bii bi-coin" viewBox="0 0 16 16">
    <path
      d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
  </svg></i></span></p>
</div>
`;
    let AlreadyDiv = document.createElement('div');
    AlreadyDiv.className = 'AlreadyClass';
    AlreadyDiv.innerHTML = `<p style="font-size: large;font-weight: 700;">Already you have <span style="color: purple;">${FriendCounter3}</span> Friends</p>`;
    document.getElementById('Friendsviewerbottomsec').appendChild(InviteFriendButton);
    document.getElementById('Friendsviewerbottomsec').appendChild(AlreadyDiv);
    document.getElementById('InviteMyFriendsBtnId').onclick = (() => {
      window.location.href = `https://t.me/share/url?text=Hey%20my%20friend!%F0%9F%8E%AE%0AJoin%20the%20game%20with%20my%20invite%20link%20and%20get%20extra%20coins%20%F0%9F%AA%99%0AReferral%20Code%3A%0A${a}%0AStart%20now!%F0%9F%91%87%0Ahttps%3A%2F%2Ft.me%2FTheFreePayBot%2FFreePayShop`;
    })
  } FriendLenghFinder();

})