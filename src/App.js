import logo from './logo.svg';
import './App.css';
import Slider from './slider-div/slider-section'

function App() {
  return (
    <>
      <div className="MarketPlace_createNft_div">
        <div className="header">
          <div className="header-in">
            <div className="logo">
              <img src="images/Header Logo.png" />
            </div>
            <div className="search_box">
              <input className="search" placeholder="Search by Collection, NFT or User"></input>
            </div>
            <div className="settings">
              <img src="images/notification-bing.png" />
            </div>
            <div className="Button_div">
              <div className="metamask_img">
                <img src="images/Metamask Logo.png" />
              </div>
              <div className="address_div">
                <div className="address">0xdd....ahs4</div>
                <div className="drop_icon">
                  <img src="images/DropIcon.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-div">
          <Slider />

          <div className="Open-history-orders">
            <div className='side-nav'>
              <div className='page_status'>
                <div className='preference'>
                  <div className='preference_head'>Preference</div>
                </div>
                <div className='details'>
                  <div className='details_head'>Details</div>
                </div>
                <div className='preview'>
                  <div className='preview_head'>Preview</div>
                </div>
              </div>
            </div>
            <div className='side-nav-right'>
              <div className='right_nav_div'>
                <div className='upload_nft'>
                  <div className='nft_header'>Upload Nft File</div>
                  <div className='nft_upload_section'></div>
                </div>
                <div className='Name'>
                  <div className='name_head'>Name</div>
                  <input className='name_input'></input>
                </div>
                <div className='description'>
                  <div className='description_head'>Description</div>
                  <input className='description_input'></input>
                </div>
                <div className='Royalties'>
                  <div className='Royalties_head'>Royalty</div>
                  <input className='Royalties_input'></input>
                </div>
                <div className='Properties'>
                  <div className='Properties_head'>Properties</div>
                  <div className='Properties_section'>
                    <div className='Properties_left'>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                    </div>
                    <div className='Properties_right'>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                      <input className='properties_namings'></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
