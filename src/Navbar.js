import React from "react";
let githubUrl = "https://github.com/paul-coder-22";
let linkedinUrl = "https://www.linkedin.com/in/kiron-paul-1b81111b1/";
let twitterUrl = "https://twitter.com/pulmicheal1";
function Navber() {
  const textAlignEle = {
    textAlign: "center",
    margin: "auto"
  };
  const li = {
    listStyle: "none",
    color: "black",
    display: "flex"
  };

  return (
    <>
      <div style={textAlignEle}>
        <ul style={li} className="listElements">
          <li>
            <a href={githubUrl}>
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a href={linkedinUrl}>
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li>
            <a href={twitterUrl}>
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navber;
