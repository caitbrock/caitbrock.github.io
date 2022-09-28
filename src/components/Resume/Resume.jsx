import React from 'react'
import "./Resume.css"
import GitHub from "../../GitHub.png";
import LinkedIn from "../../LinkedIn.png";

function Resume() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ResumeBox">
      <div className="InfoBox">
        <div className="Info">
        <div className = "ResumeLeft">
      <div className="PersonalLeft">      
        <h1>CAIT BROCK</h1>
        <p>e: cait2brock@gmail.com </p>
        </div>

        <div className="Profile">
        <div className='TitleProfile'><h2>PROFILE</h2></div>
          <div className='DescriptionProfile'>
            <p>Frontend Developer and Designer with strong leadership and interpersonal skills. A quick learner with a proven ability to solve problems and undertake challenges with enthusiasm. Determined and adaptable individual, with a strong work ethic and a commitment to achieving results. Goal driven and excellent at managing timelines.</p><br/>
          </div>
      </div>

        <div className="Skills">
        <div className='TitleSkills'><h2>SKILLS</h2></div>
          <div className='DescriptionSkills'>
            <p>Proficient in Adobe Creative Suite (Photoshop, Illustrator and InDesign), Microstation, Rhino, and Grasshopper. Additional experience working with AutoCad, QGIS, Sketchup. HTML, CSS, JavaScript, MongoDB, Python, React and Figma.</p><br/>
          </div>
      </div>

      <div className="Education">
        <div className='TitleEducation'><h2>EDUCATION</h2></div>
          <div className='DescriptionEducation'>
            <h4>General Assembly</h4>
            <p>(May 2022 - Aug. 2022)</p>
            <p>Software Engineering Immersive</p>
      
            <h4>University College of London</h4>
            <p>(Sept. 2017 - Oct. 2018)</p>
            <p>The Bartlett School of Architecture<br/>
            Master of Architecture - Urban Design<br/>
            Graduated with distinction</p>
        
            <h4>University of Manitoba</h4>
            <p>(Sept. 2011 - Jun. 2015)</p>
            <p>Bachelor of Environmental Design<br/>
            Landscape + Urbanism</p>
            <br/>
          </div>
      </div>

      <div className="Projects">
        <div className='TitleProjects'><h2>RECENT PROJECTS</h2></div>
          <div className='DescriptionProjects'>
            <h4>Natural and Human Systems Class Lecture</h4>
            <p>University of Manitoba - Faculty of Architecture (2020 and 2022 - Lecture)</p>
            
            <h4>An Un-Urbanist Assembly</h4>
            <p>24hr Teach in (2021 - Online Lecture and Workshop)</p>
                    
            <h4>#cybercharrette</h4>
            <p>London Festival of Architecture (2019 - Online Workshop)</p>

            <h4>Decolonizing Architecture</h4>
            <p>London Festival of Architecture (2018 - Lecture Series)</p>

            <h4>The Changing Face of Architecture</h4>
            <p>The Stephan Lawrence Memorial Lecture in collaboration with The Royal Institute of British Architects (2018 - Lecture and Event Coordination)</p>
            <br/>
          </div>
      </div>


      </div>

      <div className="ResumeRight">
      <div className="PersonalRight">
        <div className="Socials">
      <p>LinkedIn</p>
      <img className="Social" src={LinkedIn} onClick={() => openInNewTab('https://www.linkedin.com/in/caitbrock/')} style={{cursor: 'pointer'}}/>
      </div>
      <div className="Socials">
      <p>GitHub</p>
        <img className="Social" src={GitHub} onClick={() => openInNewTab('https://github.com/caitbrock')} style={{cursor: 'pointer'}}/>
        </div>
        </div>
      <div className="Experience">
        <div className='TitleExperience'><h2>EXPERIENCE</h2></div>
          <div className='DescriptionExperience'>
            <h4>Weston Consulting</h4>
            <p><strong>URBAN DESIGNER</strong> (2020 - 2022)</p>
            <p>Tools: Adobe Creative Suite (InDesign, Illustrator, Photoshop), Sketchup, Microstation and QGIS</p>
            <p>Weston Consulting, a planning and urban design firm, offers services to public and private clients. As an urban designer responsibilities included;</p>
            <ul>
              <li>Preparing concepts and site plan developments, master planning, severance sketches, shadow studies, report writing (i.e. Urban Design Briefs and Community Services and Facilities Studies).</li>
              <li>Formatting documents and reports, creating legible and clear work for clients and the public.</li>
              <li>Planning studies, preparing 3D models and providing density estimates.</li>
              <li>Mapping analyses and visualizing data. </li>
              <li>Delegating and overseeing the work of junior staff.</li>
              <li>Managing timelines and balancing multiple projects.</li>
              <li>Working and collaborating with planners and consultants, assisting clients through the planning application process.</li><br/></ul>

              <h4>The Cygnus Design Group</h4>
              <p><strong>RESEARCH COORDINATOR AND PROJECT PLANNER</strong> (2016 - 2017)</p>
              <p>Tools: Adobe Creative Suite (InDesign, Illustrator, Photoshop) and Sketchup</p>
              <p>Cygnus is an environmental graphic design firm, offering signage and wayfinding services to public and private clients. Responsibilities at Cygnus included;</p>
              <ul>
                <li>Drafting and submitting proposals, bids, and requests for qualifications to potential clients.</li>
                <li>Formating of proposals highlighting goals, project approach, team and fees for each specific project.</li>
                <li>Working with clients from the early stages of concept development to contract administration, organizing meetings to set targets and ensure goals were being met.</li>
                <li>Performing traffic flow studies, and providing drawings and plans for signage and wayfinding from the schematic stages through to concept and design development.</li><br/></ul>
        
                <h4>McNally Robinson</h4>
                <p><strong>GRAPHIC DESIGNER</strong> (2014 - 2015)</p>
                <p>Tools: Adobe Creative Suite (InDesign, Illustrator, Photoshop)</p>
                <p>McNally is a retail bookstore with an in-house publishing department. As graphic designer responsibilities included;</p>
                <ul>
                  <li>Creating promotional posters and digital banners for events held in store.</li>
                  <li>Collaborating with authors using the in-house publishing services designing custom book covers.</li>
                  <li>Collaborating with other graphic designers to build out a self-serve option on the company website for authors looking to publish in-house.</li><br/></ul>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Resume