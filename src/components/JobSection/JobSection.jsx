import React from 'react'
import './JobSection.css'
import { useNavigate } from 'react-router-dom' 


function JobSection() {

    const navigate = useNavigate();

    function handleClick()
    {
        navigate('/Job');
    }

    return (
        <div class="container">
        <h1>Job Section</h1>
        <br></br>
             <div className="row px-4 py-5">
                <div className="col-sm-6">
                <img src="/img/design.png" alt="" className='jobimg'/>
                 <h1 className='jobh1'>Graphics Designing</h1>
                 <span className="jobskill"><b>Skills - </b>Adobe Photoshop, Sketch, Adobe Illustrator,<br></br> Lunacy, Mega Creator, Affinity Designer, Adobe InDesign</span>
            </div>
            <div className="col-sm-6 other">
            <img src="/img/software.png" alt="" className='jobimg'/>
                 <h1 className='jobh1'>Software Devolopement</h1>
                 <span ><b>Skills - </b> Javascript, HTML, CSS, REACT Js, Node Js, Express Js, MongoDB</span>
             </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                <img src="/img/datamanagement.png" className='jobimg'/>
                 <h1 className='jobh1'>Data Engineer</h1>
                 <span className="jobskill"><b>Skills - </b>Apache Hadoop and Apache Spark, Python, SQL, C++, Amazon Web Services/ Redshift (for data warehousing)Azure</span>
            </div>
            <div className="col-sm-6 other">
            <img src="/img/development.png" alt="" className='jobimg'/>
                 <h1 className='jobh1'>App Development</h1>
                 <span><b>Skills - </b> Java/Kotlin, SQL, NoSQL, Firebase, XML</span>
             </div>
            </div>
            <br></br>
            <br></br>
            <button type="button" onClick={handleClick} class="btn btn-primary btn-lg active ">More Jobs...</button>

        </div>





       /* <div className='JobSection'>
            <h1>Job Section</h1>
            <div className="showjob">
                <img src="/img/design.png" alt="" class="center"/>
                <h3 className='dd1'>Graphics Designing</h3>
                <span className="d1"><b>Skills - </b>Adobe Photoshop, Sketch, Adobe Illustrator, Lunacy, Mega Creator, Affinity Designer, Adobe InDesign</span>
            </div>
            <div className="showjob1">
                <img src="/img/software.png" alt="" />
                <h3>Software Development</h3>
                <span><b>Skills - </b> Javascript, HTML, CSS, REACT Js, Node Js, Express Js, MongoDB</span>
            </div>
            <div className="showjob2">
                <img src="/img/datamanagement.png" alt="" />
                <h3>Data Engineer</h3>
                <span><b>Skills - </b>Apache Hadoop and Apache Spark, Python, SQL, C++, Amazon Web Services/ Redshift (for data warehousing)Azure</span>
            </div>
            <div className="showjob3">
                <img src="/img/development.png" alt="" />
                <h3>App Development</h3>
                <span><b>Skills - </b>Java/Kotlin, SQL, NoSQL, Firebase</span>
            </div>
            <div className="JobButton">
                <button>More Jobs...</button>
            </div>
        </div>*/
    )
}

export default JobSection