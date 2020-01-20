import React, { Component } from 'react';
import styles from './App.module.css';

// these are all of the blank templates that get brought in
import EE_SS_2Col from './Assets/EmailTemplates/EE_SS_2Col';
// import EE_SS_GF from './Assets/EmailTemplates/EE_SS_GF';
// import EE_SS_GI_AE_Annc from './Assets/EmailTemplates/EE_SS_GI_AE_Annc';
// import EE_SS_GI_AE from './Assets/EmailTemplates/EE_SS_GI_AE';
// import EE_SS_GI_NAE_Annc from './Assets/EmailTemplates/EE_SS_GI_NAE_Annc';
// import EE_SS_GI_NAE from './Assets/EmailTemplates/EE_SS_GI_NAE';
import EE_SS_RO from './Assets/EmailTemplates/EE_SS_RO';

import SchoolName from './components/schoolName/schoolName';
import ImageHeroPreview from './components/imageHeroPreview/imageHeroPreview';
import Headline from './components/headlineMain/headlineMain';
import Headline2Col1 from './components/headline2Col1/headline2Col1';
import Headline2Col2 from './components/headline2Col2/headline2Col2';
import HeadlinePreview from './components/headlinePreview/headlinePreview';
import SchoolLink from './components/schoolLink/schoolLink';
import SchoolLinkPreview from './components/schoolLinkPreview/schoolLinkPreview';
import BodyCopy from './components/bodyCopyMain/bodyCopyMain';
import BodyCopy2Col1 from './components/bodyCopy2Col1/bodyCopy2Col1';
import BodyCopy2Col2 from './components/bodyCopy2Col2/bodyCopy2Col2';
import BodyCopyPreview from './components/bodyCopyPreview/bodyCopyPreview';
import ButtonColor from './components/buttonColor/buttonColor';
import DayCount from './components/dayCount/dayCount';
import DayCountPreview from './components/dayCountPreview/dayCountPreview';
import WeekdayMonthDate from './components/weekdayMonthDate/weekdayMonthDate';
import WeekdayMonthDatePreview from './components/weekdayMonthDatePreview/weekdayMonthDatePreview';
import StartTime from './components/startTime/startTime';
import EndTime from './components/endTime/endTime';
import TimePreview from './components/timePreview/timePreview';
import Location from './components/location/location';
import LocationPreview from './components/locationPreview/locationPreview';
import ImagePanelPreview from './components/imagePanelPreview/imagePanelPreivew';
import Image2ColHeroPreview from './components/image2ColHeroPreview/image2ColHeroPreview';
import Image2Col1Preview from './components/image2Col1Preview/image2Col1Preview';
import Image2Col2Preview from './components/image2Col2Preview/image2Col2Preview';
import SMI from './components/smi/smi';
import InHandDate from './components/inHandDate/inHandDate';
import download from 'downloadjs';

class App extends Component {
  state = {
    schoolLink: "schoollink",
    headline: "Order your Official School Name Ring now to ensure ceremony delivery!",
    inHandDate: "111111",
    SMI: "222222",
    bodyCopy: "Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.",
    buttonColor: "#d2d2d2",
    footerColor: "000000",
    subhead: "ONE DAY ONLY",
    weekdayMonthDate: "Monday, Oct. 28",
    startTime: "10 a.m.",
    endTime: "2 p.m.",
    location: "Student Center",
    footerURL: "http://www.balfour.com/schoolname",
    monthAndJobNumber: "0020.job#",
    schoolName: "schoolname",
    col1Headline: "Alumni Shop",
    col2Headline: "Official Ring",
    col1BodyCopy: "Display your achievement with officially-licensed gifts, tailgating gear, jewelry, accessories and more.",
    col2BodyCopy: "Order your personalized ring to show your pride and celebrate your success with fellow classmates.",

    showEESSROEmail: false,
    showEESS2ColEmail: false
  }

