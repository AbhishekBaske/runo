import React from 'react';
import styled from 'styled-components';

function Section() {
  return <div>
    <Company>
      <Head>
        <h1>Trusted By</h1>
      </Head>
      <Client>
        <ul>
          <li><img src="indira.png" width="230" height="auto"/></li>
          <li><img src="upstox.png" width="230" height="auto"/></li>
          <li><img src="kama.png" width="230" height="auto" /></li>
          <li><img src="hyundai.png" width="230" height="auto"/></li>
          <li><img src="mercedes-benz.png" width="230" height="auto"/></li>
          <li><img src="prograd.png" width="230" height="auto"/></li>
        </ul>
      </Client>
      <Hello>
        <h1>This is my first site</h1>
      </Hello>

    </Company>
  </div>;
}

export default Section;

const Company =styled.div`
margin-top: 150px;


`
const Head = styled.div`
h1{
  justify-content:center;
  text-align:center;
}

`

const Client  = styled.div`
animation: mymove 2s infinity ;

@keyframes mymove {
  from {left: 0px;}
  to {left:100px}
}

ul{
  display: flex;
  list-style:none;
}

`
const Hello = styled.div`


`