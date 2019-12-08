import React, { Component } from 'react';
import styles from './App.module.css';
import globalStyles from './Assets/global-styles/bootstrap.min.module.css';
import cx from 'classnames';

// ^^^^^^ THIS LINK IS HOW TO COMBINE BOOTSTRAP WITH CSS MODULES: https://medium.com/@marcelwopperer/how-to-use-bootstrap-in-your-react-app-using-css-modules-73fbc52de081

import ImageHero from './components/imageHero/imageHero'
import ImageHeroPreview from './components/imageHeroPreview/imageHeroPreivew';
import Headline from './components/headline/headline';
import HeadlinePreview from './components/headlinePreview/headlinePreview';
import SchoolLink from './components/schoolLink/schoolLink';
import SchoolLinkPreview from './components/schoolLinkPreview/schoolLinkPreview';
import BodyCopy from './components/bodyCopy/bodyCopy';
import BodyCopyPreview from './components/bodyCopyPreview/bodyCopyPreview';
import ButtonColor from './components/buttonColor/buttonColor';
import DayCount from './components/dayCount/dayCount'
import DayCountPreview from './components/dayCountPreview/dayCountPreview';
import WeekdayMonthDate from './components/weekdayMonthDate/weekdayMonthDate'
import WeekdayMonthDatePreview from './components/weekdayMonthDatePreview/weekdayMonthDatePreview';
import Time from './components/time/time'
import TimePreview from './components/timePreview/timePreview';
import Location from './components/location/location'
import LocationPreview from './components/locationPreview/locationPreview';
import ImagePanel from './components/imagePanel/imagePanel'
import ImagePanelPreview from './components/imagePanelPreview/imagePanelPreivew';
import SMI from './components/smi/smi';
import InHandDate from './components/inHandDate/inHandDate';

class App extends Component {
  state = {
    schoolLink: "",
    headline: "Order your Official School Name Ring now to ensure ceremony delivery!",
    inHandDate: "20191031",
    SMI: "222222",
    bodyCopy: "Be part of a timeless [Nickname] tradition. Order your personalized ring to show your pride and celebrate your success with fellow classmates.",
    buttonColor: "#3aa7e2",
    footerColor: "",
    subhead: "ONE DAY ONLY",
    weekdayMonthDate: "Monday, Oct. 28",
    time: "10 a.m. – 2 p.m.",
    location: "Student Center",
    footerURL: "",
    monthAndJobNumber: "",
    imageHeroName: "hero-schoolname.jpg",
    imagePanelName: "panel-schoolname.jpg",

    showSSEmail: false
  }

  valueChangeHandler = (event) => {
    const key = event.target.name
    this.setState({
      [key]: event.target.value
    })
    console.log(this.state.schoolLink)
  }

  schoolLinkButton = (schoolLink) => {
    window.open('https://www.balfour.com/' + this.state.schoolLink, '_blank')
  }
  toggleEmailHandler = () => {
    const doesShow = this.state.showSSEmail;
    this.setState({
      showSSEmail: !doesShow
    });
  }
  MakeEmail = () => {
    var fs = require('browserify-fs');

    fs.mkdir('/home', function() {
      fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
        fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
          console.log(data);
        });
      });
    });

  }

  render() {
    let SSEmail = null;

    if (this.state.showSSEmail) {
      SSEmail =
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="form-group">
              <ImageHero
                value={this.state.imageHeroName}
                change={this.valueChangeHandler}
              />
              <Headline
                value={this.state.headline}
                change={this.valueChangeHandler}
              />
              <BodyCopy
                value={this.state.bodyCopy}
                change={this.valueChangeHandler}
              />
              <ButtonColor
                value={this.state.buttonColor}
                change={this.valueChangeHandler}
              />
              <SchoolLink
                value={this.state.schoolLink}
                change={this.valueChangeHandler}
              />
              <DayCount
                value={this.state.subhead}
                change={this.valueChangeHandler}
              />
              <WeekdayMonthDate
                value={this.state.weekdayMonthDate}
                change={this.valueChangeHandler}
              />
              <Time
                value={this.state.time}
                change={this.valueChangeHandler}
              />
              <Location
                value={this.state.location}
                change={this.valueChangeHandler}
              />
              <ImagePanel
                value={this.state.imagePanelName}
                change={this.valueChangeHandler}
              />
              <SMI
                value={this.state.SMI}
                change={this.valueChangeHandler}
              />
              <InHandDate
                value={this.state.inHandDate}
                change={this.valueChangeHandler}
              />
              <button className="btn btn-primary" onClick={this.MakeEmail}> Submit </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <ImageHeroPreview
              image={this.state.imageHeroName}
            />
            <HeadlinePreview
              headline={this.state.headline}
            />
            <BodyCopyPreview
              // styles={styles.headlineStyle}
              bodyCopy={this.state.bodyCopy}
            />
            <SchoolLinkPreview
              click={this.schoolLinkButton}
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
              time={this.state.time}
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
              image={this.state.imagePanelName}
            />
          </div>
        </div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">

            <h3 className={styles.rudeNav}>Beta React Com Email Tool</h3>
            <button className="btn btn-primary" onClick={this.toggleEmailHandler}>SS Email</button>
          </div>
        </div>
        {SSEmail}
      </div>
    );
  }
}

export default App;