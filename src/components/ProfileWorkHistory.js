import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import Collapsible from './Collapsible';

// will contain the organization, the timeline, the role and the job description
const Section = styled.section`
  padding-top: 5rem;
  .role {
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

function ProfileEducation() {
  return (
    <Section>
      <ProfileSectionHeader title="Experience" subtitle="Work Experience" />
      <Collapsible
        subject="Access Bank PLC"
        period="2020-12-19 - Present"
        expandAsDefault={true}
      >
        <h4 className="role">Software Engineer</h4>
        Notable projects worked on include: (a) Automation of the bank's ICAD
        account Submission to NIBSS. ICAD (Industry Customer Account Database)
        is an initiative that madates all CBN-recognized bank in Nigeria to
        forward customer accounts in a specified format to NIBSS; NIBSS(Nigeria
        Inter-Banking Settlement Scheme) is an arm of the CBN charged with,
        among other things, ensuring compliance to the ICAD initiative by all
        banks across the country. CBN is the Central Bank of Nigeria. (b) Access
        Gateway - a payment gateway service for the bank. I designed and
        implemented the database and worked on the backend server for the
        payment gateway
      </Collapsible>
      <Collapsible
        subject="Andela"
        period="2018-12-11 - 2019-09-21"
        expandAsDefault={true}
      >
        <h4 className="role">Software Engineer</h4>
        Having gone through the Andela Fellowship, I worked as a fulstack
        software Engineer for the organization. Notable projects worked on
        include: (a) Authors Haven - a blog web application for authors. This
        project was part of my training during the simulation program in Andela.
        (b)The VOF project - a internal project for Andela designed to automate
        and streamline the hiring process for the HR department at Andela.
      </Collapsible>
      <Collapsible
        subject="Abuja Technical Training Academy"
        period="2017-11-23 - 2018-09-21"
        expandAsDefault={true}
      >
        <h4 className="role">Technical Instructor</h4>
        During my service at Abutech as an instructor on wide variety of
        subjects inlcuding Computer Science, Mathematics and Physics. I oversaw
        students technical projects, providing guidance and nurturing their
        skills in technical projects.
      </Collapsible>
    </Section>
  );
}

export default ProfileEducation;