  valueChangeHandler = (event) => {
    const key = event.target.name
    this.setState({
      [key]: event.target.value
    })
  }

  SMITestButton = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI, '_blank')
  }
  SchoolAlumniShopPreview = () => {
    window.open('https://www.balfour.com/shop/collections/alumni-shop?pim_a_licensetype=2509&smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=cta_image-col1' + this.state.schoolLink, '_blank')
  }
  SchoolOfficialRingPreview = () => {
    window.open('https://www.balfour.com/shop/jewelry/rings/college-class-rings?smi=' + this.state.SMI + '&utm_medium=email&utm_source=collegiate&utm_campaign=col_' + this.state.schoolName + '_' + this.state.inHandDate + '&utm_content=image-Col2', '_blank')
  }
  SchoolLinkPreview = () => {
    window.open('https://www.balfour.com/' + this.state.schoolLink, '_blank')
  }
  toggleEmailHandler = (event) => {
    const key = event.target.name
    this.setState({
      showEESSROEmail: false,
      showEESS2ColEmail: false
    })
    const doesShow = this.state[key];
    console.log("the event.target.name is: " + event.target.name)
    console.log("the key is: " + key)
    console.log("the 'doesShow is: " + doesShow);
    this.setState({
      [event.target.name]: !doesShow
    });
  }
  MakeEE_SS_RO = () => {
    var result = EE_SS_RO;

    // these items happen more than once & require regex
    var Cregex = /000000/gi;
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(Cregex, this.state.buttonColor);
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoollink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("It's time to order your Official [School] Ring!", this.state.headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.', this.state.bodyCopy);
    result = result.replace('ONE DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-RO.html', "text/html");
  }
  MakeEE_SS_2Col = () => {
    var result = EE_SS_2Col;

    // these items happen more than once & require regex
    var Cregex = /000000/gi;
    var SNregex = /schoolname/gi;
    var SLregex = /schoollink/gi;
    var UTMregex = /111111/gi;
    var SMIregex = /222222/gi;

    // this swaps out what's in the email for what's in the finished form
    result = result.replace(Cregex, this.state.buttonColor);
    result = result.replace(SNregex, this.state.schoolName);
    result = result.replace(SLregex, this.state.schoollink);
    result = result.replace(UTMregex, this.state.inHandDate);
    result = result.replace(SMIregex, this.state.SMI);
    result = result.replace("It's time to order your Official [School] Ring!", this.state.headline);
    result = result.replace('Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.', this.state.bodyCopy);
    result = result.replace('ONE DAY ONLY', this.state.subhead);
    result = result.replace('Day, Month #', this.state.weekdayMonthDate);
    result = result.replace('00 a.m.', this.state.startTime);
    result = result.replace('00 p.m.', this.state.endTime);
    result = result.replace('Location', this.state.location);

    download(result, 'XXXX_EE-SS-2Col.html', "text/html");
  }

  render() {
    let EmailEditor = null;

    if (this.state.showEESSROEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <div className={styles.space}>
                <SchoolName
                  value={this.state.schoolName}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <Headline
                  value={this.state.headline}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <BodyCopy
                  value={this.state.bodyCopy}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <ButtonColor
                  value={this.state.buttonColor}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <SchoolLink
                  value={this.state.schoolLink}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <DayCount
                  value={this.state.subhead}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <WeekdayMonthDate
                  value={this.state.weekdayMonthDate}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <StartTime
                  value={this.state.startTime}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <EndTime
                  value={this.state.endTime}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <Location
                  value={this.state.location}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <SMI
                  value={this.state.SMI}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <InHandDate
                  value={this.state.inHandDate}
                  change={this.valueChangeHandler}
                />
              </div>
              <button className="btn btn-primary" onClick={this.MakeEE_SS_RO}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <ImageHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <HeadlinePreview
              headline={this.state.headline}
            />
            <BodyCopyPreview
              // styles={styles.headlineStyle}
              bodyCopy={this.state.bodyCopy}
            />
            <SchoolLinkPreview
              click={this.SMITestButton}
              buttonColor={this.state.buttonColor}
            />
            <h5>Or visit your on-campus representative:</h5>
            <DayCountPreview
              subhead={this.state.subhead}
            />
            <WeekdayMonthDatePreview
              weekdayMonthDate={this.state.weekdayMonthDate}
            />
            <TimePreview
              startTime={this.state.startTime}
              endTime={this.state.endTime}
            />
            <LocationPreview
              location={this.state.location}
            />
            <h5 className={styles.bulletTitle}>Each Ring Includes:</h5>
            <ul className={styles.bulletList}>
              <li>Optional interest-free payment plans</li>
              <li>A lifetime warranty with free resizing, polishing and cleaning</li>
              <li>A Ring Loss Protection Plan</li>
            </ul>
            <ImagePanelPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
          </div>
        </div>
    }
    if (this.state.showEESS2ColEmail) {
      EmailEditor =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <div className={styles.space}>
                <SchoolName
                  value={this.state.schoolName}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <Headline
                  value={this.state.headline}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <BodyCopy
                  value={this.state.bodyCopy}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <Headline2Col1
                  value={this.state.col1Headline}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <BodyCopy2Col1
                  value={this.state.col1BodyCopy}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <ButtonColor
                  value={this.state.buttonColor}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <SchoolLink
                  value={this.state.schoolLink}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <DayCount
                  value={this.state.subhead}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <WeekdayMonthDate
                  value={this.state.weekdayMonthDate}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <StartTime
                  value={this.state.startTime}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <EndTime
                  value={this.state.endTime}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <Location
                  value={this.state.location}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <SMI
                  value={this.state.SMI}
                  change={this.valueChangeHandler}
                />
              </div>
              <div className={styles.space}>
                <InHandDate
                  value={this.state.inHandDate}
                  change={this.valueChangeHandler}
                />
              </div>
              <button className="btn btn-primary" onClick={this.MakeEE_SS_2Col}>Make Email</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <Image2ColHeroPreview
              schoolName={this.state.schoolName}
              click={this.SchoolLinkPreview}
            />
            <HeadlinePreview
              headline={this.state.headline}
            />
            <BodyCopyPreview
              // styles={styles.headlineStyle}
              bodyCopy={this.state.bodyCopy}
            />
            <SchoolLinkPreview
              click={this.SMITestButton}
              buttonColor={this.state.buttonColor}
            />
            <h5>Or visit your on-campus representative:</h5>
            <DayCountPreview
              subhead={this.state.subhead}
            />
            <WeekdayMonthDatePreview
              weekdayMonthDate={this.state.weekdayMonthDate}
            />
            <TimePreview
              startTime={this.state.startTime}
              endTime={this.state.endTime}
            />
            <LocationPreview
              location={this.state.location}
            /><br />
            <p><b>Shop your curated collection</b></p>
            <div className="row">
              <Image2Col1Preview
                schoolName={this.state.schoolName}
                click={this.SchoolAlumniShopPreview}
                headline={this.state.col1Headline}
                bodyCopy={this.state.col1BodyCopy}
                buttonColor={this.state.buttonColor}
              />
              <Image2Col2Preview
                schoolName={this.state.schoolName}
                click={this.SchoolOfficialRingPreview}
                headline={this.state.col2Headline}
                bodyCopy={this.state.col2BodyCopy}
                buttonColor={this.state.buttonColor}
              />
            </div>

          </div>
        </div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col text-center MainNav">
            <h3 className={styles.rudeNav}>Beta React Comb Email Tool</h3>
            <button className="btn btn-primary" name="showEESSROEmail" onClick={this.toggleEmailHandler}>EE-SS-RO</button>

            <button className="btn btn-primary" name="showEESS2ColEmail" onClick={this.toggleEmailHandler}>EE-SS-2Col</button>

          </div>
        </div>
        {EmailEditor}
      </div>
    );
  }
}

export default App;