// import React from "react";
// import {Helmet} from "react-helmet";

// const Profile = () => {
//     return (
//         <>
//         <div class="Profile">
//         <button onclick="myFunction()" class="popDown">Profile</button>
//         <div id="myDropdown" class="dropdown-content">
//             <a href="#home">Edit Profile</a>
//             <a href="#about">Edit Facilities</a>
//             <a href="#contact">Logout</a>
//         </div>
//         </div>
//         <Helmet>
//         <script>
//         /* When the user clicks on the button, 
//         toggle between hiding and showing the dropdown content */
//         function myFunction() {
//         document.getElementById("myDropdown").classList.toggle("show");
//         }

//         // Close the dropdown if the user clicks outside of it
//         window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//             var dropdowns = document.getElementsByClassName("dropdown-content");
//             var i;
//             for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//                 }
//             }
//             }
//         }
//         </script>
//         </Helmet>
// </>
//  );
// }

// export default Profile;