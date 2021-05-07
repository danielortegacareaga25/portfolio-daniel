import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";
import GlobantImg from './../../assets/globant.png'
import RappiImg from './../../assets/rappi.jfif'
import NovaImg from './../../assets/nova.jfif'
import BroxelImg from './../../assets/broxel.png'
import SynersysImg from './../../assets/synersys.png'
import BitImg from './../../assets/bit.png'
import ITTImg from './../../assets/itt.png'

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience{" "}
        {moment().diff("08/20/2016", "years", true).toFixed(0)}{" "}
        years
      </Title>{" "}
      <ResumeItem
        date={"Mar 2021 - Present"}
        title={"Web UI Developer SSR"}
        company={"Globant"}
        logo={GlobantImg}
      > •Developed web applications using Angular 11, NgRx & ReactJS.<br />
      • Developed web components using Polymer 3.<br />
      •Developed mobile applications using React Native.<br />
      •Worked with Agile and Scrum Methodology to produce high Quality software.<br />
      </ResumeItem>
      <ResumeItem
        date={"Sep 2020 - Mar 2021"}
        title={"FrontEnd Engineer"}
        company={"Rappi"}
        logo={RappiImg}
      >
        •Developed web applications using Angular 10, React, Next Js, ES6 &
        Sass. <br /> •Designed and develop libraries in Angular to shared in
        different applications. <br />
      </ResumeItem>
      <ResumeItem
        date={"Dec 2019 – Sep 2020"}
        title={"Angular Developer Sr"}
        company={"Nova Solutions"}
        logo={NovaImg}
      >
        •Developed web applications using Angular 9, ES6 & Sass. <br />{" "}
        •Designed and develop libraries in Angular to shared in different
        applications. <br /> •Worked with Agile and Scrum Methodology to produce
        high Quality software. <br /> •Testing modules, components and libraries
        using Karma and Jasmine. <br /> •Performed unit testing debugging on
        SonarQube.evelop clean, maintainable and highly interactive single page
        web. <br />
      </ResumeItem>
      <ResumeItem
        date={"May 2029 – Oct 2019"}
        title={"Full Stack Developer"}
        company={"Broxel Fintech"}
        logo={BroxelImg}
      >
        •Designed and developed web applications using.Net Core MVC, EF6,
        Angular 7 & ReactJS. <br /> •Created RESTFUL services using API in .Net
        Core interacting with SQL Server & MySQL. <br /> •Worked on development
        of applications for Android & iOS with Xamarin Forms. <br /> •Worked
        with Agile and Scrum Methodology to produce high Quality software.{" "}
        <br /> •Deployed Web & Services on Azure DevOps. <br /> •Performed unit
        testing debugging on SonarQube. <br />
      </ResumeItem>{" "}
      <ResumeItem
        classNames={"not-last"}
        date={"Jul 2017 – May 2019"}
        title={".Net Developer"}
        company={"Synesys Technologies"}
        logo={SynersysImg}
      >
        •Developed Web applications using.Net Web Forms, Angular 4 / 5 / 6,
        CSS3, Ajax & Bootstrap. <br /> •Responsible for developing WCF service
        libraries to exchange data. <br /> •Developed Desktop applications
        using.Net C# & VB, Silverlight with SQL Server. <br /> •Created ETL /
        SSIS packages both design and code process data to target databases.{" "}
        <br /> •Experienced with Agile SCRUM methodologies using JIRA Agile.{" "}
        <br /> • Developed batch process using console applications using C#
        libraries.{" "}
      </ResumeItem>{" "}
      <ResumeItem
        classNames={"not-last"}
        date={"Aug 2016 – Jul 2017"}
        title={"Developer Jr"}
        company={"Bit Technologies"}
        logo={BitImg}
      >
        •Developed web applications using.Net Web Forms, MVC4, ReactJS, Angular
        2 & Jquery. <br /> •Developed API services using Spring with Oracle &
        Core with SQL Server. <br /> •Created cross - platform mobile
        applications usign Ionic 2. <br /> •Developed SOAP services on WCF
        technologies. <br /> •Worked on SSRS & Crystal Reports to créate dynamic
        reports. <br /> • Used Agile SCRUM methodologies to the development
        cycle.{" "}
      </ResumeItem>{" "}
      <Title icon={"fa fa-university"}> Education </Title>{" "}
      <ResumeItem
        date={"2012 – 2016"}
        title={"Systems Enginner"}
        company={"Instituto Técnologico de Toluca"}
        logo={ITTImg}
      >
        Bachelor 's Degree in Systems Enginner.{" "}
      </ResumeItem>{" "}
    </div>
  );
};

export default Resume;
