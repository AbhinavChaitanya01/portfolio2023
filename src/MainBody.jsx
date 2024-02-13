import React, { useRef , useState} from 'react'
import courses from "./data/coursework";
import  toast  from 'react-hot-toast';
import projects from "./data/projects";
import ProjectsCard from "./ProjectsCard";
import AchievementCard from './AchievementCard'
import achievements from "./data/achievements"
const navStyle={
    backgroundColor:"#000",
    padding:"10px",
}

const MainBody = () => {
  const [showAll, setShowAll] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxPXgDYk5BqXb6Hch7suQiOyGEXwqWf10jmrAxGFMTzMRsBwe83wtQle0TRiVJBKECSDg/exec';
    const formData = new FormData(formRef.current);
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response =>{ 
          console.log('Success!', response);
          toast.success("Message sent successfully!");
          formRef.current.reset();
      })
        .catch(error =>{
          console.error('Error!', error.message);
          toast.error("Can't send message");
      });
};

    const formattedCourses = courses.map((course, index) => `'${course}'`).join(', ');
  return (
    <div className='main-body'>
    <nav className="navbar navbar-expand-lg" style={navStyle} id="Navig">
        <div className=" nav1 container-fluid">
        <i class="fa-sharp fa-solid fa-a fa-beat fa-2x" style={{color: "#39FF14"}}></i>
          <button className="navbar-toggler" style={{ backgroundColor: "#39FF14"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  className="navbar-nav">
              <a className="nav-link " href="#intro" >// About</a>
              <a className="nav-link" href="#coursework-section" >// Coursework</a>
              <a className="nav-link " href="#projects-section">// Projects</a>
              <a className="nav-link"  href="#skills-section">// Skills</a>
              <a className="nav-link" href="#achievements-sections" >// Achievements</a>
              <a className="nav-link"  href="#contact-section">// Contact</a>
            </div>
          </div>
        </div>
        <div className="nav2 collapse navbar-collapse" id="navbarNavAltMarkup" style={{paddingRight:'10px'}}>
         <a className='btn navbar-btn btn-lg'style={{textDecoration:"none",color:''}} href="https://drive.google.com/file/d/1VZAmz3VyUaCfryu5wjLYA4fwnbsz8nVx/view" target="_blank">Resume</a>
        </div>
      </nav>
      <section id="intro">
        <div className="my-image">
            <img className="img-tag" src="profile-pic-2.png"/>
        </div>
        <div className="intro-text">
            <p class="intro-p1"> Hi!  I am</p>
            <p class="intro-p2"> Abhinav Chaitanya </p>
            <p class="intro-p3"> A Software Engineering undergrad student at Delhi Technological University.<br/> A passionate full-stack web developer <br/> Avid learner</p>
            <div className="intro-links">
                    <a href="https://www.linkedin.com/in/abhinav-chaitanya-24586b223/" target="_blank" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#5ff46b" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/AbhinavChaitanya01" target="_blank" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#5ff46b" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    <a href="https://leetcode.com/Abhinav_Chaitanya01/" target="_blank" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#5ff46b" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode" width="36" height="36">
                            <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z">
                            </path>
                            <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z">
                            </path>
                        </svg></a>
                    <a href="https://www.codechef.com/users/abhinav_dce" target="_blank" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" fill="#5ff46b" viewBox="0 0 50 50">
                            <path d="M 23.669922 1.90625 C 22.879812 1.920375 22.080187 1.9802031 21.273438 2.0957031 C 20.087438 2.3537031 18.941969 2.7705937 17.917969 3.3085938 C 16.627969 3.8945937 15.293891 4.4999375 14.087891 4.5859375 C 14.026891 4.5899375 13.967203 4.6002344 13.908203 4.6152344 C 12.222203 5.0502344 10.768031 6.0914844 9.8320312 7.5214844 L 9.6816406 7.7402344 C 9.6506406 7.7862344 9.6216563 7.8347656 9.5976562 7.8847656 C 8.7726563 9.6107656 8.5530469 11.587484 8.9980469 13.521484 C 9.2840469 14.456484 9.6250781 15.354609 9.9550781 16.224609 L 10.056641 16.488281 C 10.827641 18.297281 11.387656 20.197719 11.722656 22.136719 C 11.739656 22.234719 11.770453 22.329969 11.814453 22.417969 C 12.143453 23.069969 12.400891 23.756141 12.587891 24.494141 C 12.640891 24.678141 12.697906 24.868641 12.753906 25.056641 C 13.815906 24.122641 15.093094 23.414625 16.496094 22.890625 C 15.624094 20.632625 15.077609 18.028406 14.599609 15.691406 C 13.993609 12.720406 13.475563 10.186672 12.476562 9.3886719 C 12.357563 9.2276719 12.277094 9.04175 12.246094 8.84375 C 12.211094 8.46575 12.289703 8.0859531 12.470703 7.7519531 C 12.642703 7.3799531 12.907234 7.0564063 13.240234 6.8164062 C 13.450234 6.6714063 13.693313 6.5799219 13.945312 6.5449219 L 13.945312 6.59375 C 13.694313 6.62875 13.454094 6.7202344 13.246094 6.8652344 C 13.025094 7.1412344 12.82825 7.4351406 12.65625 7.7441406 C 12.16525 8.7271406 13.201844 8.6798437 13.589844 9.2148438 C 14.599844 10.028844 14.682922 12.697688 15.294922 15.679688 C 15.768922 17.994688 16.047938 20.574453 16.710938 22.814453 C 17.481938 22.539453 18.284281 22.317437 19.113281 22.148438 C 18.018281 19.621437 17.753578 16.688797 17.517578 13.966797 C 17.255578 11.050797 17.020594 8.3734688 15.808594 6.7304688 C 15.602594 6.5004687 15.497531 6.198625 15.519531 5.890625 C 15.543531 5.747625 15.623187 5.6191563 15.742188 5.5351562 C 15.876188 5.4411562 16.032312 5.3840937 16.195312 5.3710938 C 16.717312 5.3290938 17.237063 5.4723906 17.664062 5.7753906 L 17.644531 5.7988281 C 17.651531 5.8038281 17.657062 5.8065 17.664062 5.8125 L 17.630859 5.8125 L 17.642578 5.7988281 C 17.341578 5.5568281 16.945313 5.4685 16.570312 5.5625 C 16.420313 5.5785 16.275391 5.6308438 16.150391 5.7148438 C 16.039391 5.7878438 15.964359 5.9051094 15.943359 6.0371094 C 15.943359 6.2341094 15.790359 6.2668125 15.943359 6.6328125 C 17.166359 8.2708125 18.127422 11.039938 18.357422 13.960938 C 18.597422 16.673938 18.438922 19.597281 19.294922 22.113281 C 20.224922 21.932281 21.176672 21.811094 22.138672 21.746094 C 21.036672 18.087094 20.333125 14.317047 20.078125 10.498047 C 19.955125 8.9340469 20.081219 7.3619375 20.449219 5.8359375 C 20.804219 4.6239375 21.426578 3.8245938 22.392578 3.6835938 C 22.745578 3.6375938 23.104266 3.6637656 23.447266 3.7597656 L 23.447266 3.8105469 C 23.099266 3.7465469 22.741438 3.75775 22.398438 3.84375 C 21.590438 4.02975 21.688203 4.530875 21.158203 5.671875 C 20.745203 7.138875 20.611625 8.6705 20.765625 10.1875 C 21.305625 13.7195 21.943875 18.24175 22.546875 21.71875 C 23.554875 21.66675 24.565641 21.669563 25.556641 21.726562 C 24.767641 15.886563 24.091797 9.089375 27.466797 4.109375 L 27.511719 4.109375 C 26.031719 8.057375 25.829297 15.576953 25.654297 18.001953 C 25.595297 18.814953 25.653703 20.329375 25.720703 21.734375 C 27.140703 21.823375 28.515297 22.013344 29.779297 22.277344 C 29.764297 19.787344 29.928781 17.300937 30.300781 14.835938 C 30.838781 11.285938 32.062297 7.8739687 33.904297 4.7929688 L 33.904297 4.8417969 C 33.369297 8.9047969 31.327359 10.805219 30.568359 14.824219 C 30.341359 17.194219 30.104359 19.825406 29.943359 22.316406 C 30.680359 22.475406 31.383344 22.655375 32.027344 22.859375 C 32.600344 23.041375 33.202203 23.267203 33.783203 23.533203 C 34.167203 17.161203 37.437297 10.003234 39.279297 9.6152344 C 37.739297 14.358234 35.93675 19.000547 34.09375 23.685547 C 34.58275 23.927547 35.042359 24.203719 35.443359 24.511719 C 36.259359 23.019719 37.448422 21.569156 38.607422 20.160156 C 40.732422 17.577156 42.930234 14.906875 42.740234 11.921875 C 42.731234 11.785875 42.695766 11.65225 42.634766 11.53125 C 42.321766 10.91525 41.971109 10.315578 41.537109 9.6425781 L 41.453125 9.5078125 C 41.352125 9.3498125 41.250484 9.1939219 41.146484 9.0449219 C 41.068484 8.9329219 40.989156 8.8266563 40.910156 8.7226562 L 40.824219 8.609375 C 40.665219 8.397375 40.50675 8.1863281 40.34375 7.9863281 C 40.25575 7.8803281 40.168734 7.7794375 40.052734 7.6484375 C 39.871734 7.4404375 39.691813 7.2398281 39.507812 7.0488281 L 39.265625 6.8027344 C 39.052625 6.5917344 38.838906 6.3910313 38.628906 6.2070312 L 38.474609 6.0742188 C 35.815609 3.8062188 33.084875 3.2097031 31.421875 2.8457031 L 30.494141 2.6367188 C 28.328141 2.2212187 26.04025 1.863875 23.669922 1.90625 z M 24.412109 23.710938 C 20.158887 23.651855 15.757813 24.596484 13.460938 27.177734 L 14.40625 29.886719 C 14.50025 30.156719 14.706703 30.372469 14.970703 30.480469 C 15.235703 30.591469 15.532063 30.582031 15.789062 30.457031 C 18.412063 29.183031 24.552391 26.200047 33.025391 31.498047 C 33.187391 31.599047 33.371641 31.650391 33.556641 31.650391 C 33.691641 31.650391 33.826125 31.624359 33.953125 31.568359 C 34.255125 31.437359 34.474109 31.16675 34.537109 30.84375 C 34.742109 29.80075 34.815047 28.126672 34.748047 26.763672 L 34.767578 26.675781 C 34.572578 26.246781 33.593922 25.457625 31.419922 24.765625 C 29.462797 24.143875 26.964043 23.746387 24.412109 23.710938 z M 18.058594 32.380859 L 17.605469 32.685547 C 17.797469 33.007547 18.045891 33.292344 18.337891 33.527344 C 18.567891 33.671344 18.836422 33.741516 19.107422 33.728516 C 19.246422 33.727516 19.383578 33.708922 19.517578 33.669922 L 21.029297 33.123047 C 21.132297 33.083047 21.241563 33.0625 21.351562 33.0625 C 21.517563 33.0515 21.683266 33.096453 21.822266 33.189453 C 22.013266 33.345453 22.1785 33.528375 22.3125 33.734375 L 22.742188 33.494141 L 22.742188 33.482422 C 22.556188 33.193422 22.323688 32.937609 22.054688 32.724609 C 21.838687 32.574609 21.581359 32.495 21.318359 32.5 C 21.230359 32.498 21.141547 32.514828 21.060547 32.548828 L 19.423828 33.095703 C 19.319828 33.127703 19.210562 33.141672 19.101562 33.138672 C 18.907563 33.152672 18.713688 33.099328 18.554688 32.986328 C 18.355687 32.813328 18.188594 32.608859 18.058594 32.380859 z M 34.849609 33.470703 C 34.693609 33.484703 34.550172 33.561594 34.451172 33.683594 C 34.332172 33.784594 34.256281 33.926031 34.238281 34.082031 C 34.227281 34.116031 34.227281 34.1535 34.238281 34.1875 C 34.590281 34.5595 35.040109 34.821312 35.537109 34.945312 C 36.034109 35.098312 36.531578 35.245813 37.017578 35.382812 C 37.509578 35.545812 37.927266 35.879266 38.197266 36.322266 C 38.202266 36.342266 38.202266 36.362812 38.197266 36.382812 C 38.197266 36.475813 37.973969 36.627703 37.542969 36.845703 C 37.324969 36.971703 36.997172 37.249062 36.451172 37.664062 C 36.110172 37.943063 35.745375 38.190344 35.359375 38.402344 C 35.031375 38.548344 34.743438 38.773641 34.523438 39.056641 C 34.518437 39.061641 34.513766 39.066266 34.509766 39.072266 C 34.335766 39.272266 34.356641 39.577953 34.556641 39.751953 C 34.660641 39.851953 34.800313 39.906297 34.945312 39.904297 C 35.048313 39.902297 35.149234 39.876125 35.240234 39.828125 C 35.944234 39.384125 36.620625 38.896141 37.265625 38.369141 C 37.919625 37.827141 38.602594 37.318703 39.308594 36.845703 C 39.701594 36.605703 39.892578 36.354656 39.892578 36.097656 C 39.879578 35.925656 39.785625 35.769734 39.640625 35.677734 C 38.798802 34.921852 37.805588 34.360571 36.728516 34.023438 L 35.935547 33.679688 C 35.668547 33.558687 35.381844 33.487703 35.089844 33.470703 C 35.009844 33.459703 34.928609 33.459703 34.849609 33.470703 z M 13.066406 33.527344 C 12.368406 34.051344 11.604922 34.480688 10.794922 34.804688 C 9.9919219 35.135688 9.2312969 35.561266 8.5292969 36.072266 C 8.1882969 36.377266 7.9894219 36.810578 7.9824219 37.267578 C 8.0224219 37.440578 8.1455469 37.584391 8.3105469 37.650391 C 8.4575469 37.699391 8.6117656 37.758359 8.7597656 37.818359 C 10.252766 38.451359 11.653844 39.133328 12.964844 39.861328 C 13.138844 39.987328 13.302078 40.125391 13.455078 40.275391 C 13.555078 40.319391 13.662484 40.341797 13.771484 40.341797 C 14.040484 40.343797 14.302766 40.251078 14.509766 40.080078 C 14.720766 39.930078 14.831828 39.676922 14.798828 39.419922 C 14.807828 39.230922 14.694531 39.056328 14.519531 38.986328 L 12.259766 37.992188 C 11.509766 37.674188 10.778219 37.309391 10.074219 36.900391 C 10.568219 36.285391 11.234328 35.829844 11.986328 35.589844 C 12.733328 35.348844 13.422719 34.9565 14.011719 34.4375 C 14.096719 34.3565 14.143578 34.243953 14.142578 34.126953 C 14.138578 33.961953 14.060687 33.807031 13.929688 33.707031 C 13.773687 33.587031 13.581766 33.523344 13.384766 33.527344 L 13.066406 33.527344 z M 28.869141 35.072266 C 28.429141 35.056266 27.999828 35.215672 27.673828 35.513672 C 27.306828 35.876672 27.152672 36.40225 27.263672 36.90625 C 27.313672 37.38225 27.504547 37.833172 27.810547 38.201172 C 28.068547 38.545172 28.472344 38.746094 28.902344 38.746094 C 29.184344 38.742094 29.460078 38.668297 29.705078 38.529297 C 30.242078 38.145297 30.524406 37.496797 30.441406 36.841797 C 30.414406 36.104797 30.240484 35.607187 29.896484 35.367188 C 29.592484 35.165188 29.234141 35.062266 28.869141 35.072266 z M 20.394531 35.109375 C 19.954531 35.092375 19.525219 35.249875 19.199219 35.546875 C 18.830219 35.908875 18.673203 36.434453 18.783203 36.939453 C 18.836203 37.414453 19.027078 37.864375 19.330078 38.234375 C 19.587078 38.578375 19.991875 38.780297 20.421875 38.779297 C 20.703875 38.774297 20.978609 38.7005 21.224609 38.5625 C 21.715609 38.2675 21.957031 37.71 21.957031 36.875 C 22.020031 36.327 21.821875 35.780391 21.421875 35.400391 C 21.117875 35.199391 20.758531 35.098375 20.394531 35.109375 z M 20.373047 36.283203 C 20.675047 36.283203 20.919922 36.528078 20.919922 36.830078 C 20.919922 37.132078 20.675047 37.376953 20.373047 37.376953 C 20.071047 37.376953 19.826172 37.132078 19.826172 36.830078 C 19.826172 36.528078 20.071047 36.283203 20.373047 36.283203 z M 28.695312 36.345703 C 28.996312 36.344703 29.242188 36.588625 29.242188 36.890625 C 29.242188 37.192625 28.996312 37.4375 28.695312 37.4375 C 28.393313 37.4375 28.150391 37.192625 28.150391 36.890625 C 28.150391 36.588625 28.393312 36.345703 28.695312 36.345703 z M 23.404297 40.179688 C 23.392297 40.191688 23.384906 40.205656 23.378906 40.222656 L 23.378906 40.267578 C 23.453906 40.476578 23.548109 40.676187 23.662109 40.867188 C 23.765109 41.050187 23.894922 41.219234 24.044922 41.365234 C 24.179922 41.506234 24.337672 41.622984 24.513672 41.708984 C 24.686672 41.781984 24.872547 41.822125 25.060547 41.828125 L 25.082031 41.851562 C 25.233031 41.852562 25.382438 41.824531 25.523438 41.769531 C 25.658438 41.714531 25.786297 41.643594 25.904297 41.558594 C 26.016297 41.468594 26.121797 41.370672 26.216797 41.263672 C 26.306797 41.161672 26.386078 41.052547 26.455078 40.935547 C 26.521078 40.832547 26.580859 40.725281 26.630859 40.613281 C 26.669859 40.532281 26.701609 40.449281 26.724609 40.363281 L 26.724609 40.314453 C 26.713609 40.299453 26.704266 40.282625 26.697266 40.265625 C 26.555266 40.484625 26.378828 40.676891 26.173828 40.837891 C 26.016828 40.985891 25.829953 41.099875 25.626953 41.171875 C 25.421953 41.242875 25.205281 41.277391 24.988281 41.275391 C 24.803281 41.278391 24.618406 41.252219 24.441406 41.199219 C 24.289406 41.151219 24.147484 41.076469 24.021484 40.980469 C 23.893484 40.877469 23.777734 40.761813 23.677734 40.632812 C 23.572734 40.490812 23.480297 40.338688 23.404297 40.179688 z M 21.957031 42.275391 C 19.773031 42.390391 18.500125 45.195422 15.453125 42.607422 C 14.623125 47.576422 20.695406 48.069219 23.191406 45.824219 C 24.917406 44.284219 24.431031 42.138391 21.957031 42.275391 z M 26.960938 42.275391 C 24.875352 42.404019 24.549844 44.381406 26.167969 45.824219 C 28.663969 48.068219 34.734297 47.576422 33.904297 42.607422 C 30.857297 45.195422 29.585391 42.389391 27.400391 42.275391 C 27.245766 42.266828 27.099977 42.266815 26.960938 42.275391 z">
                            </path>
                        </svg>
                    </a>
                </div>
        </div>
      </section>
      <section id="coursework-section">
      <div className='course-ide'>
       <div className="line">
          <span className="line-number">1&nbsp;</span>
          <span className="comment">// My related coursework is as follows</span>
        </div>
        <div className="line">
  <span className="line-number">2&nbsp;</span>
  <span className="code var">var&nbsp;</span>
  <span className="code courses">courses</span>
  <span className="code brackets">&nbsp;= [</span>
</div>
<div className="line">
  <span className="line-number">3&nbsp;</span>
  <span className="code">{formattedCourses}</span>
</div>
<div className="line">
  <span className="line-number">4&nbsp;</span>
  <span className="code brackets">];</span>
</div>
      </div>
    </section>
    <section id='projects-section'>
      <p style={{ textAlign: 'center', color: '#FF004D', fontFamily: 'Rubik Doodle Shadow, system-ui', fontSize: '3rem', fontWeight: 'bold' }}>Projects Completed</p>
      <div className="projects-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ width: '300px', margin: '20px', backgroundColor: '#000', color: '#5ff46b', fontFamily: 'Montserrat' }}>
            <img src={project.pic} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '20px' }}>
              <h4>{project.title}</h4>
              <p style={{ textAlign: 'center', textJustify: 'inter-word' }}>{project.description}</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
                <a href={project.sourceCode} className='btn navbar-btn 'style={{textDecoration:"none",color:''}} target="_blank" rel="noopener noreferrer">Source Code</a>
                {project.deployedLink && <a href={project.deployedLink} className='btn navbar-btn 'style={{textDecoration:"none",color:'', marginTop:'10px'}} target="_blank" rel="noopener noreferrer">View Project</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section id="skills-section">
  <div className="skills">
    <div className="line">
          <span className="comment">// My skills aresenal is as follows</span>
        </div>
    <div style={{ color: "#fff" }}>
      {"{"}
    </div>
    <div className="skill-category">
      <div style={{ color: "#00FFFF", marginLeft: "20px" }}>
        "Skills"<span style={{color:"#fff"}}>: {"{"}</span>
      </div>
      <div style={{ color: "#00FFFF", marginLeft: "40px" }}>
        "programmingLanguages" <span style={{color:"#fff"}}>: [</span>
      </div>
      <div style={{ color: "yellow", marginLeft: "60px" }}>
        "C++, JavaScript, Python"
      </div>
      <div style={{ color: "#fff", marginLeft: "40px" }}>
        ],
      </div>
      <div style={{ color: "#00FFFF", marginLeft: "40px" }}>
        "technologies"<span style={{color:"#fff"}}>: [</span>
      </div>
      <div style={{ color: "yellow", marginLeft: "60px" }}>
        "HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB, React.js, Passport.js, RESTful API, EJS, React Material UI, SQL, scikitlearn, nltk, SpaCy"
      </div>
      <div style={{ color: "#5ff46b", marginLeft: "40px" }}>
      <span style={{color:"#fff"}}>],</span>
      </div>
      <div style={{ color: "#00FFFF", marginLeft: "40px" }}>
        "tools" <span style={{color:"#fff"}}>: [</span>
      </div>
      <div style={{ color: "yellow", marginLeft: "60px" }}>
        "Git, VS Code, PyCharm, Jupyter Notebook, GCP (basic), Star UML"
      </div>
      <div style={{ color: "#fff", marginLeft: "40px" }}>
        ]
      </div>
      <div style={{ color: "#fff", marginLeft: "20px" }}>
        {"}"}
      </div>
    </div>
    <div style={{ color: "#fff" }}>
      {"}"}
    </div>
  </div>
</section>
<section id="achievements-sections">
      <p style={{ textAlign: 'center', color: '#FF004D', fontFamily: 'Rubik Doodle Shadow, system-ui', fontSize: '3rem', fontWeight: 'bold' }}>Achievements</p>
      <div className="achievements-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden' }}>
        {achievements.slice(0, showAll ? achievements.length : 3).map((achievement) => (
          <div key={achievement.id} className="achievement-card" style={{ textAlign:'center',backgroundColor: '#333', borderRadius:"10px",color: '#39FF14', fontFamily: 'Montserrat', maxWidth: '300px', margin: '20px', padding: '20px' }}>
            <h5>{achievement.Title}</h5>
            <p style={{ textAlign: 'center', textJustify: 'inter-word' }}>{achievement.Description}</p>
            <p style={{ fontSize: '10px' }}>{achievement.date}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <button className="btn navbar-btn" onClick={() => setShowAll(!showAll)}>{!showAll ? "Read More" : "Show Less"}</button>
      </div>
    </section>
<section id="contact-section">
    <div class="contact-inner-container">
        <p class="contact-heading">Contact Me</p>
        <div class="contact-container">
            <div class="socials-container">
                <p class="contact-socials"><i class="fa-solid fa-phone"></i> +91 9971964723</p>
                <p class="contact-socials"><i class="fa-solid fa-envelope"></i> abhinavchaitanyadtu@gmail.com</p>
                <p class="contact-socials"><i class="fab fa-linkedin"></i><a style={{textDecoration:"none", color:"#F72798"}}href="https://www.linkedin.com/in/abhinav-chaitanya-24586b223/" target="_blank"> abhinav-chaitanya01</a></p>
            </div>
            <form ref={formRef}  className ="form-container" name = 'submit-to-google-sheet'>
                <input class="form-input" type="text" name="Name" placeholder="Your Name" />
                <input class="form-input" type="email" name="Email" placeholder="Your Email address"/>
                <textarea class="form-input" name="Message" rows="6" placeholder="Your message"></textarea>
                <button class="submit-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
</section>

    </div>
  )
}

export default MainBody
